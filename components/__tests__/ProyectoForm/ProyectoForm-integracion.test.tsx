import React from 'react';
import renderer from 'react-test-renderer';
import ProyectoForm from '../../ProyectoForm';

jest.mock('react-native/Libraries/Components/Pressable/Pressable', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: (props: any) => <pressable-mock {...props} />,
  };
});
jest.mock('@react-native-picker/picker', () => {
  const React = require('react');
  const Picker = (props: any) => <picker-mock {...props} />;
  Picker.Item = (props: any) => <picker-item-mock {...props} />;
  return { Picker };
});
jest.mock('react-native-calendars', () => {
  const React = require('react');
  return {
    Calendar: (props: any) => <calendar-mock {...props} />,
  };
});
jest.mock('react-native-maps', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: (props: any) => <mapview-mock {...props} />,
  };
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'picker-mock': any;
      'picker-item-mock': any;
      'calendar-mock': any;
      'mapview-mock': any;
      'pressable-mock': any;
    }
  }
}

// Mocks mínimos para simular el formulario completo
const defaultProps = {
  nombre: '',
  setNombre: jest.fn(),
  region: '',
  setRegion: jest.fn(),
  descripcion: '',
  setDescripcion: jest.fn(),
  selectedDate: '',
  setSelectedDate: jest.fn(),
  selectedLocation: null,
  setSelectedLocation: jest.fn(),
  ubicacion: '',
  setUbicacion: jest.fn(),
  imagenes: ['img1', 'img2'],
  setModalVisible: jest.fn(),
  modalVisible: false,
  errores: {},
  mapRef: undefined,
  onMapPress: jest.fn(),
  onRegionChange: jest.fn(),
  editable: true,
  horizontalImages: false,
};

describe('Integración ProyectoForm', () => {
  it('renderiza el formulario completo sin errores', () => {
    const tree = renderer.create(<ProyectoForm {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('muestra errores de validación en todos los campos', () => {
    const errores = {
      nombre: 'Falta nombre',
      region: 'Falta región',
      descripcion: 'Falta descripción',
      fecha: 'Falta fecha',
      ubicacion: 'Falta ubicación',
    };
    const tree = renderer
      .create(<ProyectoForm {...defaultProps} errores={errores} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('llama a los callbacks de los campos principales', () => {
    const setNombre = jest.fn();
    const setDescripcion = jest.fn();
    const setRegion = jest.fn();
    const setSelectedDate = jest.fn();
    const setSelectedLocation = jest.fn();
    const setUbicacion = jest.fn();
    const setModalVisible = jest.fn();
    const onMapPress = jest.fn();
    const onRegionChange = jest.fn();
    const testRenderer = renderer.create(
      <ProyectoForm
        {...defaultProps}
        setNombre={setNombre}
        setDescripcion={setDescripcion}
        setRegion={setRegion}
        setSelectedDate={setSelectedDate}
        setSelectedLocation={setSelectedLocation}
        setUbicacion={setUbicacion}
        setModalVisible={setModalVisible}
        onMapPress={onMapPress}
        onRegionChange={onRegionChange}
      />
    );
    // Simula cambios en los campos
    const root = testRenderer.root;
    root
      .findByProps({ placeholder: 'Nombre del proyecto' })
      .props.onChangeText('nuevo nombre');
    root.findByProps({ placeholder: 'Descripción' }).props.onChangeText('desc');
    // Simula selección de región
    root.findAllByType('picker-mock')[0].props.onValueChange('Loreto');
    // Simula selección de fecha
    root
      .findAllByType('calendar-mock')[0]
      .props.onDayPress({ dateString: '2025-05-17' });
    // Simula click en mapa
    if (root.findAllByType('mapview-mock')[0]) {
      root
        .findAllByType('mapview-mock')[0]
        .props.onPress({
          nativeEvent: { coordinate: { latitude: 1, longitude: 2 } },
        });
    }
    // Simula click en imagen
    root.findAllByType('pressable-mock')[0].props.onPress();
    // Verifica que los callbacks hayan sido llamados
    expect(setNombre).toHaveBeenCalledWith('nuevo nombre');
    expect(setDescripcion).toHaveBeenCalledWith('desc');
    expect(onRegionChange).toHaveBeenCalledWith('Loreto');
    expect(setSelectedDate).toHaveBeenCalledWith('2025-05-17');
    expect(onMapPress).toHaveBeenCalled();
    expect(setModalVisible).toHaveBeenCalled();
  });
});
