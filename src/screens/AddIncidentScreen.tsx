import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { IncidentContext } from '../context/IncidentContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, IncidentCategory } from '../types';

type AddScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddIncident'>;

export default function AddIncidentScreen({ navigation }: { navigation: AddScreenNavigationProp }) {
  const { addIncident } = useContext(IncidentContext);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<IncidentCategory>('Maintenance');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !location.trim() || !description.trim()) {
      Alert.alert('Validation Error', 'All text fields are required.');
      return;
    }
    addIncident({ title, category, location, description });
    navigation.navigate('Success');
    
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Short name of the problem" />

      <Text style={styles.label}>Category</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={category} onValueChange={(itemValue) => setCategory(itemValue)}>
          <Picker.Item label="Maintenance" value="Maintenance" />
          <Picker.Item label="Electricity" value="Electricity" />
          <Picker.Item label="Cleaning" value="Cleaning" />
          <Picker.Item label="Furniture" value="Furniture" />
          <Picker.Item label="Internet and Networks" value="Internet and Networks" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <Text style={styles.label}>Location</Text>
      <TextInput style={styles.input} value={location} onChangeText={setLocation} placeholder="Where is it?" />

      <Text style={styles.label}>Description</Text>
      <TextInput style={[styles.input, styles.textArea]} value={description} onChangeText={setDescription} placeholder="Explain the problem" multiline />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#ffffff' },
  label: { fontWeight: 'bold', fontSize: 16, marginBottom: 8, color: '#333' },
  input: { borderWidth: 1, borderColor: '#cccccc', borderRadius: 8, padding: 12, marginBottom: 20, fontSize: 16, backgroundColor: '#f9f9f9' },
  pickerContainer: { borderWidth: 1, borderColor: '#cccccc', borderRadius: 8, marginBottom: 20, backgroundColor: '#f9f9f9' },
  textArea: { height: 120, textAlignVertical: 'top' },
  submitButton: { backgroundColor: '#0056b3', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  submitButtonText: { color: 'white', fontWeight: 'bold', fontSize: 18 }
});