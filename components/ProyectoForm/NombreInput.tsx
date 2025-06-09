import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';
import { NombreInputProps } from '../../types/NombreInput';

const NombreInput: React.FC<NombreInputProps> = ({
  value,
  onChange,
  editable = true,
  error,
}) => (
  <>
    <TextInput
      style={styles.input}
      placeholder="Nombre del proyecto"
      value={value}
      onChangeText={onChange}
      editable={editable}
    />
    {error && <Text style={styles.error}>{error}</Text>}
  </>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default NombreInput;
