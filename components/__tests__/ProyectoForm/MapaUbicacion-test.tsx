import React from 'react';
import renderer from 'react-test-renderer';
import MapView from 'react-native-maps';
import MapaUbicacion from '../../ProyectoForm/MapaUbicacion';

describe('MapaUbicacion', () => {
  it('se renderiza sin errores', () => {
    const tree = renderer
      .create(
        <MapaUbicacion
          selectedLocation={{ latitude: -12.0464, longitude: -77.0428 }}
          editable
          error={undefined}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('muestra el error si existe', () => {
    const tree = renderer
      .create(
        <MapaUbicacion
          selectedLocation={null}
          editable
          error="Campo requerido"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('llama a onMapPress cuando el usuario presiona el mapa', () => {
    const onMapPress = jest.fn();
    const testRenderer = renderer.create(
      <MapaUbicacion selectedLocation={null} editable onMapPress={onMapPress} />
    );
    // Simula el evento onPress del MapView
    const map = testRenderer.root.findByType(MapView);
    map.props.onPress({
      nativeEvent: { coordinate: { latitude: 1, longitude: 2 } },
    });
    expect(onMapPress).toHaveBeenCalled();
  });
});
