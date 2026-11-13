import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { IncidentContext } from '../context/IncidentContext';
import { RootStackParamList } from '../types';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type DetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

export default function DetailScreen({ route }: { route: DetailScreenRouteProp, navigation: DetailScreenNavigationProp }) {
  const { incidents, updateStatus } = useContext(IncidentContext);
  const { incidentId } = route.params;
  
  const incident = incidents.find(i => i.id === incidentId);

  if (!incident) return <Text style={styles.error}>Incident not found.</Text>;

  const toggleStatus = () => {
    const newStatus = incident.status === 'Pending' ? 'Resolved' : 'Pending';
    updateStatus(incident.id, newStatus);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{incident.title}</Text>
      <View style={styles.card}>
        <Text style={styles.text}><Text style={styles.bold}>Category:</Text> {incident.category}</Text>
        <Text style={styles.text}><Text style={styles.bold}>Location:</Text> {incident.location}</Text>
        <Text style={styles.text}><Text style={styles.bold}>Description:</Text> {incident.description}</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Status:</Text>{' '}
          <Text style={incident.status === 'Resolved' ? styles.resolved : styles.pending}>
            {incident.status}
          </Text>
        </Text>
      </View>
      
      <TouchableOpacity 
        style={[styles.statusButton, { backgroundColor: incident.status === 'Pending' ? '#5cb85c' : '#d9534f' }]} 
        onPress={toggleStatus}
      >
        <Text style={styles.statusButtonText}>
          Mark as {incident.status === 'Pending' ? 'Resolved' : 'Pending'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, textAlign: 'center', color: '#333' },
  card: { backgroundColor: 'white', padding: 20, borderRadius: 8, elevation: 3, marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10, color: '#333' },
  bold: { fontWeight: 'bold' },
  pending: { color: '#d9534f', fontWeight: 'bold' },
  resolved: { color: '#5cb85c', fontWeight: 'bold' },
  statusButton: { padding: 15, borderRadius: 8, alignItems: 'center' },
  statusButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});