import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

import { proyectosData } from '@/data/proyectos';
import { useFavoritos } from '@/hooks/useFavoritos';
import ProyectoList from '@/components/ProyectoList/ProyectoList';

const Favoritos = () => {
  const router = useRouter();
  const [proyectos] = useState(proyectosData);
  const { esFavorito, toggleFavorito } = useFavoritos();

  const handleVerDetalles = (id: string) => {
    router.push(('./detalles?id=' + id) as any);
  };

  return (
    <View style={styles.container}>
      <ProyectoList
        proyectos={proyectos}
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
});

export default Favoritos;
