import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting configuration
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 100; // requests per window

// Security headers middleware
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';

  // Rate limiting
  const now = Date.now();
  const clientLimit = rateLimit.get(ip);

  if (clientLimit) {
    if (now < clientLimit.resetTime) {
      if (clientLimit.count >= MAX_REQUESTS) {
        return new NextResponse('Too Many Requests', {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((clientLimit.resetTime - now) / 1000)),
          },
        });
      }
      clientLimit.count++;
    } else {
      rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }
  } else {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
  }

  // Clean up old entries
  if (Math.random() < 0.01) {
    for (const [key, value] of rateLimit.entries()) {
      if (now > value.resetTime) {
        rateLimit.delete(key);
      }
    }
  }

  // Additional security headers
  response.headers.set('X-Request-ID', crypto.randomUUID());
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Download-Options', 'noopen');
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public directory)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)',
  ],
};