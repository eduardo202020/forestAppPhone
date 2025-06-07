import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { ProyectoCard } from './ProyectoCard';
import { Proyecto } from '@/data/proyectos';

interface ProyectoListProps {
  proyectos: Proyecto[];
  onVerDetalles: (id: string) => void;
  esFavorito: (id: string) => boolean;
  toggleFavorito: (id: string) => void;
}

const ProyectoList: React.FC<ProyectoListProps> = ({
  proyectos,
  onVerDetalles,
  esFavorito,
  toggleFavorito,
}) => {
  if (proyectos.length === 0) {
    return (
      <View style={{ alignItems: 'center', marginTop: 48 }}>
        <Text style={{ color: '#888', fontSize: 18 }}>
          No hay proyectos para mostrar.
        </Text>
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
          onVerDetalles={onVerDetalles}
          esFavorito={esFavorito}
          toggleFavorito={toggleFavorito}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ProyectoList;
