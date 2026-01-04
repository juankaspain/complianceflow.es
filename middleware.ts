import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Allowed origins for CORS
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [
      'https://complianceflow.netlify.app',
      'https://complianceflow.es',
      'https://www.complianceflow.es'
    ]
  : ['http://localhost:3000', 'http://127.0.0.1:3000']

// Allowed methods
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']

// Allowed headers
const allowedHeaders = [
  'Content-Type',
  'Authorization',
  'X-CSRF-Token',
  'X-Requested-With',
  'Accept',
  'Accept-Version',
  'Content-Length',
  'Content-MD5',
  'Date',
  'X-Api-Version'
]

export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin')
  const pathname = request.nextUrl.pathname

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    const preflightHeaders = {
      'Access-Control-Allow-Methods': allowedMethods.join(', '),
      'Access-Control-Allow-Headers': allowedHeaders.join(', '),
      'Access-Control-Max-Age': '86400', // 24 hours
    }

    if (origin && allowedOrigins.includes(origin)) {
      return NextResponse.json({}, { 
        headers: {
          ...preflightHeaders,
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Credentials': 'true',
        } 
      })
    }

    return NextResponse.json({}, { headers: preflightHeaders })
  }

  // Handle API routes
  if (pathname.startsWith('/api')) {
    // Check if origin is allowed
    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { error: 'CORS policy: Origin not allowed' },
        { 
          status: 403,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    }

    const response = NextResponse.next()

    // Set CORS headers
    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin)
      response.headers.set('Access-Control-Allow-Credentials', 'true')
      response.headers.set('Access-Control-Allow-Methods', allowedMethods.join(', '))
      response.headers.set('Access-Control-Allow-Headers', allowedHeaders.join(', '))
    }

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/api/:path*',
  ],
}
