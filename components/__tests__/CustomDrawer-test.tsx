import React from 'react';
import renderer from 'react-test-renderer';
import CustomDrawerContent from '../CustomDrawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

jest.mock('@/utils/supabase', () => ({
  supabase: {
    auth: { onAuthStateChange: jest.fn(), signOut: jest.fn() },
    from: jest.fn(() => ({ select: jest.fn(), update: jest.fn(), delete: jest.fn(), insert: jest.fn() })),
  },
}));

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
