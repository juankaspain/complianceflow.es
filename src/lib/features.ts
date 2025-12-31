/**
 * Feature flags system for controlled rollout of new features
 * Enables A/B testing and gradual feature deployment
 */

type FeatureFlag = {
  enabled: boolean;
  rolloutPercentage?: number;
  allowedUsers?: string[];
  allowedEnvironments?: string[];
};

type FeatureFlags = {
  // Authentication features
  socialLogin: FeatureFlag;
  twoFactorAuth: FeatureFlag;
  
  // Product features
  advancedAnalytics: FeatureFlag;
  aiAssistant: FeatureFlag;
  customBranding: FeatureFlag;
  apiAccess: FeatureFlag;
  
  // Experimental features
  newDashboard: FeatureFlag;
  darkMode: FeatureFlag;
};

const defaultFlags: FeatureFlags = {
  socialLogin: {
    enabled: true,
    allowedEnvironments: ['production', 'development'],
  },
  twoFactorAuth: {
    enabled: true,
    allowedEnvironments: ['production', 'development'],
  },
  advancedAnalytics: {
    enabled: true,
    rolloutPercentage: 100,
  },
  aiAssistant: {
    enabled: false,
    rolloutPercentage: 10,
    allowedEnvironments: ['development'],
  },
  customBranding: {
    enabled: true,
  },
  apiAccess: {
    enabled: true,
  },
  newDashboard: {
    enabled: false,
    rolloutPercentage: 25,
  },
  darkMode: {
    enabled: true,
  },
};

class FeatureFlagManager {
  private flags: FeatureFlags;
  private userId?: string;
  private environment: string;

  constructor() {
    this.flags = defaultFlags;
    this.environment = process.env.NODE_ENV || 'development';
  }

  /**
   * Set the current user ID for user-specific feature checks
   */
  setUserId(userId: string): void {
    this.userId = userId;
  }

  /**
   * Check if a feature is enabled for the current user/environment
   */
  isEnabled(feature: keyof FeatureFlags): boolean {
    const flag = this.flags[feature];

    // Feature is globally disabled
    if (!flag.enabled) {
      return false;
    }

    // Check environment restrictions
    if (flag.allowedEnvironments && !flag.allowedEnvironments.includes(this.environment)) {
      return false;
    }

    // Check user allowlist
    if (flag.allowedUsers && this.userId) {
      return flag.allowedUsers.includes(this.userId);
    }

    // Check rollout percentage
    if (flag.rolloutPercentage !== undefined) {
      if (!this.userId) {
        return Math.random() * 100 < flag.rolloutPercentage;
      }
      // Deterministic rollout based on user ID
      const hash = this.simpleHash(this.userId);
      return (hash % 100) < flag.rolloutPercentage;
    }

    return true;
  }

  /**
   * Override a feature flag (useful for testing)
   */
  override(feature: keyof FeatureFlags, enabled: boolean): void {
    this.flags[feature].enabled = enabled;
  }

  /**
   * Get all feature flags status
   */
  getAllFlags(): Record<string, boolean> {
    const result: Record<string, boolean> = {};
    for (const feature in this.flags) {
      result[feature] = this.isEnabled(feature as keyof FeatureFlags);
    }
    return result;
  }

  /**
   * Simple hash function for deterministic rollout
   */
  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  }
}

export const featureFlags = new FeatureFlagManager();

/**
 * React hook for feature flags (if needed)
 */
export function useFeatureFlag(feature: keyof FeatureFlags): boolean {
  return featureFlags.isEnabled(feature);
}