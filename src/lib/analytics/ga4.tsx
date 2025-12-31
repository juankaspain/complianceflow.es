'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Google Analytics 4 Component
export function GA4() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on route change
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      // @ts-ignore
      window.gtag?.('config', GA_MEASUREMENT_ID, {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
      });
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  if (!GA_MEASUREMENT_ID) {
    console.warn('GA4: Measurement ID not configured. Add NEXT_PUBLIC_GA_MEASUREMENT_ID to .env.local');
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });

          // Track Web Vitals
          function sendWebVitals(metric) {
            gtag('event', metric.name, {
              event_category: 'Web Vitals',
              value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
              event_label: metric.id,
              non_interaction: true,
            });
          }

          // Core Web Vitals tracking
          if ('web-vital' in window.performance) {
            new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                  sendWebVitals({ name: 'LCP', value: entry.renderTime || entry.loadTime, id: entry.id });
                }
              }
            }).observe({ type: 'largest-contentful-paint', buffered: true });

            new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                if (entry.name === 'first-input') {
                  sendWebVitals({ name: 'FID', value: entry.processingStart - entry.startTime, id: entry.id });
                }
              }
            }).observe({ type: 'first-input', buffered: true });

            let clsValue = 0;
            let clsEntries = [];
            new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                if (!entry.hadRecentInput) {
                  clsValue += entry.value;
                  clsEntries.push(entry);
                }
              }
              if (clsEntries.length > 0) {
                sendWebVitals({ name: 'CLS', value: clsValue, id: 'v1' });
              }
            }).observe({ type: 'layout-shift', buffered: true });
          }
        `}
      </Script>
    </>
  );
}

// Helper function to track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('event', eventName, eventParams);
  }
};

// Helper function to track page views manually
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Common event tracking helpers
export const analytics = {
  // Track button/link clicks
  trackClick: (buttonName: string, location: string) => {
    trackEvent('click', {
      button_name: buttonName,
      location: location,
    });
  },

  // Track form submissions
  trackFormSubmit: (formName: string, success: boolean) => {
    trackEvent('form_submit', {
      form_name: formName,
      success: success,
    });
  },

  // Track demo interactions
  trackDemo: (demoName: string, action: string) => {
    trackEvent('demo_interaction', {
      demo_name: demoName,
      action: action,
    });
  },

  // Track documentation views
  trackDocView: (docPage: string) => {
    trackEvent('doc_view', {
      page: docPage,
    });
  },

  // Track conversions
  trackConversion: (conversionType: string, value?: number) => {
    trackEvent('conversion', {
      conversion_type: conversionType,
      value: value,
    });
  },
};
