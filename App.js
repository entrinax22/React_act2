import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/med-logo.png')} style={styles.img}></Image>
      <Text style={styles.h1}>Healthcare Appointments</Text>
      <TextInput style={styles.input} placeholder="Username"></TextInput>
      <TextInput style={styles.input} placeholder="Password"></TextInput>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color:'white'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color:'white'}}>Register</Text>
      </TouchableOpacity>
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
  img: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  btn: {
    width: 300,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
