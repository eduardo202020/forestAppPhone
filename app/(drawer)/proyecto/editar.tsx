// app/proyecto/editar.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Modal,
  ScrollView,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MapView, { Marker } from 'react-native-maps';
import { Calendar } from 'react-native-calendars';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { proyectosData, Proyecto } from '@/data/proyectos';

const EditarProyecto = () => {
  const router = useRouter();
  const { id }: { id: string } = useLocalSearchParams();
  const proyecto = proyectosData.find((p) => p.id === id);

  const [nombre, setNombre] = useState(proyecto?.nombre || '');
  const [region, setRegion] = useState(proyecto?.region || '');
  const [descripcion, setDescripcion] = useState(proyecto?.descripcion || '');
  const [selectedDate, setSelectedDate] = useState(proyecto?.fecha || '');
  const [modalVisible, setModalVisible] = useState(false);
  const [imagenes, setImagenes] = useState<string[]>(
    proyecto?.imagenes || [
      'https://placehold.co/200x200?text=Imagen+1',
      'https://placehold.co/200x200?text=Imagen+2',
      'https://placehold.co/200x200?text=Imagen+3',
      'https://placehold.co/200x200?text=Imagen+4',
      'https://placehold.co/200x200?text=Imagen+5',
    ]
  );
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(proyecto?.location || null);
  const [ubicacion, setUbicacion] = useState(proyecto?.ubicacion || '');

  useEffect(() => {
    if (!proyecto) {
      router.push('/index'); // Si no encontramos el proyecto, redirigimos a la lista de proyectos
    }
  }, [proyecto, router]);

  const handleMapPress = (e: any) => {
    const coord = e.nativeEvent.coordinate;
    setSelectedLocation(coord);
    setUbicacion(`${coord.latitude}, ${coord.longitude}`);
  };

  const handleGuardar = () => {
    if (!proyecto) return;
    proyecto.nombre = nombre;
    proyecto.region = region;
    proyecto.descripcion = descripcion;
    proyecto.fecha = selectedDate;
    proyecto.imagenes = imagenes;
    proyecto.location = selectedLocation || undefined;
    proyecto.ubicacion = selectedLocation
      ? `${selectedLocation.latitude}, ${selectedLocation.longitude}`
      : ubicacion;
    router.push(`/proyecto/detalles?id=${proyecto.id}`);
  };

  if (!proyecto) {
    return <Text>No se encontró el proyecto.</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Editar Proyecto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del proyecto"
        value={nombre}
        onChangeText={setNombre}
      />
      <Picker
        selectedValue={region}
        onValueChange={(itemValue) => setRegion(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Selecciona una región" value="" />
        <Picker.Item label="Loreto" value="Loreto" />
        <Picker.Item label="Cusco" value="Cusco" />
        <Picker.Item label="Puno" value="Puno" />
        <Picker.Item label="Madre de Dios" value="Madre de Dios" />
        <Picker.Item label="Amazonas" value="Amazonas" />
        <Picker.Item label="San Martín" value="San Martín" />
      </Picker>
      <Text style={styles.label}>Ubicación</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: selectedLocation?.latitude || -12.0464,
          longitude: selectedLocation?.longitude || -77.0428,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}
      >
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>
      <Text style={styles.ubicacionText}>
        {selectedLocation
          ? `Ubicación seleccionada: ${selectedLocation.latitude.toFixed(5)}, ${selectedLocation.longitude.toFixed(5)}`
          : 'Toca el mapa para seleccionar una ubicación'}
      </Text>
      <Text style={styles.label}>Fecha de Cultivo</Text>
      <Calendar
        onDayPress={(day: { dateString: string }) =>
          setSelectedDate(day.dateString)
        }
        markedDates={
          selectedDate
            ? { [selectedDate]: { selected: true, selectedColor: '#2ecc71' } }
            : {}
        }
        current={selectedDate}
        style={{ marginBottom: 16 }}
      />
      <Text style={styles.ubicacionText}>
        {selectedDate
          ? `Seleccionada: ${selectedDate}`
          : 'Selecciona una fecha'}
      </Text>
      <TextInput
        style={[styles.input, { minHeight: 60 }]}
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
        multiline
      />
      <Text style={styles.label}>Imágenes</Text>
      <ScrollView horizontal style={styles.imagesRow}>
        {imagenes.map((img, idx) => (
          <Pressable
            key={idx}
            style={styles.imageBox}
            onPress={() => setModalVisible(true)}
          >
            <Image
              source={{ uri: img }}
              style={{ width: '100%', height: '100%', borderRadius: 10 }}
            />
          </Pressable>
        ))}
      </ScrollView>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Funcionalidad para añadir imágenes próximamente</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Button title="Guardar Cambios" onPress={handleGuardar} color="#2ecc71" />
      <View style={{ height: 32 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  map: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  ubicacionText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  imageBox: {
    width: 100,
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  imagesRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
});

export default EditarProyecto;
