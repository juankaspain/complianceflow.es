import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@/lib/analytics/posthog';
import ErrorBoundary from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://complianceflow.netlify.app'),
  title: {
    default: 'ComplianceFlow - Plataforma Enterprise de Cumplimiento',
    template: '%s | ComplianceFlow',
  },
  description:
    'Automatiza tu cumplimiento normativo con ComplianceFlow. Gestión de GDPR, ISO, SOC2 y más con IA.',
  keywords: [
    'compliance',
    'cumplimiento normativo',
    'GDPR',
    'ISO 27001',
    'SOC2',
    'gestión de riesgos',
    'auditoría',
    'regulación',
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
    url: 'https://complianceflow.netlify.app',
    title: 'ComplianceFlow - Gestión de Cumplimiento Enterprise',
    description:
      'Automatiza tu cumplimiento normativo con la plataforma líder del mercado',
    siteName: 'ComplianceFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComplianceFlow',
    description: 'Gestión de Cumplimiento Enterprise con IA',
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
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <ErrorBoundary>
          {/* Header */}
          <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
              <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold text-primary">
                    ComplianceFlow
                  </span>
                </a>
              </div>
              <div className="hidden lg:flex lg:gap-x-8">
                <a
                  href="/features"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
                >
                  Características
                </a>
                <a
                  href="/pricing"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
                >
                  Precios
                </a>
                <a
                  href="/docs"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
                >
                  Documentación
                </a>
                <a
                  href="/about"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
                >
                  Empresa
                </a>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
                <a
                  href="/login"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
                >
                  Iniciar sesión
                </a>
                <a
                  href="/signup"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all"
                >
                  Probar gratis
                </a>
              </div>
            </nav>
          </header>

          {/* Main Content */}
          {children}

          {/* Footer */}
          <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div>
                  <h3 className="text-sm font-semibold">Producto</h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a href="/features" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Características
                      </a>
                    </li>
                    <li>
                      <a href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Precios
                      </a>
                    </li>
                    <li>
                      <a href="/docs" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Documentación
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Empresa</h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Sobre nosotros
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Contacto
                      </a>
                    </li>
                    <li>
                      <a href="/careers" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Carreras
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Legal</h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Privacidad
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Términos
                      </a>
                    </li>
                    <li>
                      <a href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Cookies
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Síguenos</h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a href="https://twitter.com/complianceflow" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/company/complianceflow" className="text-sm text-gray-400 hover:text-white transition-colors">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/juankaspain/complianceflow.es" className="text-sm text-gray-400 hover:text-white transition-colors">
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-800 pt-8 text-center">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} ComplianceFlow. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </footer>

          {/* Analytics */}
          <Analytics />
        </ErrorBoundary>
      </body>
    </html>
  );
}
