import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IncidentContext } from '../context/IncidentContext';
import { RootStackParamList } from '../types';
import { IncidentCard } from '../components/IncidentCard';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  const { incidents } = useContext(IncidentContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={incidents}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <IncidentCard 
            incident={item} 
            onPress={() => navigation.navigate('Detail', { incidentId: item.id })} 
          />
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddIncident')}>
        <Text style={styles.addButtonText}>+ Report New Incident</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  addButton: { backgroundColor: '#0056b3', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  addButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});