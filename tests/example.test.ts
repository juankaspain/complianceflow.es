import { describe, it, expect } from 'vitest';
import { sanitizeEmail, sanitizeUrl } from '../src/lib/sanitize';
import { cache } from '../src/lib/cache';

describe('Sanitization Functions', () => {
  describe('sanitizeEmail', () => {
    it('should convert email to lowercase', () => {
      expect(sanitizeEmail('TEST@EXAMPLE.COM')).toBe('test@example.com');
    });

    it('should trim whitespace', () => {
      expect(sanitizeEmail('  test@example.com  ')).toBe('test@example.com');
    });
  });

  describe('sanitizeUrl', () => {
    it('should allow valid https URLs', () => {
      const url = 'https://example.com';
      expect(sanitizeUrl(url)).toBe(url);
    });

    it('should allow valid http URLs', () => {
      const url = 'http://example.com';
      expect(sanitizeUrl(url)).toBe(url);
    });

    it('should reject javascript: URLs', () => {
      expect(sanitizeUrl('javascript:alert(1)')).toBe('/');
    });

    it('should reject invalid URLs', () => {
      expect(sanitizeUrl('not-a-url')).toBe('/');
    });
  });
});

describe('Cache Manager', () => {
  beforeEach(() => {
    cache.clear();
  });

  it('should store and retrieve values', () => {
    cache.set('test-key', 'test-value');
    expect(cache.get('test-key')).toBe('test-value');
  });

  it('should return null for expired items', async () => {
    cache.set('test-key', 'test-value', 10); // 10ms TTL
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(cache.get('test-key')).toBe(null);
  });

  it('should check if key exists', () => {
    cache.set('test-key', 'test-value');
    expect(cache.has('test-key')).toBe(true);
    expect(cache.has('non-existent')).toBe(false);
  });

  it('should delete items', () => {
    cache.set('test-key', 'test-value');
    cache.delete('test-key');
    expect(cache.get('test-key')).toBe(null);
  });

  it('should clear all items', () => {
    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.clear();
    expect(cache.get('key1')).toBe(null);
    expect(cache.get('key2')).toBe(null);
  });
});