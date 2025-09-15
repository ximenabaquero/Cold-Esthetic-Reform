import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Cold Esthetic Reform
            </h3>
            <p className="text-accent mb-4">
              Centro estético líder en Bogotá, especializado en tratamientos 
              faciales, corporales y de rejuvenecimiento con tecnología de vanguardia.
            </p>
            <div className="space-y-2 text-accent">
              <p>📍 Bogotá, Colombia</p>
              <p>📞 +57 (1) XXX-XXXX</p>
              <p>✉️ info@coldestheticreform.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-accent hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-accent hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/resultados" className="text-accent hover:text-white transition-colors">
                  Resultados
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="text-accent hover:text-white transition-colors">
                  Agenda tu Cita
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-accent hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/servicios/limpieza-facial-profunda" 
                  className="text-accent hover:text-white transition-colors"
                >
                  Limpieza Facial
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicios/tratamiento-antienvejecimiento" 
                  className="text-accent hover:text-white transition-colors"
                >
                  Anti-envejecimiento
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicios/criolipolisis" 
                  className="text-accent hover:text-white transition-colors"
                >
                  Criolipólisis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 pt-8 border-t border-accent">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              {/* TODO: Add actual social media links */}
              <a 
                href="#" 
                className="text-accent hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <span className="sr-only">Facebook</span>
                Facebook
              </a>
              <a 
                href="#" 
                className="text-accent hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <span className="sr-only">Instagram</span>
                Instagram
              </a>
              <a 
                href={process.env.NEXT_PUBLIC_WA_URL} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <span className="sr-only">WhatsApp</span>
                WhatsApp
              </a>
            </div>
            <p className="text-accent text-sm">
              © {currentYear} Cold Esthetic Reform. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;