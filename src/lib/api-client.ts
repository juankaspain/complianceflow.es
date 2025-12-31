import { logger } from './logger';
import { cache } from './cache';
import { sanitizeUrl } from './sanitize';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestConfig extends RequestInit {
  cache?: boolean;
  cacheTTL?: number;
  timeout?: number;
  retries?: number;
}

interface ApiError {
  message: string;
  status: number;
  data?: unknown;
}

class ApiClient {
  private baseURL: string;
  private defaultHeaders: HeadersInit;
  private defaultTimeout = 30000;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  /**
   * Set authentication token
   */
  setAuthToken(token: string): void {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      Authorization: `Bearer ${token}`,
    };
  }

  /**
   * Remove authentication token
   */
  clearAuthToken(): void {
    const { Authorization, ...rest } = this.defaultHeaders as Record<string, string>;
    this.defaultHeaders = rest;
  }

  /**
   * Make HTTP request with error handling and retries
   */
  private async request<T>(
    method: HttpMethod,
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<T> {
    const {
      cache: useCache = false,
      cacheTTL = 300000,
      timeout = this.defaultTimeout,
      retries = 3,
      ...fetchConfig
    } = config;

    const url = `${this.baseURL}${endpoint}`;
    const cacheKey = `api:${method}:${url}`;

    // Check cache for GET requests
    if (method === 'GET' && useCache) {
      const cached = cache.get<T>(cacheKey);
      if (cached) {
        logger.debug('Cache hit', { url, method });
        return cached;
      }
    }

    // Prepare request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const requestConfig: RequestInit = {
      ...fetchConfig,
      method,
      headers: {
        ...this.defaultHeaders,
        ...fetchConfig.headers,
      },
      signal: controller.signal,
    };

    let lastError: Error | null = null;

    // Retry logic
    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        logger.debug('API request', { url, method, attempt: attempt + 1 });

        const response = await fetch(url, requestConfig);
        clearTimeout(timeoutId);

        if (!response.ok) {
          const error: ApiError = {
            message: `HTTP ${response.status}: ${response.statusText}`,
            status: response.status,
            data: await response.json().catch(() => null),
          };
          throw error;
        }

        const data = await response.json();

        // Cache successful GET requests
        if (method === 'GET' && useCache) {
          cache.set(cacheKey, data, cacheTTL);
        }

        logger.debug('API request successful', { url, method });
        return data;
      } catch (error) {
        lastError = error as Error;
        logger.warn(`API request failed (attempt ${attempt + 1}/${retries})`, {
          url,
          method,
          error: lastError.message,
        });

        // Don't retry on client errors (4xx)
        if ('status' in lastError && lastError.status >= 400 && lastError.status < 500) {
          break;
        }

        // Wait before retry with exponential backoff
        if (attempt < retries - 1) {
          await new Promise((resolve) => setTimeout(resolve, Math.pow(2, attempt) * 1000));
        }
      }
    }

    logger.error('API request failed after retries', lastError!, { url, method });
    throw lastError;
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    return this.request<T>('GET', endpoint, config);
  }

  /**
   * POST request
   */
  async post<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return this.request<T>('POST', endpoint, {
      ...config,
      body: JSON.stringify(data),
    });
  }

  /**
   * PUT request
   */
  async put<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return this.request<T>('PUT', endpoint, {
      ...config,
      body: JSON.stringify(data),
    });
  }

  /**
   * PATCH request
   */
  async patch<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return this.request<T>('PATCH', endpoint, {
      ...config,
      body: JSON.stringify(data),
    });
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    return this.request<T>('DELETE', endpoint, config);
  }
}

// Create default API client instance
export const apiClient = new ApiClient(
  process.env.NEXT_PUBLIC_API_URL || 'https://api.complianceflow.es'
);

// Export class for creating custom instances
export { ApiClient };