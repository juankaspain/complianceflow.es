'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GradientCard } from '@/components/ui/gradient-card'

const plans = [
  {
    name: 'Starter',
    price: '49',
    description: 'Perfecto para startups y pequeñas empresas',
    gradient: 'blue' as const,
    features: [
      '1,000 transacciones/mes',
      'API REST completa',
      'SII + Verifactu',
      'Soporte por email',
      'Webhooks ilimitados',
      'Dashboard básico',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '199',
    description: 'Para empresas en crecimiento',
    gradient: 'purple' as const,
    features: [
      '10,000 transacciones/mes',
      'Todo en Starter',
      'TicketBAI incluido',
      'Soporte prioritario 24/7',
      'SLA 99.9% uptime',
      'Dashboard avanzado',
      'Multiple entornos',
      'Backups automáticos',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Solución personalizada a medida',
    gradient: 'orange' as const,
    features: [
      'Transacciones ilimitadas',
      'Todo en Professional',
      'Dedicated account manager',
      'SLA 99.99% uptime',
      'On-premise deployment',
      'Integración personalizada',
      'Auditorías de seguridad',
      'Formación del equipo',
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Planes que{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              escalan contigo
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sin permanencia. Cancela cuando quieras. Migra entre planes sin fricción.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GradientCard
                gradient={plan.gradient}
                className={plan.popular ? 'ring-2 ring-primary' : ''}
              >
                {plan.popular && (
                  <div className="flex items-center gap-1 text-primary mb-4">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">Más popular</span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    {plan.price !== 'Custom' && (
                      <span className="text-3xl font-bold">{plan.price}€</span>
                    )}
                    {plan.price === 'Custom' && (
                      <span className="text-3xl font-bold">{plan.price}</span>
                    )}
                    {plan.price !== 'Custom' && (
                      <span className="text-muted-foreground">/mes</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  {plan.price === 'Custom' ? 'Contactar ventas' : 'Comenzar prueba'}
                </Button>
              </GradientCard>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Todos los planes incluyen 14 días de prueba gratis. Sin tarjeta de crédito.
        </p>
      </div>
    </section>
  )
}
