#!/usr/bin/env node

/**
 * Environment variables check script
 * Validates that all required environment variables are set
 */

const required = [
  'NEXT_PUBLIC_SITE_URL',
  'NEXT_PUBLIC_API_URL',
];

const recommended = [
  'NEXT_PUBLIC_POSTHOG_KEY',
  'NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION',
];

const optional = [
  'NEXT_PUBLIC_SENTRY_DSN',
  'DATABASE_URL',
  'REDIS_URL',
  'SMTP_HOST',
];

console.log('🔍 Checking environment variables...\n');

let hasErrors = false;
let hasWarnings = false;

// Check required
console.log('✅ Required variables:');
required.forEach((key) => {
  if (process.env[key]) {
    console.log(`  ✅ ${key}`);
  } else {
    console.log(`  ❌ ${key} (MISSING)`);
    hasErrors = true;
  }
});

console.log('\n⚠️  Recommended variables:');
recommended.forEach((key) => {
  if (process.env[key]) {
    console.log(`  ✅ ${key}`);
  } else {
    console.log(`  ⚠️  ${key} (not set)`);
    hasWarnings = true;
  }
});

console.log('\nℹ️  Optional variables:');
optional.forEach((key) => {
  if (process.env[key]) {
    console.log(`  ✅ ${key}`);
  } else {
    console.log(`  ➖ ${key}`);
  }
});

console.log('');

if (hasErrors) {
  console.error('❌ Missing required environment variables!');
  console.error('Please check .env.example for reference.');
  process.exit(1);
}

if (hasWarnings) {
  console.warn('⚠️  Some recommended variables are not set.');
  console.warn('Application will work but some features may be limited.');
}

console.log('✅ Environment check passed!\n');