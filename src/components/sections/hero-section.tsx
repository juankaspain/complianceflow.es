'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">Compliance fiscal automatizado</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              SII, Verifactu y{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                TicketBAI
              </span>{' '}
              en una API
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8 max-w-xl"
            >
              Conecta tu ERP o software de facturación en minutos. Sin reescribir código.
              Compliance perfecto, automático y siempre actualizado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Comenzar gratis
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="group" asChild>
                <Link href="/api-docs">
                  <Play className="mr-2 w-4 h-4" />
                  Ver demo
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>14 días gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Sin tarjeta</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Setup en 5 min</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm shadow-2xl">
              {/* Fake dashboard mockup */}
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded" />
                    <div className="flex gap-2">
                      <div className="h-8 w-8 bg-muted rounded-full" />
                      <div className="h-8 w-8 bg-muted rounded-full" />
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-4"
                      >
                        <div className="h-3 w-16 bg-muted rounded mb-2" />
                        <div className="h-6 w-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded" />
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                    <div className="h-3 w-24 bg-muted rounded mb-4" />
                    <div className="h-32 flex items-end gap-2">
                      {[40, 70, 45, 80, 60, 90, 55].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 -z-10" />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-background border border-border/50 rounded-lg px-4 py-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">99.99% Uptime</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-background border border-border/50 rounded-lg px-4 py-3 shadow-lg"
            >
              <div className="text-sm">
                <div className="font-semibold text-primary">+500</div>
                <div className="text-muted-foreground">Empresas</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
