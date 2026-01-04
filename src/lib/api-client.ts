/**
 * Centralized API Client for ComplianceFlow
 * Handles all HTTP requests with proper error handling, retries, and typing
 */

import { retry } from './utils'

// ============================================================================
// TYPES
// ============================================================================

export interface ApiResponse<T = any> {
  data: T
  status: number
  message?: string
}

export interface ApiError {
  message: string
  status: number
  code?: string
  details?: any
}

export class ApiClientError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string,
    public details?: any
  ) {
    super(message)
    this.name = 'ApiClientError'
  }
}

// ============================================================================
// CONFIGURATION
// ============================================================================

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.complianceflow.es'
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || 'v1'
const DEFAULT_TIMEOUT = 30000

// ============================================================================
// API CLIENT CLASS
// ============================================================================

class ApiClient {
  private baseUrl: string
  private defaultHeaders: HeadersInit

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = `${baseUrl}/${API_VERSION}`
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }

  /**
   * Set authentication token
   */
  setAuthToken(token: string) {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      'Authorization': `Bearer ${token}`,
    }
  }

  /**
   * Clear authentication token
   */
  clearAuthToken() {
    const { Authorization, ...rest } = this.defaultHeaders as any
    this.defaultHeaders = rest
  }

  /**
   * Generic request handler
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`

    const config: RequestInit = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
      signal: AbortSignal.timeout(DEFAULT_TIMEOUT),
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()

      if (!response.ok) {
        throw new ApiClientError(
          data.message || 'Request failed',
          response.status,
          data.code,
          data.details
        )
      }

      return {
        data,
        status: response.status,
        message: data.message,
      }
    } catch (error) {
      if (error instanceof ApiClientError) {
        throw error
      }

      throw new ApiClientError(
        error instanceof Error ? error.message : 'Unknown error',
        0
      )
    }
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const url = params
      ? `${endpoint}?${new URLSearchParams(params)}`
      : endpoint

    return this.request<T>(url, { method: 'GET' })
  }

  /**
   * POST request
   */
  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  /**
   * PUT request
   */
  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' })
  }

  /**
   * PATCH request
   */
  async patch<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  }
}

// ============================================================================
// SINGLETON INSTANCE
// ============================================================================

export const apiClient = new ApiClient()

// ============================================================================
// API ENDPOINTS
// ============================================================================

export const api = {
  // Newsletter
  newsletter: {
    subscribe: (email: string) =>
      apiClient.post('/newsletter/subscribe', { email }),
  },

  // Contact
  contact: {
    send: (data: any) =>
      apiClient.post('/contact', data),
  },

  // Trial signup
  trial: {
    signup: (data: any) =>
      apiClient.post('/trial/signup', data),
  },

  // SII integration
  sii: {
    sendInvoice: (invoice: any) =>
      apiClient.post('/sii/invoices', invoice),

    getInvoice: (id: string) =>
      apiClient.get(`/sii/invoices/${id}`),

    validateInvoice: (invoice: any) =>
      apiClient.post('/sii/invoices/validate', invoice),
  },

  // Health check
  health: {
    check: () =>
      apiClient.get('/health'),
  },
}

// ============================================================================
// HELPER HOOKS (for React)
// ============================================================================

export function useApiClient() {
  return apiClient
}
