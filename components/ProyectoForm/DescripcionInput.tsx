import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';
import { DescripcionInputProps } from '../../types/DescripcionInput';

const DescripcionInput: React.FC<DescripcionInputProps> = ({
  value,
  onChange,
  editable = true,
  error,
}) => (
  <>
    <TextInput
      style={[styles.input, styles.textArea]}
      placeholder="Descripción"
      value={value}
      onChangeText={onChange}
      editable={editable}
      multiline
      numberOfLines={4}
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
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default DescripcionInput;
