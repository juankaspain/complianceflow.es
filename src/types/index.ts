/**
 * Global TypeScript types and interfaces
 * Shared across the entire application
 */

// ============================================================================
// COMMON TYPES
// ============================================================================

export type Maybe<T> = T | null | undefined

export type Nullable<T> = T | null

export type Optional<T> = T | undefined

export type ID = string | number

// ============================================================================
// API TYPES
// ============================================================================

export interface ApiResponse<T = any> {
  data: T
  status: number
  message?: string
  meta?: ApiMeta
}

export interface ApiMeta {
  page?: number
  perPage?: number
  total?: number
  totalPages?: number
}

export interface ApiError {
  message: string
  status: number
  code?: string
  details?: Record<string, any>
  field?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  page: number
  perPage: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

// ============================================================================
// USER TYPES
// ============================================================================

export interface User {
  id: ID
  email: string
  name: string
  company?: string
  role: UserRole
  createdAt: string
  updatedAt: string
  verified: boolean
}

export type UserRole = 'user' | 'admin' | 'superadmin'

export interface UserProfile extends User {
  phone?: string
  nifCif?: string
  address?: Address
  preferences: UserPreferences
}

export interface UserPreferences {
  language: 'es' | 'en' | 'ca'
  theme: 'light' | 'dark' | 'system'
  notifications: {
    email: boolean
    push: boolean
    marketing: boolean
  }
}

// ============================================================================
// ADDRESS TYPES
// ============================================================================

export interface Address {
  street: string
  city: string
  state?: string
  zipCode: string
  country: string
}

// ============================================================================
// FORM TYPES
// ============================================================================

export interface NewsletterFormData {
  email: string
  consent: boolean
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
  consent: boolean
}

export interface TrialSignupFormData {
  name: string
  email: string
  company: string
  nifCif?: string
  phone?: string
  plan: PlanId
  consent: boolean
}

// ============================================================================
// PRICING TYPES
// ============================================================================

export type PlanId = 'starter' | 'professional' | 'enterprise'

export type BillingInterval = 'month' | 'year'

export interface Plan {
  id: PlanId
  name: string
  price: number
  currency: string
  interval: BillingInterval
  features: string[]
  limits: PlanLimits
  popular?: boolean
}

export interface PlanLimits {
  transactions: number
  apiCalls: number
  users: number
}

export interface Subscription {
  id: ID
  userId: ID
  planId: PlanId
  status: SubscriptionStatus
  currentPeriodStart: string
  currentPeriodEnd: string
  cancelAtPeriodEnd: boolean
  createdAt: string
}

export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing'

// ============================================================================
// INVOICE TYPES (SII)
// ============================================================================

export type InvoiceType = 'issued' | 'received'

export interface Invoice {
  id: ID
  type: InvoiceType
  invoiceNumber: string
  date: string
  customer: InvoiceParty
  items: InvoiceItem[]
  subtotal: number
  vatAmount: number
  total: number
  currency: string
  status: InvoiceStatus
  siiReference?: string
  createdAt: string
}

export interface InvoiceParty {
  nif: string
  name: string
  address?: Address
}

export interface InvoiceItem {
  description: string
  quantity: number
  unitPrice: number
  vatRate: number
  amount: number
}

export type InvoiceStatus = 'draft' | 'pending' | 'accepted' | 'rejected' | 'error'

// ============================================================================
// ANALYTICS TYPES
// ============================================================================

export interface AnalyticsEvent {
  event: string
  category: string
  label?: string
  value?: number
  timestamp: string
}

export interface ConversionEvent extends AnalyticsEvent {
  conversionValue: number
  currency: string
}

// ============================================================================
// BLOG TYPES
// ============================================================================

export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  author: string
  category: BlogCategory
  tags: string[]
  publishedAt: string
  updatedAt?: string
  readTime: number
  featured: boolean
  image?: string
}

export type BlogCategory = 'Tutorial' | 'Guía' | 'Comparativa' | 'News' | 'Case Study'

// ============================================================================
// NAVIGATION TYPES
// ============================================================================

export interface NavItem {
  label: string
  href: string
  icon?: string
  external?: boolean
  children?: NavItem[]
}

export interface Breadcrumb {
  label: string
  href: string
}

// ============================================================================
// COMPONENT PROP TYPES
// ============================================================================

export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface WithId {
  id: ID
}

export interface WithTimestamps {
  createdAt: string
  updatedAt: string
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type RequiredKeys<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
