/**
 * Analytics event tracking
 * Centralized event definitions for consistent tracking
 */

import { logger } from '../logger';

// PostHog or other analytics provider
const analytics = typeof window !== 'undefined' && (window as any).posthog;

/**
 * Track custom event
 */
export function trackEvent(
  eventName: string,
  properties?: Record<string, unknown>
): void {
  try {
    if (analytics) {
      analytics.capture(eventName, properties);
    }
    logger.debug('Event tracked', { eventName, properties });
  } catch (error) {
    logger.error('Failed to track event', error as Error, { eventName });
  }
}

/**
 * Track page view
 */
export function trackPageView(url: string, title?: string): void {
  trackEvent('page_view', { url, title });
}

/**
 * Track user signup
 */
export function trackSignup(method: 'email' | 'google' | 'github'): void {
  trackEvent('user_signup', { method });
}

/**
 * Track user login
 */
export function trackLogin(method: 'email' | 'google' | 'github'): void {
  trackEvent('user_login', { method });
}

/**
 * Track button click
 */
export function trackButtonClick(buttonName: string, location: string): void {
  trackEvent('button_click', { button: buttonName, location });
}

/**
 * Track form submission
 */
export function trackFormSubmit(formName: string, success: boolean): void {
  trackEvent('form_submit', { form: formName, success });
}

/**
 * Track error
 */
export function trackError(
  errorType: string,
  errorMessage: string,
  context?: Record<string, unknown>
): void {
  trackEvent('error_occurred', {
    type: errorType,
    message: errorMessage,
    ...context,
  });
}

/**
 * Track feature usage
 */
export function trackFeatureUsage(
  featureName: string,
  action: string
): void {
  trackEvent('feature_used', { feature: featureName, action });
}

/**
 * Track search
 */
export function trackSearch(query: string, results: number): void {
  trackEvent('search_performed', { query, results });
}

/**
 * Track conversion
 */
export function trackConversion(conversionType: string, value?: number): void {
  trackEvent('conversion', { type: conversionType, value });
}

/**
 * Identify user
 */
export function identifyUser(
  userId: string,
  properties?: Record<string, unknown>
): void {
  try {
    if (analytics) {
      analytics.identify(userId, properties);
    }
    logger.debug('User identified', { userId });
  } catch (error) {
    logger.error('Failed to identify user', error as Error, { userId });
  }
}

/**
 * Set user properties
 */
export function setUserProperties(properties: Record<string, unknown>): void {
  try {
    if (analytics) {
      analytics.people.set(properties);
    }
    logger.debug('User properties set', { properties });
  } catch (error) {
    logger.error('Failed to set user properties', error as Error);
  }
}