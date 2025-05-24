import React from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MapView, { Marker } from 'react-native-maps';
import { Calendar } from 'react-native-calendars';
import NombreInput from './ProyectoForm/NombreInput';
import RegionPicker from './ProyectoForm/RegionPicker';
import MapaUbicacion from './ProyectoForm/MapaUbicacion';
import FechaCultivo from './ProyectoForm/FechaCultivo';
import DescripcionInput from './ProyectoForm/DescripcionInput';
import ImagenesInput from './ProyectoForm/ImagenesInput';

interface ProyectoFormProps {
  nombre: string;
  setNombre: (v: string) => void;
  region: string;
  setRegion: (v: string) => void;
  descripcion: string;
  setDescripcion: (v: string) => void;
  selectedDate: string;
  setSelectedDate: (v: string) => void;
  selectedLocation: { latitude: number; longitude: number } | null;
  setSelectedLocation: (v: { latitude: number; longitude: number }) => void;
  ubicacion: string;
  setUbicacion: (v: string) => void;
  imagenes: string[];
  setModalVisible: (v: boolean) => void;
  modalVisible: boolean;
  errores?: { [key: string]: string };
  mapRef?: React.RefObject<MapView>;
  onMapPress?: (e: any) => void;
  onRegionChange?: (itemValue: string) => void;
  editable?: boolean;
  horizontalImages?: boolean;
}

const ProyectoForm: React.FC<ProyectoFormProps> = ({
  nombre,
  setNombre,
  region,
  setRegion,
  descripcion,
  setDescripcion,
  selectedDate,
  setSelectedDate,
  selectedLocation,
  setSelectedLocation,
  ubicacion,
  setUbicacion,
  imagenes,
  setModalVisible,
  modalVisible,
  errores = {},
  mapRef,
  onMapPress,
  onRegionChange,
  editable = true,
  horizontalImages = false,
}) => {
  return (
    <>
      <NombreInput
        value={nombre}
        onChange={setNombre}
        editable={editable}
        error={errores.nombre}
      />
      <RegionPicker
        value={region}
        onChange={onRegionChange || setRegion}
        editable={editable}
        error={errores.region}
      />
      <MapaUbicacion
        selectedLocation={selectedLocation}
        mapRef={mapRef}
        onMapPress={onMapPress}
        editable={editable}
        error={errores.ubicacion}
      />
      <FechaCultivo
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        error={errores.fecha}
      />
      <DescripcionInput
        value={descripcion}
        onChange={setDescripcion}
        editable={editable}
        error={errores.descripcion}
      />
      <ImagenesInput
        imagenes={imagenes}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        horizontal={horizontalImages}
      />
    </>
  );
};

const styles = StyleSheet.create({
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

export default ProyectoForm;
