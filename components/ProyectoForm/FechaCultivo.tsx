import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { FechaCultivoProps } from '../../types/FechaCultivo';

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
      markedDates={{
        [selectedDate]: { selected: true, selectedColor: '#4CAF50' },
      }}
    />
    {error && <Text style={styles.error}>{error}</Text>}
  </>
);

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default FechaCultivo;
