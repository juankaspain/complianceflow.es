import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://complianceflow.es'),
  title: {
    default: 'ComplianceFlow · APIs de Compliance para SII, KYC y AML',
    template: '%s | ComplianceFlow',
  },
  description:
    'Automatiza SII, Verifactu, KYC y prevención de fraude con APIs diseñadas para desarrolladores. Prueba gratis 1.000 llamadas.',
  keywords: [
    'SII API',
    'Verifactu',
    'KYC España',
    'API compliance',
    'AEAT automatización',
    'PSD2',
    'AML',
    'prevención fraude',
    'onboarding digital',
  ],
  authors: [{ name: 'ComplianceFlow', url: 'https://complianceflow.es' }],
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
    title: 'ComplianceFlow · Compliance via APIs',
    description: 'Automatiza SII, KYC y fraude en una sola API',
    siteName: 'ComplianceFlow',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ComplianceFlow - Compliance via APIs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComplianceFlow · Compliance via APIs',
    description: 'Automatiza SII, KYC y fraude en una sola API',
    images: ['/twitter-image.png'],
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
  alternates: {
    canonical: 'https://complianceflow.es',
    languages: {
      'es-ES': 'https://complianceflow.es',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AnalyticsProvider>
            <a href="#main-content" className="skip-link">
              Saltar al contenido principal
            </a>
            {children}
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
