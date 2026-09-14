import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Food King — The Crown of Persian Dates',
  description:
    'Food King is a premium Persian date export house. Harvested the way it has been for centuries, exported the way the modern world demands. Wholesale supply for importers, distributors, and gourmet retailers worldwide.',
  generator: 'v0.app',
  keywords: [
    'Persian dates',
    'date export',
    'Mazafati',
    'Piarom',
    'wholesale dates',
    'bulk dates supplier',
    'premium dates',
    'Food King',
  ],
  openGraph: {
    title: 'Food King — The Crown of Persian Dates',
    description:
      'Premium Persian date exports for international wholesale buyers, importers, and gourmet retailers.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#14100c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-ink text-cream font-body">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
