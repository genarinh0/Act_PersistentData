import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type SuccessScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Success'>;

export default function SuccessScreen({ navigation }: { navigation: SuccessScreenNavigationProp }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>✅</Text>
      <Text style={styles.text}>Your report was submitted successfully</Text>
      <TouchableOpacity 
        style={styles.button} 
        // Resetea la navegación para que el botón de "atrás" del celular no lo regrese a esta pantalla
        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Home' }] })}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  icon: { fontSize: 80, marginBottom: 20 },
  text: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 40, color: '#333' },
  button: { backgroundColor: '#0056b3', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 18 }
});