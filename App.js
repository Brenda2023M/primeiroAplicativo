
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Giovana from './SRC/componets/Giovana/main'; 
import Brenda from './SRC/componets/Brenda';

export default function App() {
  return (
    <View style={styles.container}>
      <Giovana/>
      <Brenda/>
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
