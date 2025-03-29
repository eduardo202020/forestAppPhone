// Función para renderizar cada planta

import { Image, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';

export const renderPlanta = ({ item }: { item: any }) => (
  <Card style={styles.plantCard}>
    <Card.Title title={item.nombre_comun} subtitle={item.nombre_cientifico} />
    <Card.Content>
      <Text>{item.caracteristicas}</Text>
      <Image source={{ uri: item.img[0] }} style={styles.plantImage} />
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  plantCard: {
    width: 250, // Ancho reducido
    marginRight: 10, // Espacio entre tarjetas
    margin: 4,
    paddingBottom: 0,
  },
  plantImage: {
    width: '100%',
    height: 100, // Altura reducida
    borderRadius: 10,
    marginTop: 10,
  },
});
