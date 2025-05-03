// app/proyecto/editar.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { proyectosData } from '@/data/proyectos';

const EditarProyecto = () => {
  const { id }: { id: string } = useLocalSearchParams(); // Obtenemos el ID del proyecto desde los parámetros de la ruta
  const router = useRouter();

  // Buscar el proyecto en los datos usando el ID
  const proyecto = proyectosData.find((p) => p.id === id);

  const [nombre, setNombre] = useState(proyecto?.nombre || '');
  const [ubicacion, setUbicacion] = useState(proyecto?.ubicacion || '');
  const [fecha, setFecha] = useState(proyecto?.fecha || '');
  const [region, setRegion] = useState(proyecto?.region || '');

  useEffect(() => {
    if (!proyecto) {
      router.push('/index'); // Si no encontramos el proyecto, redirigimos a la lista de proyectos
    }
  }, [proyecto, router]);

  const handleSubmit = () => {
    // Aquí puedes manejar el guardado de los cambios
    console.log('Proyecto actualizado', { nombre, ubicacion, fecha, region });
    router.push(`/index/detalles?id=${id}`); // Redirigimos a la página de detalles del proyecto
  };

  if (!proyecto) {
    return <Text>Cargando proyecto...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Proyecto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del Proyecto"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        value={ubicacion}
        onChangeText={setUbicacion}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Cultivo"
        value={fecha}
        onChangeText={setFecha}
      />
      <TextInput
        style={styles.input}
        placeholder="Región"
        value={region}
        onChangeText={setRegion}
      />

      <Button title="Guardar Cambios" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default EditarProyecto;
