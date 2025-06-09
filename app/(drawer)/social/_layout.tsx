import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen
        name="(index)"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="group" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(favoritos)"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="heart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(destacados)"
        options={{
          title: 'Destacados',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="star" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
