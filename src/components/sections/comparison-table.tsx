'use client'

import { motion } from 'framer-motion'
import { Check, X, Star } from 'lucide-react'
import { GradientCard } from '@/components/ui/gradient-card'

const features = [
  {
    category: 'Funcionalidades Core',
    items: [
      { name: 'SII (Suministro Inmediato de Información)', complianceflow: true, competitor1: true, competitor2: true },
      { name: 'Verifactu', complianceflow: true, competitor1: true, competitor2: false },
      { name: 'TicketBAI (País Vasco)', complianceflow: true, competitor1: false, competitor2: true },
      { name: 'API REST moderna', complianceflow: true, competitor1: true, competitor2: false },
      { name: 'Webhooks en tiempo real', complianceflow: true, competitor1: false, competitor2: false },
    ],
  },
  {
    category: 'Rendimiento',
    items: [
      { name: 'Latencia < 100ms', complianceflow: true, competitor1: false, competitor2: false },
      { name: 'Procesamiento en tiempo real', complianceflow: true, competitor1: true, competitor2: false },
      { name: 'Escalado automático', complianceflow: true, competitor1: false, competitor2: true },
      { name: 'SLA 99.99% uptime', complianceflow: true, competitor1: false, competitor2: false },
    ],
  },
  {
    category: 'Seguridad',
    items: [
      { name: 'Encriptación E2E', complianceflow: true, competitor1: true, competitor2: true },
      { name: 'Certificación ISO 27001', complianceflow: true, competitor1: false, competitor2: true },
      { name: 'Auditorías trimestrales', complianceflow: true, competitor1: false, competitor2: false },
      { name: 'GDPR compliant', complianceflow: true, competitor1: true, competitor2: true },
    ],
  },
  {
    category: 'Soporte',
    items: [
      { name: 'Soporte 24/7', complianceflow: true, competitor1: false, competitor2: true },
      { name: 'Account manager dedicado', complianceflow: true, competitor1: false, competitor2: false },
      { name: 'Documentación completa', complianceflow: true, competitor1: true, competitor2: true },
      { name: 'Ejemplos de código', complianceflow: true, competitor1: true, competitor2: false },
    ],
  },
]

export function ComparisonTable() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ¿Por qué{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ComplianceFlow?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comparación honesta con las alternativas del mercado. Decide con toda la información.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <GradientCard gradient="purple" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left p-4 font-semibold">Característica</th>
                    <th className="p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Star className="w-5 h-5 fill-primary text-primary" />
                        <span className="font-bold text-primary">ComplianceFlow</span>
                      </div>
                    </th>
                    <th className="p-4 text-center text-muted-foreground">Competidor A</th>
                    <th className="p-4 text-center text-muted-foreground">Competidor B</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((category, categoryIndex) => (
                    <>
                      <tr key={`category-${categoryIndex}`}>
                        <td
                          colSpan={4}
                          className="pt-6 pb-2 px-4 font-semibold text-sm text-muted-foreground uppercase tracking-wide"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((item, itemIndex) => (
                        <tr
                          key={`item-${categoryIndex}-${itemIndex}`}
                          className="border-b border-border/30 hover:bg-accent/50 transition-colors"
                        >
                          <td className="p-4 text-sm">{item.name}</td>
                          <td className="p-4 text-center">
                            {item.complianceflow ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto opacity-50" />
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {item.competitor1 ? (
                              <Check className="w-5 h-5 text-muted-foreground mx-auto opacity-50" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto opacity-30" />
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {item.competitor2 ? (
                              <Check className="w-5 h-5 text-muted-foreground mx-auto opacity-50" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto opacity-30" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-center">
                <span className="font-semibold">Resultado:</span> ComplianceFlow ofrece 95% más
                funcionalidades que la competencia promedio, con mejor rendimiento y soporte.
              </p>
            </div>
          </GradientCard>
        </motion.div>
      </div>
    </section>
  )
}
