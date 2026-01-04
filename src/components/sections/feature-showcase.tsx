'use client'

import { motion } from 'framer-motion'
import { GradientCard } from './gradient-card'
import { Shield, Zap, Lock, TrendingUp, Globe, CheckCircle2 } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Seguridad Certificada',
    description:
      'Cumplimiento GDPR y certificaciones ISO 27001. Tus datos protegidos con encriptación de extremo a extremo.',
    gradient: 'purple' as const,
  },
  {
    icon: Zap,
    title: 'Velocidad Extrema',
    description:
      'API REST con latencia <100ms. Procesamiento en tiempo real de miles de transacciones por segundo.',
    gradient: 'blue' as const,
  },
  {
    icon: Lock,
    title: 'Privacidad Total',
    description:
      'Zero-knowledge architecture. Nunca almacenamos datos sensibles. Control total sobre tu información.',
    gradient: 'green' as const,
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidad Ilimitada',
    description:
      'Infraestructura cloud elástica. Crece de 10 a 10,000 usuarios sin cambios en tu código.',
    gradient: 'orange' as const,
  },
  {
    icon: Globe,
    title: 'Disponibilidad Global',
    description:
      '99.99% uptime garantizado. CDN distribuido en 50+ regiones. Siempre disponible donde lo necesites.',
    gradient: 'purple' as const,
  },
  {
    icon: CheckCircle2,
    title: 'Compliance Automático',
    description:
      'Actualizaciones regulatorias automáticas. SII, Verifactu, TicketBAI al día sin intervención manual.',
    gradient: 'blue' as const,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function FeatureShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-indigo-500/5 to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Todo lo que necesitas para{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              compliance perfecto
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnología enterprise con la simplicidad de una API. Implementa compliance en minutos,
            no en meses.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <GradientCard gradient={feature.gradient} className="h-full">
                <feature.icon className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GradientCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
