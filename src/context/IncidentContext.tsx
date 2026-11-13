import React, { createContext, useState, ReactNode } from 'react';
import { Incident } from '../types';

interface IncidentContextData {
  incidents: Incident[];
  addIncident: (incident: Omit<Incident, 'id' | 'status'>) => void;
  updateStatus: (id: string, newStatus: Incident['status']) => void;
}

export const IncidentContext = createContext<IncidentContextData>({} as IncidentContextData);

const initialData: Incident[] = [
  {
    id: '1',
    title: 'Broken Lights',
    category: 'Electricity',
    location: 'Building B, Hallway',
    description: 'The lights are flickering and making noise.',
    status: 'Pending',
  },
  {
    id: '2',
    title: 'No Internet',
    category: 'Internet and Networks',
    location: 'Main Library',
    description: 'Cannot connect to student Wi-Fi.',
    status: 'Resolved',
  }
];

export const IncidentProvider = ({ children }: { children: ReactNode }) => {
  const [incidents, setIncidents] = useState<Incident[]>(initialData);

  const addIncident = (incidentData: Omit<Incident, 'id' | 'status'>) => {
    const newIncident: Incident = {
      ...incidentData,
      id: Math.random().toString(36).substr(2, 9),
      status: 'Pending',
    };
    setIncidents(prev => [newIncident, ...prev]);
  };

  const updateStatus = (id: string, newStatus: Incident['status']) => {
    setIncidents(prev =>
      prev.map(inc => (inc.id === id ? { ...inc, status: newStatus } : inc))
    );
  };

  return (
    <IncidentContext.Provider value={{ incidents, addIncident, updateStatus }}>
      {children}
    </IncidentContext.Provider>
  );
};