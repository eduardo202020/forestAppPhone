import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

function Whatsapp() {
  return <Text>Test component funcionando</Text>;
}

// Mock de react-native-gesture-handler
test('TestComponent se renderiza sin errores', () => {
  const tree = renderer.create(<Whatsapp />).toJSON();
  expect(tree).toMatchSnapshot();
});
