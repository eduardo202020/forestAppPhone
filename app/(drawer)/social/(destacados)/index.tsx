// Index para el stack de social/destacados
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { proyectosData, Proyecto } from '@/data/proyectos';
import { useFavoritos } from '@/hooks/useFavoritos';

const SocialDestacadosIndex = () => {
  const router = useRouter();
  const [proyectos, setProyectos] = useState(proyectosData);
  const { favoritos, esFavorito, toggleFavorito } = useFavoritos();

  const handleVerDetalles = (id: string) => {
    router.push(('./detalles?id=' + id) as any);
  };

  // Aquí puedes filtrar los proyectos destacados si tienes esa lógica
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proyectos destacados</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={proyectos}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleVerDetalles(item.id)}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Text style={styles.projectName}>{item.nombre}</Text>
              <MaterialCommunityIcons
                name={esFavorito(item.id) ? 'heart' : 'heart-outline'}
                size={24}
                color={esFavorito(item.id) ? '#e74c3c' : '#888'}
                onPress={() => toggleFavorito(item.id)}
                style={{ marginLeft: 8 }}
                testID={`fav-icon-${item.id}`}
              />
            </View>
            <Text style={styles.projectDesc}>{item.descripcion}</Text>
            <Text style={styles.projectRegion}>Región: {item.region}</Text>
            <Text style={styles.projectUbicacion}>
              Ubicación: {item.ubicacion}
            </Text>
            <Text style={styles.projectRegion}>Fecha: {item.fecha}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
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
});

export default SocialDestacadosIndex;
