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
    answer:
      'No. Normalmente se añade una capa ligera que transforma tus datos internos al formato JSON que espera cada endpoint, manteniendo tus sistemas actuales sin modificaciones.',
  },
  {
    question: '¿Dónde se alojan los datos?',
    answer:
      'El procesamiento se realiza en centros de datos de la UE sobre Azure. Los detalles concretos de retención y localización se pactan en el contrato de servicio según tus necesidades de compliance.',
  },
  {
    question: '¿Cumple con GDPR y requisitos de supervisores?',
    answer:
      'ComplianceFlow se diseña siguiendo principios de privacy-by-design, con cifrado en tránsito y en reposo, registro completo de actividad para auditoría y controles de acceso granulares.',
  },
  {
    question: '¿Qué nivel de soporte ofrecen?',
    answer:
      'El plan Sandbox incluye documentación completa. Pro incluye soporte por email con respuesta en 24h. Enterprise incluye soporte prioritario 24/7 con manager dedicado.',
  },
  {
    question: '¿Puedo integrar solo un módulo o necesito usar todos?',
    answer:
      'ComplianceFlow es completamente modular. Puedes empezar con un solo endpoint (por ejemplo, /sii) y añadir más cuando lo necesites. La facturación es por uso real.',
  },
  {
    question: '¿Cómo funcionan los límites de llamadas?',
    answer:
      'Los límites son mensuales y se reinician cada mes. Si superas tu límite, las llamadas adicionales se facturan a una tarifa reducida. Puedes cambiar de plan en cualquier momento.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-spacing bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Respuestas a las dudas más comunes sobre ComplianceFlow
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
