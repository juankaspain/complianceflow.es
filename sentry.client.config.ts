import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  environment: process.env.NODE_ENV,

  // Replay configuration
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,

  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],

  beforeSend(event, hint) {
    // Filter out errors from browser extensions
    if (event.exception) {
      const values = event.exception.values || []
      for (const value of values) {
        if (value.stacktrace) {
          const frames = value.stacktrace.frames || []
          if (frames.some(frame => frame.filename?.includes('extension://'))) {
            return null
          }
        }
      }
    }
    return event
  },

  ignoreErrors: [
    // Browser extensions
    'top.GLOBALS',
    'chrome-extension://',
    'moz-extension://',
    // Network errors
    'Network request failed',
    'NetworkError',
    // Random plugins/extensions
    'fb_xd_fragment',
    // See: http://blog.errorception.com/2012/03/tale-of-unfindable-js-error.html
    'Script error.',
  ],
})
