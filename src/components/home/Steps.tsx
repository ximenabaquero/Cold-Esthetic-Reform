const Steps = () => {
  const steps = [
    {
      id: 1,
      title: 'Consulta Inicial',
      description: 'Evaluamos tu piel y definimos el tratamiento ideal para ti',
      icon: '👩‍⚕️',
    },
    {
      id: 2,
      title: 'Plan Personalizado',
      description: 'Diseñamos un plan de tratamiento adaptado a tus necesidades',
      icon: '📋',
    },
    {
      id: 3,
      title: 'Tratamiento',
      description: 'Aplicamos las técnicas más avanzadas con equipos de última generación',
      icon: '✨',
    },
    {
      id: 4,
      title: 'Seguimiento',
      description: 'Te acompañamos en el proceso para garantizar los mejores resultados',
      icon: '📈',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-light to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            ¿Cómo Funciona?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tu transformación en 4 simples pasos
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                  {step.id}
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-6xl mb-4 text-center md:text-left">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3 text-center md:text-left">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center md:text-left">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>

                {/* Mobile timeline indicator */}
                <div className="md:hidden flex items-center my-6">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-1 bg-accent"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={process.env.NEXT_PUBLIC_WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-secondary-light transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            ¡Comenzar mi Proceso!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Steps;