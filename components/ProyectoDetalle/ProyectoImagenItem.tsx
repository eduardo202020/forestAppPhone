import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface ProyectoImagenItemProps {
  uri: string;
}

export const ProyectoImagenItem: React.FC<ProyectoImagenItemProps> = ({
  uri,
}) => (
  <View style={styles.imageWrapper}>
    <Image source={{ uri }} style={styles.image} resizeMode="cover" />
  </View>
);

const styles = StyleSheet.create({
  imageWrapper: {
    marginRight: 12,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  image: {
    width: 120,
    height: 80,
  },
});
