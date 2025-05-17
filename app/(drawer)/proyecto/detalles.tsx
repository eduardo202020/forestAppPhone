// app/proyecto/detalles.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useNavigation, useLocalSearchParams } from 'expo-router'; // Importar useRoute y useNavigation
import { proyectosData } from '@/data/proyectos';
import MapView, { Marker } from 'react-native-maps';
import { Calendar } from 'react-native-calendars';
import { Image, ScrollView } from 'react-native';

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
    router.push(`/proyecto/editar?id=${proyecto.id}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{proyecto.nombre}</Text>
      <Text style={styles.details}>{proyecto.descripcion}</Text>
      <Text style={styles.label}>Región: {proyecto.region}</Text>
      {/* Mapa con ubicación */}
      {proyecto.location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: proyecto.location.latitude,
            longitude: proyecto.location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={proyecto.location} />
        </MapView>
      )}
      {/* Imágenes */}
      <Text style={styles.label}>Imágenes</Text>
      <ScrollView horizontal style={styles.imagesRow}>
        {proyecto.imagenes &&
          proyecto.imagenes.map((img, idx) => (
            <Image
              key={idx}
              source={{ uri: img }}
              style={styles.imageBox}
              resizeMode="cover"
            />
          ))}
      </ScrollView>
      {/* Fecha usando calendario */}
      <Text style={styles.label}>Fecha de Cultivo</Text>
      <Calendar
        current={proyecto.fecha}
        markedDates={{
          [proyecto.fecha]: { selected: true, selectedColor: '#2ecc71' },
        }}
        disabledByDefault
        hideExtraDays
        style={{ marginBottom: 16 }}
      />
      <Button title="Editar Proyecto" onPress={handleEdit} />
      <View style={{ height: 32 }} />
    </ScrollView>
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
  map: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 16,
  },
  imagesRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  imageBox: {
    width: 100,
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginRight: 8,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8,
  },
});

export default DetallesProyecto;
