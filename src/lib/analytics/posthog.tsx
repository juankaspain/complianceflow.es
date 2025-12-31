'use client';

import { useEffect } from 'react';

let posthog: any = null;

try {
  posthog = require('posthog-js');
} catch (e) {
  console.log('PostHog not available');
}

export function Analytics() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!posthog) return;
    
    const isProduction = process.env.NODE_ENV === 'production';
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (isProduction && posthogKey && posthogHost) {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        loaded: (ph: any) => {
          if (process.env.NODE_ENV === 'development') {
            ph.opt_out_capturing();
          }
        },
      });
    }
  }, []);

  return null;
}
