import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IncidentProvider } from './src/context/IncidentContext';
import HomeScreen from './src/screens/HomeScreen';
import AddIncidentScreen from './src/screens/AddIncidentScreen';
import DetailScreen from './src/screens/DetailScreen';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <IncidentProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#0056b3' }, headerTintColor: '#fff' }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'CampusReport' }} />
          <Stack.Screen name="AddIncident" component={AddIncidentScreen} options={{ title: 'Report Incident' }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Incident Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </IncidentProvider>
  );
}