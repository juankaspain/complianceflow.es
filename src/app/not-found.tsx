'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { trackError } from '@/lib/analytics/events';

export default function NotFound() {
  useEffect(() => {
    trackError('404', window.location.pathname);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center">
        {/* 404 Illustration */}
        <div className="mb-8 inline-block">
          <svg
            className="h-64 w-64 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Página no encontrada
        </h2>
        <p className="mb-8 text-gray-600 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida. 
          Verifica la URL o vuelve al inicio.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Volver al inicio
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Página anterior
          </button>
        </div>

        {/* Help Links */}
        <div className="mt-12 text-sm text-gray-600">
          <p className="mb-2">¿Necesitas ayuda?</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Contactar soporte
            </Link>
            <span>•</span>
            <Link href="/help" className="hover:text-blue-600 transition-colors">
              Centro de ayuda
            </Link>
            <span>•</span>
            <Link href="/sitemap" className="hover:text-blue-600 transition-colors">
              Mapa del sitio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}