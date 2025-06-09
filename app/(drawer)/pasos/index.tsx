import React, { useState } from 'react';
import { Text, Button, Alert, ScrollView, StyleSheet } from 'react-native';
import { supabase } from '@/utils/supabase';
import { proyectosData } from '@/data/proyectos';
import { plantasData } from '@/data/plantas';
import { Planta } from '@/types/index';
import { useAuth } from '@/providers/AuthProvider';

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
        // Eliminar id si existe
        const plantaCopy = { ...planta };
        delete plantaCopy.id;
        return plantaCopy;
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
      const proyectosProcesados = proyectosData.map((proyecto) => {
        const proyectoCopy = { ...proyecto };
        delete proyectoCopy.plantas;
        delete proyectoCopy.ubicacion;
        delete proyectoCopy.id;
        delete proyectoCopy.location;
        return {
          ...proyectoCopy,
          user_id: userId,
          location: proyecto.location
            ? toPostgisPoint(
                proyecto.location.latitude,
                proyecto.location.longitude
              )
            : null,
        };
      });
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
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Admin de Datos (Plantas y Proyectos)</Text>
      <Button
        title={
          loading ? 'Procesando...' : 'Reiniciar tablas y cargar datos demo'
        }
        onPress={handleResetData}
        disabled={loading}
      />
      <Text style={styles.boldText}>
        Plantas de ejemplo: {plantasData.length}
      </Text>
      <Text style={styles.boldText}>
        Proyectos de ejemplo: {proyectosData.length}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  boldText: {
    marginTop: 8,
    fontWeight: 'bold',
  },
});
