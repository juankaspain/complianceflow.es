/**
 * Advanced rate limiter with multiple strategies
 */

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  strategy?: 'fixed-window' | 'sliding-window' | 'token-bucket';
}

interface RateLimitEntry {
  count: number;
  resetTime: number;
  tokens?: number;
  lastRefill?: number;
}

class RateLimiter {
  private limits = new Map<string, RateLimitEntry>();
  private config: Required<RateLimitConfig>;

  constructor(config: RateLimitConfig) {
    this.config = {
      ...config,
      strategy: config.strategy || 'sliding-window',
    };

    // Cleanup old entries periodically
    setInterval(() => this.cleanup(), 60000);
  }

  /**
   * Check if request is allowed
   */
  async check(identifier: string): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
    const now = Date.now();
    const entry = this.limits.get(identifier);

    switch (this.config.strategy) {
      case 'fixed-window':
        return this.fixedWindow(identifier, now, entry);
      case 'sliding-window':
        return this.slidingWindow(identifier, now, entry);
      case 'token-bucket':
        return this.tokenBucket(identifier, now, entry);
      default:
        return this.slidingWindow(identifier, now, entry);
    }
  }

  /**
   * Fixed window algorithm
   */
  private fixedWindow(
    identifier: string,
    now: number,
    entry?: RateLimitEntry
  ): { allowed: boolean; remaining: number; resetTime: number } {
    if (!entry || now >= entry.resetTime) {
      const resetTime = now + this.config.windowMs;
      this.limits.set(identifier, {
        count: 1,
        resetTime,
      });
      return {
        allowed: true,
        remaining: this.config.maxRequests - 1,
        resetTime,
      };
    }

    if (entry.count >= this.config.maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: entry.resetTime,
      };
    }

    entry.count++;
    return {
      allowed: true,
      remaining: this.config.maxRequests - entry.count,
      resetTime: entry.resetTime,
    };
  }

  /**
   * Sliding window algorithm (more accurate)
   */
  private slidingWindow(
    identifier: string,
    now: number,
    entry?: RateLimitEntry
  ): { allowed: boolean; remaining: number; resetTime: number } {
    if (!entry || now >= entry.resetTime) {
      const resetTime = now + this.config.windowMs;
      this.limits.set(identifier, {
        count: 1,
        resetTime,
      });
      return {
        allowed: true,
        remaining: this.config.maxRequests - 1,
        resetTime,
      };
    }

    // Calculate weighted count based on time passed
    const timePassedRatio = (now - (entry.resetTime - this.config.windowMs)) / this.config.windowMs;
    const weightedCount = entry.count * (1 - timePassedRatio);

    if (weightedCount >= this.config.maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: entry.resetTime,
      };
    }

    entry.count = weightedCount + 1;
    entry.resetTime = now + this.config.windowMs;
    return {
      allowed: true,
      remaining: Math.floor(this.config.maxRequests - entry.count),
      resetTime: entry.resetTime,
    };
  }

  /**
   * Token bucket algorithm (smoothest)
   */
  private tokenBucket(
    identifier: string,
    now: number,
    entry?: RateLimitEntry
  ): { allowed: boolean; remaining: number; resetTime: number } {
    const refillRate = this.config.maxRequests / (this.config.windowMs / 1000); // tokens per second

    if (!entry) {
      const resetTime = now + this.config.windowMs;
      this.limits.set(identifier, {
        count: 0,
        resetTime,
        tokens: this.config.maxRequests - 1,
        lastRefill: now,
      });
      return {
        allowed: true,
        remaining: this.config.maxRequests - 1,
        resetTime,
      };
    }

    // Refill tokens based on time passed
    const timePassed = (now - (entry.lastRefill || now)) / 1000;
    const tokensToAdd = timePassed * refillRate;
    entry.tokens = Math.min(
      this.config.maxRequests,
      (entry.tokens || 0) + tokensToAdd
    );
    entry.lastRefill = now;

    if (entry.tokens < 1) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: now + (1 - entry.tokens) * (1000 / refillRate),
      };
    }

    entry.tokens -= 1;
    return {
      allowed: true,
      remaining: Math.floor(entry.tokens),
      resetTime: now + this.config.windowMs,
    };
  }

  /**
   * Reset rate limit for identifier
   */
  reset(identifier: string): void {
    this.limits.delete(identifier);
  }

  /**
   * Clear all rate limits
   */
  clearAll(): void {
    this.limits.clear();
  }

  /**
   * Cleanup expired entries
   */
  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.limits.entries()) {
      if (now > entry.resetTime) {
        this.limits.delete(key);
      }
    }
  }
}

// Export pre-configured rate limiters
export const apiRateLimiter = new RateLimiter({
  windowMs: 60000, // 1 minute
  maxRequests: 100,
  strategy: 'sliding-window',
});

export const authRateLimiter = new RateLimiter({
  windowMs: 900000, // 15 minutes
  maxRequests: 5,
  strategy: 'fixed-window',
});

export const strictRateLimiter = new RateLimiter({
  windowMs: 60000, // 1 minute
  maxRequests: 10,
  strategy: 'token-bucket',
});

export { RateLimiter };