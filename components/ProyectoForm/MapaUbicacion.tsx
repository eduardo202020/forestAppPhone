import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface MapaUbicacionProps {
  selectedLocation: { latitude: number; longitude: number } | null;
  mapRef?: React.RefObject<MapView>;
  onMapPress?: (e: any) => void;
  editable?: boolean;
  error?: string;
}

const MapaUbicacion: React.FC<MapaUbicacionProps> = ({
  selectedLocation,
  mapRef,
  onMapPress,
  editable = true,
  error,
}) => (
  <>
    <Text style={styles.label}>Ubicación</Text>
    <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={{
        latitude: selectedLocation?.latitude || -12.0464,
        longitude: selectedLocation?.longitude || -77.0428,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      onPress={editable ? onMapPress : undefined}
    >
      {selectedLocation && <Marker coordinate={selectedLocation} />}
    </MapView>
    <Text style={styles.ubicacionText}>
      {selectedLocation
        ? `Ubicación seleccionada: ${selectedLocation.latitude.toFixed(5)}, ${selectedLocation.longitude.toFixed(5)}`
        : 'Toca el mapa para seleccionar una ubicación'}
    </Text>
    {error && <Text style={styles.errorText}>{error}</Text>}
  </>
);

const styles = StyleSheet.create({
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
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    fontSize: 13,
  },
});

export default MapaUbicacion;
