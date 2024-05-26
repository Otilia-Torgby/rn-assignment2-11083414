import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
   
  return (
    <View style={styles.container}>
      <Text style={{fontSize:24,}}>My name is Otilia.</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d8aa8',
    alignItems: 'center',
    justifyContent: 'center',
   
},
});
