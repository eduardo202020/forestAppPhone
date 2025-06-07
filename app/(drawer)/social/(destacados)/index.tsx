import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { proyectosData, Proyecto } from '@/data/proyectos';
import { useFavoritos } from '@/hooks/useFavoritos';
import ProyectoList from '@/components/ProyectoList/ProyectoList';

const Favoritos = () => {
  const router = useRouter();
  const [proyectos] = useState(proyectosData);
  const { favoritos, esFavorito, toggleFavorito } = useFavoritos();

  const noFavoritosProyectos = proyectos.filter(
    (p) => !favoritos.includes(p.id)
  );

  const handleVerDetalles = (id: string) => {
    router.push(('./detalles?id=' + id) as any);
  };

  return (
    <View style={styles.container}>
      <ProyectoList
        proyectos={noFavoritosProyectos}
        onVerDetalles={handleVerDetalles}
        esFavorito={esFavorito}
        toggleFavorito={toggleFavorito}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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
    marginTop: 8,
  },
  imageBox: {
    flex: 1,
    height: 100,
    marginRight: 4,
    backgroundColor: '#ccc',
    borderRadius: 4,
  },
});

export default Favoritos;
