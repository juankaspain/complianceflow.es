'use client'

import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Stat {
  value: string
  label: string
  suffix?: string
  prefix?: string
  description?: string
}

const stats: Stat[] = [
  {
    value: '99.9',
    suffix: '%',
    label: 'Uptime Guarantee',
    description: 'Enterprise-grade reliability'
  },
  {
    value: '500',
    suffix: '+',
    label: 'Empresas Confían',
    description: 'Líderes del sector'
  },
  {
    value: '10M',
    suffix: '+',
    label: 'Facturas Procesadas',
    description: 'Mensualmente'
  },
  {
    prefix: '<',
    value: '100',
    suffix: 'ms',
    label: 'Tiempo de Respuesta',
    description: 'API ultra-rápida'
  },
  {
    value: '24',
    suffix: '/7',
    label: 'Soporte Técnico',
    description: 'Siempre disponible'
  },
  {
    value: '100',
    suffix: '%',
    label: 'GDPR Compliant',
    description: 'Máxima seguridad'
  }
]

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(value * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

export default function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 dark:from-primary-950 dark:via-accent-950 dark:to-primary-900" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Números que Hablan por Sí Mismos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La confianza de cientos de empresas respaldada por métricas reales
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-accent-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-accent-500/10 group-hover:to-primary-500/10 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Number */}
                  <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent">
                    {stat.prefix}
                    {stat.value.includes('.') || stat.value.includes('M') || stat.value.includes('K') ? (
                      stat.value
                    ) : (
                      <AnimatedCounter value={parseInt(stat.value)} />
                    )}
                    {stat.suffix}
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  {stat.description && (
                    <p className="text-muted-foreground text-sm">
                      {stat.description}
                    </p>
                  )}

                  {/* Decorative Line */}
                  <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Únete a las empresas líderes que ya confían en ComplianceFlow
          </p>
          <button className="btn-accent">
            Comenzar Gratis →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
