import { View, Text, Button } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const settings = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push('/profile');
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>profile</Text>
      <Button title="to profile" onPress={handlePress} />
    </View>
  );
};

export default settings;
