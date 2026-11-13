export type IncidentStatus = 'Pending' | 'Resolved';
export type IncidentCategory = 'Maintenance' | 'Electricity' | 'Cleaning' | 'Furniture' | 'Internet and Networks' | 'Other';

export interface Incident {
  id: string;
  title: string;
  category: IncidentCategory;
  location: string;
  description: string;
  status: IncidentStatus;
}

export type RootStackParamList = {
  Home: undefined;
  AddIncident: undefined;
  Detail: { incidentId: string };
};