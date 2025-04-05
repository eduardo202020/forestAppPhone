import React from 'react';
import { View, Button, Alert, Text } from 'react-native';
import * as Linking from 'expo-linking';
import { FontAwesome } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';

const openWhatsApp = () => {
  const phoneNumber = '+51991004126'; // Reemplaza con el número de teléfono
  const message = 'Hola, tengo una consulta.'; // Reemplaza con el mensaje predeterminado

  const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  Linking.openURL(url).catch((err) => {
    Alert.alert('Error', 'No se pudo abrir WhatsApp.');
  });
};

export function WhatsAppButton() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <IconButton
        onPress={openWhatsApp}
        icon="whatsapp"
        size={35}
        iconColor="#25D366"
      />
      <View>
        <Text style={{ fontSize: 30, color: '#25D366' }}>
          Contactar por WhatsApp
        </Text>
      </View>
    </View>
  );
}
