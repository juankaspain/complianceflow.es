import { NextResponse } from 'next/server';
import { env } from '@/lib/env';

/**
 * Health check endpoint
 * Used by Docker, monitoring services, and load balancers
 */
export async function GET() {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: env.NODE_ENV,
    version: process.env.NEXT_PUBLIC_APP_VERSION || '2.0.0',
    checks: {
      memory: checkMemory(),
      // Add more checks as needed
      // database: await checkDatabase(),
      // redis: await checkRedis(),
    },
  };

  const allHealthy = Object.values(health.checks).every((check) => check.status === 'ok');

  return NextResponse.json(health, {
    status: allHealthy ? 200 : 503,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}

function checkMemory() {
  const used = process.memoryUsage();
  const threshold = 500 * 1024 * 1024; // 500MB

  return {
    status: used.heapUsed < threshold ? 'ok' : 'warning',
    heapUsed: `${Math.round(used.heapUsed / 1024 / 1024)}MB`,
    heapTotal: `${Math.round(used.heapTotal / 1024 / 1024)}MB`,
    external: `${Math.round(used.external / 1024 / 1024)}MB`,
  };
}

// Example database check
// async function checkDatabase() {
//   try {
//     await prisma.$queryRaw`SELECT 1`;
//     return { status: 'ok' };
//   } catch (error) {
//     return { status: 'error', message: error.message };
//   }
// }

// Example Redis check
// async function checkRedis() {
//   try {
//     await redis.ping();
//     return { status: 'ok' };
//   } catch (error) {
//     return { status: 'error', message: error.message };
//   }
// }