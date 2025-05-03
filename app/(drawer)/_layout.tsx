import 'react-native-gesture-handler';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // Asegúrate de importar los iconos que necesitas

import CustomDrawerContent from '@/components/CustomDrawer';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Drawer
        screenOptions={{
          headerShown: true,
          drawerHideStatusBarOnOpen: true,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#5363df',
          drawerItemStyle: {
            borderRadius: 10,
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="proyecto"
      >
        {/* Mi Proyecto */}
        <Drawer.Screen
          name="proyecto"
          options={{
            drawerLabel: 'Mi Proyecto',
            title: 'Mi Proyecto',
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />

        {/* Calendario */}
        <Drawer.Screen
          name="calendario"
          options={{
            drawerLabel: 'Calendario',
            title: 'Calendario de Mantenimiento',
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar"
                size={size}
                color={color}
              />
            ),
          }}
        />
        {/* Pasos */}
        <Drawer.Screen
          name="pasos"
          options={{
            drawerLabel: 'Pasos',
            title: 'Pasos del Método Miyawaki',
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="check-circle"
                size={size}
                color={color}
              />
            ),
          }}
        />
        {/* Compost y Bocashi */}
        <Drawer.Screen
          name="compost"
          options={{
            drawerLabel: 'Compost y Bocashi',
            title: 'Compost y Bocashi',
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="water" size={size} color={color} />
            ),
          }}
        />
        {/* Red Social */}
        <Drawer.Screen
          name="social"
          options={{
            drawerLabel: 'Red Social',
            title: 'Red Social',
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-group"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ajustes"
          options={{
            drawerLabel: 'Ajustes',
            title: 'Ajustes',
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
