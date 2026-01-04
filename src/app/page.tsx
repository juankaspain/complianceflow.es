import HeroSection from '@/components/HeroSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import StatsSection from '@/components/StatsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Enhanced Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Grid */}
      <FeaturesGrid />

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 animated-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para Simplificar tu Compliance?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Únete a más de 500 empresas que ya confían en ComplianceFlow para automatizar su cumplimiento normativo
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-50 w-full sm:w-auto">
                Comenzar Gratis →
              </button>
              <button className="btn-secondary bg-transparent text-white border-white hover:bg-white/10 w-full sm:w-auto">
                Agendar Demo
              </button>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Sin tarjeta de crédito • Configuración en 5 minutos • Soporte en español
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
