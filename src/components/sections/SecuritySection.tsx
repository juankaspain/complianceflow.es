'use client';

import { Shield, Lock, Cloud, FileCheck } from 'lucide-react';

const certifications = [
  {
    icon: Lock,
    title: 'TLS 1.3 & AES-256',
    description: 'Cifrado end-to-end en tránsito y en reposo',
  },
  {
    icon: Shield,
    title: 'GDPR Compliant',
    description: 'Datos procesados en la UE, DPO disponible',
  },
  {
    icon: Cloud,
    title: 'Azure Enterprise',
    description: 'Infraestructura con certificación ISO 27001',
  },
  {
    icon: FileCheck,
    title: 'SOC 2 Type II',
    description: 'Auditorías independientes anuales (en proceso)',
  },
];

export default function SecuritySection() {
  return (
    <section className="relative py-32 bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Seguridad y compliance
            <span className="block mt-2 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              certificados
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Infraestructura enterprise-grade con las certificaciones más exigentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                    <Icon className="h-8 w-8 text-primary-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional security features */}
        <div className="mt-16 pt-16 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Pentesting periódico
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Bug bounty program
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Backups cada 6h
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              DR plan &lt; 4h RTO
            </span>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/security"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
            >
              Ver detalles técnicos
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
