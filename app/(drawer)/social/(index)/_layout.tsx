import { Stack } from 'expo-router';

export default function SocialInicioStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      {/* <Stack.Screen name="detalles" /> */}
    </Stack>
  );
}
