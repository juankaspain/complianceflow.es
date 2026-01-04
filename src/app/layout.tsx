import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { OrganizationSchema, LocalBusinessSchema } from '@/components/seo/structured-data'
import { Analytics } from '@/lib/analytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://complianceflow.es'),
  title: {
    default: 'ComplianceFlow · API SII, Verifactu y TicketBAI para España',
    template: '%s | ComplianceFlow - Compliance Fiscal Automatizado',
  },
  description:
    'API REST para compliance fiscal automatizado en España. Integra SII, Verifactu y TicketBAI en 5 minutos. +500 empresas, 99.99% uptime, soporte 24/7. Prueba gratis 14 días sin tarjeta.',
  keywords: [
    // Core compliance terms
    'API SII',
    'API Verifactu',
    'API TicketBAI',
    'Suministro Inmediato Información',
    'SII AEAT',
    'Verifactu Hacienda',
    'TicketBAI País Vasco',

    // Integration keywords
    'integración SII',
    'integración Verifactu',
    'integración TicketBAI',
    'API facturación electrónica',
    'automatización fiscal España',
    'compliance fiscal automatizado',

    // ERP/Software keywords
    'API ERP facturación',
    'integrar ERP con SII',
    'conectar software facturación Hacienda',
    'API REST facturación',
    'webhook facturación',

    // Location-specific
    'SII España',
    'Verifactu España',
    'TicketBAI Euskadi',
    'facturación electrónica España',
    'AEAT API',
    'Agencia Tributaria API',

    // B2B SaaS keywords
    'SaaS compliance fiscal',
    'plataforma facturación B2B',
    'software compliance España',
    'solución SII empresas',

    // Long-tail keywords
    'cómo integrar SII en mi ERP',
    'automatizar envío facturas Hacienda',
    'API para cumplimiento fiscal',
    'integración rápida Verifactu',
    'TicketBAI para desarrolladores',

    // Technical keywords
    'API REST SII',
    'webhook Verifactu',
    'SDK TicketBAI',
    'JSON API facturación',
    'API compliance GDPR',

    // Competitor/Alternative keywords
    'alternativa manual SII',
    'mejor API SII España',
    'API SII más rápida',
    'integración SII profesional',

    // Problem-solving keywords
    'solución compliance fiscal',
    'evitar errores SII',
    'cumplir normativa facturación',
    'gestión automática facturas Hacienda',
  ],
  authors: [{ name: 'ComplianceFlow Team' }],
  creator: 'ComplianceFlow',
  publisher: 'ComplianceFlow',
  category: 'Business Software',
  classification: 'Financial Compliance API',
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
    title: 'ComplianceFlow · API SII, Verifactu y TicketBAI | Compliance Fiscal Automatizado',
    description:
      'Integra SII, Verifactu y TicketBAI en 5 minutos con nuestra API REST. +500 empresas confían en nosotros. 99.99% uptime, soporte 24/7. Prueba gratis 14 días.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ComplianceFlow - API para SII, Verifactu y TicketBAI en España',
        type: 'image/png',
      },
      {
        url: '/og-image-square.png',
        width: 800,
        height: 800,
        alt: 'ComplianceFlow Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@complianceflow',
    creator: '@complianceflow',
    title: 'ComplianceFlow · API SII, Verifactu y TicketBAI para España',
    description:
      'API REST para compliance fiscal automatizado. Integración en 5 minutos. +500 empresas, 99.99% uptime. Prueba gratis 14 días.',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#6366f1',
      },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://complianceflow.es',
    languages: {
      'es-ES': 'https://complianceflow.es',
      'en-US': 'https://complianceflow.es/en',
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
    yandex: 'yandex-verification-code-here',
    other: {
      'msvalidate.01': 'bing-verification-code-here',
    },
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'ComplianceFlow',
    'mobile-web-app-capable': 'yes',
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
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Analytics />
        <OrganizationSchema />
        <LocalBusinessSchema />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
