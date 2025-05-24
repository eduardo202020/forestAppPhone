import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import { WhatsAppButton } from '../Whatsapp';

function Whatsapp() {
  return <Text>Test component funcionando</Text>;
}

// Mock de react-native-gesture-handler
test('TestComponent se renderiza sin errores', () => {
  const tree = renderer.create(<Whatsapp />).toJSON();
  expect(tree).toMatchSnapshot();
});

jest.mock('react-native-paper', () => {
  const Real = jest.requireActual('react-native-paper');
  return {
    ...Real,
    IconButton: () => <div>icon</div>,
  };
});
jest.mock('@expo/vector-icons', () => ({ FontAwesome: () => <div>icon</div> }));

describe('WhatsAppButton', () => {
  it('renderiza correctamente el botón y el texto', () => {
    const tree = renderer.create(<WhatsAppButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
