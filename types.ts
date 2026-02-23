export enum VerticalType {
  NEUROLOGY = 'Neurology',
  CARDIOVASCULAR = 'Cardiovascular',
  MENTAL_HEALTH = 'Mental Health & QoL',
  GERIATRICS = 'Geriatrics & Mobility',
  ONCOLOGY = 'Oncology',
  RESPIRATORY = 'Respiratory',
  MUSCULOSKELETAL = 'Musculoskeletal',
  GASTROINTESTINAL = 'Gastrointestinal',
  PAIN_PALLIATIVE = 'Pain & Palliative Care'
}

export interface Instrument {
  id: string;
  name: string;
  acronym: string;
  category: VerticalType;
  subCategory?: string; // e.g., "Stroke", "Parkinson's"
  description: string;
  validationRef: string;
  scoringLogic: string;
  alertTrigger: string; // The specific condition that triggers a clinical alert
  timeToComplete: string; // e.g., "5-10 mins"
  tags: string[];
}

export interface VerticalInfo {
  id: VerticalType;
  title: string;
  description: string;
  iconName: string; // Mapping to Lucide icon
  color: string;
}

export type ChatMessage = {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
};