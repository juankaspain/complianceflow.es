import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'

export const metadata: Metadata = {
  title: 'Blog - Compliance Fiscal y APIs',
  description:
    'Artículos técnicos sobre SII, Verifactu, TicketBAI, APIs REST y compliance fiscal en España. Guías, tutoriales y mejores prácticas para desarrolladores.',
  keywords: [
    'blog compliance fiscal',
    'tutoriales SII',
    'guías Verifactu',
    'TicketBAI desarrollo',
    'API REST España',
    'facturación electrónica blog',
  ],
  openGraph: {
    title: 'Blog ComplianceFlow - Compliance Fiscal y APIs',
    description: 'Artículos técnicos, guías y tutoriales sobre compliance fiscal en España',
    type: 'website',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
      </div>
      {children}
    </div>
  )
}
