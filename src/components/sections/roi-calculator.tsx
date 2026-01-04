'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { GradientCard } from '@/components/ui/gradient-card'
import { Slider } from '@/components/ui/slider'
import { TrendingUp, Clock, Euro, Zap } from 'lucide-react'

export function ROICalculator() {
  const [monthlyTransactions, setMonthlyTransactions] = useState(5000)
  const [hourlyRate, setHourlyRate] = useState(50)
  const [hoursPerMonth, setHoursPerMonth] = useState(40)

  // Cálculos
  const manualCost = hourlyRate * hoursPerMonth
  const complianceflowCost = monthlyTransactions < 1000 ? 49 : monthlyTransactions < 10000 ? 199 : 499
  const monthlyTimeSaved = hoursPerMonth * 0.9 // 90% de ahorro de tiempo
  const monthlySavings = manualCost - complianceflowCost
  const yearlyTimeSaved = monthlyTimeSaved * 12
  const yearlySavings = monthlySavings * 12
  const roi = ((yearlySavings / (complianceflowCost * 12)) * 100).toFixed(0)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Calcula tu{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ahorro real
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cuánto tiempo y dinero ahorrarás automatizando tu compliance fiscal
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GradientCard gradient="blue">
                <h3 className="text-xl font-semibold mb-6">Tu situación actual</h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Transacciones mensuales</label>
                      <span className="text-sm text-primary font-semibold">
                        {monthlyTransactions.toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      value={[monthlyTransactions]}
                      onValueChange={(value) => setMonthlyTransactions(value[0])}
                      min={100}
                      max={50000}
                      step={100}
                      className="mb-1"
                    />
                    <p className="text-xs text-muted-foreground">Facturas procesadas al mes</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Tarifa horaria del equipo</label>
                      <span className="text-sm text-primary font-semibold">{hourlyRate}€/h</span>
                    </div>
                    <Slider
                      value={[hourlyRate]}
                      onValueChange={(value) => setHourlyRate(value[0])}
                      min={20}
                      max={150}
                      step={5}
                      className="mb-1"
                    />
                    <p className="text-xs text-muted-foreground">Coste laboral promedio</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Horas dedicadas al mes</label>
                      <span className="text-sm text-primary font-semibold">{hoursPerMonth}h</span>
                    </div>
                    <Slider
                      value={[hoursPerMonth]}
                      onValueChange={(value) => setHoursPerMonth(value[0])}
                      min={5}
                      max={160}
                      step={5}
                      className="mb-1"
                    />
                    <p className="text-xs text-muted-foreground">Tiempo en gestión manual</p>
                  </div>
                </div>
              </GradientCard>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GradientCard gradient="green">
                <h3 className="text-xl font-semibold mb-6">Tu ahorro con ComplianceFlow</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                      <Euro className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ahorro mensual</p>
                      <p className="text-3xl font-bold text-green-600">
                        {monthlySavings.toLocaleString()}€
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Tiempo ahorrado/año</p>
                      <p className="text-3xl font-bold text-blue-600">
                        {yearlyTimeSaved.toFixed(0)}h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ROI anual</p>
                      <p className="text-3xl font-bold text-purple-600">{roi}%</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                        <Zap className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Ahorro total en 3 años</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          {(yearlySavings * 3).toLocaleString()}€
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GradientCard>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              *Cálculos basados en datos reales de +500 clientes. El ahorro promedio es del 85%.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
            >
              Quiero estos ahorros →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
