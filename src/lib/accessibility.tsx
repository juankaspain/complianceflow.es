'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Accessibility utilities and components
 * WCAG 2.1 Level AA compliance
 */

// Skip to main content link
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      Saltar al contenido principal
    </a>
  )
}

// Live region announcer for screen readers
export function LiveRegion() {
  return (
    <>
      <div
        id="live-region-polite"
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      />
      <div
        id="live-region-assertive"
        className="sr-only"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      />
    </>
  )
}

// Announce message to screen readers
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const region = document.getElementById(`live-region-${priority}`)
  if (region) {
    region.textContent = message
    setTimeout(() => {
      region.textContent = ''
    }, 1000)
  }
}

// Focus trap for modals
export function useFocusTrap(containerRef: React.RefObject<HTMLElement>, isActive: boolean) {
  useEffect(() => {
    if (!isActive || !containerRef.current) return

    const container = containerRef.current
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus()
          e.preventDefault()
        }
      }
    }

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        container.dispatchEvent(new CustomEvent('closeModal'))
      }
    }

    document.addEventListener('keydown', handleTabKey)
    document.addEventListener('keydown', handleEscapeKey)
    firstElement?.focus()

    return () => {
      document.removeEventListener('keydown', handleTabKey)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [containerRef, isActive])
}

// Route announcer for screen readers (on page change)
export function RouteAnnouncer() {
  const pathname = usePathname()

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Página de inicio',
      '/pricing': 'Planes y precios',
      '/docs': 'Documentación',
      '/blog': 'Blog',
      '/contact': 'Contacto',
      '/privacy': 'Política de privacidad',
      '/terms': 'Términos y condiciones',
    }

    const title = titles[pathname] || 'Página cargada'
    announceToScreenReader(`Navegado a: ${title}`, 'polite')
  }, [pathname])

  return null
}

// Reduced motion detection
export function useReducedMotion() {
  if (typeof window === 'undefined') return false

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  return mediaQuery.matches
}

// High contrast detection
export function useHighContrast() {
  if (typeof window === 'undefined') return false

  const mediaQuery = window.matchMedia('(prefers-contrast: high)')
  return mediaQuery.matches
}

// ARIA landmarks helper
export const landmarks = {
  main: {
    role: 'main',
    id: 'main-content',
    'aria-label': 'Contenido principal',
  },
  navigation: {
    role: 'navigation',
    'aria-label': 'Navegación principal',
  },
  search: {
    role: 'search',
    'aria-label': 'Búsqueda',
  },
  complementary: {
    role: 'complementary',
    'aria-label': 'Contenido complementario',
  },
  contentinfo: {
    role: 'contentinfo',
    'aria-label': 'Información del sitio',
  },
} as const

// Accessible button props helper
export function getAccessibleButtonProps(
  label: string,
  options?: {
    disabled?: boolean
    pressed?: boolean
    expanded?: boolean
    controls?: string
  }
) {
  return {
    'aria-label': label,
    'aria-disabled': options?.disabled,
    'aria-pressed': options?.pressed,
    'aria-expanded': options?.expanded,
    'aria-controls': options?.controls,
    role: 'button',
    tabIndex: options?.disabled ? -1 : 0,
  }
}

// Accessible link props helper
export function getAccessibleLinkProps(label: string, isExternal: boolean = false) {
  return {
    'aria-label': label,
    ...(isExternal && {
      target: '_blank',
      rel: 'noopener noreferrer',
      'aria-label': `${label} (abre en nueva pestaña)`,
    }),
  }
}
