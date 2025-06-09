import React from 'react';
import { View, Alert, Text, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import { IconButton } from 'react-native-paper';

const openWhatsApp = () => {
  const phoneNumber = '+51991004126'; // Reemplaza con el número de teléfono
  const message = 'Hola, tengo una consulta.'; // Reemplaza con el mensaje predeterminado

  const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  Linking.openURL(url).catch(() => {
    Alert.alert('Error', 'No se pudo abrir WhatsApp.');
  });
};

export function WhatsAppButton() {
  return (
    <View style={styles.container}>
      <IconButton
        onPress={openWhatsApp}
        icon="whatsapp"
        size={35}
        iconColor="#25D366"
      />
      <View>
        <Text style={styles.text}>Contactar por WhatsApp</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#25D366',
  },
});
