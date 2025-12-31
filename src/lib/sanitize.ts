/**
 * Input sanitization utilities to prevent XSS and injection attacks
 */

/**
 * Sanitize HTML string by removing potentially dangerous content
 */
export function sanitizeHtml(html: string): string {
  // Basic sanitization - in production, use a library like DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
}

/**
 * Sanitize string to prevent SQL injection
 */
export function sanitizeSql(input: string): string {
  return input
    .replace(/'/g, "''")
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '')
    .replace(/--/g, '')
    .replace(/\/\*/g, '')
    .replace(/\*\//g, '');
}

/**
 * Sanitize user input for safe display
 */
export function sanitizeUserInput(input: string): string {
  return input
    .trim()
    .replace(/[<>"'&]/g, (char) => {
      const entities: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '&': '&amp;',
      };
      return entities[char] || char;
    });
}

/**
 * Sanitize email address
 */
export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Sanitize URL to prevent open redirect vulnerabilities
 */
export function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '/';
    }
    return url;
  } catch {
    // Invalid URL, return safe default
    return '/';
  }
}

/**
 * Sanitize filename to prevent directory traversal
 */
export function sanitizeFilename(filename: string): string {
  return filename
    .replace(/\.\./g, '')
    .replace(/[\/\\]/g, '')
    .replace(/[^a-zA-Z0-9._-]/g, '_');
}

/**
 * Validate and sanitize phone number
 */
export function sanitizePhone(phone: string): string {
  return phone.replace(/[^0-9+\-()\s]/g, '').trim();
}

/**
 * Remove null bytes from string
 */
export function removeNullBytes(str: string): string {
  return str.replace(/\0/g, '');
}