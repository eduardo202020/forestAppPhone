import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { WhatsappShareButton } from '../WhatsappShareButton';
import * as Clipboard from 'expo-clipboard';
import * as Linking from 'expo-linking';

jest.mock('expo-clipboard');
jest.mock('expo-linking');
jest.spyOn(require('react-native').Alert, 'alert').mockImplementation(jest.fn());

const mockMarkdown =
  '# Proyecto Demo\n\n| Campo | Valor |\n|---|---|\n| **Descripción** | Demo |';

describe('WhatsappShareButton', () => {
  it('copia el texto al portapapeles y abre WhatsApp', async () => {
    const setStringAsync = Clipboard.setStringAsync as jest.Mock;
    const openURL = Linking.openURL as jest.Mock;
    setStringAsync.mockResolvedValue(undefined);
    openURL.mockResolvedValue(undefined);

    const { getByLabelText } = render(
      <WhatsappShareButton markdown={mockMarkdown} />
    );

    fireEvent.press(getByLabelText('Compartir proyecto por WhatsApp'));

    await waitFor(() => {
      expect(setStringAsync).toHaveBeenCalledWith(mockMarkdown);
      expect(openURL).toHaveBeenCalledWith(
        expect.stringContaining('whatsapp://send?text=')
      );
    });
  });
});
