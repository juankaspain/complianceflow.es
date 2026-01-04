'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Code2, 
  Lock, 
  BarChart3, 
  Clock, 
  CheckCircle2, 
  Headphones,
  Sparkles,
  Rocket
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Seguridad Enterprise',
    description: 'Cifrado end-to-end, ISO 27001, y cumplimiento GDPR garantizado para máxima protección de datos.',
    gradient: 'from-blue-500 to-cyan-500',
    highlight: 'ISO 27001'
  },
  {
    icon: Zap,
    title: 'Performance Ultra-rápido',
    description: 'APIs con latencia <100ms, 99.9% uptime SLA, y edge computing para velocidad global.',
    gradient: 'from-yellow-500 to-orange-500',
    highlight: '<100ms'
  },
  {
    icon: Code2,
    title: 'Developer-First',
    description: 'SDKs en 8 lenguajes, documentación completa, webhooks, y sandbox para testing.',
    gradient: 'from-purple-500 to-pink-500',
    highlight: '8 SDKs'
  },
  {
    icon: Lock,
    title: 'Compliance Automático',
    description: 'SII, Verifactu, KYC integrado. Actualizaciones normativas automáticas incluidas.',
    gradient: 'from-green-500 to-emerald-500',
    highlight: 'Auto-update'
  },
  {
    icon: BarChart3,
    title: 'Analytics Avanzado',
    description: 'Dashboard en tiempo real, métricas detalladas, y alertas personalizables.',
    gradient: 'from-indigo-500 to-purple-500',
    highlight: 'Real-time'
  },
  {
    icon: Clock,
    title: 'Integración Rápida',
    description: 'Setup en minutos, no en días. Ejemplos de código y asistente de integración incluidos.',
    gradient: 'from-red-500 to-pink-500',
    highlight: 'En minutos'
  },
  {
    icon: CheckCircle2,
    title: 'Validación Inteligente',
    description: 'Validación automática de documentos, detección de errores, y corrección sugerida.',
    gradient: 'from-teal-500 to-cyan-500',
    highlight: 'AI-powered'
  },
  {
    icon: Headphones,
    title: 'Soporte 24/7',
    description: 'Equipo técnico disponible siempre. SLA de respuesta garantizado para Enterprise.',
    gradient: 'from-orange-500 to-red-500',
    highlight: '24/7'
  },
  {
    icon: Sparkles,
    title: 'Actualizaciones Continuas',
    description: 'Features nuevas cada mes, sin costes adicionales. Mejora constante del servicio.',
    gradient: 'from-pink-500 to-rose-500',
    highlight: 'Monthly'
  },
  {
    icon: Rocket,
    title: 'Escalabilidad Infinita',
    description: 'De 10 a 10M requests/mes. Infraestructura auto-scaling sin intervención manual.',
    gradient: 'from-violet-500 to-purple-500',
    highlight: 'Auto-scale'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function FeaturesGrid() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-gray-950 dark:via-primary-950/30 dark:to-gray-950" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-medium">Características Premium</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">
              Todo lo que Necesitas
            </span>
            <br />
            <span className="text-foreground">
              en Una Sola Plataforma
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde seguridad enterprise hasta integraciones rápidas. ComplianceFlow
            tiene todas las herramientas que tu negocio necesita para crecer sin límites.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-transparent hover:shadow-2xl transition-all duration-500">
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7" />
                  </div>

                  {/* Badge */}
                  <div className="absolute top-8 right-8">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.gradient} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      {feature.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${feature.gradient} transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Line */}
                  <div className={`mt-6 h-1 w-12 bg-gradient-to-r ${feature.gradient} rounded-full group-hover:w-full transition-all duration-500`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            ¿Listo para llevar tu compliance al siguiente nivel?
          </p>
          <button className="btn-accent">
            Ver Todas las Características →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
