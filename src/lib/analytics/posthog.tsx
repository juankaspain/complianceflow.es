'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

export function Analytics() {
  useEffect(() => {
    // Only initialize if PostHog key is available
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    
    if (posthogKey && typeof window !== 'undefined') {
      posthog.init(posthogKey, {
        api_host: 'https://app.posthog.com',
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') {
            posthog.debug();
          }
        },
      });
    }
  }, []);

  return null;
}
