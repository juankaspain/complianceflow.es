import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Optimize font loading with display swap
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Helvetica Neue',
    'sans-serif',
  ],
  adjustFontFallback: true,
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://complianceflow.es'),
  title: {
    default: 'ComplianceFlow · Compliance via APIs',
    template: '%s | ComplianceFlow',
  },
  description:
    'APIs enterprise para automatizar SII, Verifactu y KYC. Integración en minutos con certificaciones ISO 27001, SOC 2 Type II y GDPR.',
  keywords: [
    'SII',
    'Verifactu',
    'KYC',
    'Compliance',
    'API',
    'AEAT',
    'Facturación',
    'España',
    'Enterprise',
    'ISO 27001',
    'SOC 2',
    'GDPR',
  ],
  authors: [{ name: 'ComplianceFlow', url: 'https://complianceflow.es' }],
  creator: 'ComplianceFlow',
  publisher: 'ComplianceFlow',
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
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://complianceflow.es',
    siteName: 'ComplianceFlow',
    title: 'ComplianceFlow · Compliance via APIs',
    description:
      'APIs enterprise para automatizar SII, Verifactu y KYC. Integración en minutos.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ComplianceFlow - Compliance Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@complianceflow',
    creator: '@complianceflow',
    title: 'ComplianceFlow · Compliance via APIs',
    description:
      'APIs enterprise para automatizar SII, Verifactu y KYC. Integración en minutos.',
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://complianceflow.es',
    languages: {
      'es-ES': 'https://complianceflow.es',
      'en-US': 'https://complianceflow.es/en',
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for faster connections */}
        <link rel="dns-prefetch" href="https://api.complianceflow.es" />
        
        {/* Resource hints */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
