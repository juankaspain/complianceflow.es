/**
 * Error Monitoring & Reporting System
 * Integrates with Sentry, LogRocket, or custom backend
 */

// ============================================================================
// TYPES
// ============================================================================

interface ErrorContext {
  user?: {
    id: string
    email: string
    name: string
  }
  extra?: Record<string, any>
  tags?: Record<string, string>
  level?: 'fatal' | 'error' | 'warning' | 'info' | 'debug'
}

// ============================================================================
// ERROR REPORTER
// ============================================================================

class ErrorReporter {
  private static instance: ErrorReporter
  private isInitialized = false
  private context: ErrorContext = {}

  private constructor() {}

  static getInstance(): ErrorReporter {
    if (!ErrorReporter.instance) {
      ErrorReporter.instance = new ErrorReporter()
    }
    return ErrorReporter.instance
  }

  /**
   * Initialize error monitoring
   */
  init(options: { dsn?: string; environment?: string } = {}) {
    if (this.isInitialized) return
    if (typeof window === 'undefined') return

    // Initialize Sentry or other service
    // if (options.dsn) {
    //   Sentry.init({
    //     dsn: options.dsn,
    //     environment: options.environment || process.env.NODE_ENV,
    //     tracesSampleRate: 1.0,
    //   })
    // }

    // Global error handler
    window.addEventListener('error', (event) => {
      this.captureError(event.error, {
        extra: {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      })
    })

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError(event.reason, {
        extra: { type: 'unhandledRejection' },
      })
    })

    this.isInitialized = true
  }

  /**
   * Set user context
   */
  setUser(user: ErrorContext['user']) {
    this.context.user = user
    // Sentry.setUser(user)
  }

  /**
   * Set custom context
   */
  setContext(key: string, value: any) {
    if (!this.context.extra) {
      this.context.extra = {}
    }
    this.context.extra[key] = value
    // Sentry.setContext(key, value)
  }

  /**
   * Add breadcrumb
   */
  addBreadcrumb(message: string, data?: Record<string, any>) {
    // Sentry.addBreadcrumb({
    //   message,
    //   data,
    //   timestamp: Date.now(),
    // })

    console.debug('[Breadcrumb]', message, data)
  }

  /**
   * Capture error
   */
  captureError(error: Error, context?: ErrorContext) {
    const level = context?.level || 'error'

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Error Captured]', error, context)
      return
    }

    // Send to monitoring service
    // Sentry.captureException(error, {
    //   level,
    //   user: context?.user || this.context.user,
    //   extra: { ...this.context.extra, ...context?.extra },
    //   tags: { ...this.context.tags, ...context?.tags },
    // })

    // Send to custom backend
    this.sendToBackend(error, context)
  }

  /**
   * Capture message
   */
  captureMessage(message: string, level: ErrorContext['level'] = 'info') {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[${level.toUpperCase()}]`, message)
      return
    }

    // Sentry.captureMessage(message, level)
  }

  /**
   * Send to custom backend
   */
  private async sendToBackend(error: Error, context?: ErrorContext) {
    try {
      await fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          name: error.name,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          user: context?.user || this.context.user,
          extra: { ...this.context.extra, ...context?.extra },
          tags: { ...this.context.tags, ...context?.tags },
        }),
      })
    } catch (err) {
      console.error('Failed to send error report:', err)
    }
  }

  /**
   * Performance monitoring
   */
  capturePerformance(metric: {
    name: string
    value: number
    rating?: 'good' | 'needs-improvement' | 'poor'
  }) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Performance]', metric)
      return
    }

    // Send to analytics
    fetch('/api/metrics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metric),
    }).catch(console.error)
  }
}

// ============================================================================
// SINGLETON INSTANCE
// ============================================================================

export const errorReporter = ErrorReporter.getInstance()

// ============================================================================
// REACT ERROR BOUNDARY INTEGRATION
// ============================================================================

export function reportError(error: Error, errorInfo?: any) {
  errorReporter.captureError(error, {
    extra: errorInfo,
    level: 'error',
  })
}

// ============================================================================
// WEB VITALS INTEGRATION
// ============================================================================

export function reportWebVitals(metric: any) {
  const { name, value, rating } = metric

  errorReporter.capturePerformance({
    name,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    rating,
  })
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export function withErrorBoundary<T extends (...args: any[]) => any>(
  fn: T,
  context?: string
): T {
  return ((...args: any[]) => {
    try {
      const result = fn(...args)

      // Handle promises
      if (result instanceof Promise) {
        return result.catch((error) => {
          errorReporter.captureError(error, {
            extra: { context, args },
          })
          throw error
        })
      }

      return result
    } catch (error) {
      errorReporter.captureError(error as Error, {
        extra: { context, args },
      })
      throw error
    }
  }) as T
}
