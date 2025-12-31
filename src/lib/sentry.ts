// Sentry integration - Optional
// Install with: npm install @sentry/nextjs

let Sentry: any = null;

try {
  Sentry = require('@sentry/nextjs');
} catch (e) {
  console.log('Sentry not installed. Skipping initialization.');
}

export const initSentry = () => {
  if (!Sentry) return;
  
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (isProduction && process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: 0.1,
      environment: process.env.NODE_ENV,
    });
  }
};

export const captureException = (error: Error) => {
  if (Sentry) {
    Sentry.captureException(error);
  } else {
    console.error('Error:', error);
  }
};

export default Sentry;
