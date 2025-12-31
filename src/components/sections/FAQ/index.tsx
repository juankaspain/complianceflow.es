'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Necesito cambiar mi ERP o core bancario para usar ComplianceFlow?',
    answer: 'No. Normalmente se añade una capa ligera que transforma tus datos internos al formato JSON que espera cada endpoint, manteniendo tus sistemas actuales.',
  },
  {
    question: '¿Dónde se alojan los datos?',
    answer: 'El procesamiento se realiza en centros de datos de la UE sobre Azure; los detalles concretos de retención se pactan en el contrato de servicio.',
  },
  {
    question: '¿Cumple con GDPR y requisitos de supervisores?',
    answer: 'ComplianceFlow se diseña siguiendo principios de privacy-by-design, cifrado en tránsito y en reposo y registro de actividad para auditoría.',
  },
  {
    question: '¿Cuánto tiempo tarda la integración?',
    answer: 'Para un caso de uso simple (ej. envío de facturas al SII), un desarrollador puede tener la integración lista en 1-2 días. Casos más complejos pueden requerir 1-2 semanas.',
  },
  {
    question: '¿Qué soporte ofrecen?',
    answer: 'Plan Sandbox: documentación y foro comunitario. Plan Pro: soporte por email con respuesta en 24h. Enterprise: soporte prioritario 24/7 con SLA personalizado.',
  },
  {
    question: '¿Puedo cancelar en cualquier momento?',
    answer: 'Sí, no hay permanencia. Puedes cancelar tu suscripción en cualquier momento desde el panel de control.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Resolvemos las dudas más comunes sobre ComplianceFlow
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}