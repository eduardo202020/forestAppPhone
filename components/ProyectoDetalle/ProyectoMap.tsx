import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface ProyectoMapProps {
  location: { latitude: number; longitude: number };
}

export const ProyectoMap: React.FC<ProyectoMapProps> = ({ location }) => (
  <MapView
    style={styles.map}
    initialRegion={{
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
  >
    <Marker coordinate={location} />
  </MapView>
);

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 16,
  },
});
