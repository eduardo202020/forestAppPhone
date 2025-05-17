import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';

interface DescripcionInputProps {
  value: string;
  onChange: (v: string) => void;
  editable?: boolean;
  error?: string;
}

const DescripcionInput: React.FC<DescripcionInputProps> = ({
  value,
  onChange,
  editable = true,
  error,
}) => (
  <>
    <TextInput
      style={[styles.input, { minHeight: 60 }]}
      placeholder="Descripción"
      value={value}
      onChangeText={onChange}
      multiline
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

export default DescripcionInput;
