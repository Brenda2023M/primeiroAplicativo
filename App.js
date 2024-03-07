import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './Title/';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Brenda Marques</Text>
       <Text>Giovana Domingues</Text>
       <Text>Desenvolvimento de Dispositivos Móveis</Text>
       <Text>07-03-2024</Text>
      <Title/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
