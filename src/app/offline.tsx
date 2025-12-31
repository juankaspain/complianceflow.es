'use client';

import Link from 'next/link';

export default function Offline() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="text-center">
        {/* Offline Illustration */}
        <div className="mb-8 inline-block">
          <svg
            className="h-64 w-64 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9.172 16.172a4 4 0 015.656 0M6.343 13.343a8 8 0 0111.314 0M3.515 10.515c4.686-4.686 12.284-4.686 16.97 0" />
            <path d="M12 20h.01" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </svg>
        </div>

        {/* Message */}
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Sin conexión
        </h1>
        <p className="mb-8 text-gray-600 max-w-md mx-auto">
          Parece que no tienes conexión a internet. Por favor, verifica tu 
          conexión e intenta de nuevo.
        </p>

        {/* Tips */}
        <div className="mb-8 rounded-lg bg-white border border-gray-200 p-6 max-w-md mx-auto text-left">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Mientras tanto, puedes:
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Ver contenido previamente cargado</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Verificar tu conexión WiFi o datos móviles</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Intentar recargar la página</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Reintentar
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>

        {/* Connection Status */}
        <div className="mt-8 text-sm text-gray-500">
          <p id="connection-status">Verificando conexión...</p>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            function updateConnectionStatus() {
              const status = document.getElementById('connection-status');
              if (navigator.onLine) {
                status.textContent = '✓ Conexión restaurada - Recargando...';
                status.className = 'text-green-600 font-medium';
                setTimeout(() => window.location.reload(), 1000);
              } else {
                status.textContent = '✗ Sin conexión a internet';
                status.className = 'text-red-600';
              }
            }
            
            window.addEventListener('online', updateConnectionStatus);
            window.addEventListener('offline', updateConnectionStatus);
            updateConnectionStatus();
          `,
        }}
      />
    </div>
  );
}