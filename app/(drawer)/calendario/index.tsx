import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import { fetchQuestion } from '../../../utils/fetchDiagnosis';

interface MarkedDates {
  [key: string]: {
    selected?: boolean;
    marked?: boolean;
    selectedColor?: string;
    dotColor?: string;
    customStyles?: any;
  };
}

export default function CalendarioScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState('');
  const [userQuestion, setUserQuestion] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [isLoadingResponse, setIsLoadingResponse] = useState(false);

  // Fechas destacadas con diferentes eventos
  const markedDates: MarkedDates = {
    '2025-06-25': {
      selected: true,
      selectedColor: '#50cebb',
    },
    '2025-06-28': {
      selected: true,
      selectedColor: '#ff6b6b',
    },
    '2025-07-01': {
      selected: true,
      selectedColor: '#4ecdc4',
    },
    '2025-07-05': {
      selected: true,
      selectedColor: '#45b7d1',
    },
    '2025-07-10': {
      selected: true,
      selectedColor: '#f9ca24',
    },
    '2025-07-15': {
      selected: true,
      selectedColor: '#6c5ce7',
    },
    '2025-07-20': {
      selected: true,
      selectedColor: '#fd79a8',
    },
    '2025-07-25': {
      selected: true,
      selectedColor: '#00b894',
    },
  };

  const eventDetails: { [key: string]: string } = {
    '2025-06-25': 'Siembra de tomates',
    '2025-06-28': 'Riego programado',
    '2025-07-01': 'Fertilización orgánica',
    '2025-07-05': 'Poda de mantenimiento',
    '2025-07-10': 'Control de plagas',
    '2025-07-15': 'Cosecha de lechugas',
    '2025-07-20': 'Trasplante de plantas',
    '2025-07-25': 'Preparación de compost',
  };

  const eventDescriptions: { [key: string]: string } = {
    siembra:
      'La siembra es el proceso de colocar semillas en la tierra. Es importante preparar el suelo, mantener la humedad adecuada y elegir la época correcta según el tipo de planta.',
    riego:
      'El riego debe ser constante pero sin encharcar. Verifica la humedad del suelo introduciendo el dedo 2-3 cm. Riega preferiblemente en la mañana o tarde.',
    fertilizacion:
      'La fertilización aporta nutrientes esenciales. Usa compost orgánico o fertilizantes específicos según la fase de crecimiento de la planta.',
    poda: 'La poda elimina partes dañadas o excesivas de la planta. Usa herramientas limpias y corta en ángulo de 45 grados sobre un nudo o yema.',
    plagas:
      'Inspecciona regularmente las plantas. Usa métodos preventivos como plantas compañeras y tratamientos orgánicos antes de recurrir a pesticidas.',
    cosecha:
      'Cosecha en el momento óptimo de madurez. Hazlo preferiblemente en la mañana cuando las plantas están hidratadas y los sabores más concentrados.',
    trasplante:
      'Trasplanta cuando la planta tenga 4-6 hojas verdaderas. Mantén húmedo el cepellón y trasplanta en horas frescas del día.',
    compost:
      'Mezcla materiales verdes (restos de cocina) con marrones (hojas secas). Mantén húmedo y voltea cada 2-3 semanas para acelerar la descomposición.',
  };

  const handleEventPress = (eventType: string) => {
    setSelectedEventType(eventType);
    setUserQuestion('');
    setApiResponse('');
    setModalVisible(true);
  };

  const handleSubmitQuestion = async () => {
    if (userQuestion.trim()) {
      setIsLoadingResponse(true);
      setApiResponse('');

      try {
        // Crear contexto completo para la pregunta
        const eventDescription = eventDescriptions[selectedEventType] || '';
        const contextualizedQuestion = `Contexto: ${selectedEventType} - ${eventDescription}\n\nPregunta del usuario: ${userQuestion.trim()}`;

        const response = await fetchQuestion(
          contextualizedQuestion,
          selectedEventType
        );

        // La respuesta debe ser un string o un objeto con una propiedad 'answer'
        let responseText = '';
        if (typeof response === 'string') {
          responseText = response;
        } else if (response && response.answer) {
          responseText = response.answer;
        } else if (response && response.response) {
          responseText = response.response;
        } else {
          responseText = 'Respuesta procesada correctamente';
        }

        setApiResponse(responseText);
      } catch (error: any) {
        console.error('Error al enviar la pregunta:', error);
        setApiResponse(
          `Error: ${error.message || 'Hubo un problema al procesar tu pregunta. Inténtalo de nuevo.'}`
        );
      } finally {
        setIsLoadingResponse(false);
      }
    } else {
      Alert.alert('Error', 'Por favor escribe una pregunta antes de enviar.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.title}>Calendario de Cultivo</Text> */}

      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#5363df',
          selectedDayBackgroundColor: '#5363df',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#5363df',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#5363df',
          selectedDotColor: '#ffffff',
          arrowColor: '#5363df',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: '#5363df',
          indicatorColor: '#5363df',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 13,
        }}
        markedDates={markedDates}
        onDayPress={(day: any) => {
          setSelectedDate(day.dateString);
        }}
        monthFormat={'MMMM yyyy'}
        hideExtraDays={true}
        disableMonthChange={false}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={false}
        onPressArrowLeft={(subtractMonth: any) => subtractMonth()}
        onPressArrowRight={(addMonth: any) => addMonth()}
        disableArrowLeft={false}
        disableArrowRight={false}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
      />

      {selectedDate ? (
        <View style={styles.eventContainer}>
          <Text style={styles.eventTitle}>Evento para {selectedDate}:</Text>
          <Text style={styles.eventText}>
            {eventDetails[selectedDate] || 'Sin eventos programados'}
          </Text>
        </View>
      ) : null}

      <View style={styles.legendContainer}>
        <Text style={styles.legendTitle}>Leyenda de eventos:</Text>
        <TouchableOpacity
          style={styles.legendItem}
          onPress={() => handleEventPress('siembra')}
        >
          <View style={[styles.dot, styles.dotSiembra]} />
          <Ionicons
            name="leaf-outline"
            size={16}
            color="#50cebb"
            style={styles.legendIcon}
          />
          <Text style={styles.legendText}>Siembra</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.legendItem}
          onPress={() => handleEventPress('riego')}
        >
          <View style={[styles.dot, styles.dotRiego]} />
          <Ionicons
            name="water-outline"
            size={16}
            color="#ff6b6b"
            style={styles.legendIcon}
          />
          <Text style={styles.legendText}>Riego</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.legendItem}
          onPress={() => handleEventPress('fertilizacion')}
        >
          <View style={[styles.dot, styles.dotFertilizacion]} />
          <Ionicons
            name="flask-outline"
            size={16}
            color="#4ecdc4"
            style={styles.legendIcon}
          />
          <Text style={styles.legendText}>Fertilización</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.legendItem}
          onPress={() => handleEventPress('poda')}
        >
          <View style={[styles.dot, styles.dotPoda]} />
          <Ionicons
            name="cut-outline"
            size={16}
            color="#45b7d1"
            style={styles.legendIcon}
          />
          <Text style={styles.legendText}>Poda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.legendItem}
          onPress={() => handleEventPress('plagas')}
        >
          <View style={[styles.dot, styles.dotPlagas]} />
          <Ionicons
            name="bug-outline"
            size={16}
            color="#f9ca24"
            style={styles.legendIcon}
          />
          <Text style={styles.legendText}>Control de plagas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.legendItem}
          onPress={() => handleEventPress('cosecha')}
        >
          <View style={[styles.dot, styles.dotCosecha]} />
          <Ionicons
            name="basket-outline"
            size={16}
            color="#6c5ce7"
            style={styles.legendIcon}
          />
          <Text style={styles.legendText}>Cosecha</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.legendItem}
          onPress={() => handleEventPress('trasplante')}
        >
          <View style={[styles.dot, styles.dotTrasplante]} />
          <Ionicons
            name="flower-outline"
            size={16}
            color="#fd79a8"
            style={styles.legendIcon}
          />
          <Text style={styles.legendText}>Trasplante</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.legendItem}
          onPress={() => handleEventPress('compost')}
        >
          <View style={[styles.dot, styles.dotCompost]} />
          <Ionicons
            name="layers-outline"
            size={16}
            color="#00b894"
            style={styles.legendIcon}
          />
          <Text style={styles.legendText}>Compost</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {selectedEventType.charAt(0).toUpperCase() +
                  selectedEventType.slice(1)}
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="#5363df" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalBody}>
              <Text style={styles.modalDescription}>
                {eventDescriptions[selectedEventType]}
              </Text>

              <Text style={styles.questionLabel}>
                ¿Tienes alguna pregunta sobre este proceso?
              </Text>
              <TextInput
                style={styles.questionInput}
                placeholder="Escribe tu pregunta aquí..."
                value={userQuestion}
                onChangeText={setUserQuestion}
                multiline={true}
                numberOfLines={3}
                textAlignVertical="top"
                editable={!isLoadingResponse}
              />

              {/* Indicador de carga */}
              {isLoadingResponse && (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="small" color="#5363df" />
                  <Text style={styles.loadingText}>Procesando pregunta...</Text>
                </View>
              )}

              {/* Respuesta de la API */}
              {apiResponse && !isLoadingResponse && (
                <View style={styles.responseContainer}>
                  <Text style={styles.responseLabel}>Respuesta:</Text>
                  <ScrollView style={styles.responseScroll} nestedScrollEnabled>
                    <Text style={styles.responseText}>{apiResponse}</Text>
                  </ScrollView>
                </View>
              )}

              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[
                    styles.submitButton,
                    isLoadingResponse && styles.disabledButton,
                  ]}
                  onPress={handleSubmitQuestion}
                  disabled={isLoadingResponse}
                >
                  <Text style={styles.submitButtonText}>
                    {isLoadingResponse ? 'Enviando...' : 'Enviar pregunta'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  calendar: {
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  eventContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5363df',
    marginBottom: 8,
  },
  eventText: {
    fontSize: 14,
    color: '#666',
  },
  legendContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5363df',
    marginBottom: 12,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
  },
  dotSiembra: {
    backgroundColor: '#50cebb',
  },
  dotRiego: {
    backgroundColor: '#ff6b6b',
  },
  dotFertilizacion: {
    backgroundColor: '#4ecdc4',
  },
  dotPoda: {
    backgroundColor: '#45b7d1',
  },
  dotPlagas: {
    backgroundColor: '#f9ca24',
  },
  dotCosecha: {
    backgroundColor: '#6c5ce7',
  },
  dotTrasplante: {
    backgroundColor: '#fd79a8',
  },
  dotCompost: {
    backgroundColor: '#00b894',
  },
  legendIcon: {
    marginRight: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    maxHeight: '90%',
    minHeight: '60%',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5363df',
  },
  modalBody: {
    flex: 1,
  },
  modalDescription: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'justify',
  },
  questionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5363df',
    marginBottom: 12,
  },
  questionInput: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
    textAlignVertical: 'top',
    minHeight: 80,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  submitButton: {
    backgroundColor: '#5363df',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginBottom: 10,
  },
  loadingText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#5363df',
    fontStyle: 'italic',
  },
  responseContainer: {
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#5363df',
  },
  responseLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5363df',
    marginBottom: 10,
  },
  responseScroll: {
    maxHeight: 150,
  },
  responseText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
    textAlign: 'left',
  },
  disabledButton: {
    backgroundColor: '#c0c0c0',
    opacity: 0.7,
  },
});
