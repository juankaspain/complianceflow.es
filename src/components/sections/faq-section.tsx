'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: '¿Cuánto tiempo tarda la integración?',
    answer:
      'La integración básica tarda menos de 5 minutos. Simplemente obtén tu API key, realiza tu primera llamada y estarás listo. Para integraciones más complejas con múltiples sistemas, nuestro equipo puede ayudarte en un proceso que típicamente tarda 1-2 días.',
  },
  {
    question: '¿Es compatible con mi ERP/software de facturación?',
    answer:
      'Sí. ComplianceFlow funciona con cualquier sistema mediante nuestra API REST estándar. Tenemos conectores pre-construidos para SAP, Sage, A3, Holded, y más. Si usas un sistema personalizado, nuestra API RESTful es fácil de integrar con cualquier lenguaje de programación.',
  },
  {
    question: '¿Qué sucede si cambian las regulaciones?',
    answer:
      'Nos encargamos de todo. Monitoreamos constantemente cambios en SII, Verifactu, TicketBAI y otras regulaciones. Cuando hay actualizaciones, las implementamos automáticamente sin que tengas que hacer nada. Tu compliance siempre estará al día.',
  },
  {
    question: '¿Puedo probar antes de comprometerme?',
    answer:
      'Absolutamente. Ofrecemos 14 días de prueba gratuita con acceso completo a todas las funcionalidades. No necesitas tarjeta de crédito para empezar. Puedes enviar hasta 100 transacciones de prueba para validar la integración.',
  },
  {
    question: '¿Cómo garantizan la seguridad de mis datos?',
    answer:
      'Usamos encriptación AES-256 en reposo y TLS 1.3 en tránsito. Cumplimos con GDPR, tenemos certificación ISO 27001, y realizamos auditorías de seguridad trimestrales. Nunca almacenamos datos sensibles innecesariamente y ofrecemos opciones de retención personalizables.',
  },
  {
    question: '¿Qué nivel de soporte ofrecen?',
    answer:
      'El plan Starter incluye soporte por email con respuesta en 24h. Professional tiene soporte prioritario 24/7 por email, chat y teléfono. Enterprise incluye un account manager dedicado y sesiones de formación para tu equipo. Todos los planes tienen acceso a documentación completa y ejemplos de código.',
  },
  {
    question: '¿Puedo cancelar en cualquier momento?',
    answer:
      'Sí, sin penalizaciones ni permanencia. Cancelas cuando quieras desde el dashboard. Si cancelas, mantendrás acceso hasta el final del periodo pagado. Exporta tus datos en cualquier momento en formato JSON, CSV o XML.',
  },
  {
    question: '¿Qué sucede si hay un error en el envío?',
    answer:
      'Nuestro sistema tiene reintentos automáticos con backoff exponencial. Si un envío falla, lo reintentamos automáticamente según las mejores prácticas. Recibirás notificaciones en tiempo real de cualquier problema. Además, mantenemos un registro completo de auditoría para trazabilidad total.',
  },
]

export function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-indigo-500/5 to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Preguntas{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              frecuentes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre ComplianceFlow. ¿No encuentras tu respuesta?{' '}
            <a href="/contact" className="text-primary hover:underline">
              Contáctanos
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-background/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">¿Necesitas más información?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/docs"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
            >
              Ver documentación completa
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Hablar con ventas
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
