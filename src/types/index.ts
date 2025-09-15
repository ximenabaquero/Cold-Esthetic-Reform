// Common types used across the application

export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface AppointmentForm extends ContactForm {
  service?: string;
  date?: string;
  time?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export type ServiceCategory = 'facial' | 'corporal' | 'estetica';
export type FAQCategory = 'general' | 'tratamientos' | 'precios' | 'citas';
export type GalleryCategory = 'facial' | 'corporal' | 'estetica';

// Theme colors from Tailwind config
export interface ThemeColors {
  primary: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  accent: string;
  dark: string;
  light: string;
  white: string;
}

export const themeColors: ThemeColors = {
  primary: '#079145',
  primaryDark: '#065a34',
  secondary: '#339EAB',
  secondaryLight: '#4db5c2',
  accent: '#BACFCA',
  dark: '#161E21',
  light: '#F5FAF9',
  white: '#FFFFFF',
};