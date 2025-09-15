export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  duration: string;
  benefits: string[];
  beforeAfter?: {
    before: string;
    after: string;
    alt: string;
  }[];
  featured: boolean;
  category: 'facial' | 'corporal' | 'estetica';
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'limpieza-facial-profunda',
    title: 'Limpieza Facial Profunda',
    shortDescription: 'Renovación completa de tu piel con tecnología avanzada',
    fullDescription: 'Tratamiento integral que combina limpieza profunda, exfoliación y hidratación para lograr una piel radiante y saludable. Ideal para todo tipo de piel.',
    price: 'Desde $150.000',
    duration: '90 minutos',
    benefits: [
      'Eliminación de impurezas',
      'Reducción de poros',
      'Hidratación profunda',
      'Mejora la textura de la piel'
    ],
    featured: true,
    category: 'facial'
  },
  {
    id: '2',
    slug: 'tratamiento-antienvejecimiento',
    title: 'Tratamiento Anti-envejecimiento',
    shortDescription: 'Combate los signos del envejecimiento con tecnología avanzada',
    fullDescription: 'Protocolo especializado que combina diferentes técnicas para reducir líneas de expresión, manchas y mejorar la firmeza de la piel.',
    price: 'Desde $250.000',
    duration: '120 minutos',
    benefits: [
      'Reducción de arrugas',
      'Mejora la firmeza',
      'Unifica el tono',
      'Estimula la producción de colágeno'
    ],
    featured: true,
    category: 'facial'
  },
  {
    id: '3',
    slug: 'criolipolisis',
    title: 'Criolipólisis',
    shortDescription: 'Eliminación de grasa localizada sin cirugía',
    fullDescription: 'Tecnología de frío controlado que elimina las células grasas de forma natural y definitiva en zonas específicas del cuerpo.',
    price: 'Desde $300.000',
    duration: '60 minutos',
    benefits: [
      'Eliminación de grasa localizada',
      'Sin cirugía ni dolor',
      'Resultados duraderos',
      'Sin tiempo de recuperación'
    ],
    featured: true,
    category: 'corporal'
  },
  // TODO: Add more services
];