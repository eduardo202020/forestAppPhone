import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useRouter } from 'expo-router';

const ProyectoIndex = () => {
  const router = useRouter();

  const handleCrearProyecto = () => {
    router.push('/proyecto/crear');
  };

  // Imágenes de prueba (cuadros grises)
  const imagenesPrueba = [1, 2, 3];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proyectos</Text>
      <TouchableOpacity style={styles.button} onPress={handleCrearProyecto}>
        <Text style={styles.buttonText}>Crear Proyecto</Text>
      </TouchableOpacity>
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

export default ProyectoIndex;
