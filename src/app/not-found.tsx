'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { logger } from '@/lib/logger';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    logger.warn('404 page viewed', {
      path: window.location.pathname,
      referrer: document.referrer,
    });
  }, []);

  const suggestions = [
    { title: 'Inicio', href: '/', description: 'Vuelve a la página principal' },
    { title: 'Características', href: '/features', description: 'Descubre lo que podemos hacer' },
    { title: 'Precios', href: '/pricing', description: 'Encuentra el plan perfecto' },
    { title: 'Contacto', href: '/contact', description: 'Habla con nuestro equipo' },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="w-full max-w-4xl text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] font-black leading-none text-gray-200 dark:text-gray-800">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className={`h-16 w-16 text-blue-600 dark:text-blue-400 ${
                    mounted ? 'animate-bounce' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mb-8 space-y-3">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            ¡Oops! Página no encontrada
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Parece que esta página se ha tomado unas vacaciones de cumplimiento. Pero no te
            preocupes, tenemos muchas otras páginas que cumplen con todos los estándares.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="mx-auto max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar en ComplianceFlow..."
                className="w-full rounded-full border border-gray-300 bg-white px-6 py-4 pl-12 text-gray-900 shadow-lg transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const query = e.currentTarget.value;
                    window.location.href = `/?search=${encodeURIComponent(query)}`;
                  }
                }}
              />
              <svg
                className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="mb-8">
          <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
            Te sugerimos estas páginas:
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {suggestions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all hover:border-blue-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400"
              >
                <h4 className="mb-2 font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver atrás
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Ir al inicio
          </Link>
        </div>

        {/* Fun fact */}
        <div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-900/20">
          <p className="text-sm text-blue-900 dark:text-blue-100">
            <span className="font-semibold">💡 ¿Sabías que?</span> El código de error 404 fue
            creado en el CERN en 1992. La sala 404 era donde estaban los servidores originales de
            la web.
          </p>
        </div>
      </div>
    </div>
  );
}