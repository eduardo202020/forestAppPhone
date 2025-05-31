// components/WhatsappShareButton.tsx
import React from 'react';
import { Alert, StyleProp, ViewStyle } from 'react-native';
import { IconButton } from 'react-native-paper';
import * as Clipboard from 'expo-clipboard';
import * as Linking from 'expo-linking';

interface WhatsappShareButtonProps {
  markdown: string;
  style?: StyleProp<ViewStyle>;
}

export const WhatsappShareButton: React.FC<WhatsappShareButtonProps> = ({
  markdown,
  style,
}) => {
  const handleShare = async () => {
    await Clipboard.setStringAsync(markdown);
    Alert.alert(
      '¡Copiado!',
      'El proyecto se copió al portapapeles en formato Markdown. Se abrirá WhatsApp.'
    );
    const message = encodeURIComponent('¡Mira mi proyecto!\n\n' + markdown);
    const url = `whatsapp://send?text=${message}`;
    setTimeout(() => {
      Linking.openURL(url).catch(() => {
        Alert.alert('Error', 'No se pudo abrir WhatsApp.');
      });
    }, 800);
  };

  return (
    <IconButton
      onPress={handleShare}
      icon="whatsapp"
      size={40}
      iconColor="#25D366"
      style={style}
      accessibilityLabel="Compartir proyecto por WhatsApp"
    />
  );
};
