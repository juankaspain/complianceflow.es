import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 px-8 py-16 text-center shadow-2xl md:px-16 md:py-24">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-4">
              ¿Listo para automatizar tu compliance?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-primary-100 mb-8">
              Únete a decenas de empresas que ya han reducido su tiempo de compliance en un 75%.
              Empieza gratis hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link href="/#demo">
                  Probar gratis ahora
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <Link href="/contacto">Hablar con ventas</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
