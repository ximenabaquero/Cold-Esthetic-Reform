'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image';




function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Resultados', href: '/resultados' },
    { name: 'Agenda', href: '/agenda' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-accent py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/coldestheticlogo.png"   // Está en /public
                alt="Cold Esthetic Reform"
                width={40}
                height={40}
                priority
                className="h-10 w-10 object-contain rounded-full ring-1 ring-accent/30 bg-white"
              />
              <span className="text-2xl font-bold text-primary">
                Cold Esthetic Reform
              </span>
            </Link>
          </div>

          <div className="ml-8 hidden lg:flex lg:gap-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-dark hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href={process.env.NEXT_PUBLIC_WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-base font-medium text-white hover:bg-[--color-primary] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            >
              WhatsApp
            </a>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-dark hover:bg-accent hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-accent hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={process.env.NEXT_PUBLIC_WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md bg-primary px-3 py-2 text-base font-medium text-white hover:bg-[--color-primary]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header