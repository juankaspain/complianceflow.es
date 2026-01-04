'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { GradientCard } from '@/components/ui/gradient-card'

const testimonials = [
  {
    name: 'María González',
    role: 'CTO en TechCorp',
    company: 'TechCorp',
    content:
      'ComplianceFlow transformó nuestra gestión fiscal. Pasamos de 3 días a 30 minutos en envíos SII. El ROI fue inmediato.',
    rating: 5,
    gradient: 'purple' as const,
  },
  {
    name: 'Carlos Ruiz',
    role: 'Director Financiero',
    company: 'RetailPlus',
    content:
      'La integración fue perfecta. En 2 horas teníamos Verifactu funcionando. Soporte técnico excepcional.',
    rating: 5,
    gradient: 'blue' as const,
  },
  {
    name: 'Ana Martínez',
    role: 'CEO en StartupLab',
    company: 'StartupLab',
    content:
      'Como startup, necesitábamos compliance sin complicaciones. ComplianceFlow nos permite escalar sin preocupaciones legales.',
    rating: 5,
    gradient: 'green' as const,
  },
]

export function TestimonialsSection() {
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
            Amado por{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              +500 empresas
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde startups hasta Fortune 500. Descubre por qué confían en nosotros.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GradientCard gradient={testimonial.gradient} className="h-full">
                <Quote className="w-8 h-8 text-primary/50 mb-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6">{testimonial.content}</p>

                <div className="pt-4 border-t border-border/50">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.company}</div>
                </div>
              </GradientCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">valoración media (127 reviews)</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
