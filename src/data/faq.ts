export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'tratamientos' | 'precios' | 'citas';
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: '¿Qué tipo de tratamientos ofrecen?',
    answer: 'Ofrecemos una amplia gama de tratamientos estéticos faciales y corporales, incluyendo limpiezas faciales, tratamientos anti-envejecimiento, criolipólisis, y muchos más. Todos nuestros tratamientos utilizan tecnología de vanguardia.',
    category: 'general'
  },
  {
    id: '2',
    question: '¿Los tratamientos son seguros?',
    answer: 'Sí, todos nuestros tratamientos son completamente seguros. Contamos con profesionales certificados y utilizamos equipos de última generación que cumplen con todos los estándares de seguridad.',
    category: 'tratamientos'
  },
  {
    id: '3',
    question: '¿Cuánto cuestan los tratamientos?',
    answer: 'Los precios varían según el tipo de tratamiento. Nuestros precios son competitivos y ofrecemos planes de financiamiento. Te invitamos a contactarnos para recibir una cotización personalizada.',
    category: 'precios'
  },
  {
    id: '4',
    question: '¿Cómo puedo agendar una cita?',
    answer: 'Puedes agendar tu cita a través de nuestro formulario en línea, por WhatsApp o llamando directamente a nuestro centro. Te responderemos en el menor tiempo posible.',
    category: 'citas'
  },
  {
    id: '5',
    question: '¿Cuánto tiempo duran los resultados?',
    answer: 'La duración de los resultados varía según el tipo de tratamiento. En la consulta inicial, nuestros especialistas te explicarán en detalle qué esperar y cuánto tiempo durarán los resultados.',
    category: 'tratamientos'
  },
  // TODO: Add more FAQs
];