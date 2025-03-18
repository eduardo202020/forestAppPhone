import { Ionicons } from '@expo/vector-icons';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function CustomDrawerContent(props: any) {
  const { top, bottom } = useSafeAreaInsets();

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
              fontWeight: 500,
              paddingTop: 10,
              color: '#5363df',
            }}
          >
            Eduardo Guevara
          </Text>
        </View>

        <View style={{ paddingTop: 10 }}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Cerrar"
            labelStyle={{
              color: '#5363df',
              fontWeight: '500',
            }}
            icon={({ color, size }) => (
              <Ionicons
                name="close-outline"
                size={size}
                D
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
        <Text>Footer</Text>
      </View>
    </View>
  );
}

export default CustomDrawerContent;
