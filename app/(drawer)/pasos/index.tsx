import React, { useState, useEffect } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
/// <reference path="../../types/react-native-fetch.d.ts" />

export interface Diagnosis {
  diagnosis_name: string;
  short_description: string;
  slug: string;
}

interface HistoryItem {
  id: string;
  query: string;
  timestamp: string;
  results: Diagnosis[];
}

export default function HomeScreen() {
  const [query, setQuery] = useState(''); // Estado para almacenar la consulta
  const [results, setResults] = useState<Diagnosis[]>([]); // Estado para los resultados de la API
  const [loading, setLoading] = useState(false); // Estado para el indicador de carga
  const [history, setHistory] = useState<HistoryItem[]>([]); // Historial de búsquedas
  const [showHistory, setShowHistory] = useState(false); // Mostrar/ocultar historial

  // Cargar historial desde AsyncStorage al montar el componente
  useEffect(() => {
    loadHistory();
  }, []);

  // Función para cargar el historial desde AsyncStorage
  const loadHistory = async () => {
    try {
      const storedHistory = await AsyncStorage.getItem('searchHistory');
      if (storedHistory) {
        const parsedHistory = JSON.parse(storedHistory);
        setHistory(parsedHistory);
        // console.log('Historial cargado:', parsedHistory.length, 'elementos');
      } else {
        console.log('No hay historial guardado');
      }
    } catch (error) {
      console.error('Error al cargar el historial:', error);
    }
  };

  // Función para guardar una búsqueda en el historial
  const saveToHistory = async (query: string, results: Diagnosis[]) => {
    try {
      const newHistoryItem: HistoryItem = {
        id: Date.now().toString(),
        query,
        timestamp: new Date().toISOString(),
        results,
      };

      const updatedHistory = [newHistoryItem, ...history].slice(0, 20); // Mantener solo las últimas 20 búsquedas
      setHistory(updatedHistory);
      await AsyncStorage.setItem(
        'searchHistory',
        JSON.stringify(updatedHistory)
      );
      // console.log('Historial guardado:', updatedHistory.length, 'elementos');
    } catch (error) {
      console.error('Error al guardar en el historial:', error);
    }
  };

  // Función para borrar un elemento del historial
  const deleteFromHistory = async (id: string) => {
    try {
      const updatedHistory = history.filter((item) => item.id !== id);
      setHistory(updatedHistory);
      await AsyncStorage.setItem(
        'searchHistory',
        JSON.stringify(updatedHistory)
      );
    } catch (error) {
      console.error('Error al eliminar del historial:', error);
    }
  };

  // Función para limpiar todo el historial
  const clearHistory = async () => {
    Alert.alert(
      'Confirmar',
      '¿Estás seguro de que quieres borrar todo el historial?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Borrar',
          style: 'destructive',
          onPress: async () => {
            try {
              setHistory([]);
              await AsyncStorage.removeItem('searchHistory');
            } catch (error) {
              console.error('Error al limpiar el historial:', error);
            }
          },
        },
      ]
    );
  };

  // Función para usar una búsqueda del historial
  const useFromHistory = (historyItem: HistoryItem) => {
    setQuery(historyItem.query);
    setResults(historyItem.results);
    setShowHistory(false);
  };

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

      // Guardar en el historial siempre (incluso si no hay resultados)
      await saveToHistory(query.trim(), data);
    } catch (error: any) {
      console.error('Error al realizar la búsqueda:', error);
      Alert.alert(
        'Error',
        error.message || 'Hubo un problema al conectarse al servidor.'
      );
      // Guardar en el historial incluso si hay error (con resultados vacíos)
      await saveToHistory(query.trim(), []);
    } finally {
      setLoading(false);
    }
  };

  // Función para limpiar el campo de entrada y los resultados
  const handleClear = () => {
    setQuery(''); // Limpiar el campo de texto
    setResults([]); // Limpiar los resultados
  };

  // Renderizar elemento del historial
  const renderHistoryItem = ({ item }: { item: HistoryItem }) => (
    <View style={styles.historyItem}>
      <TouchableOpacity
        style={styles.historyContent}
        onPress={() => useFromHistory(item)}
      >
        <Text style={styles.historyQuery} numberOfLines={2}>
          {item.query}
        </Text>
        <Text style={styles.historyDate}>
          {new Date(item.timestamp).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
        <Text style={styles.historyResults}>
          {item.results.length} resultado(s)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteFromHistory(item.id)}
      >
        <FontAwesome name="trash" size={16} color="#ff4444" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* Input de consulta */}
      <Text style={styles.title}>
        Busca lo que necesites sobre el Método kawasaki:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Busca aquí..."
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

      {/* Botón para mostrar/ocultar historial - siempre visible para debugging */}
      <View style={styles.historyHeader}>
        <TouchableOpacity
          style={styles.historyToggleButton}
          onPress={() => setShowHistory(!showHistory)}
        >
          <FontAwesome
            name={showHistory ? 'chevron-up' : 'chevron-down'}
            size={16}
            color="#007AFF"
          />
          <Text style={styles.historyToggleText}>
            {showHistory ? 'Ocultar' : 'Mostrar'} historial ({history.length})
          </Text>
        </TouchableOpacity>
        {history.length > 0 && (
          <TouchableOpacity
            onPress={clearHistory}
            style={styles.clearHistoryButton}
          >
            <FontAwesome name="trash" size={16} color="#ff4444" />
            <Text style={styles.clearHistoryText}>Limpiar todo</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Botón para mostrar/ocultar historial cuando hay elementos */}
      {/* {history.length > 0 && (
        <View style={styles.historyHeader}>
          <TouchableOpacity
            style={styles.historyToggleButton}
            onPress={() => setShowHistory(!showHistory)}
          >
            <FontAwesome
              name={showHistory ? 'chevron-up' : 'chevron-down'}
              size={16}
              color="#007AFF"
            />
            <Text style={styles.historyToggleText}>
              {showHistory ? 'Ocultar' : 'Mostrar'} historial ({history.length})
            </Text>
          </TouchableOpacity>
          {history.length > 0 && (
            <TouchableOpacity
              onPress={clearHistory}
              style={styles.clearHistoryButton}
            >
              <FontAwesome name="trash" size={16} color="#ff4444" />
              <Text style={styles.clearHistoryText}>Limpiar todo</Text>
            </TouchableOpacity>
          )}
        </View>
      )} */}

      {/* Historial de búsquedas */}
      {showHistory && (
        <View style={styles.historyContainer}>
          {history.length > 0 ? (
            <FlatList
              data={history}
              keyExtractor={(item) => item.id}
              renderItem={renderHistoryItem}
              showsVerticalScrollIndicator={false}
              style={styles.historyList}
            />
          ) : (
            <Text style={styles.noHistoryText}>
              No hay búsquedas en el historial. Realiza una búsqueda para
              empezar.
            </Text>
          )}
        </View>
      )}

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

  // Estilos del historial
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 4,
  },
  historyToggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  historyToggleText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  clearHistoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  clearHistoryText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#ff4444',
  },
  historyContainer: {
    maxHeight: 200,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 8,
  },
  historyList: {
    flex: 1,
  },
  historyItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 6,
    borderRadius: 6,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  historyContent: {
    flex: 1,
    marginRight: 10,
  },
  historyQuery: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  historyDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  historyResults: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '500',
  },
  deleteButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noHistoryText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    padding: 20,
    fontStyle: 'italic',
  },
});
