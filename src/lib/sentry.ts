/**
 * Sentry Error Tracking Configuration
 * Uncomment and configure after installing @sentry/nextjs
 */

import { env, isProduction } from './env';

export const sentryConfig = {
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  enabled: isProduction && !!process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: env.NODE_ENV,
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
};

/**
 * Initialize Sentry
 * Call this in your root layout or _app.tsx
 */
export function initSentry() {
  if (!sentryConfig.enabled) {
    return;
  }

  // Uncomment after installing @sentry/nextjs:
  /*
  import * as Sentry from '@sentry/nextjs';
  
  Sentry.init({
    dsn: sentryConfig.dsn,
    environment: sentryConfig.environment,
    tracesSampleRate: sentryConfig.tracesSampleRate,
    replaysSessionSampleRate: sentryConfig.replaysSessionSampleRate,
    replaysOnErrorSampleRate: sentryConfig.replaysOnErrorSampleRate,
    
    integrations: [
      new Sentry.BrowserTracing(),
      new Sentry.Replay({
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
    
    beforeSend(event, hint) {
      // Filter out certain errors
      if (event.exception) {
        const error = hint.originalException;
        // Example: Don't send network errors
        if (error && error.message?.includes('fetch')) {
          return null;
        }
      }
      return event;
    },
  });
  */
}

/**
 * Capture exception manually
 */
export function captureException(error: Error, context?: Record<string, unknown>) {
  if (!sentryConfig.enabled) {
    console.error('Sentry not enabled:', error, context);
    return;
  }

  // Uncomment after installing @sentry/nextjs:
  /*
  import * as Sentry from '@sentry/nextjs';
  Sentry.captureException(error, {
    extra: context,
  });
  */
}

/**
 * Set user context for error tracking
 */
export function setUser(user: { id: string; email?: string; username?: string }) {
  if (!sentryConfig.enabled) {
    return;
  }

  // Uncomment after installing @sentry/nextjs:
  /*
  import * as Sentry from '@sentry/nextjs';
  Sentry.setUser(user);
  */
}

/**
 * Clear user context
 */
export function clearUser() {
  if (!sentryConfig.enabled) {
    return;
  }

  // Uncomment after installing @sentry/nextjs:
  /*
  import * as Sentry from '@sentry/nextjs';
  Sentry.setUser(null);
  */
}