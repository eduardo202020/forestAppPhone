import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

function CustomDrawer() {
  return <Text>Test component funcionando</Text>;
}

// Mock de react-native-gesture-handler
test('TestComponent se renderiza sin errores', () => {
  const tree = renderer.create(<CustomDrawer />).toJSON();
  expect(tree).toMatchSnapshot();
});
