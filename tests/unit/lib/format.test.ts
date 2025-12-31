import { describe, it, expect } from 'vitest';
import {
  formatNumber,
  formatCurrency,
  formatPercent,
  formatFileSize,
  abbreviateNumber,
} from '@/lib/utils/format';

describe('Format Utilities', () => {
  describe('formatNumber', () => {
    it('formats numbers with thousands separators', () => {
      expect(formatNumber(1000)).toBe('1.000');
      expect(formatNumber(1000000)).toBe('1.000.000');
    });
  });

  describe('formatCurrency', () => {
    it('formats currency with symbol', () => {
      const result = formatCurrency(1234.56);
      expect(result).toContain('1.234,56');
      expect(result).toContain('€');
    });

    it('handles different currencies', () => {
      const result = formatCurrency(100, 'USD', 'en-US');
      expect(result).toContain('$100');
    });
  });

  describe('formatPercent', () => {
    it('formats percentages correctly', () => {
      expect(formatPercent(50)).toBe('50\u00a0%');
      expect(formatPercent(75.5, 1)).toContain('75,5');
    });
  });

  describe('formatFileSize', () => {
    it('formats bytes correctly', () => {
      expect(formatFileSize(0)).toBe('0 Bytes');
      expect(formatFileSize(1024)).toBe('1 KB');
      expect(formatFileSize(1048576)).toBe('1 MB');
      expect(formatFileSize(1073741824)).toBe('1 GB');
    });
  });

  describe('abbreviateNumber', () => {
    it('abbreviates large numbers', () => {
      expect(abbreviateNumber(500)).toBe('500');
      expect(abbreviateNumber(1500)).toBe('1.5K');
      expect(abbreviateNumber(1500000)).toBe('1.5M');
      expect(abbreviateNumber(1500000000)).toBe('1.5B');
    });
  });
});