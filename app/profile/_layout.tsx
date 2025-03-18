import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index" // Pantalla principal del Stack
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="settings" // Otra pantalla del Stack
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
