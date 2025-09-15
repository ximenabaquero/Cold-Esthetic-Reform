import Link from 'next/link';
import { services } from '@/data/services';

const Services = () => {
  const featuredServices = services.filter(service => service.featured);

  return (
    <section id="servicios" className="py-24 bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tratamientos especializados para realzar tu belleza natural
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center rounded-md bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-secondary-light transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Ver Todos los Servicios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;