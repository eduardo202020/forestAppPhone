import { StatusBar, StyleSheet, View } from 'react-native';

import { Button, Text as Text2 } from 'react-native-paper';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text2 variant="titleLarge">Hola Mundo</Text2>
        <Button mode="contained" onPress={() => console.log('Presionado')}>
          Presioname
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
