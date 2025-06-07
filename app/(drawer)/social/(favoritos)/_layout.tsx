import { Stack } from 'expo-router';

export default function SocialFavoritosStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="detalles" />
    </Stack>
  );
}
