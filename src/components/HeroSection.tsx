'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles, Shield, Zap } from 'lucide-react'

const features = [
  { icon: Shield, text: 'Cumplimiento 100% normativa española' },
  { icon: Zap, text: 'API ultra-rápida <100ms' },
  { icon: CheckCircle2, text: 'Integración en minutos' }
]

const floatingBadges = [
  { text: 'GDPR', color: 'from-green-500 to-emerald-500', delay: 0 },
  { text: 'ISO 27001', color: 'from-blue-500 to-cyan-500', delay: 0.2 },
  { text: 'SII', color: 'from-purple-500 to-pink-500', delay: 0.4 },
  { text: 'Verifactu', color: 'from-orange-500 to-red-500', delay: 0.6 }
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-primary-950" />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Floating Badges */}
          <div className="hidden lg:block">
            {floatingBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: badge.delay }}
                className={`absolute ${
                  index === 0 ? 'top-20 left-10' :
                  index === 1 ? 'top-32 right-20' :
                  index === 2 ? 'bottom-32 left-32' :
                  'bottom-20 right-10'
                }`}
              >
                <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} text-white text-sm font-semibold shadow-lg float`}>
                  {badge.text}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card shimmer"
            >
              <Sparkles className="w-4 h-4 text-accent-500" />
              <span className="text-sm font-medium">
                La plataforma de compliance más avanzada de España
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              <span className="block mb-2">Compliance</span>
              <span className="gradient-text animate-gradient">
                Simplificado
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Automatiza el cumplimiento normativo con{' '}
              <span className="text-primary-600 dark:text-primary-400 font-semibold">
                APIs enterprise-grade
              </span>
              {' '}para SII, Verifactu y KYC. Integración en minutos, resultados inmediatos.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <feature.icon className="w-4 h-4 text-primary-500" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link href="/pricing" className="w-full sm:w-auto">
                <button className="btn-accent w-full sm:w-auto group">
                  Comenzar Gratis
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/docs" className="w-full sm:w-auto">
                <button className="btn-secondary w-full sm:w-auto">
                  Ver Documentación
                </button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-8 flex flex-col items-center gap-4"
            >
              <p className="text-sm text-muted-foreground">
                La confianza de más de 500 empresas
              </p>

              {/* Company Logos Placeholder */}
              <div className="flex items-center gap-8 opacity-50 hover:opacity-100 transition-opacity">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-24 h-12 rounded bg-gray-200 dark:bg-gray-800 shimmer"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll para explorar</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-current p-1"
          >
            <div className="w-1.5 h-2 bg-current rounded-full mx-auto" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
