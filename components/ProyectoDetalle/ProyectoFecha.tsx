import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

interface ProyectoFechaProps {
  fecha: string;
}

export const ProyectoFecha: React.FC<ProyectoFechaProps> = ({ fecha }) => (
  <>
    <Text style={styles.title}>Fecha de Cultivo</Text>
    <Calendar
      current={fecha}
      markedDates={{
        [fecha]: { selected: true, selectedColor: '#2ecc71' },
      }}
      disabledByDefault
      hideExtraDays
      style={styles.calendar}
    />
  </>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8,
  },
  calendar: {
    marginBottom: 16,
  },
});
