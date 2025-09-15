export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    treatment: 'Limpieza Facial Profunda',
    rating: 5,
    comment: 'Excelente servicio, mi piel quedó increíble. El personal es muy profesional y las instalaciones son impecables. Definitivamente regresaré.',
    date: '2024-01-15',
    image: '/images/testimonials/maria.jpg'
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    treatment: 'Criolipólisis',
    rating: 5,
    comment: 'Los resultados superaron mis expectativas. El tratamiento fue cómodo y sin dolor. Recomiendo Cold Esthetic Reform 100%.',
    date: '2024-01-10',
    image: '/images/testimonials/carlos.jpg'
  },
  {
    id: '3',
    name: 'Ana Martínez',
    treatment: 'Tratamiento Anti-envejecimiento',
    rating: 5,
    comment: 'Me siento como nueva. El equipo es fantástico y los resultados son visibles desde la primera sesión. Gracias por devolverme la confianza.',
    date: '2024-01-05',
    image: '/images/testimonials/ana.jpg'
  },
  {
    id: '4',
    name: 'Jorge Silva',
    treatment: 'Limpieza Facial',
    rating: 5,
    comment: 'Atención personalizada y resultados inmediatos. El ambiente es muy relajante y profesional. Sin duda el mejor centro estético de Bogotá.',
    date: '2023-12-28',
  },
  // TODO: Add more testimonials
];