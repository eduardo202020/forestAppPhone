import { Ionicons } from '@expo/vector-icons';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Button, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WhatsAppButton } from './Whatsapp';
import { useAuth } from '@/providers/AuthProvider';

function CustomDrawerContent(props: any) {
  const { top, bottom } = useSafeAreaInsets();
  const { session } = useAuth();
  const user = session?.user;

  return (
    <View style={{ flex: 1, backgroundColor: '#dde3fe' }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{
          backgroundColor: '#dde3fe',
          paddingTop: top,
          paddingBottom: bottom,
        }}
      >
        <View
          style={{
            padding: 20,
            borderBottomColor: '#fafafa',
            borderBottomWidth: 2,
          }}
        >
          {user ? (
            <>
              <Image
                source={{
                  uri:
                    user.user_metadata?.avatar_url ||
                    'https://ui-avatars.com/api/?name=' + (user.email || 'U'),
                }}
                style={{
                  width: 100,
                  height: 100,
                  alignSelf: 'center',
                  borderRadius: 50,
                  borderWidth: 3,
                  borderColor: '#5363df',
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: '500',
                  paddingTop: 10,
                  color: '#5363df',
                }}
              >
                {user.user_metadata?.full_name || user.email}
              </Text>
            </>
          ) : (
            <>
              <Image
                source={{
                  uri: 'https://portafolio-eduardo.vercel.app/_next/image?url=%2FextraImages%2FprofilePic.jpg&w=750&q=75',
                }}
                style={{
                  width: 100,
                  height: 100,
                  alignSelf: 'center',
                  borderRadius: 50,
                  borderWidth: 3,
                  borderColor: '#5363df',
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: '500',
                  paddingTop: 10,
                  color: '#5363df',
                }}
              >
                Invitado
              </Text>
            </>
          )}
        </View>
        <View style={{ paddingTop: 10 }}>
          <DrawerItemList {...props} />
          {user ? (
            <DrawerItem
              label="Cerrar sesión"
              labelStyle={{ color: '#5363df', fontWeight: '500' }}
              icon={({ color, size }) => (
                <Ionicons
                  name="log-out-outline"
                  size={size}
                  color={color}
                  style={{ marginRight: -5 }}
                />
              )}
              onPress={async () => {
                await import('@/utils/supabase').then(({ supabase }) =>
                  supabase.auth.signOut()
                );
              }}
              style={{
                borderRadius: 0,
                borderTopColor: '#fafafa',
                borderTopWidth: 2,
                marginTop: 10,
              }}
            />
          ) : (
            <DrawerItem
              label="Iniciar sesión"
              labelStyle={{ color: '#5363df', fontWeight: '500' }}
              icon={({ color, size }) => (
                <Ionicons
                  name="log-in-outline"
                  size={size}
                  color={color}
                  style={{ marginRight: -5 }}
                />
              )}
              onPress={() =>
                props.navigation.navigate('ajustes', { screen: 'index' })
              }
              style={{
                borderRadius: 0,
                borderTopColor: '#fafafa',
                borderTopWidth: 2,
                marginTop: 10,
              }}
            />
          )}
          <DrawerItem
            label="Cerrar"
            labelStyle={{ color: '#5363df', fontWeight: '500' }}
            icon={({ color, size }) => (
              <Ionicons
                name="close-outline"
                size={size}
                color={color}
                style={{ marginRight: -5 }}
              />
            )}
            onPress={() => props.navigation.closeDrawer()}
            style={{
              borderRadius: 0,
              borderTopColor: '#fafafa',
              borderTopWidth: 2,
              marginTop: 10,
            }}
          />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          borderTopColor: '#fafafa',
          borderTopWidth: 2,
          padding: 20,
          paddingBottom: 20 + bottom,
        }}
      >
        <WhatsAppButton />
      </View>
    </View>
  );
}

export default CustomDrawerContent;
