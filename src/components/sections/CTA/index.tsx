import { Button } from '@/components/ui/button';
import { ArrowRight, Code2 } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-20">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-white/10" />
          
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <Code2 className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-6">
              Empieza a integrar hoy mismo
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              1.000 llamadas gratis para probar todos los endpoints. Sin tarjeta de crédito. Documentación completa en español e inglés.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#demo">
                  Probar gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link href="/documentacion">Ver documentación</Link>
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-white/70">
              🔒 Datos cifrados · 🇪🇺 Servidores en UE · ✅ GDPR compliant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}