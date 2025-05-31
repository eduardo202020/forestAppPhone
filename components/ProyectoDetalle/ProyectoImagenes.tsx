import React from 'react';
import { ScrollView, Image, StyleSheet, View, Text } from 'react-native';

interface ProyectoImagenesProps {
  imagenes: string[];
}

export const ProyectoImagenes: React.FC<ProyectoImagenesProps> = ({ imagenes }) => (
  <View>
    <Text style={styles.label}>Imágenes</Text>
    <ScrollView horizontal style={styles.imagesRow}>
      {imagenes && imagenes.map((img, idx) => (
        <Image
          key={idx}
          source={{ uri: img }}
          style={styles.imageBox}
          resizeMode="cover"
        />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
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
