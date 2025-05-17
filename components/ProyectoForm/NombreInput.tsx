import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';

interface NombreInputProps {
  value: string;
  onChange: (v: string) => void;
  editable?: boolean;
  error?: string;
}

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

export default NombreInput;
