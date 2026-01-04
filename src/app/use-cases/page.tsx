import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Building2, ShoppingCart, Factory, TrendingUp, Users, Code } from 'lucide-react'
import { GradientCard } from '@/components/ui/gradient-card'

export const metadata: Metadata = {
  title: 'Casos de Uso',
  description:
    'Descubre cómo empresas de diferentes sectores usan ComplianceFlow para automatizar su compliance fiscal. Retail, e-commerce, software, manufactura y más.',
}

const useCases = [
  {
    icon: ShoppingCart,
    title: 'E-commerce y Retail',
    description:
      'Integra tu tienda online con SII y Verifactu automáticamente. Cada venta se reporta en tiempo real sin intervención manual.',
    benefits: [
      'Sincronización automática con Shopify, WooCommerce, Prestashop',
      'Envíos a SII en tiempo real < 100ms',
      'Gestión de devoluciones y abonos',
      'Dashboard con métricas de compliance',
    ],
    stats: { clients: 200, transactions: '5M+', time: '95%' },
    gradient: 'purple' as const,
  },
  {
    icon: Code,
    title: 'SaaS y Software',
    description:
      'Perfecto para plataformas de facturación, ERPs y software de gestión. API-first diseñada para developers.',
    benefits: [
      'RESTful API con webhooks',
      'SDKs para JavaScript, Python, PHP',
      'Sandbox completo para testing',
      'Documentación interactiva',
    ],
    stats: { clients: 150, transactions: '8M+', time: '90%' },
    gradient: 'blue' as const,
  },
  {
    icon: Factory,
    title: 'Manufactura e Industria',
    description:
      'Gestiona facturas de producción, proveedores y distribución con compliance automático para manufactura.',
    benefits: [
      'Integración con ERPs industriales (SAP, Oracle)',
      'Gestión de facturas intracomunitarias',
      'Trazabilidad completa de documentos',
      'Reportes de auditoría automáticos',
    ],
    stats: { clients: 80, transactions: '3M+', time: '88%' },
    gradient: 'green' as const,
  },
  {
    icon: TrendingUp,
    title: 'Startups en Crecimiento',
    description:
      'Escala sin preocuparte del compliance. Desde 10 facturas/mes hasta millones con la misma API.',
    benefits: [
      'Plan Starter desde 49€/mes',
      'Setup en 5 minutos',
      'Escalado automático sin cambios',
      'Soporte prioritario para growth',
    ],
    stats: { clients: 120, transactions: '2M+', time: '92%' },
    gradient: 'orange' as const,
  },
  {
    icon: Building2,
    title: 'Enterprise y Corporaciones',
    description:
      'Soluciones personalizadas para grandes empresas con múltiples entidades y requisitos complejos.',
    benefits: [
      'Multi-tenant y multi-entidad',
      'On-premise deployment disponible',
      'SLA 99.99% con soporte 24/7',
      'Account manager dedicado',
    ],
    stats: { clients: 50, transactions: '15M+', time: '96%' },
    gradient: 'purple' as const,
  },
  {
    icon: Users,
    title: 'Asesorías y Gestorías',
    description:
      'Gestiona compliance de múltiples clientes desde un único dashboard. White-label disponible.',
    benefits: [
      'Dashboard multi-cliente',
      'Gestión delegada de permisos',
      'Informes automatizados por cliente',
      'White-label para tu marca',
    ],
    stats: { clients: 90, transactions: '4M+', time: '89%' },
    gradient: 'blue' as const,
  },
]

export default function UseCasesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-background" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Casos de{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                uso reales
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubre cómo empresas de diferentes sectores automatizan su compliance fiscal con
              ComplianceFlow
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <GradientCard key={index} gradient={useCase.gradient} className="h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm">{useCase.description}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-primary shrink-0">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                  <div className="text-center">
                    <div className="font-bold text-primary">{useCase.stats.clients}+</div>
                    <div className="text-xs text-muted-foreground">Clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{useCase.stats.transactions}</div>
                    <div className="text-xs text-muted-foreground">Trans.</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{useCase.stats.time}</div>
                    <div className="text-xs text-muted-foreground">Ahorro</div>
                  </div>
                </div>
              </GradientCard>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              ¿No ves tu caso de uso? Hablemos de tu situación específica
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
            >
              Consultar caso personalizado
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
