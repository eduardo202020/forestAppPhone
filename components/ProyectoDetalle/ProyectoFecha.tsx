import React from 'react';
import { Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

interface ProyectoFechaProps {
  fecha: string;
}

export const ProyectoFecha: React.FC<ProyectoFechaProps> = ({ fecha }) => (
  <>
    <Text style={{ fontWeight: 'bold', marginBottom: 4, marginTop: 8 }}>Fecha de Cultivo</Text>
    <Calendar
      current={fecha}
      markedDates={{
        [fecha]: { selected: true, selectedColor: '#2ecc71' },
      }}
      disabledByDefault
      hideExtraDays
      style={{ marginBottom: 16 }}
    />
  </>
);
