'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

// ============================================================================
# GOOGLE ANALYTICS 4
// ============================================================================

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_ID) return

    const url = pathname + searchParams.toString()

    // Page view tracking
    window.gtag?.('config', GA_ID, {
      page_path: url,
    })
  }, [pathname, searchParams])

  if (!GA_ID || process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  )
}

// ============================================================================
// EVENT TRACKING FUNCTIONS
// ============================================================================

type EventParams = {
  action: string
  category: string
  label?: string
  value?: number
}

export const trackEvent = ({ action, category, label, value }: EventParams) => {
  if (!GA_ID || typeof window === 'undefined') return

  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Conversion tracking
export const trackConversion = (value: number, currency: string = 'EUR') => {
  trackEvent({
    action: 'conversion',
    category: 'ecommerce',
    label: 'trial_signup',
    value,
  })

  window.gtag?.('event', 'purchase', {
    value,
    currency,
    items: [{ item_name: 'Trial Signup' }],
  })
}

// Newsletter subscription
export const trackNewsletterSignup = () => {
  trackEvent({
    action: 'signup',
    category: 'newsletter',
    label: 'footer_form',
  })
}

// Contact form submission
export const trackContactForm = () => {
  trackEvent({
    action: 'submit',
    category: 'contact',
    label: 'contact_page',
  })
}

// CTA clicks
export const trackCTA = (location: string, label: string) => {
  trackEvent({
    action: 'click',
    category: 'cta',
    label: `${location}_${label}`,
  })
}

// Download tracking
export const trackDownload = (fileName: string) => {
  trackEvent({
    action: 'download',
    category: 'resources',
    label: fileName,
  })
}

// Outbound link tracking
export const trackOutboundLink = (url: string) => {
  trackEvent({
    action: 'click',
    category: 'outbound',
    label: url,
  })
}

// Video engagement
export const trackVideoPlay = (videoTitle: string) => {
  trackEvent({
    action: 'play',
    category: 'video',
    label: videoTitle,
  })
}

// Search tracking
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent({
    action: 'search',
    category: 'site_search',
    label: searchTerm,
    value: resultsCount,
  })
}

// ============================================================================
// WEB VITALS TRACKING
// ============================================================================

export const trackWebVitals = (metric: any) => {
  const { name, value, id } = metric

  window.gtag?.('event', name, {
    event_category: 'Web Vitals',
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    event_label: id,
    non_interaction: true,
  })
}

// ============================================================================
// PERFORMANCE MONITORING
// ============================================================================

export const trackPerformance = () => {
  if (typeof window === 'undefined') return

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

  if (navigation) {
    const pageLoadTime = navigation.loadEventEnd - navigation.fetchStart
    const dnsTime = navigation.domainLookupEnd - navigation.domainLookupStart
    const tcpTime = navigation.connectEnd - navigation.connectStart
    const ttfb = navigation.responseStart - navigation.requestStart

    trackEvent({
      action: 'timing',
      category: 'performance',
      label: 'page_load',
      value: Math.round(pageLoadTime),
    })

    trackEvent({
      action: 'timing',
      category: 'performance',
      label: 'ttfb',
      value: Math.round(ttfb),
    })
  }
}

// ============================================================================
// ERROR TRACKING
// ============================================================================

export const trackError = (error: Error, errorInfo?: any) => {
  trackEvent({
    action: 'error',
    category: 'javascript',
    label: `${error.name}: ${error.message}`,
  })

  // Send to error tracking service (e.g., Sentry)
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // window.Sentry?.captureException(error, { extra: errorInfo })
  }
}

// ============================================================================
// TYPESCRIPT DECLARATIONS
// ============================================================================

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
  }
}
