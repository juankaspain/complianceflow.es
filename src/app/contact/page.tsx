import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con nuestro equipo.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl mb-6">
              ¿Hablamos?
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400">
              Nuestro equipo está aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Información de contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:hello@complianceflow.es" className="text-gray-400 hover:text-primary">
                      hello@complianceflow.es
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Teléfono</h3>
                    <a href="tel:+34900000000" className="text-gray-400 hover:text-primary">
                      +34 900 000 000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Oficina</h3>
                    <p className="text-gray-400">
                      Madrid, España<br />
                      Calle Ejemplo 123
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Chat en vivo</h3>
                    <p className="text-gray-400">Disponible L-V 9:00-18:00 CET</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/50 hover:bg-primary-600 transition-all"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
