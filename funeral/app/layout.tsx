import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://prelude.ai'),
  title: 'Prelude - AI-Powered Business Management Platform',
  description: 'Transform your business with AI-driven scheduling, lead management, CRM, and employee optimization. Reduce operational overhead by 73% with intelligent automation and predictive analytics.',
  keywords: ['AI business management', 'intelligent scheduling', 'lead generation', 'CRM automation', 'employee optimization', 'predictive analytics', 'business intelligence'],
  authors: [{ name: 'Prelude Team' }],
  creator: 'Prelude',
  publisher: 'Prelude',
  robots: 'index, follow',
  openGraph: {
    title: 'Prelude - AI-Powered Business Management Platform',
    description: 'Unify scheduling, leads, CRM, and team optimization in one intelligent platform. Boost efficiency by 73% with AI-driven automation.',
    url: 'https://prelude.ai',
    siteName: 'Prelude',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prelude - AI-Powered Business Management Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prelude - AI-Powered Business Management Platform',
    description: 'Unify scheduling, leads, CRM, and team optimization in one intelligent platform. Boost efficiency by 73%.',
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
      </head>
      <body className={`${inter.className} antialiased font-inter`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
} 