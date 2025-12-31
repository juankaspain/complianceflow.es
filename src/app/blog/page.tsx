import type { Metadata } from 'next';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Noticias y artículos sobre compliance y seguridad.',
};

export default function BlogPage() {
  const posts = [
    {
      title: 'Guía completa de GDPR para desarrolladores',
      excerpt: 'Todo lo que necesitas saber sobre el Reglamento General de Protección de Datos en 2025.',
      date: '2025-12-15',
      readTime: '8 min',
      category: 'Compliance',
      image: '/blog/gdpr.jpg',
    },
    {
      title: 'Cómo implementar autenticación multifactor',
      excerpt: 'Mejores prácticas para añadir MFA a tus aplicaciones de forma segura.',
      date: '2025-12-10',
      readTime: '6 min',
      category: 'Seguridad',
      image: '/blog/mfa.jpg',
    },
    {
      title: 'ISO 27001: Certificación paso a paso',
      excerpt: 'Proceso completo para obtener la certificación ISO 27001 en tu empresa.',
      date: '2025-12-05',
      readTime: '10 min',
      category: 'Certificaciones',
      image: '/blog/iso.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl mb-6">
              Blog
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400">
              Noticias, guías y mejores prácticas sobre compliance y seguridad.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/20">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Leer más <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
