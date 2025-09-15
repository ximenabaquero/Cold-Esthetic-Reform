import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { services } from '@/data/services';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Servicio no encontrado - Cold Esthetic Reform',
    };
  }

  return {
    title: `${service.title} - Cold Esthetic Reform`,
    description: service.fullDescription,
    openGraph: {
      title: `${service.title} - Cold Esthetic Reform`,
      description: service.fullDescription,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <nav className="mb-8">
              <ol className="flex items-center justify-center space-x-2 text-light">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li>
                  <Link href="/servicios" className="hover:text-white transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li className="text-white font-medium">
                  {service.title}
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-light">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Descripción del Tratamiento</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-light p-6 rounded-lg">
                  <h3 className="font-semibold text-dark mb-2">Precio</h3>
                  <p className="text-primary text-xl font-bold">{service.price}</p>
                </div>
                <div className="bg-light p-6 rounded-lg">
                  <h3 className="font-semibold text-dark mb-2">Duración</h3>
                  <p className="text-secondary text-xl font-bold">{service.duration}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-dark mb-6">Beneficios</h3>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-primary mr-3 flex-shrink-0"
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
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={process.env.NEXT_PUBLIC_WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  📱 Agendar Ahora
                </a>
                <Link
                  href="/agenda"
                  className="inline-flex items-center justify-center rounded-md border border-primary px-8 py-3 text-base font-medium text-primary hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Formulario de Contacto
                </Link>
              </div>
            </div>

            {/* Image/Visual */}
            <div>
              {/* TODO: Add actual service images */}
              <div className="aspect-w-16 aspect-h-12 mb-8">
                <div className="w-full h-96 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <span className="text-white text-8xl opacity-30">✨</span>
                </div>
              </div>
              
              {/* Before/After placeholder */}
              {service.beforeAfter && service.beforeAfter.length > 0 && (
                <div className="bg-light p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-dark mb-4">Resultados</h3>
                  <p className="text-gray-600 mb-4">
                    Mira las increíbles transformaciones que hemos logrado con este tratamiento.
                  </p>
                  <Link
                    href="/resultados"
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                  >
                    Ver galería completa
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">
            Otros Servicios que Te Pueden Interesar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== service.id && s.category === service.category)
              .slice(0, 3)
              .map((relatedService) => (
                <div
                  key={relatedService.id}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-dark mb-3">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {relatedService.shortDescription}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">
                      {relatedService.price}
                    </span>
                    <Link
                      href={`/servicios/${relatedService.slug}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      Ver más →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}