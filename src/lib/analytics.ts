'use client';

import posthog from 'posthog-js';
import { isClient } from './utils';

const isEnabled = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';
const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.posthog.com';

if (isClient && isEnabled && posthogKey) {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug();
    },
    capture_pageview: false, // We'll handle this manually
    capture_pageleave: true,
  });
}

export const analytics = {
  /**
   * Track a custom event
   */
  track: (event: string, properties?: Record<string, any>) => {
    if (!isEnabled || !isClient) return;
    posthog.capture(event, properties);
  },

  /**
   * Track a page view
   */
  page: (name: string) => {
    if (!isEnabled || !isClient) return;
    posthog.capture('$pageview', { page: name });
  },

  /**
   * Identify a user
   */
  identify: (userId: string, traits?: Record<string, any>) => {
    if (!isEnabled || !isClient) return;
    posthog.identify(userId, traits);
  },

  /**
   * Reset analytics (e.g., on logout)
   */
  reset: () => {
    if (!isEnabled || !isClient) return;
    posthog.reset();
  },

  // Specific event tracking
  events: {
    demoStarted: (type: 'sii' | 'kyc' | 'fraud') => {
      analytics.track('Demo Started', { demo_type: type });
    },

    demoCompleted: (type: 'sii' | 'kyc' | 'fraud', duration: number) => {
      analytics.track('Demo Completed', { demo_type: type, duration });
    },

    ctaClicked: (location: string, text: string) => {
      analytics.track('CTA Clicked', { location, text });
    },

    signupStarted: (plan?: string) => {
      analytics.track('Signup Started', { plan });
    },

    documentationViewed: (page: string) => {
      analytics.track('Documentation Viewed', { page });
    },

    apiKeyGenerated: () => {
      analytics.track('API Key Generated');
    },
  },
};
