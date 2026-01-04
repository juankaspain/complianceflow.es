import { Metadata } from 'next'
import Link from 'next/link'
import { GradientCard } from '@/components/ui/gradient-card'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Compliance Fiscal y APIs',
  description:
    'Artículos técnicos sobre SII, Verifactu, TicketBAI y compliance fiscal en España. Guías, tutoriales y mejores prácticas.',
}

const articles = [
  {
    slug: 'guia-integracion-sii',
    title: 'Guía Completa de Integración SII con API REST',
    excerpt:
      'Aprende a integrar el Suministro Inmediato de Información en tu aplicación en menos de 30 minutos. Tutorial paso a paso con ejemplos.',
    date: '2026-01-04',
    readTime: '10 min',
    category: 'Tutorial',
    gradient: 'blue' as const,
  },
  {
    slug: 'verifactu-que-es',
    title: 'Verifactu: Todo lo que Necesitas Saber en 2026',
    excerpt:
      'Guía completa sobre Verifactu, el nuevo sistema de verificación de facturas de Hacienda. Requisitos, plazos y cómo prepararte.',
    date: '2026-01-03',
    readTime: '8 min',
    category: 'Guía',
    gradient: 'purple' as const,
  },
  {
    slug: 'ticketbai-pais-vasco',
    title: 'TicketBAI en el País Vasco: Guía Práctica 2026',
    excerpt:
      'Todo sobre TicketBAI: obligaciones, sanciones, integración técnica y mejores prácticas para empresas vascas.',
    date: '2026-01-02',
    readTime: '12 min',
    category: 'Guía',
    gradient: 'green' as const,
  },
  {
    slug: 'api-rest-vs-soap',
    title: 'API REST vs SOAP para Compliance Fiscal',
    excerpt:
      'Comparativa técnica entre APIs REST y SOAP para integraciones fiscales. Por qué REST es mejor para la mayoría de casos.',
    date: '2026-01-01',
    readTime: '7 min',
    category: 'Comparativa',
    gradient: 'orange' as const,
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog de{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Compliance Fiscal
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Artículos técnicos, guías y tutoriales sobre SII, Verifactu, TicketBAI y APIs para
            compliance fiscal en España
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Artículo destacado
          </div>
          <GradientCard gradient="blue" className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <Link href={`/blog/${articles[0].slug}`}>
                  <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors">
                    {articles[0].title}
                  </h2>
                </Link>
                <p className="text-muted-foreground mb-6">{articles[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={articles[0].date}>
                      {new Date(articles[0].date).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{articles[0].readTime}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {articles[0].category}
                  </span>
                </div>
                <Link
                  href={`/blog/${articles[0].slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
                >
                  Leer artículo completo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="w-full md:w-64 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </GradientCard>
        </div>

        {/* Articles Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Todos los artículos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <GradientCard key={article.slug} gradient={article.gradient} className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      {article.category}
                    </span>
                    <Link href={`/blog/${article.slug}`}>
                      <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'short',
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-semibold"
                    >
                      Leer más
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </GradientCard>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <GradientCard gradient="indigo" className="text-center p-8">
          <h3 className="text-2xl font-bold mb-3">No te pierdas ningún artículo</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Recibe nuestros últimos artículos, guías técnicas y actualizaciones sobre compliance
            fiscal directamente en tu inbox
          </p>
          <Link
            href="/#newsletter"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
          >
            Suscribirme al newsletter
          </Link>
        </GradientCard>
      </div>
    </div>
  )
}
