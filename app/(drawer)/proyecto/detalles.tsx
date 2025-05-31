// app/proyecto/detalles.tsx
import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useNavigation, useLocalSearchParams } from 'expo-router';
import { proyectosData } from '@/data/proyectos';
import MapView, { Marker } from 'react-native-maps';
import { Calendar } from 'react-native-calendars';
import { Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { IconButton } from 'react-native-paper';
import * as Linking from 'expo-linking';

type Proyecto = (typeof proyectosData)[0];

const DetallesProyecto = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const { id }: { id: string } = useLocalSearchParams();
  const proyecto = proyectosData.find((p) => p.id === id);
  const viewRef = React.useRef(null);

  const handleEdit = () => {
    if (!proyecto) return;
    router.push(`/proyecto/editar?id=${proyecto.id}`);
  };

  // Genera el texto Markdown del proyecto
  const getProyectoMarkdown = (proyecto: Proyecto) => {
    // Mejor formato: tabla y secciones claras
    let markdown = `# ${proyecto.nombre}\n\n`;
    markdown += `| Campo         | Valor |\n|--------------|-------|\n`;
    markdown += `| **Descripción** | ${proyecto.descripcion} |\n`;
    markdown += `| **Región**      | ${proyecto.region} |\n`;
    if (proyecto.location) {
      markdown += `| **Ubicación**  | (${proyecto.location.latitude}, ${proyecto.location.longitude}) |\n`;
    }
    markdown += `| **Fecha de Cultivo** | ${proyecto.fecha} |\n`;
    if (proyecto.imagenes && proyecto.imagenes.length > 0) {
      markdown += `\n**Imágenes:**\\n`;
      markdown += proyecto.imagenes.map((img) => `![](${img})`).join(' ');
      markdown += '\n';
    }
    return markdown;
  };

  // Copia el texto Markdown al portapapeles y abre WhatsApp
  const handleShare = async () => {
    if (!proyecto) return;
    const markdown = getProyectoMarkdown(proyecto);
    await Clipboard.setStringAsync(markdown);
    Alert.alert(
      '¡Copiado!',
      'El proyecto se copió al portapapeles en formato Markdown. Se abrirá WhatsApp.'
    );
    const message = encodeURIComponent('¡Mira mi proyecto!\n\n' + markdown);
    const url = `whatsapp://send?text=${message}`;
    setTimeout(() => {
      Linking.openURL(url).catch(() => {
        Alert.alert('Error', 'No se pudo abrir WhatsApp.');
      });
    }, 800);
  };

  if (!proyecto) {
    return <Text>No se encontraron detalles del proyecto.</Text>;
  }

  return (
    <ScrollView style={styles.container} ref={viewRef} collapsable={false}>
      {/* Botón compartir flotante */}
      <IconButton
        onPress={handleShare}
        icon="whatsapp"
        size={40}
        iconColor="#25D366"
        style={styles.fabShare}
        accessibilityLabel="Compartir proyecto por WhatsApp"
      />
      <Text style={styles.title}>{proyecto.nombre}</Text>
      <Text style={styles.details}>{proyecto.descripcion}</Text>
      <Text style={styles.label}>Región: {proyecto.region}</Text>
      {/* Mapa con ubicación */}
      {proyecto.location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: proyecto.location.latitude,
            longitude: proyecto.location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={proyecto.location} />
        </MapView>
      )}
      {/* Imágenes */}
      <Text style={styles.label}>Imágenes</Text>
      <ScrollView horizontal style={styles.imagesRow}>
        {proyecto.imagenes &&
          proyecto.imagenes.map((img, idx) => (
            <Image
              key={idx}
              source={{ uri: img }}
              style={styles.imageBox}
              resizeMode="cover"
            />
          ))}
      </ScrollView>
      {/* Fecha usando calendario */}
      <Text style={styles.label}>Fecha de Cultivo</Text>
      <Calendar
        current={proyecto.fecha}
        markedDates={{
          [proyecto.fecha]: { selected: true, selectedColor: '#2ecc71' },
        }}
        disabledByDefault
        hideExtraDays
        style={{ marginBottom: 16 }}
      />
      <Button title="Editar Proyecto" onPress={handleEdit} />
      <View style={{ height: 32 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  details: {
    fontSize: 18,
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 16,
  },
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
  fabShare: {
    position: 'absolute',
    top: -18,
    right: -18,
    backgroundColor: 'transparent', // Fondo transparente para el botón flotante
    borderRadius: 28,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default DetallesProyecto;
