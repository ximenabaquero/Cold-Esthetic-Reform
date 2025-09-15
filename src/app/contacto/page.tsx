'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main>
        <Header />
        <section className="py-24 bg-light min-h-screen flex items-center">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-6xl mb-6">✅</div>
              <h1 className="text-3xl font-bold text-dark mb-4">
                ¡Mensaje Enviado!
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Gracias por contactarnos. Te responderemos en las próximas 24 horas.
              </p>
              <div className="space-y-4">
                <a
                  href={process.env.NEXT_PUBLIC_WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  📱 Contactar por WhatsApp
                </a>
                <div>
                  <Link
                    href="/"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    ← Volver al inicio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Contáctanos
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-light">
              Estamos aquí para responder todas tus preguntas y ayudarte en tu proceso de transformación
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-fit">
                <h2 className="text-2xl font-bold text-dark mb-8">
                  Información de Contacto
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="text-3xl">📍</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-dark">Ubicación</h3>
                      <p className="text-gray-600">
                        Bogotá, Colombia<br />
                        {/* TODO: Add specific address */}
                        Carrera XX #XX-XX<br />
                        Zona Rosa / Chapinero
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="text-3xl">📞</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-dark">Teléfono</h3>
                      <p className="text-gray-600">
                        +57 (1) XXX-XXXX<br />
                        +57 300 XXX XXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="text-3xl">✉️</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-dark">Email</h3>
                      <p className="text-gray-600">
                        info@coldestheticreform.com<br />
                        citas@coldestheticreform.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="text-3xl">🕒</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-dark">Horarios</h3>
                      <p className="text-gray-600">
                        <strong>Lunes - Viernes:</strong><br />
                        9:00 AM - 6:00 PM<br />
                        <strong>Sábados:</strong><br />
                        9:00 AM - 4:00 PM<br />
                        <strong>Domingos:</strong><br />
                        Cerrado
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-dark mb-4">Síguenos</h3>
                  <div className="flex space-x-4">
                    {/* TODO: Add actual social media links */}
                    <a 
                      href="#" 
                      className="text-primary hover:text-primary-dark transition-colors"
                      aria-label="Facebook"
                    >
                      <span className="text-2xl">📘</span>
                    </a>
                    <a 
                      href="#" 
                      className="text-primary hover:text-primary-dark transition-colors"
                      aria-label="Instagram"
                    >
                      <span className="text-2xl">📷</span>
                    </a>
                    <a 
                      href={process.env.NEXT_PUBLIC_WA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors"
                      aria-label="WhatsApp"
                    >
                      <span className="text-2xl">📱</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-dark mb-8">
                  Envíanos un Mensaje
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2">
                        Asunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="informacion">Información General</option>
                        <option value="cita">Agendar Cita</option>
                        <option value="precios">Consulta de Precios</option>
                        <option value="tratamientos">Información sobre Tratamientos</option>
                        <option value="reclamo">Reclamo o Sugerencia</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                    <a
                      href={process.env.NEXT_PUBLIC_WA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-base font-medium text-primary hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      📱 WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">
            Nuestra Ubicación
          </h2>
          <div className="bg-gradient-to-br from-accent to-secondary rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-white">
              <span className="text-6xl opacity-50">🗺️</span>
              <p className="mt-4 text-xl">Mapa Interactivo</p>
              <p className="text-light">TODO: Integrar Google Maps</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}