import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// ============================================================================
// STYLING UTILITIES
// ============================================================================

/**
 * Merge Tailwind classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ============================================================================
// STRING UTILITIES
// ============================================================================

/**
 * Capitalize first letter of string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Truncate string with ellipsis
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}

/**
 * Slugify string for URLs
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// ============================================================================
// NUMBER UTILITIES
// ============================================================================

/**
 * Format number as currency (EUR)
 */
export function formatCurrency(amount: number, locale: string = 'es-ES'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)
}

/**
 * Format large numbers (1000 -> 1K)
 */
export function formatCompactNumber(num: number): string {
  const formatter = new Intl.NumberFormat('es-ES', {
    notation: 'compact',
    compactDisplay: 'short',
  })
  return formatter.format(num)
}

/**
 * Clamp number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

// ============================================================================
// DATE UTILITIES
// ============================================================================

/**
 * Format date to Spanish locale
 */
export function formatDate(date: Date | string, format: 'short' | 'long' = 'short'): string {
  const d = typeof date === 'string' ? new Date(date) : date

  if (format === 'long') {
    return new Intl.DateTimeFormat('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(d)
  }

  return new Intl.DateTimeFormat('es-ES').format(d)
}

/**
 * Get relative time (e.g., "hace 2 días")
 */
export function getRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000)

  const units: { unit: Intl.RelativeTimeFormatUnit; seconds: number }[] = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2592000 },
    { unit: 'week', seconds: 604800 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
  ]

  for (const { unit, seconds } of units) {
    if (diffInSeconds >= seconds) {
      const value = Math.floor(diffInSeconds / seconds)
      const rtf = new Intl.RelativeTimeFormat('es-ES', { numeric: 'auto' })
      return rtf.format(-value, unit)
    }
  }

  return 'ahora mismo'
}

// ============================================================================
// ARRAY UTILITIES
// ============================================================================

/**
 * Chunk array into smaller arrays
 */
export function chunk<T>(array: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  )
}

/**
 * Remove duplicates from array
 */
export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}

/**
 * Shuffle array randomly
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// ============================================================================
// OBJECT UTILITIES
// ============================================================================

/**
 * Deep clone object
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Check if object is empty
 */
export function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0
}

// ============================================================================
// ASYNC UTILITIES
// ============================================================================

/**
 * Sleep for specified milliseconds
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Retry async function with exponential backoff
 */
export async function retry<T>(
  fn: () => Promise<T>,
  options: { maxRetries?: number; delay?: number } = {}
): Promise<T> {
  const { maxRetries = 3, delay = 1000 } = options

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn()
    } catch (error) {
      if (i === maxRetries - 1) throw error
      await sleep(delay * Math.pow(2, i))
    }
  }

  throw new Error('Max retries exceeded')
}

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

/**
 * Check if value is valid email
 */
export function isEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}

/**
 * Check if value is valid URL
 */
export function isUrl(value: string): boolean {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}

// ============================================================================
// BROWSER UTILITIES
// ============================================================================

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

/**
 * Detect if user is on mobile
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

/**
 * Get browser name
 */
export function getBrowser(): string {
  if (typeof window === 'undefined') return 'unknown'

  const ua = navigator.userAgent
  if (ua.includes('Firefox')) return 'Firefox'
  if (ua.includes('Chrome')) return 'Chrome'
  if (ua.includes('Safari')) return 'Safari'
  if (ua.includes('Edge')) return 'Edge'
  return 'unknown'
}
