import React, { useState } from 'react';
import { View, Text, Button, Alert, ScrollView } from 'react-native';
import { supabase } from '@/utils/supabase';
import { proyectosData } from '@/data/proyectos';
import { plantasData } from '@/data/plantas';
import { Proyecto, Planta } from '@/types/index';
import * as Crypto from 'expo-crypto';
import { useAuth } from '@/providers/AuthProvider';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const toPostgisPoint = (lat: number, lng: number): string =>
  `POINT(${lng} ${lat})`;

export default function AdminPasos() {
  const [loading, setLoading] = useState(false);
  const { session } = useAuth();

  const handleResetData = async () => {
    setLoading(true);
    try {
      // Borra todo
      await supabase.from('proyecto_plantas').delete().neq('id', '');
      await supabase.from('proyectos').delete().neq('id', '');
      await supabase.from('plantas').delete().neq('id', '');

      // Inserta plantas (sin el campo id, si existe)
      const plantasSinId = plantasData.map((planta: any) => {
        const { id, ...rest } = planta;
        return rest;
      });
      const { data: plantasInsertadas, error: plantasError } = await supabase
        .from('plantas')
        .insert(plantasSinId as Planta[])
        .select();
      if (plantasError) throw plantasError;

      // Obtiene el usuario autenticado (o usa el id proporcionado)
      const userId =
        session?.user?.id || 'bbf2a613-bda1-4a30-9568-fb50f4486d9f';

      // Inserta proyectos (sin el campo plantas, ubicacion, id y location)
      const proyectosSinPlantas = proyectosData.map(
        ({ plantas, ubicacion, id, location, ...rest }) => ({
          ...rest,
          user_id: userId,
        })
      );
      const proyectosProcesados = proyectosData.map(
        ({ plantas, ubicacion, id, location, ...rest }) => ({
          ...rest,
          user_id: userId,
          location: location
            ? toPostgisPoint(location.latitude, location.longitude)
            : null,
        })
      );
      const { data: proyectosInsertados, error: proyectosError } =
        await supabase.from('proyectos').insert(proyectosProcesados).select();
      if (proyectosError) throw proyectosError;

      // Inserta relaciones en proyecto_plantas
      for (const [i, proyecto] of proyectosData.entries()) {
        const proyectoId = proyectosInsertados?.[i]?.id;
        if (!proyectoId) continue;
        for (const planta of proyecto.plantas) {
          // Busca la planta insertada por nombre_cientifico (ajusta si usas otro identificador)
          const plantaInsertada = plantasInsertadas?.find(
            (p) => p.nombre_cientifico === planta.nombre_cientifico
          );
          if (plantaInsertada) {
            await supabase.from('proyecto_plantas').insert({
              proyecto_id: proyectoId,
              planta_id: plantaInsertada.id,
            });
          }
        }
      }

      Alert.alert('Éxito', 'Tablas reiniciadas y datos insertados.');
    } catch (err: any) {
      Alert.alert('Error', err.message || 'Ocurrió un error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
        Admin de Datos (Plantas y Proyectos)
      </Text>
      <Button
        title={
          loading ? 'Procesando...' : 'Reiniciar tablas y cargar datos demo'
        }
        onPress={handleResetData}
        disabled={loading}
      />
      <Text style={{ marginTop: 24, fontWeight: 'bold' }}>
        Plantas de ejemplo: {plantasData.length}
      </Text>
      <Text style={{ marginTop: 8, fontWeight: 'bold' }}>
        Proyectos de ejemplo: {proyectosData.length}
      </Text>
    </ScrollView>
  );
}
