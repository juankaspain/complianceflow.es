'use client';

import { useEffect, useState } from 'react';

export default function LiveMetricsBar() {
  const [metrics, setMetrics] = useState({
    apiCalls: 12847523,
    auditsToday: 1847,
    activeUsers: 523,
    uptime: 99.99,
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        apiCalls: prev.apiCalls + Math.floor(Math.random() * 100),
        auditsToday: prev.auditsToday + Math.floor(Math.random() * 3),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5) - 2,
        uptime: 99.99,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-950 border-y border-gray-800 py-4 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            </span>
            <span className="text-green-400 font-semibold">LIVE</span>
          </div>
          
          <span className="text-gray-600">|</span>
          
          <div className="hidden sm:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white font-mono font-semibold">
                {metrics.apiCalls.toLocaleString('es-ES')}
              </span>
              <span className="text-gray-500 text-xs">API calls hoy</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-mono font-semibold">
                {metrics.auditsToday.toLocaleString('es-ES')}
              </span>
              <span className="text-gray-500 text-xs">auditorías pasadas</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-white font-mono font-semibold">
                {metrics.activeUsers.toLocaleString('es-ES')}
              </span>
              <span className="text-gray-500 text-xs">usuarios online</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white font-mono font-semibold">
                {metrics.uptime}%
              </span>
              <span className="text-gray-500 text-xs">uptime este mes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
