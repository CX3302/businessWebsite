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
  title: 'Prelude - AI-Powered Funeral Home Scheduling System',
  description: 'Eliminate double-bookings and scheduling chaos with Prelude\'s intelligent funeral home management system. Reduce coordination time by 73% with automated scheduling, resource management, and conflict prevention.',
  keywords: ['funeral home scheduling', 'AI scheduling', 'funeral management', 'double booking prevention', 'automated scheduling', 'funeral home software'],
  authors: [{ name: 'Prelude Team' }],
  creator: 'Prelude',
  publisher: 'Prelude',
  robots: 'index, follow',
  openGraph: {
    title: 'Prelude - AI-Powered Funeral Home Scheduling',
    description: 'Never double-book again. Eliminate scheduling conflicts and reduce coordination time by 73% with Prelude\'s intelligent scheduling system.',
    url: 'https://prelude.ai',
    siteName: 'Prelude',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prelude - AI-Powered Funeral Home Scheduling',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prelude - AI-Powered Funeral Home Scheduling',
    description: 'Never double-book again. Eliminate scheduling conflicts and reduce coordination time by 73%.',
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