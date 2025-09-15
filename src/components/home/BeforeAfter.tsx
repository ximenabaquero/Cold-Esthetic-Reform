'use client';

import { useState } from 'react';
import { galleryImages } from '@/data/gallery';

const BeforeAfter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);
  
  const featuredImages = galleryImages.filter(image => image.featured);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredImages.length - 1 : prevIndex - 1
    );
  };

  const currentImage = featuredImages[currentIndex];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Resultados Reales
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Descubre las transformaciones que hemos logrado con nuestros tratamientos
          </p>
        </div>

        {featuredImages.length > 0 && (
          <div className="relative">
            {/* Main slider */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-100">
              <div className="aspect-w-16 aspect-h-9 md:aspect-h-6">
                {/* TODO: Replace with actual images */}
                <div className="w-full h-96 md:h-[500px] bg-gradient-to-r from-accent to-secondary flex items-center justify-center relative">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-dark mb-2">
                      {currentImage.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {currentImage.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      Tratamiento: {currentImage.treatment}
                    </p>
                  </div>
                  
                  {/* Before/After toggle */}
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setShowBefore(!showBefore)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        showBefore 
                          ? 'bg-primary text-white' 
                          : 'bg-white text-primary border border-primary'
                      }`}
                    >
                      {showBefore ? 'Antes' : 'Después'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Imagen anterior"
            >
              <svg
                className="w-6 h-6 text-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Siguiente imagen"
            >
              <svg
                className="w-6 h-6 text-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {featuredImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={process.env.NEXT_PUBLIC_WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            ¡Quiero mi transformación!
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;