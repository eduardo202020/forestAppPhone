// app/proyecto/editar.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { proyectosData, Proyecto } from '@/data/proyectos';
import ProyectoForm from '@/components/ProyectoForm';

const EditarProyecto = () => {
  const router = useRouter();
  const { id }: { id: string } = useLocalSearchParams();
  const proyecto = proyectosData.find((p) => p.id === id);

  const [nombre, setNombre] = useState(proyecto?.nombre || '');
  const [region, setRegion] = useState(proyecto?.region || '');
  const [descripcion, setDescripcion] = useState(proyecto?.descripcion || '');
  const [selectedDate, setSelectedDate] = useState(proyecto?.fecha || '');
  const [modalVisible, setModalVisible] = useState(false);
  const [imagenes, setImagenes] = useState<string[]>(
    proyecto?.imagenes || [
      'https://placehold.co/200x200?text=Imagen+1',
      'https://placehold.co/200x200?text=Imagen+2',
      'https://placehold.co/200x200?text=Imagen+3',
      'https://placehold.co/200x200?text=Imagen+4',
      'https://placehold.co/200x200?text=Imagen+5',
    ]
  );
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(proyecto?.location || null);
  const [ubicacion, setUbicacion] = useState(proyecto?.ubicacion || '');
  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (!proyecto) {
      router.push('/proyecto'); // Redirigir correctamente a la lista de proyectos
    }
  }, [proyecto, router]);

  const handleMapPress = (e: any) => {
    const coord = e.nativeEvent.coordinate;
    setSelectedLocation(coord);
    setUbicacion(`${coord.latitude}, ${coord.longitude}`);
  };

  const handleGuardar = () => {
    if (!proyecto) return;
    // Validaciones
    const nuevosErrores: any = {};
    if (!nombre) nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!region) nuevosErrores.region = 'La región es obligatoria';
    if (!descripcion)
      nuevosErrores.descripcion = 'La descripción es obligatoria';
    if (!selectedDate) nuevosErrores.fecha = 'La fecha es obligatoria';
    if (!selectedLocation)
      nuevosErrores.ubicacion = 'La ubicación es obligatoria';
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;
    // Guardar los cambios
    proyecto.nombre = nombre;
    proyecto.region = region;
    proyecto.descripcion = descripcion;
    proyecto.fecha = selectedDate;
    proyecto.imagenes = imagenes;
    proyecto.location = selectedLocation || undefined;
    proyecto.ubicacion = selectedLocation
      ? `${selectedLocation.latitude}, ${selectedLocation.longitude}`
      : ubicacion;
    router.push(`/proyecto/detalles?id=${proyecto.id}`);
  };

  if (!proyecto) {
    return <Text>No se encontró el proyecto.</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Editar Proyecto</Text>
      <ProyectoForm
        nombre={nombre}
        setNombre={setNombre}
        region={region}
        setRegion={setRegion}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        ubicacion={ubicacion}
        setUbicacion={setUbicacion}
        imagenes={imagenes}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        mapRef={undefined}
        onMapPress={handleMapPress}
        onRegionChange={setRegion}
        editable={true}
        horizontalImages={true}
        errores={errores}
      />
      <Button title="Guardar Cambios" onPress={handleGuardar} color="#2ecc71" />
      <View style={{ height: 32 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default EditarProyecto;
