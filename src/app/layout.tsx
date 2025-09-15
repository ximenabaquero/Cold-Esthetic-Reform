import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Radley } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
const radley = Radley({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-radley', // expone la variable CSS
})

export const metadata: Metadata = {
  title: 'Cold Esthetic Reform - Centro Estético en Bogotá',
  description: 'Centro estético líder en Bogotá. Tratamientos faciales, corporales y de rejuvenecimiento con tecnología de vanguardia. Resultados garantizados.',
  keywords: 'estética, tratamientos faciales, criolipólisis, Bogotá, belleza, rejuvenecimiento',
  authors: [{ name: 'Alexander Gil Roa' }],
  creator: 'Cold Esthetic Reform',
  publisher: 'Cold Esthetic Reform',
  openGraph: {
    title: 'Cold Esthetic Reform - Centro Estético en Bogotá',
    description: 'Centro estético líder en Bogotá. Tratamientos faciales, corporales y de rejuvenecimiento con tecnología de vanguardia.',
    url: 'https://coldestheticreform.com',
    siteName: 'Cold Esthetic Reform',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cold Esthetic Reform - Centro Estético',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cold Esthetic Reform - Centro Estético en Bogotá',
    description: 'Centro estético líder en Bogotá. Tratamientos faciales, corporales y de rejuvenecimiento con tecnología de vanguardia.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'TODO_ADD_GOOGLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} ${radley.variable} antialiased bg-white text-dark`}>
        {children}
      </body>
    </html>
  )
}