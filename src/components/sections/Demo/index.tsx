'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export function Demo() {
  return (
    <section id="demo" className="section-spacing bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Prueba rápida en sandbox
          </h2>
          <p className="text-lg text-muted-foreground">
            Estas demos se conectan al entorno sandbox en{' '}
            <code className="text-primary">api.complianceflow.es</code>. Ideal para ver tiempos de
            respuesta y estructura de datos.
          </p>
        </div>

        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Las demos interactivas completas estarán disponibles próximamente. Mientras tanto, puedes
            ver la documentación de la API o contactar con nosotros para acceso temprano.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Demo SII</CardTitle>
              <CardDescription>Sube una factura y obtén JSON SII-ready</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border-2 border-dashed border-muted-foreground/25 p-8 text-center">
                  <p className="text-sm text-muted-foreground">Arrastra un PDF aquí</p>
                </div>
                <Button className="w-full" disabled>
                  Llamar API (Próximamente)
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Demo KYC</CardTitle>
              <CardDescription>Simula un alta KYC con imágenes de prueba</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border-2 border-dashed border-muted-foreground/25 p-8 text-center">
                  <p className="text-sm text-muted-foreground">DNI + Selfie</p>
                </div>
                <Button className="w-full" disabled>
                  Llamar API (Próximamente)
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Demo Fraude</CardTitle>
              <CardDescription>Edita el JSON y observa el riesgo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md bg-muted p-4">
                  <code className="text-xs">
                    {JSON.stringify(
                      {
                        amount: 2500,
                        currency: 'EUR',
                        ip_country: 'ES',
                      },
                      null,
                      2
                    )}
                  </code>
                </div>
                <Button className="w-full" disabled>
                  Calcular riesgo (Próximamente)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
