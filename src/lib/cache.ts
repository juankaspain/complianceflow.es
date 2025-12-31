/**
 * Cache utilities for optimizing performance
 * Supports both in-memory and browser storage caching
 */

interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

class CacheManager {
  private memoryCache = new Map<string, CacheItem<unknown>>();
  private readonly cleanupInterval = 60000; // 1 minute

  constructor() {
    // Cleanup expired items periodically
    if (typeof window !== 'undefined') {
      setInterval(() => this.cleanup(), this.cleanupInterval);
    }
  }

  /**
   * Set item in cache with TTL (time to live) in milliseconds
   */
  set<T>(key: string, data: T, ttl: number = 300000): void {
    const item: CacheItem<T> = {
      data,
      timestamp: Date.now(),
      ttl,
    };
    this.memoryCache.set(key, item);
  }

  /**
   * Get item from cache
   */
  get<T>(key: string): T | null {
    const item = this.memoryCache.get(key) as CacheItem<T> | undefined;

    if (!item) {
      return null;
    }

    // Check if expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.memoryCache.delete(key);
      return null;
    }

    return item.data;
  }

  /**
   * Check if key exists and is valid
   */
  has(key: string): boolean {
    return this.get(key) !== null;
  }

  /**
   * Delete item from cache
   */
  delete(key: string): void {
    this.memoryCache.delete(key);
  }

  /**
   * Clear all cache
   */
  clear(): void {
    this.memoryCache.clear();
  }

  /**
   * Clean up expired items
   */
  private cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.memoryCache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.memoryCache.delete(key);
      }
    }
  }

  /**
   * Get cache statistics
   */
  getStats(): { size: number; keys: string[] } {
    return {
      size: this.memoryCache.size,
      keys: Array.from(this.memoryCache.keys()),
    };
  }
}

export const cache = new CacheManager();

/**
 * Memoize async function with cache
 */
export function memoize<T extends (...args: unknown[]) => Promise<unknown>>(
  fn: T,
  options: { ttl?: number; keyFn?: (...args: Parameters<T>) => string } = {}
): T {
  const { ttl = 300000, keyFn = (...args) => JSON.stringify(args) } = options;

  return (async (...args: Parameters<T>) => {
    const key = `memoize:${fn.name}:${keyFn(...args)}`;
    const cached = cache.get(key);

    if (cached !== null) {
      return cached;
    }

    const result = await fn(...args);
    cache.set(key, result, ttl);
    return result;
  }) as T;
}

/**
 * Browser storage cache (localStorage)
 */
export const storageCache = {
  set<T>(key: string, data: T, ttl: number = 86400000): void {
    if (typeof window === 'undefined') return;

    const item = {
      data,
      timestamp: Date.now(),
      ttl,
    };

    try {
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.error('Failed to set localStorage item:', error);
    }
  },

  get<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;

    try {
      const item = localStorage.getItem(key);
      if (!item) return null;

      const parsed = JSON.parse(item) as CacheItem<T>;

      if (Date.now() - parsed.timestamp > parsed.ttl) {
        localStorage.removeItem(key);
        return null;
      }

      return parsed.data;
    } catch (error) {
      console.error('Failed to get localStorage item:', error);
      return null;
    }
  },

  delete(key: string): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  },

  clear(): void {
    if (typeof window === 'undefined') return;
    localStorage.clear();
  },
};