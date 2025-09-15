'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { galleryImages } from '@/data/gallery';

// Note: This would need to be moved to a server component wrapper for metadata
// export const metadata: Metadata = {
//   title: 'Resultados - Cold Esthetic Reform',
//   description: 'Galería de antes y después. Mira las increíbles transformaciones logradas con nuestros tratamientos estéticos en Bogotá.',
//   openGraph: {
//     title: 'Resultados - Cold Esthetic Reform',
//     description: 'Galería de antes y después. Mira las increíbles transformaciones logradas con nuestros tratamientos estéticos.',
//   },
// };

export default function ResultadosPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'facial' | 'corporal' | 'estetica'>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Resultados Reales
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-light">
              Descubre las increíbles transformaciones que hemos logrado con nuestros tratamientos especializados
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { key: 'all', label: 'Todos' },
              { key: 'facial', label: 'Faciales' },
              { key: 'corporal', label: 'Corporales' },
              { key: 'estetica', label: 'Estética' },
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key as any)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.key
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No hay imágenes disponibles para esta categoría.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  {/* TODO: Replace with actual before/after images */}
                  <div className="aspect-w-16 aspect-h-12">
                    <div className="w-full h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <div className="text-center text-white">
                        <span className="text-4xl opacity-50">📸</span>
                        <p className="mt-2 text-sm opacity-75">Antes / Después</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-dark mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {image.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary font-medium">
                        {image.treatment}
                      </span>
                      <span className="text-xs text-gray-500 capitalize">
                        {image.category}
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-medium">Ver detalle</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Cerrar modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              aria-label="Imagen anterior"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              aria-label="Siguiente imagen"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image content */}
            <div className="bg-white rounded-lg overflow-hidden">
              {/* TODO: Replace with actual before/after comparison */}
              <div className="h-96 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-white">
                  <span className="text-6xl opacity-50">📸</span>
                  <p className="mt-4 text-lg">Comparación Antes / Después</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {filteredImages[selectedImage].description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">
                    {filteredImages[selectedImage].treatment}
                  </span>
                  <span className="text-sm text-gray-500 capitalize">
                    {filteredImages[selectedImage].category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">
            ¿Quieres ser el próximo?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Agenda tu consulta gratuita y comienza tu transformación hoy mismo
          </p>
          <a
            href={process.env.NEXT_PUBLIC_WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            📱 ¡Comenzar mi Transformación!
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}