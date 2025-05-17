import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

interface FechaCultivoProps {
  selectedDate: string;
  setSelectedDate: (v: string) => void;
  error?: string;
}

const FechaCultivo: React.FC<FechaCultivoProps> = ({
  selectedDate,
  setSelectedDate,
  error,
}) => (
  <>
    <Text style={styles.label}>Fecha de Cultivo</Text>
    <Calendar
      onDayPress={(day: { dateString: string }) =>
        setSelectedDate(day.dateString)
      }
      markedDates={
        selectedDate
          ? { [selectedDate]: { selected: true, selectedColor: '#2ecc71' } }
          : {}
      }
      current={selectedDate}
      style={{ marginBottom: 16 }}
    />
    <Text style={styles.ubicacionText}>
      {selectedDate ? `Seleccionada: ${selectedDate}` : 'Selecciona una fecha'}
    </Text>
    {error && <Text style={styles.errorText}>{error}</Text>}
  </>
);

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8,
  },
  ubicacionText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    fontSize: 13,
  },
});

export default FechaCultivo;
