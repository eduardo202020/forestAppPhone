import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useRouter } from 'expo-router';

const ProyectoIndex = () => {
  const router = useRouter();

  const handleCrearProyecto = () => {
    router.push('/proyecto/crear');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Mi Proyecto</Text>
      <TouchableOpacity style={styles.button} onPress={handleCrearProyecto}>
        <Text style={styles.buttonText}>Crear Proyecto</Text>
      </TouchableOpacity>
      {/* Aquí podrías mostrar un resumen, estadísticas o mensaje personalizado, pero NO el listado completo */}
      <Text style={{ color: '#888', marginTop: 24, textAlign: 'center' }}>
        Aquí verás un resumen de tu proyecto principal o tus estadísticas.
      </Text>
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
});

export default ProyectoIndex;
