'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
    dataLayer: any[]
  }
}

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      pageview(pathname)
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: false
            });
          `,
        }}
      />
    </>
  )
}

// Pageview tracking
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Event tracking
export const event = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Conversion tracking helpers
export const trackConversion = {
  // Newsletter signup
  newsletterSignup: (email: string) => {
    event('newsletter_signup', 'engagement', 'newsletter', 1)
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: `${GA_MEASUREMENT_ID}/newsletter`,
        value: 1.0,
        currency: 'EUR',
      })
    }
  },

  // Contact form submission
  contactSubmit: (formType: string) => {
    event('contact_submit', 'lead_generation', formType, 1)
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: `${GA_MEASUREMENT_ID}/contact`,
        value: 5.0,
        currency: 'EUR',
      })
    }
  },

  // Trial signup
  trialSignup: (plan: string) => {
    event('trial_signup', 'conversion', plan, 1)
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: `${GA_MEASUREMENT_ID}/trial`,
        value: 10.0,
        currency: 'EUR',
      })
    }
  },

  // Pricing page view
  viewPricing: () => {
    event('view_pricing', 'engagement', 'pricing_page', 1)
  },

  // Documentation view
  viewDocs: (docPage: string) => {
    event('view_docs', 'engagement', docPage, 1)
  },

  // CTA click
  ctaClick: (ctaName: string) => {
    event('cta_click', 'engagement', ctaName, 1)
  },

  // ROI Calculator usage
  useROICalculator: (monthlyTransactions: number) => {
    event('use_roi_calculator', 'engagement', 'calculator', monthlyTransactions)
  },

  // Download resources
  downloadResource: (resourceName: string) => {
    event('download', 'engagement', resourceName, 1)
  },

  // Video play
  playVideo: (videoName: string) => {
    event('video_play', 'engagement', videoName, 1)
  },

  // Feature exploration
  viewFeature: (featureName: string) => {
    event('view_feature', 'engagement', featureName, 1)
  },

  // Outbound link clicks
  outboundClick: (url: string) => {
    event('click', 'outbound', url, 1)
  },
}

// E-commerce events for pricing
export const trackEcommerce = {
  viewItemList: (items: any[]) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'view_item_list', {
        item_list_id: 'pricing_plans',
        item_list_name: 'Pricing Plans',
        items: items,
      })
    }
  },

  viewItem: (item: any) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'view_item', {
        currency: 'EUR',
        value: item.price,
        items: [item],
      })
    }
  },

  selectItem: (item: any) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'select_item', {
        item_list_id: 'pricing_plans',
        item_list_name: 'Pricing Plans',
        items: [item],
      })
    }
  },

  beginCheckout: (item: any) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'begin_checkout', {
        currency: 'EUR',
        value: item.price,
        items: [item],
      })
    }
  },
}
