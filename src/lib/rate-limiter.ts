/**
 * Client-side rate limiting utility
 * Prevents API abuse and improves UX
 */

interface RateLimitConfig {
  maxRequests: number
  windowMs: number
  message?: string
}

interface RateLimitState {
  requests: number[]
  blocked: boolean
  resetAt: number
}

// ============================================================================
// RATE LIMITER CLASS
// ============================================================================

class RateLimiter {
  private states: Map<string, RateLimitState> = new Map()

  /**
   * Check if request is allowed
   */
  isAllowed(key: string, config: RateLimitConfig): boolean {
    const now = Date.now()
    const state = this.getState(key)

    // Remove old requests outside the window
    state.requests = state.requests.filter((timestamp) => now - timestamp < config.windowMs)

    // Check if blocked
    if (state.blocked && now < state.resetAt) {
      return false
    }

    // Check limit
    if (state.requests.length >= config.maxRequests) {
      state.blocked = true
      state.resetAt = now + config.windowMs
      this.setState(key, state)
      return false
    }

    // Allow and record
    state.requests.push(now)
    state.blocked = false
    this.setState(key, state)
    return true
  }

  /**
   * Get remaining requests
   */
  getRemaining(key: string, config: RateLimitConfig): number {
    const now = Date.now()
    const state = this.getState(key)

    state.requests = state.requests.filter((timestamp) => now - timestamp < config.windowMs)

    return Math.max(0, config.maxRequests - state.requests.length)
  }

  /**
   * Get time until reset (ms)
   */
  getResetTime(key: string): number {
    const state = this.getState(key)
    if (!state.blocked) return 0
    return Math.max(0, state.resetAt - Date.now())
  }

  /**
   * Reset limit for key
   */
  reset(key: string): void {
    this.states.delete(key)
  }

  /**
   * Reset all limits
   */
  resetAll(): void {
    this.states.clear()
  }

  private getState(key: string): RateLimitState {
    if (!this.states.has(key)) {
      this.states.set(key, {
        requests: [],
        blocked: false,
        resetAt: 0,
      })
    }
    return this.states.get(key)!
  }

  private setState(key: string, state: RateLimitState): void {
    this.states.set(key, state)
  }
}

// ============================================================================
// SINGLETON INSTANCE
// ============================================================================

export const rateLimiter = new RateLimiter()

// ============================================================================
// RATE LIMIT CONFIGS
// ============================================================================

export const RATE_LIMITS = {
  // Form submissions
  newsletter: {
    maxRequests: 3,
    windowMs: 60 * 60 * 1000, // 1 hour
    message: 'Demasiadas suscripciones. Inténtalo en 1 hora.',
  },
  contact: {
    maxRequests: 2,
    windowMs: 60 * 60 * 1000, // 1 hour
    message: 'Demasiados mensajes. Inténtalo en 1 hora.',
  },
  trial: {
    maxRequests: 1,
    windowMs: 24 * 60 * 60 * 1000, // 24 hours
    message: 'Ya solicitaste una prueba. Espera 24 horas.',
  },

  // API calls
  search: {
    maxRequests: 20,
    windowMs: 60 * 1000, // 1 minute
    message: 'Demasiadas búsquedas. Espera un momento.',
  },
  api: {
    maxRequests: 100,
    windowMs: 60 * 1000, // 1 minute
    message: 'Límite de API alcanzado. Espera 1 minuto.',
  },
} as const

// ============================================================================
// REACT HOOK
// ============================================================================

import { useState, useCallback } from 'react'

export function useRateLimit(key: string, config: RateLimitConfig) {
  const [isBlocked, setIsBlocked] = useState(false)
  const [remaining, setRemaining] = useState(config.maxRequests)
  const [resetIn, setResetIn] = useState(0)

  const checkLimit = useCallback((): boolean => {
    const allowed = rateLimiter.isAllowed(key, config)
    setIsBlocked(!allowed)
    setRemaining(rateLimiter.getRemaining(key, config))
    setResetIn(rateLimiter.getResetTime(key))
    return allowed
  }, [key, config])

  const reset = useCallback(() => {
    rateLimiter.reset(key)
    setIsBlocked(false)
    setRemaining(config.maxRequests)
    setResetIn(0)
  }, [key, config.maxRequests])

  return {
    isBlocked,
    remaining,
    resetIn,
    checkLimit,
    reset,
  }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Format reset time for display
 */
export function formatResetTime(ms: number): string {
  if (ms === 0) return 'ahora'

  const seconds = Math.ceil(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)

  if (hours > 0) return `${hours}h`
  if (minutes > 0) return `${minutes}m`
  return `${seconds}s`
}
