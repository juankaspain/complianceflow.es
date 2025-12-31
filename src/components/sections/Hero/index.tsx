'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Zap className="h-3 w-3" />
                Nuevo: Soporte completo para Verifactu 2025
              </Badge>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Compliance{' '}
                <span className="text-primary">SII, PSD2 y KYC</span>{' '}
                en una sola API
              </h1>
              
              <p className="text-lg text-muted-foreground sm:text-xl">
                Automatiza SII, Verifactu, KYC, prevención de blanqueo y análisis documental legal en segundos, sin ampliar tu equipo de cumplimiento.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline">SII AEAT · Verifactu</Badge>
              <Badge variant="outline">PSD2 · KYC · AML</Badge>
              <Badge variant="outline">Azure + Cloudflare</Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#demo">
                  Probar 1.000 llamadas gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#pricing">Ver precios</Link>
              </Button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">2s</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Respuesta media
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">97%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Exactitud KYC
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">75%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Ahorro tiempo
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Code example */}
          <div className="relative">
            <div className="relative rounded-lg border bg-card shadow-2xl">
              <div className="flex items-center gap-2 border-b px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-muted-foreground">api-request.sh</span>
              </div>
              <div className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="language-bash">{`curl -X POST https://api.complianceflow.es/v1/sii/invoice \\
  -H "x-api-key: DEMO_KEY" \\
  -F "invoice_pdf=@factura.pdf"

# Respuesta en ~2s
{
  "status": "success",
  "sii_id": "SII2025-001234",
  "validation": "approved",
  "timestamp": "2025-12-31T04:30:00Z"
}`}</code>
                </pre>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="hidden lg:block absolute -right-4 -top-4">
              <div className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg">
                <Shield className="inline h-4 w-4 mr-2" />
                99.9% Uptime
              </div>
            </div>
            <div className="hidden lg:block absolute -left-4 -bottom-4">
              <div className="rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
                <TrendingUp className="inline h-4 w-4 mr-2" />
                GDPR Compliant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}