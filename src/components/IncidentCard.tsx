import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Incident } from '../types';

interface Props {
  incident: Incident;
  onPress: () => void;
}

export const IncidentCard = ({ incident, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{incident.title}</Text>
      <Text>Location: {incident.location}</Text>
      <Text style={[styles.status, incident.status === 'Resolved' ? styles.resolved : styles.pending]}>
        Status: {incident.status}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 16, marginBottom: 10, borderRadius: 8, elevation: 2 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 5, color: '#333' },
  status: { fontWeight: 'bold', marginTop: 5 },
  pending: { color: '#d9534f' },
  resolved: { color: '#5cb85c' },
});