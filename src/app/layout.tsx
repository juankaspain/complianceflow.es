import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://complianceflow.es'),
  title: {
    default: 'ComplianceFlow · SII, Verifactu y TicketBAI via API',
    template: '%s | ComplianceFlow',
  },
  description:
    'API REST para compliance fiscal automatizado en España. SII, Verifactu, TicketBAI integrados en 5 minutos. +500 empresas confían en nosotros. Prueba gratis 14 días.',
  keywords: [
    'SII',
    'Suministro Inmediato Información',
    'Verifactu',
    'TicketBAI',
    'API facturación',
    'compliance fiscal',
    'AEAT',
    'facturación electrónica',
    'automatización fiscal',
    'ERP integración',
    'País Vasco TicketBAI',
    'facturación España',
  ],
  authors: [{ name: 'ComplianceFlow Team' }],
  creator: 'ComplianceFlow',
  publisher: 'ComplianceFlow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://complianceflow.es',
    siteName: 'ComplianceFlow',
    title: 'ComplianceFlow · Compliance Fiscal Automatizado via API',
    description:
      'Integra SII, Verifactu y TicketBAI en 5 minutos. API REST moderna para compliance fiscal en España. Trusted by +500 companies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ComplianceFlow - Compliance Fiscal via API',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComplianceFlow · SII, Verifactu y TicketBAI via API',
    description:
      'API REST para compliance fiscal automatizado. Integración en 5 minutos. +500 empresas confían en nosotros.',
    images: ['/og-image.png'],
    creator: '@complianceflow',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://complianceflow.es',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
