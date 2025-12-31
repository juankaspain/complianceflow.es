'use client';

import { useEffect } from 'react';
import { captureException } from '@/lib/sentry';
import { trackError } from '@/lib/analytics/events';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to Sentry and analytics
    captureException(error, {
      digest: error.digest,
      pathname: window.location.pathname,
    });
    trackError('runtime_error', error.message);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 px-4">
      <div className="text-center max-w-2xl">
        {/* Error Illustration */}
        <div className="mb-8 inline-block">
          <svg
            className="h-64 w-64 text-red-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          ¡Oops! Algo salió mal
        </h1>
        <p className="mb-2 text-lg text-gray-700">
          Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado.
        </p>
        {error.digest && (
          <p className="mb-6 text-sm text-gray-500 font-mono">
            ID de error: {error.digest}
          </p>
        )}

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 rounded-lg bg-red-50 border border-red-200 p-4 text-left">
            <h3 className="text-sm font-semibold text-red-800 mb-2">
              Detalles del error (solo visible en desarrollo):
            </h3>
            <pre className="text-xs text-red-700 overflow-auto max-h-40">
              {error.message}
              {error.stack}
            </pre>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Intentar de nuevo
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
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
          </a>
        </div>

        {/* Support Info */}
        <div className="mt-12 rounded-lg bg-white border border-gray-200 p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            ¿Necesitas ayuda inmediata?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Nuestro equipo de soporte está disponible para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
            <a
              href="mailto:support@complianceflow.es"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              📧 support@complianceflow.es
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              💬 Formulario de contacto
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="/help"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              📚 Centro de ayuda
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}