import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, StyleSheet } from 'react-native';
import { RegionPickerProps } from '../../types/RegionPicker';

const RegionPicker: React.FC<RegionPickerProps> = ({
  value,
  onChange,
  editable = true,
  error,
}) => (
  <>
    <Text style={styles.label}>Región</Text>
    <Picker
      selectedValue={value}
      onValueChange={onChange}
      enabled={editable}
      style={styles.picker}
    >
      <Picker.Item label="Selecciona una región" value="" />
      <Picker.Item label="Loreto" value="Loreto" />
      <Picker.Item label="Cusco" value="Cusco" />
      <Picker.Item label="Puno" value="Puno" />
      <Picker.Item label="Madre de Dios" value="Madre de Dios" />
      <Picker.Item label="Amazonas" value="Amazonas" />
      <Picker.Item label="San Martín" value="San Martín" />
    </Picker>
    {error && <Text style={styles.error}>{error}</Text>}
  </>
);

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default RegionPicker;
