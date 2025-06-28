import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator,
  Alert,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { fetchDiagnosis } from '../../../utils/fetchDiagnosis';
/// <reference path="../../types/react-native-fetch.d.ts" />

export interface Diagnosis {
  diagnosis_name: string;
  short_description: string;
  slug: string;
}

export default function HomeScreen() {
  const [query, setQuery] = useState(''); // Estado para almacenar la consulta
  const [results, setResults] = useState<Diagnosis[]>([]); // Estado para los resultados de la API
  const [loading, setLoading] = useState(false); // Estado para el indicador de carga

  // Función para enviar la consulta al servidor
  const handleSearch = async () => {
    if (!query.trim()) {
      Alert.alert('Error', 'Por favor, escribe una consulta antes de buscar.');
      return;
    }

    setLoading(true);
    try {
      const data = await fetchDiagnosis(query);
      setResults(data); // Actualizar resultados
    } catch (error: any) {
      console.error('Error al realizar la búsqueda:', error);
      Alert.alert(
        'Error',
        error.message || 'Hubo un problema al conectarse al servidor.'
      );
    } finally {
      setLoading(false);
    }
  };

  // Función para limpiar el campo de entrada y los resultados
  const handleClear = () => {
    setQuery(''); // Limpiar el campo de texto
    setResults([]); // Limpiar los resultados
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* Input de consulta */}
      <Text style={styles.title}>Busca una enfermedad</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe los síntomas de la planta"
        value={query}
        onChangeText={setQuery}
        multiline={true} // Permite varias líneas
        numberOfLines={5} // Muestra 2-3 líneas
      />
      {query.length > 0 && (
        <View>
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Borrar</Text>
            <FontAwesome name="times-circle" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      )}

      {/* Botón de búsqueda */}
      <Button title="Buscar" onPress={handleSearch} />

      {/* Indicador de carga */}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {/* Resultados */}
      <FlatList<Diagnosis>
        data={results}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }: { item: Diagnosis }) => (
          <View style={styles.resultItem}>
            <Pressable
              onPress={() => {
                // router.push(`/detail/${item.slug}`);
                console.log(item.slug);
              }}
            >
              <Text style={styles.resultTitle}>{item.diagnosis_name}</Text>
              <Text style={styles.resultDescription}>
                {item.short_description}
              </Text>
            </Pressable>
          </View>
        )}
        ListEmptyComponent={
          !loading ? (
            <Text style={styles.noResultsText}>
              No hay resultados. Intenta con otra consulta.
            </Text>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  input: {
    height: 80, // Altura suficiente para mostrar varias líneas
    textAlignVertical: 'top', // Alinea el texto en la parte superior
    padding: 8,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 12,
  },
  resultItem: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  clearButton: {
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  resultTitle: { fontSize: 16, fontWeight: 'bold' },
  resultDescription: { marginTop: 4, fontSize: 14, color: '#555' },
  noResultsText: { textAlign: 'center', marginTop: 20, color: '#555' },
  clearButtonText: { color: '#666', marginRight: 6 },
});
