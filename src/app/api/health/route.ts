import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

/**
 * Health check endpoint
 * Used by monitoring services and load balancers
 */
export async function GET() {
  try {
    const health = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      version: process.env.NEXT_PUBLIC_APP_VERSION || '2.0.0',
      checks: {
        server: 'ok',
        // Add more health checks here:
        // database: await checkDatabase(),
        // redis: await checkRedis(),
        // external_api: await checkExternalAPI(),
      },
    };

    logger.debug('Health check passed', health);

    return NextResponse.json(health, { status: 200 });
  } catch (error) {
    logger.error('Health check failed', error as Error);

    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: (error as Error).message,
      },
      { status: 503 }
    );
  }
}

// Prevent caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;