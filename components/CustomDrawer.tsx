import { Ionicons } from '@expo/vector-icons';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Image, Text, View, StyleSheet } from 'react-native';
import { WhatsAppButton } from './Whatsapp';
import { useAuth } from '@/providers/AuthProvider';
import { supabase } from '@/utils/supabase';

function CustomDrawerContent(props: any) {
  const { session } = useAuth();
  const user = session?.user;

  return (
    <View style={styles.root}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.userInfoContainer}>
          {user ? (
            <>
              <Image
                source={{
                  uri:
                    user.user_metadata?.avatar_url ||
                    'https://ui-avatars.com/api/?name=' + (user.email || 'U'),
                }}
                style={styles.avatar}
              />
              <Text style={styles.userName}>
                {user.user_metadata?.full_name || user.email}
              </Text>
            </>
          ) : (
            <>
              <View style={styles.avatar}>
                <Ionicons
                  name="person-circle-outline"
                  size={80}
                  color="#b0b0b0"
                />
              </View>
              <Text style={styles.userName}>Invitado</Text>
            </>
          )}
        </View>
        <View style={styles.drawerSection}>
          <DrawerItemList {...props} />
          {user ? (
            <DrawerItem
              label="Cerrar sesión"
              labelStyle={styles.drawerItemLabel}
              icon={({ color, size }) => (
                <Ionicons
                  name="log-out-outline"
                  size={size}
                  color={color}
                  style={styles.drawerItemIcon}
                />
              )}
              onPress={async () => {
                await supabase.auth.signOut();
              }}
              style={styles.drawerItemStyle}
            />
          ) : (
            <DrawerItem
              label="Iniciar sesión"
              labelStyle={styles.drawerItemLabel}
              icon={({ color, size }) => (
                <Ionicons
                  name="log-in-outline"
                  size={size}
                  color={color}
                  style={styles.drawerItemIcon}
                />
              )}
              onPress={() =>
                props.navigation.navigate('ajustes', { screen: 'index' })
              }
              style={styles.drawerItemStyle}
            />
          )}
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomSection}>
        <WhatsAppButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#dde3fe',
  },
  contentContainer: {
    backgroundColor: '#dde3fe',
  },
  avatar: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#5363df',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  userName: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 10,
    color: '#5363df',
  },
  userInfoContainer: {
    padding: 20,
    borderBottomColor: '#fafafa',
    borderBottomWidth: 2,
  },
  drawerSection: {
    padding: 20,
    borderBottomColor: '#fafafa',
    borderBottomWidth: 2,
  },
  drawerItemLabel: {
    color: '#5363df',
    fontWeight: '500',
  },
  drawerItemIcon: {
    marginRight: -5,
  },
  drawerItemStyle: {
    borderRadius: 0,
    borderTopColor: '#fafafa',
    borderTopWidth: 2,
    marginTop: 10,
  },
  bottomSection: {
    borderTopColor: '#fafafa',
    borderTopWidth: 2,
    padding: 20,
    paddingBottom: 40,
  },
});

export default CustomDrawerContent;
