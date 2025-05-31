// app/proyecto/crear.tsx
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import MapView, { Marker } from 'react-native-maps';
import { Modal, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { ScrollView } from 'react-native';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { proyectosData } from '@/data/proyectos';
import { Proyecto } from '@/data/proyectos'; // Asegúrate de que Proyecto esté bien tipado
import { regionesCoords } from '@/data/regionesCoords';
import ProyectoForm from '@/components/ProyectoForm';

const CrearProyecto = () => {
  const router = useRouter();

  // Definimos los estados para los campos del proyecto
  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [fecha, setFecha] = useState('');
  const [region, setRegion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState({
    latitude: -12.0464,
    longitude: -77.0428,
  });

  // Guardar la ubicación seleccionada en el proyecto
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: -12.0464,
    longitude: -77.0428,
  });

  // Para imágenes de prueba
  const [imagenes, setImagenes] = useState([
    'https://placehold.co/200x200?text=Imagen+1',
    'https://placehold.co/200x200?text=Imagen+2',
    'https://placehold.co/200x200?text=Imagen+3',
    'https://placehold.co/200x200?text=Imagen+4',
    'https://placehold.co/200x200?text=Imagen+5',
  ]);

  // Fecha seleccionada
  const [selectedDate, setSelectedDate] = useState('');

  // Estado para errores de validación
  const [errores, setErrores] = useState<{ [key: string]: string }>({});

  // Validación de campos
  const validarCampos = () => {
    const nuevosErrores: { [key: string]: string } = {};
    if (!nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
    if (!region) nuevosErrores.region = 'La región es obligatoria.';
    if (!selectedLocation)
      nuevosErrores.ubicacion = 'Selecciona una ubicación en el mapa.';
    if (!selectedDate) nuevosErrores.fecha = 'Selecciona una fecha.';
    if (!descripcion.trim())
      nuevosErrores.descripcion = 'La descripción es obligatoria.';
    return nuevosErrores;
  };

  // Función para crear un nuevo proyecto
  // Al crear un proyecto, se debe crear con la estructura completa de Proyecto
  // Por ahora, plantas será un array vacío, pero compatible con la interfaz
  const handleCrear = () => {
    const nuevosErrores = validarCampos();
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;
    const nuevoProyecto: Proyecto = {
      id: (proyectosData.length + 1).toString(),
      nombre,
      ubicacion: selectedLocation
        ? `${selectedLocation.latitude}, ${selectedLocation.longitude}`
        : ubicacion,
      fecha: selectedDate,
      region,
      descripcion,
      plantas: [], // Aquí podrías permitir agregar plantas reales en el futuro
      estado: 'Pendiente',
      imagenes,
      location: selectedLocation || undefined,
    };
    proyectosData.push(nuevoProyecto);
    console.log('Proyecto creado:', nuevoProyecto);
    router.push(`/proyecto/detalles?id=${nuevoProyecto.id}`);
  };

  const handleMapPress = (e: any) => {
    const coord = e.nativeEvent.coordinate;
    setLocation(coord);
    setUbicacion(`${coord.latitude}, ${coord.longitude}`);
    setSelectedLocation(coord);
  };

  const mapRef = React.useRef<MapView>(null);

  const handleRegionChange = (itemValue: string) => {
    setRegion(itemValue);
    if (regionesCoords[itemValue]) {
      setLocation(regionesCoords[itemValue]);
      setSelectedLocation(regionesCoords[itemValue]);
      setUbicacion(
        `${regionesCoords[itemValue].latitude}, ${regionesCoords[itemValue].longitude}`
      );
      // Centrar el mapa animadamente
      mapRef.current?.animateToRegion(
        {
          ...regionesCoords[itemValue],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        800
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ProyectoForm
        nombre={nombre}
        setNombre={setNombre}
        region={region}
        setRegion={setRegion}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        ubicacion={ubicacion}
        setUbicacion={setUbicacion}
        imagenes={imagenes}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        errores={errores}
        mapRef={mapRef}
        onMapPress={handleMapPress}
        onRegionChange={handleRegionChange}
        editable={true}
        horizontalImages={false}
      />
      <Button title="Crear Proyecto" onPress={handleCrear} color="#2ecc71" />
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
    height: 270, // 50% más alto que antes (antes 180)
    borderRadius: 10,
    marginBottom: 10,
  },
  ubicacionText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  imageBox: {
    width: '100%',
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
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
  errorText: {
    color: 'red',
    marginBottom: 8,
    fontSize: 13,
  },
});

export default CrearProyecto;
