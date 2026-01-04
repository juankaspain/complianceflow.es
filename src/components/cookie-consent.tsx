'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, Settings } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else {
      const saved = JSON.parse(consent)
      setPreferences(saved)
      applyConsent(saved)
    }
  }, [])

  const applyConsent = (prefs: typeof preferences) => {
    // Enable/disable Google Analytics based on consent
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
      })
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    applyConsent(allAccepted)
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(necessaryOnly)
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly))
    applyConsent(necessaryOnly)
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    applyConsent(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="container max-w-6xl mx-auto">
          <div className="bg-background border border-border rounded-lg shadow-2xl backdrop-blur-sm">
            {!showSettings ? (
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Cookie className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      Usamos cookies para mejorar tu experiencia
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Utilizamos cookies necesarias para el funcionamiento del sitio y opcionales
                      para analytics. Puedes aceptar todas o personalizar tus preferencias.{' '}
                      <a href="/privacy" className="text-primary hover:underline">
                        Leer más
                      </a>
                    </p>
                  </div>
                  <button
                    onClick={acceptNecessary}
                    className="text-muted-foreground hover:text-foreground"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    Personalizar
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors"
                  >
                    Solo necesarias
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold sm:ml-auto"
                  >
                    Aceptar todas
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Preferencias de cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Elige qué tipo de cookies quieres permitir
                    </p>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start justify-between p-4 border border-border rounded-lg bg-accent/50">
                    <div className="flex-1">
                      <div className="font-medium mb-1">Necesarias</div>
                      <p className="text-sm text-muted-foreground">
                        Esenciales para el funcionamiento del sitio. No se pueden desactivar.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input type="checkbox" checked disabled className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-start justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium mb-1">Analytics</div>
                      <p className="text-sm text-muted-foreground">
                        Nos ayudan a entender cómo usas el sitio para mejorarlo.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({ ...preferences, analytics: e.target.checked })
                        }
                        className="w-4 h-4"
                      />
                    </div>
                  </div>

                  <div className="flex items-start justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium mb-1">Marketing</div>
                      <p className="text-sm text-muted-foreground">
                        Usadas para mostrarte contenido relevante y anuncios personalizados.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) =>
                          setPreferences({ ...preferences, marketing: e.target.checked })
                        }
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={savePreferences}
                    className="flex-1 px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
                  >
                    Guardar preferencias
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
