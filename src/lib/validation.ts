import { z } from 'zod'

// ============================================================================
// COMMON VALIDATION SCHEMAS
// ============================================================================

// Email validation
export const emailSchema = z
  .string()
  .email('Email inválido')
  .min(5, 'Email demasiado corto')
  .max(100, 'Email demasiado largo')
  .toLowerCase()
  .transform((email) => email.trim())

// Phone validation (Spanish format)
export const phoneSchema = z
  .string()
  .regex(/^(\+34|0034|34)?[6-9]\d{8}$/, 'Teléfono español inválido (ej: +34612345678)')
  .transform((phone) => phone.replace(/\s/g, ''))

// NIF/CIF validation (Spain)
export const nifCifSchema = z
  .string()
  .regex(/^[A-Z]\d{7}[A-Z0-9]$|^\d{8}[A-Z]$/, 'NIF/CIF inválido')
  .toUpperCase()

// Name validation
export const nameSchema = z
  .string()
  .min(2, 'Nombre demasiado corto')
  .max(50, 'Nombre demasiado largo')
  .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/, 'Nombre contiene caracteres inválidos')
  .transform((name) => name.trim())

// Company name
export const companySchema = z
  .string()
  .min(2, 'Nombre de empresa demasiado corto')
  .max(100, 'Nombre de empresa demasiado largo')
  .transform((name) => name.trim())

// Message validation
export const messageSchema = z
  .string()
  .min(10, 'Mensaje demasiado corto (mín. 10 caracteres)')
  .max(1000, 'Mensaje demasiado largo (máx. 1000 caracteres)')
  .transform((msg) => msg.trim())

// URL validation
export const urlSchema = z
  .string()
  .url('URL inválida')
  .max(500, 'URL demasiado larga')

// ============================================================================
// FORM SCHEMAS
// ============================================================================

// Newsletter subscription
export const newsletterSchema = z.object({
  email: emailSchema,
  consent: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar la política de privacidad',
  }),
})

export type NewsletterFormData = z.infer<typeof newsletterSchema>

// Contact form
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  company: companySchema.optional(),
  phone: phoneSchema.optional(),
  subject: z.string().min(5, 'Asunto demasiado corto').max(100, 'Asunto demasiado largo'),
  message: messageSchema,
  consent: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar la política de privacidad',
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Trial signup
export const trialSignupSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  company: companySchema,
  nifCif: nifCifSchema.optional(),
  phone: phoneSchema.optional(),
  plan: z.enum(['starter', 'professional', 'enterprise']),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
})

export type TrialSignupFormData = z.infer<typeof trialSignupSchema>

// API key request
export const apiKeyRequestSchema = z.object({
  email: emailSchema,
  company: companySchema,
  useCase: z.string().min(20, 'Describe tu caso de uso (mín. 20 caracteres)').max(500),
})

export type ApiKeyRequestData = z.infer<typeof apiKeyRequestSchema>

// ============================================================================
// SANITIZATION HELPERS
// ============================================================================

/**
 * Sanitize HTML to prevent XSS attacks
 */
export function sanitizeHtml(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Sanitize SQL-like inputs (prevent injection)
 */
export function sanitizeSql(input: string): string {
  return input
    .replace(/'/g, "''")
    .replace(/;/g, '')
    .replace(/--/g, '')
    .replace(/\/\*/g, '')
    .replace(/\*\//g, '')
}

/**
 * Validate and sanitize generic text input
 */
export function sanitizeText(input: string, maxLength: number = 1000): string {
  return sanitizeHtml(input.trim().slice(0, maxLength))
}

/**
 * Validate email format (server-side double check)
 */
export function isValidEmail(email: string): boolean {
  try {
    emailSchema.parse(email)
    return true
  } catch {
    return false
  }
}

/**
 * Validate Spanish NIF/CIF
 */
export function isValidNifCif(nifCif: string): boolean {
  try {
    nifCifSchema.parse(nifCif)
    return true
  } catch {
    return false
  }
}

// ============================================================================
// RATE LIMIT VALIDATION
// ============================================================================

export interface RateLimitConfig {
  maxRequests: number
  windowMs: number
}

export const RATE_LIMITS: Record<string, RateLimitConfig> = {
  newsletter: { maxRequests: 5, windowMs: 60 * 60 * 1000 }, // 5 per hour
  contact: { maxRequests: 3, windowMs: 60 * 60 * 1000 }, // 3 per hour
  trial: { maxRequests: 2, windowMs: 24 * 60 * 60 * 1000 }, // 2 per day
  api: { maxRequests: 100, windowMs: 60 * 1000 }, // 100 per minute
}

// ============================================================================
// ERROR MESSAGES (i18n ready)
// ============================================================================

export const ERROR_MESSAGES = {
  required: 'Este campo es obligatorio',
  email: 'Email inválido',
  phone: 'Teléfono inválido',
  nifCif: 'NIF/CIF inválido',
  tooShort: 'Demasiado corto',
  tooLong: 'Demasiado largo',
  invalidFormat: 'Formato inválido',
  consent: 'Debes aceptar para continuar',
  rateLimit: 'Demasiadas solicitudes. Inténtalo más tarde',
  serverError: 'Error del servidor. Inténtalo de nuevo',
} as const
