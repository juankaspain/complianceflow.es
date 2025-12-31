import { Upload, FileSearch, Brain, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Ingesta',
    description: 'Envías documentos o eventos a través de HTTPS con tu API key.',
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Normalización',
    description: 'Se limpian, extraen y validan los datos con modelos especializados.',
  },
  {
    number: '03',
    icon: Brain,
    title: 'Reglas + IA',
    description: 'Se aplican reglas normativas e IA entrenada en patrones de riesgo.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Respuesta y logs',
    description: 'Recibes una respuesta JSON con identificadores para auditoría.',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Cómo funciona ComplianceFlow
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            El flujo es siempre el mismo: ingesta por API, extracción y normalización, aplicación de reglas + IA y respuesta JSON lista para guardar en tu sistema.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-border" />
                )}
                
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 ring-8 ring-background">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="mb-2 text-sm font-semibold text-primary">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}