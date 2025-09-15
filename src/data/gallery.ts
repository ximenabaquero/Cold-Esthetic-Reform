export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  alt: string;
  treatment: string;
  category: 'facial' | 'corporal' | 'estetica';
  featured: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Limpieza Facial Profunda',
    description: 'Resultado después de tratamiento de limpieza facial profunda',
    beforeImage: '/images/gallery/facial-before-1.jpg',
    afterImage: '/images/gallery/facial-after-1.jpg',
    alt: 'Antes y después de limpieza facial profunda',
    treatment: 'Limpieza Facial Profunda',
    category: 'facial',
    featured: true
  },
  {
    id: '2',
    title: 'Tratamiento Anti-envejecimiento',
    description: 'Reducción visible de líneas de expresión',
    beforeImage: '/images/gallery/antiage-before-1.jpg',
    afterImage: '/images/gallery/antiage-after-1.jpg',
    alt: 'Antes y después de tratamiento anti-envejecimiento',
    treatment: 'Tratamiento Anti-envejecimiento',
    category: 'facial',
    featured: true
  },
  {
    id: '3',
    title: 'Criolipólisis',
    description: 'Eliminación de grasa localizada en abdomen',
    beforeImage: '/images/gallery/cryo-before-1.jpg',
    afterImage: '/images/gallery/cryo-after-1.jpg',
    alt: 'Antes y después de criolipólisis en abdomen',
    treatment: 'Criolipólisis',
    category: 'corporal',
    featured: true
  },
  {
    id: '4',
    title: 'Rejuvenecimiento Facial',
    description: 'Mejora en textura y luminosidad de la piel',
    beforeImage: '/images/gallery/rejuv-before-1.jpg',
    afterImage: '/images/gallery/rejuv-after-1.jpg',
    alt: 'Antes y después de rejuvenecimiento facial',
    treatment: 'Rejuvenecimiento',
    category: 'facial',
    featured: false
  },
  // TODO: Add more gallery images
];