import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, ProgressBar } from 'react-native-paper';
// import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Projecto } from '@/data/proyectos';

const Proyect: React.FC<{ proyect: Projecto }> = ({ proyect }) => {
  return (
    <Card key={proyect.id} style={styles.projectCard}>
      {/* Contenedor para el ícono flotante */}
      <View style={styles.favoriteIconContainer}>
        {/* <FontAwesome name="heart-o" size={24} color="#e74c3c" /> */}
      </View>
      <Card.Title
        title={proyect.name}
        titleStyle={{ fontSize: 20 }}
        subtitle={`Iniciado el ${proyect.startDate}`}
        subtitleStyle={{ fontSize: 14, fontWeight: 'bold' }}
      />
      <Card.Content style={{ flexDirection: 'column', gap: 10 }}>
        <ProgressBar progress={proyect.progress / 100} color="#2ecc71" />
        <Text style={styles.projectText}>Área: {proyect.area} m²</Text>
        <Text style={styles.projectText}>
          Densidad: {proyect.density} plantas/m²
        </Text>
        <Card.Cover
          source={{ uri: proyect.img[0] }}
          style={styles.plantImage}
        />
        <Card.Cover
          source={{ uri: proyect.img[1] }}
          style={styles.plantImage}
        />
      </Card.Content>

      <Card.Actions>
        <TouchableOpacity>
          <Text style={styles.detailsText}>Ver detalles</Text>
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );
};

export default Proyect;

const styles = StyleSheet.create({
  projectCard: {
    margin: 10,
    position: 'relative', // Asegura que el ícono flotante se posicione relativo al Card
  },
  favoriteIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1, // Asegura que el ícono esté por encima del contenido
    borderRadius: 20,
    padding: 5,
  },
  projectText: {
    fontSize: 16,
  },
  plantImage: {
    height: 150,
    marginVertical: 10,
  },
  detailsText: {
    color: '#3498db',
    fontWeight: 'bold',
  },
});
