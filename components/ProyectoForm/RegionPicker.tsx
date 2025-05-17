import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, StyleSheet } from 'react-native';

interface RegionPickerProps {
  value: string;
  onChange: (v: string) => void;
  editable?: boolean;
  error?: string;
}

const RegionPicker: React.FC<RegionPickerProps> = ({
  value,
  onChange,
  editable = true,
  error,
}) => (
  <>
    <Picker
      selectedValue={value}
      onValueChange={onChange}
      style={styles.input}
      enabled={editable}
    >
      <Picker.Item label="Selecciona una región" value="" />
      <Picker.Item label="Loreto" value="Loreto" />
      <Picker.Item label="Cusco" value="Cusco" />
      <Picker.Item label="Puno" value="Puno" />
      <Picker.Item label="Madre de Dios" value="Madre de Dios" />
      <Picker.Item label="Amazonas" value="Amazonas" />
      <Picker.Item label="San Martín" value="San Martín" />
    </Picker>
    {error && <Text style={styles.errorText}>{error}</Text>}
  </>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    fontSize: 13,
  },
});

export default RegionPicker;
