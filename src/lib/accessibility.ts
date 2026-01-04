import { useEffect, useRef, RefObject } from 'react'

// ============================================================================
// FOCUS TRAP HOOK
// ============================================================================

/**
 * Trap focus within a container
 * Essential for modals, dialogs, and overlays
 */
export function useFocusTrap<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  enabled: boolean = true
): void {
  useEffect(() => {
    if (!enabled || !ref.current) return

    const element = ref.current
    const focusableElements = element.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]

    // Focus first element on mount
    firstFocusable?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          e.preventDefault()
          lastFocusable?.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          e.preventDefault()
          firstFocusable?.focus()
        }
      }
    }

    element.addEventListener('keydown', handleKeyDown)
    return () => element.removeEventListener('keydown', handleKeyDown)
  }, [ref, enabled])
}

// ============================================================================
// KEYBOARD NAVIGATION HOOK
// ============================================================================

interface UseKeyboardNavigationOptions {
  onEscape?: () => void
  onEnter?: () => void
  onArrowUp?: () => void
  onArrowDown?: () => void
  onArrowLeft?: () => void
  onArrowRight?: () => void
}

/**
 * Handle keyboard navigation
 */
export function useKeyboardNavigation(options: UseKeyboardNavigationOptions): void {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          options.onEscape?.()
          break
        case 'Enter':
          options.onEnter?.()
          break
        case 'ArrowUp':
          e.preventDefault()
          options.onArrowUp?.()
          break
        case 'ArrowDown':
          e.preventDefault()
          options.onArrowDown?.()
          break
        case 'ArrowLeft':
          options.onArrowLeft?.()
          break
        case 'ArrowRight':
          options.onArrowRight?.()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [options])
}

// ============================================================================
// ANNOUNCER HOOK (Screen Reader)
// ============================================================================

/**
 * Announce messages to screen readers
 */
export function useAnnouncer() {
  const announcerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Create announcer element if it doesn't exist
    if (!announcerRef.current) {
      const announcer = document.createElement('div')
      announcer.setAttribute('role', 'status')
      announcer.setAttribute('aria-live', 'polite')
      announcer.setAttribute('aria-atomic', 'true')
      announcer.className = 'sr-only'
      document.body.appendChild(announcer)
      announcerRef.current = announcer
    }

    return () => {
      if (announcerRef.current) {
        document.body.removeChild(announcerRef.current)
        announcerRef.current = null
      }
    }
  }, [])

  const announce = (message: string) => {
    if (announcerRef.current) {
      announcerRef.current.textContent = ''
      setTimeout(() => {
        if (announcerRef.current) {
          announcerRef.current.textContent = message
        }
      }, 100)
    }
  }

  return announce
}

// ============================================================================
// SKIP LINK COMPONENT
// ============================================================================

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
    >
      Saltar al contenido principal
    </a>
  )
}

// ============================================================================
// VISUALLY HIDDEN COMPONENT
// ============================================================================

interface VisuallyHiddenProps {
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
}

export function VisuallyHidden({ children, as: Component = 'span' }: VisuallyHiddenProps) {
  return <Component className="sr-only">{children}</Component>
}

// ============================================================================
// FOCUS VISIBLE UTILITY
// ============================================================================

export function useFocusVisible() {
  useEffect(() => {
    // Add focus-visible polyfill behavior
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard')
      }
    }

    const handleMouseDown = () => {
      document.body.classList.remove('using-keyboard')
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])
}

// ============================================================================
// ROVING TABINDEX (for lists/menus)
// ============================================================================

export function useRovingTabIndex<T extends HTMLElement>(
  itemsRef: RefObject<T[]>,
  currentIndex: number
): void {
  useEffect(() => {
    const items = itemsRef.current
    if (!items) return

    items.forEach((item, index) => {
      if (item) {
        item.tabIndex = index === currentIndex ? 0 : -1
        if (index === currentIndex) {
          item.focus()
        }
      }
    })
  }, [itemsRef, currentIndex])
}
