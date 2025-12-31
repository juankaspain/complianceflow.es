import { z } from 'zod';

/**
 * Environment variables validation schema
 * Ensures all required environment variables are present and valid
 */
const envSchema = z.object({
  // Public variables (exposed to client)
  NEXT_PUBLIC_API_URL: z.string().url().default('https://api.complianceflow.es'),
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://complianceflow.es'),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url().optional(),
  
  // Private variables (server-only)
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string().optional(),
  API_SECRET_KEY: z.string().optional(),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  REDIS_URL: z.string().optional(),
});

type EnvSchema = z.infer<typeof envSchema>;

/**
 * Validates and returns typed environment variables
 * Throws error if validation fails in production
 */
function getValidatedEnv(): EnvSchema {
  const env = {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    API_SECRET_KEY: process.env.API_SECRET_KEY,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    REDIS_URL: process.env.REDIS_URL,
  };

  const result = envSchema.safeParse(env);

  if (!result.success) {
    console.error('❌ Invalid environment variables:', result.error.flatten().fieldErrors);
    
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Invalid environment variables');
    }
  }

  return result.success ? result.data : env as EnvSchema;
}

export const env = getValidatedEnv();

// Type-safe environment variable access
export const isProduction = env.NODE_ENV === 'production';
export const isDevelopment = env.NODE_ENV === 'development';
export const isTest = env.NODE_ENV === 'test';