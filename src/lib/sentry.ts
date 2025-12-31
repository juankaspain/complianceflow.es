import * as Sentry from '@sentry/nextjs';
import { env, isProduction } from './env';

/**
 * Initialize Sentry for error tracking
 * Only enabled in production or when explicitly configured
 */
export function initSentry() {
  if (!process.env.NEXT_PUBLIC_SENTRY_DSN) {
    console.warn('Sentry DSN not configured. Error tracking disabled.');
    return;
  }

  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: env.NODE_ENV,
    enabled: isProduction,
    
    // Performance Monitoring
    tracesSampleRate: isProduction ? 0.1 : 1.0,
    
    // Session Replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    
    // Release tracking
    release: process.env.NEXT_PUBLIC_APP_VERSION,
    
    // Error filtering
    ignoreErrors: [
      // Browser extensions
      'top.GLOBALS',
      'canvas.contentDocument',
      'MyApp_RemoveAllHighlights',
      'atomicFindClose',
      // Random plugins/extensions
      'conduitPage',
      // Network errors
      'NetworkError',
      'Network request failed',
      // AbortError
      'AbortError',
    ],
    
    // Breadcrumbs
    beforeBreadcrumb(breadcrumb) {
      // Filter out console logs in production
      if (breadcrumb.category === 'console' && isProduction) {
        return null;
      }
      return breadcrumb;
    },
    
    // Event processing
    beforeSend(event, hint) {
      // Don't send events in development
      if (!isProduction) {
        console.log('Sentry event (dev mode):', event);
        return null;
      }
      
      // Filter sensitive data
      if (event.request?.headers) {
        delete event.request.headers['authorization'];
        delete event.request.headers['cookie'];
      }
      
      return event;
    },
    
    integrations: [
      new Sentry.BrowserTracing({
        tracePropagationTargets: [
          'localhost',
          'complianceflow.es',
          'api.complianceflow.es',
        ],
      }),
      new Sentry.Replay({
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
  });
}

/**
 * Set user context for error tracking
 */
export function setUserContext(user: {
  id: string;
  email?: string;
  username?: string;
}) {
  Sentry.setUser({
    id: user.id,
    email: user.email,
    username: user.username,
  });
}

/**
 * Clear user context on logout
 */
export function clearUserContext() {
  Sentry.setUser(null);
}

/**
 * Add custom context to errors
 */
export function addContext(key: string, data: Record<string, unknown>) {
  Sentry.setContext(key, data);
}

/**
 * Capture exception manually
 */
export function captureException(error: Error, context?: Record<string, unknown>) {
  if (context) {
    Sentry.withScope((scope) => {
      Object.entries(context).forEach(([key, value]) => {
        scope.setExtra(key, value);
      });
      Sentry.captureException(error);
    });
  } else {
    Sentry.captureException(error);
  }
}

/**
 * Capture message manually
 */
export function captureMessage(message: string, level: Sentry.SeverityLevel = 'info') {
  Sentry.captureMessage(message, level);
}

/**
 * Add breadcrumb for debugging
 */
export function addBreadcrumb(message: string, data?: Record<string, unknown>) {
  Sentry.addBreadcrumb({
    message,
    data,
    level: 'info',
    timestamp: Date.now() / 1000,
  });
}