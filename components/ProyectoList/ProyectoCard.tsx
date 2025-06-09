import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProyectoCardProps } from '@/types/ProyectoCard';
import ProyectoImagenesList from '@/components/ProyectoDetalle/ProyectoImagenesList';

export const ProyectoCard: React.FC<ProyectoCardProps> = ({
  proyecto,
  onVerDetalles,
  esFavorito,
  toggleFavorito,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onVerDetalles}>
      <View style={styles.row}>
        <Text style={styles.projectName}>{proyecto.nombre}</Text>
        <MaterialCommunityIcons
          name={esFavorito() ? 'heart' : 'heart-outline'}
          size={24}
          color={esFavorito() ? '#e74c3c' : '#888'}
          onPress={toggleFavorito}
          style={styles.favIcon}
          testID={`fav-icon-${proyecto.id}`}
        />
      </View>
      <Text style={styles.projectDesc}>{proyecto.descripcion}</Text>
      <Text style={styles.projectRegion}>Región: {proyecto.region}</Text>
      <Text style={styles.projectUbicacion}>
        Ubicación: {proyecto.ubicacion}
      </Text>
      <Text style={styles.projectRegion}>Fecha: {proyecto.fecha}</Text>
      <ProyectoImagenesList imagenes={proyecto.imagenes || []} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  favIcon: {
    marginLeft: 8,
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
});
