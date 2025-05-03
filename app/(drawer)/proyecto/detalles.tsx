// app/proyecto/detalles.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useNavigation, useLocalSearchParams } from 'expo-router'; // Importar useRoute y useNavigation
import { proyectosData } from '@/data/proyectos';

const DetallesProyecto = () => {
  const router = useRouter(); // Usamos useRoute para obtener los parámetros pasados
  const navigation = useNavigation();

  const { id }: { id: string } = useLocalSearchParams(); // Obtenemos el ID del proyecto desde los parámetros de la ruta

  const proyecto = proyectosData.find((p) => p.id === id); // Buscamos el proyecto en los datos

  if (!proyecto) {
    return <Text>No se encontraron detalles del proyecto.</Text>;
  }

  const handleEdit = () => {
    // Navegamos a la pantalla de edición, pasando los datos del proyecto
    router.push(`/index/editar?id=${proyecto.id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{proyecto.nombre}</Text>
      <Text style={styles.details}>Ubicación: {proyecto.ubicacion}</Text>
      <Text style={styles.details}>Fecha de Cultivo: {proyecto.fecha}</Text>
      <Text style={styles.details}>Región: {proyecto.region}</Text>

      <Button title="Editar Proyecto" onPress={handleEdit} />
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
  details: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DetallesProyecto;
