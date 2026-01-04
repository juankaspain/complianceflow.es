'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
  { name: 'AEAT', description: 'Agencia Tributaria' },
  { name: 'ISO 27001', description: 'Certificado' },
  { name: 'GDPR', description: 'Compliant' },
  { name: 'SOC 2', description: 'Type II' },
  { name: 'AWS', description: 'Partner' },
  { name: 'Verifactu', description: 'Certified' },
]

const clients = [
  'TechCorp',
  'RetailPlus',
  'StartupLab',
  'FinanceHub',
  'GlobalTrade',
  'InnovateNow',
]

export function TrustLogos() {
  return (
    <section className="py-16 border-y border-border/50 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-muted-foreground mb-8">
            Confianza de +500 empresas en España
          </p>
        </motion.div>

        {/* Client logos marquee effect */}
        <div className="relative overflow-hidden mb-12">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
            className="flex gap-12 items-center"
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center text-muted-foreground font-semibold text-sm opacity-50 hover:opacity-100 transition-opacity"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Certifications and compliance badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-background border-2 border-border/50 flex items-center justify-center mb-2 group-hover:border-primary transition-colors">
                <span className="text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {logo.name}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{logo.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            🔒 Certificado por las principales autoridades de seguridad y compliance
          </p>
        </motion.div>
      </div>
    </section>
  )
}
