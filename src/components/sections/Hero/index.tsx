'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { CodeBlock } from '@/components/shared/CodeBlock';

const exampleCode = `curl -X POST https://api.complianceflow.es/v1/sii/invoice \\
  -H "x-api-key: DEMO_KEY" \\
  -F "invoice_pdf=@factura.pdf"`;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 section-spacing">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-primary-400 to-primary-600 opacity-20"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </div>

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col space-y-8">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium w-fit">
              <Zap className="mr-2 h-4 w-4 text-primary" />
              Infraestructura sobre Azure + Cloudflare
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Compliance{' '}
              <span className="gradient-text">SII, PSD2 y KYC</span> en una sola API
            </h1>

            <p className="text-lg text-muted-foreground sm:text-xl">
              Automatiza SII, Verifactu, KYC, prevención de blanqueo y análisis documental legal en
              segundos, sin ampliar tu equipo de cumplimiento.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-4">
              {[
                'SII AEAT · Verifactu',
                'PSD2 · KYC · AML',
                'OCR · Análisis documental',
              ].map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center rounded-md border bg-background px-3 py-1 text-sm font-medium"
                >
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link href="/#demo">
                  Probar 1.000 llamadas gratis
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#pricing">Ver precios</Link>
              </Button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t">
              <div>
                <div className="text-2xl font-bold">2 s</div>
                <div className="text-sm text-muted-foreground">Respuesta media</div>
              </div>
              <div>
                <div className="text-2xl font-bold">97%</div>
                <div className="text-sm text-muted-foreground">Precisión KYC</div>
              </div>
              <div>
                <div className="text-2xl font-bold">75%</div>
                <div className="text-sm text-muted-foreground">Ahorro tiempo</div>
              </div>
            </div>
          </div>

          {/* Right column - Code example */}
          <div className="relative">
            <div className="rounded-lg border bg-card p-6 shadow-xl">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Ejemplo real de API</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Envía una factura al SII desde tu ERP
                </p>
              </div>
              <CodeBlock code={exampleCode} language="bash" />
              <p className="text-xs text-muted-foreground mt-4">
                Entorno sandbox · No uses datos sensibles reales hasta firmar contrato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
