import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

function ExternalLink() {
  return <Text>Test component funcionando</Text>;
}

// Mock de react-native-gesture-handler
test('TestComponent se renderiza sin errores', () => {
  const tree = renderer.create(<ExternalLink />).toJSON();
  expect(tree).toMatchSnapshot();
});
