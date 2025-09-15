import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Servicios - Cold Esthetic Reform',
  description: 'Descubre todos nuestros tratamientos estéticos: faciales, corporales y de rejuvenecimiento. Tecnología de vanguardia en Bogotá.',
  openGraph: {
    title: 'Servicios - Cold Esthetic Reform',
    description: 'Descubre todos nuestros tratamientos estéticos: faciales, corporales y de rejuvenecimiento.',
  },
};

export default function ServiciosPage() {
  const facialServices = services.filter(service => service.category === 'facial');
  const corporalServices = services.filter(service => service.category === 'corporal');
  const esteticaServices = services.filter(service => service.category === 'estetica');

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Nuestros Servicios
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-light">
              Tratamientos especializados con tecnología de vanguardia para realzar tu belleza natural
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Facial Services */}
          {facialServices.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-dark mb-8">Tratamientos Faciales</h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {facialServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          )}

          {/* Corporal Services */}
          {corporalServices.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-dark mb-8">Tratamientos Corporales</h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {corporalServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          )}

          {/* Estética Services */}
          {esteticaServices.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-dark mb-8">Estética General</h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {esteticaServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">
            ¿Listo para tu transformación?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Agenda tu consulta gratuita y descubre el tratamiento perfecto para ti
          </p>
          <a
            href={process.env.NEXT_PUBLIC_WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            📱 Agendar Consulta Gratuita
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Service Card Component
interface ServiceCardProps {
  service: typeof services[0];
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* TODO: Add service image */}
      <div className="mb-6 h-48 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
        <span className="text-white text-6xl opacity-20">✨</span>
      </div>
      
      <h3 className="text-xl font-semibold text-dark mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4">
        {service.shortDescription}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-primary font-semibold">
          {service.price}
        </span>
        <span className="text-sm text-gray-500">
          {service.duration}
        </span>
      </div>

      <ul className="space-y-2 mb-6">
        {service.benefits.slice(0, 3).map((benefit, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <svg
              className="h-4 w-4 text-primary mr-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>

      <div className="flex gap-3">
        <Link
          href={`/servicios/${service.slug}`}
          className="flex-1 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Ver Detalles
        </Link>
        <a
          href={process.env.NEXT_PUBLIC_WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Agendar
        </a>
      </div>
    </div>
  );
}