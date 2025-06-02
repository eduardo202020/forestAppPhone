import { Stack } from 'expo-router';

export default function SocialDestacadosStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      {/* <Stack.Screen name="detalles" /> */}
    </Stack>
  );
}
