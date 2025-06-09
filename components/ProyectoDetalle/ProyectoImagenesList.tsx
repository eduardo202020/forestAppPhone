import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ProyectoImagenItem } from './ProyectoImagenItem';

interface ProyectoImagenesListProps {
  imagenes: string[];
}

const ProyectoImagenesList: React.FC<ProyectoImagenesListProps> = ({
  imagenes,
}) => {
  if (!imagenes || imagenes.length === 0) return null;
  return (
    <View style={styles.container}>
      <FlatList
        data={imagenes}
        keyExtractor={(item, idx) => item + idx}
        renderItem={({ item }) => <ProyectoImagenItem uri={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
});

export default ProyectoImagenesList;
