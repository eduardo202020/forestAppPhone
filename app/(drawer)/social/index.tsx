import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { proyectosData, Proyecto } from '@/data/proyectos';

const index = () => {
  const router = useRouter();
  const [proyectos, setProyectos] = useState(proyectosData);

  const handleVerDetalles = (id: string) => {
    router.push(`/proyecto/detalles?id=${id}`);
  };

  // Componente reutilizable para mostrar la lista de proyectos
  const ProyectoList = ({
    proyectos,
    onVerDetalles,
  }: {
    proyectos: Proyecto[];
    onVerDetalles: (id: string) => void;
  }) => {
    const renderImages = (imagenes: string[] | undefined) => {
      if (imagenes && imagenes.length > 0) {
        return (
          <View style={styles.imagesRow}>
            {imagenes.slice(0, 3).map((img, idx) => (
              <Image
                key={idx}
                source={{ uri: img }}
                style={styles.imageBox}
                resizeMode="cover"
              />
            ))}
          </View>
        );
      } else {
        return (
          <View style={styles.imagesRow}>
            {[1, 2, 3].map((_, idx) => (
              <View key={idx} style={styles.imageBox} />
            ))}
          </View>
        );
      }
    };

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={proyectos}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => onVerDetalles(item.id)}
          >
            <Text style={styles.projectName}>{item.nombre}</Text>
            <Text style={styles.projectDesc}>{item.descripcion}</Text>
            <Text style={styles.projectRegion}>Región: {item.region}</Text>
            <Text style={styles.projectUbicacion}>
              Ubicación: {item.ubicacion}
            </Text>
            <Text style={styles.projectRegion}>Fecha: {item.fecha}</Text>
            {renderImages(item.imagenes)}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ProyectoList proyectos={proyectos} onVerDetalles={handleVerDetalles} />
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
  button: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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
  imagesRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  imageBox: {
    flex: 1,
    height: 100,
    marginRight: 4,
    backgroundColor: '#ccc',
    borderRadius: 4,
  },
});

export default index;
