import { View, Text, Button } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const profile = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push('/profile/settings');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>profile</Text>
      <Button title="to settings" onPress={handlePress} />
    </View>
  );
};

export default profile;
