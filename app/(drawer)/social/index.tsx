import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

import { proyectosData } from '@/data/proyectos';

const index = () => {
  const router = useRouter();
  const imagenesPrueba = [1, 2, 3, 4, 5];
  const [proyectos, setProyectos] = useState(proyectosData);

  const handleVerDetalles = (id: string) => {
    router.push(`/proyecto/detalles?id=${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proyectos</Text>
      <FlatList
        data={proyectos}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleVerDetalles(item.id)}
          >
            <Text style={styles.projectName}>{item.nombre}</Text>
            <Text style={styles.projectDesc}>{item.descripcion}</Text>
            <Text style={styles.projectRegion}>Región: {item.region}</Text>
            <Text style={styles.projectUbicacion}>
              Ubicación: {item.ubicacion}
            </Text>
            <View style={styles.imagesRow}>
              {imagenesPrueba.map((img, idx) => (
                <View key={idx} style={styles.imageBox} />
              ))}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
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
  button: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectDesc: {
    fontSize: 14,
    marginBottom: 4,
  },
  projectRegion: {
    fontSize: 12,
    color: '#888',
  },
  projectUbicacion: {
    fontSize: 12,
    color: '#888',
  },
  imagesRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  imageBox: {
    width: 60,
    height: 60,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
});

export default index;
