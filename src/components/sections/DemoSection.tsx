'use client';

import { useState } from 'react';
import { FileText, CreditCard, Shield, Upload, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DemoSection() {
  const [loadingSII, setLoadingSII] = useState(false);
  const [loadingKYC, setLoadingKYC] = useState(false);
  const [loadingFraude, setLoadingFraude] = useState(false);
  
  const [resultSII, setResultSII] = useState(false);
  const [resultKYC, setResultKYC] = useState(false);
  const [resultFraude, setResultFraude] = useState(false);

  const processSII = () => {
    setLoadingSII(true);
    setTimeout(() => {
      setLoadingSII(false);
      setResultSII(true);
    }, 2000);
  };

  const processKYC = () => {
    setLoadingKYC(true);
    setTimeout(() => {
      setLoadingKYC(false);
      setResultKYC(true);
    }, 2500);
  };

  const processFraude = () => {
    setLoadingFraude(true);
    setTimeout(() => {
      setLoadingFraude(false);
      setResultFraude(true);
    }, 1800);
  };

  return (
    <section className="relative py-32 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Prueba nuestras
            <span className="block mt-2 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              APIs en vivo
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experimenta la velocidad y precisión de ComplianceFlow en tiempo real
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Demo SII */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                <FileText className="h-8 w-8 text-primary-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Demo SII
              </h3>
              <p className="text-gray-400 mb-6">
                Sube una factura PDF y obtén la respuesta SII-ready en JSON.
              </p>

              <div className="space-y-4">
                <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-700 rounded-xl hover:border-primary/50 cursor-pointer transition-colors group/upload">
                  <div className="text-center">
                    <Upload className="h-8 w-8 text-gray-500 mx-auto mb-2 group-hover/upload:text-primary-400 transition-colors" />
                    <span className="text-sm text-gray-500 group-hover/upload:text-gray-400">Seleccionar archivo PDF</span>
                  </div>
                  <input type="file" className="hidden" accept=".pdf" />
                </label>

                <Button
                  onClick={processSII}
                  disabled={loadingSII}
                  className="w-full bg-primary hover:bg-primary-600 text-white"
                >
                  {loadingSII ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    'Procesar factura'
                  )}
                </Button>
              </div>

              {resultSII && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-green-400 mb-2">Factura procesada</p>
                      <pre className="text-xs text-gray-400 overflow-x-auto">
{`{
  "nif": "B12345678",
  "amount": 1250.00,
  "vat": 262.50,
  "status": "valid"
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Demo KYC */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                <CreditCard className="h-8 w-8 text-primary-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Demo KYC
              </h3>
              <p className="text-gray-400 mb-6">
                Simula verificación de identidad con documento + selfie.
              </p>

              <div className="space-y-4">
                <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-700 rounded-xl hover:border-primary/50 cursor-pointer transition-colors group/upload">
                  <div className="text-center">
                    <Upload className="h-8 w-8 text-gray-500 mx-auto mb-2 group-hover/upload:text-primary-400 transition-colors" />
                    <span className="text-sm text-gray-500 group-hover/upload:text-gray-400">Seleccionar documentos</span>
                  </div>
                  <input type="file" className="hidden" accept="image/*" multiple />
                </label>

                <Button
                  onClick={processKYC}
                  disabled={loadingKYC}
                  className="w-full bg-primary hover:bg-primary-600 text-white"
                >
                  {loadingKYC ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verificando...
                    </>
                  ) : (
                    'Verificar identidad'
                  )}
                </Button>
              </div>

              {resultKYC && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-green-400 mb-2">Verificación exitosa</p>
                      <div className="space-y-2 text-xs text-gray-400">
                        <div className="flex justify-between">
                          <span>Score de confianza:</span>
                          <span className="text-green-400 font-medium">98%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Documento:</span>
                          <span className="text-green-400 font-medium">Válido</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Liveness:</span>
                          <span className="text-green-400 font-medium">Aprobado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Demo Fraude */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                <Shield className="h-8 w-8 text-primary-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Demo Fraude
              </h3>
              <p className="text-gray-400 mb-6">
                Modifica el JSON y observa cómo cambia el score de riesgo.
              </p>

              <div className="space-y-4">
                <textarea
                  className="w-full h-32 p-4 bg-gray-900 border border-gray-700 rounded-xl text-sm text-gray-300 font-mono focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors"
                  defaultValue={`{
  "amount": 2500,
  "currency": "EUR",
  "ip_country": "ES",
  "velocity_24h": 5,
  "card_country": "ES",
  "user_age_days": 45
}`}
                />

                <Button
                  onClick={processFraude}
                  disabled={loadingFraude}
                  className="w-full bg-primary hover:bg-primary-600 text-white"
                >
                  {loadingFraude ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analizando...
                    </>
                  ) : (
                    'Calcular riesgo'
                  )}
                </Button>
              </div>

              {resultFraude && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-green-400 mb-3">Análisis completado</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>Riesgo:</span>
                          <span className="text-green-400 font-medium">Bajo (15%)</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Transacción aprobada. Todos los indicadores dentro de parámetros normales.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            ¿Quieres probar con tus propios datos?
          </p>
          <a
            href="/signup"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 text-white font-medium transition-all"
          >
            Crear cuenta gratuita
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
