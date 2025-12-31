import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Ingesta',
    description: 'Envías documentos o eventos a través de HTTPS con tu API key.',
  },
  {
    number: '2',
    title: 'Normalización',
    description: 'Se limpian, extraen y validan los datos con modelos especializados.',
  },
  {
    number: '3',
    title: 'Reglas + IA',
    description: 'Se aplican reglas normativas e IA entrenada en patrones de riesgo.',
  },
  {
    number: '4',
    title: 'Respuesta y logs',
    description: 'Recibes una respuesta JSON con identificadores para auditoría.',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-spacing">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Cómo funciona ComplianceFlow
          </h2>
          <p className="text-lg text-muted-foreground">
            El flujo es siempre el mismo: ingesta, normalización, aplicación de reglas + IA y
            respuesta JSON.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step content */}
                <div className="flex-1">
                  <div
                    className={`rounded-lg border bg-card p-6 shadow-sm ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Step number */}
                <div className="relative flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden lg:block" />

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-6 left-8 lg:hidden">
                    <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
