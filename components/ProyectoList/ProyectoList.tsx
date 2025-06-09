import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { ProyectoCard } from './ProyectoCard';
import { ProyectoListProps } from '@/types/ProyectoList';

const ProyectoList: React.FC<ProyectoListProps> = ({
  proyectos,
  onVerDetalles,
  esFavorito,
  toggleFavorito,
}) => {
  if (proyectos.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No hay proyectos para mostrar.</Text>
      </View>
    );
  }
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={proyectos}
      renderItem={({ item }) => (
        <ProyectoCard
          proyecto={item}
          onVerDetalles={() => onVerDetalles(item.id)}
          esFavorito={() => esFavorito(item.id)}
          toggleFavorito={() => toggleFavorito(item.id)}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
    marginTop: 48,
  },
  emptyText: {
    color: '#888',
    fontSize: 18,
  },
});

export default ProyectoList;
