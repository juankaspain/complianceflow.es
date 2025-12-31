import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { mockFetchResponse } from '../utils/helpers';

describe('API Integration', () => {
  beforeAll(() => {
    global.fetch = vi.fn();
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  describe('Contact Form API', () => {
    it('should submit contact form successfully', async () => {
      const mockResponse = { success: true, message: 'Form submitted' };
      (global.fetch as any).mockResolvedValueOnce(mockFetchResponse(mockResponse));

      const formData = {
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message',
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      expect(data.success).toBe(true);
    });

    it('should handle API errors', async () => {
      (global.fetch as any).mockResolvedValueOnce(
        mockFetchResponse({ error: 'Server error' }, 500)
      );

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({}),
      });

      expect(response.status).toBe(500);
    });

    it('should validate email format', async () => {
      const mockResponse = { success: false, error: 'Invalid email' };
      (global.fetch as any).mockResolvedValueOnce(mockFetchResponse(mockResponse, 400));

      const formData = {
        name: 'Test User',
        email: 'invalid-email',
        message: 'Test message',
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      expect(data.success).toBe(false);
      expect(response.status).toBe(400);
    });
  });

  describe('Newsletter API', () => {
    it('should subscribe to newsletter', async () => {
      const mockResponse = { success: true, subscribed: true };
      (global.fetch as any).mockResolvedValueOnce(mockFetchResponse(mockResponse));

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email: 'test@example.com' }),
      });

      const data = await response.json();
      expect(data.subscribed).toBe(true);
    });

    it('should handle duplicate subscriptions', async () => {
      const mockResponse = { success: false, error: 'Already subscribed' };
      (global.fetch as any).mockResolvedValueOnce(mockFetchResponse(mockResponse, 409));

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email: 'existing@example.com' }),
      });

      expect(response.status).toBe(409);
    });
  });
});
