'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle2, Sparkles } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
      <div className="absolute inset-0 bg-grid-white/5" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Newsletter Mensual</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Mantente al día con{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  las regulaciones
                </span>
              </h3>

              <p className="text-lg text-muted-foreground">
                Recibe updates sobre cambios en SII, Verifactu, TicketBAI y mejores prácticas de
                compliance fiscal. Sin spam, solo contenido de valor.
              </p>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2 text-green-600 py-8"
              >
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-semibold">¡Suscripción confirmada! Revisa tu email.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 h-12 bg-background"
                    disabled={status === 'loading'}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'loading'}
                  className="sm:w-auto w-full"
                >
                  {status === 'loading' ? 'Suscribiendo...' : 'Suscribirme gratis'}
                </Button>
              </form>
            )}

            <p className="text-xs text-muted-foreground text-center mt-4">
              Al suscribirte, aceptas recibir emails de ComplianceFlow. Cancela cuando quieras.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5K+</div>
                <div className="text-xs text-muted-foreground">Suscriptores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1x</div>
                <div className="text-xs text-muted-foreground">Al mes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-xs text-muted-foreground">Spam</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
