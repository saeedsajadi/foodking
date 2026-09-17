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
  title: 'Food King — Premium Food Products',
  description:
    'Food King is a premium food products house — pure, premium, perfect. From our signature Persian dates to pickles and new categories to come, we supply importers, distributors, and gourmet retailers worldwide.',
  generator: 'v0.app',
  keywords: [
    'Food King',
    'premium food products',
    'Persian dates',
    'wholesale food supplier',
    'pickles',
    'food export',
    'Mazafati',
    'Piarom',
  ],
  openGraph: {
    title: 'Food King — Premium Food Products',
    description:
      'Pure. Premium. Perfect. Food King supplies premium food products for international wholesale buyers, importers, and gourmet retailers.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf8f3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-paper text-charcoal font-body">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
