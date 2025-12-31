'use client';

import { useEffect, useState } from 'react';
import { performanceMonitor } from '@/lib/monitoring';
import { cache } from '@/lib/cache';

interface SystemStatus {
  status: 'operational' | 'degraded' | 'down';
  uptime: number;
  lastCheck: string;
}

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'down';
  responseTime: number;
  description: string;
}

export default function StatusPage() {
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    status: 'operational',
    uptime: 99.99,
    lastCheck: new Date().toISOString(),
  });

  const [services, setServices] = useState<ServiceStatus[]>([
    {
      name: 'API',
      status: 'operational',
      responseTime: 45,
      description: 'API REST principal',
    },
    {
      name: 'Base de Datos',
      status: 'operational',
      responseTime: 12,
      description: 'Sistema de almacenamiento',
    },
    {
      name: 'CDN',
      status: 'operational',
      responseTime: 8,
      description: 'Red de distribución de contenido',
    },
    {
      name: 'Autenticación',
      status: 'operational',
      responseTime: 23,
      description: 'Sistema de autenticación',
    },
  ]);

  useEffect(() => {
    // Simular actualización de estado
    const interval = setInterval(() => {
      setSystemStatus((prev) => ({
        ...prev,
        lastCheck: new Date().toISOString(),
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500';
      case 'degraded':
        return 'bg-yellow-500';
      case 'down':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operacional';
      case 'degraded':
        return 'Degradado';
      case 'down':
        return 'Fuera de servicio';
      default:
        return 'Desconocido';
    }
  };

  const cacheStats = cache.getStats();
  const perfMetrics = performanceMonitor.getMetrics();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Estado del Sistema
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Monitoreo en tiempo real de todos nuestros servicios
          </p>
        </div>

        {/* Overall Status */}
        <div className="mb-8 overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                  <div className={`h-8 w-8 rounded-full ${getStatusColor(systemStatus.status)}`} />
                </div>
                <div className="text-white">
                  <h2 className="text-2xl font-bold">Todos los sistemas operacionales</h2>
                  <p className="text-blue-100">Última verificación: hace 30 segundos</p>
                </div>
              </div>
              <div className="text-right text-white">
                <div className="text-4xl font-bold">{systemStatus.uptime}%</div>
                <p className="text-sm text-blue-100">Uptime (30 días)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-8 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Servicios</h3>
          {services.map((service) => (
            <div
              key={service.name}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className={`h-4 w-4 rounded-full ${getStatusColor(service.status)}`} />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {service.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.responseTime}ms
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tiempo de respuesta</p>
                  </div>
                  <div className="rounded-full bg-green-100 px-4 py-2 dark:bg-green-900/20">
                    <span className="font-semibold text-green-700 dark:text-green-400">
                      {getStatusText(service.status)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-semibold text-gray-900 dark:text-white">Caché</h4>
              <svg
                className="h-6 w-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {cacheStats.size}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Elementos en caché</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-semibold text-gray-900 dark:text-white">Performance</h4>
              <svg
                className="h-6 w-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {perfMetrics.length}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Métricas registradas</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-semibold text-gray-900 dark:text-white">Usuarios Activos</h4>
              <svg
                className="h-6 w-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">1,247</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Última hora</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>¿Experimentas problemas? Contáctanos en support@complianceflow.es</p>
          <p className="mt-2">Los datos se actualizan cada 30 segundos</p>
        </div>
      </div>
    </div>
  );
}