import React from 'react';
import renderer from 'react-test-renderer';
import CustomDrawerContent from '../CustomDrawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

describe('CustomDrawerContent', () => {
  it('renderiza correctamente el drawer', () => {
    const props = { navigation: { closeDrawer: jest.fn() } };
    const tree = renderer
      .create(
        <SafeAreaProvider>
          <CustomDrawerContent {...props} />
        </SafeAreaProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
