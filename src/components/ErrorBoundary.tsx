'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { logger } from '@/lib/logger';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary component for catching and handling React errors
 * Provides fallback UI and logs errors for monitoring
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    logger.error('React Error Boundary caught an error', error, {
      componentStack: errorInfo.componentStack,
    });

    // Send to error tracking service in production
    if (process.env.NODE_ENV === 'production') {
      // TODO: Send to Sentry or similar
      // Sentry.captureException(error, { contexts: { react: { componentStack: errorInfo.componentStack } } });
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
          <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-4 flex items-center justify-center">
              <svg
                className="h-12 w-12 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">
              Algo salió mal
            </h2>
            <p className="mb-6 text-center text-gray-600">
              Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta recargar la
              página.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-4 rounded bg-gray-100 p-4">
                <summary className="cursor-pointer font-semibold text-gray-700">
                  Error details (dev only)
                </summary>
                <pre className="mt-2 overflow-auto text-xs text-red-600">
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
            <div className="flex gap-3">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Recargar página
              </button>
              <button
                onClick={() => (window.location.href = '/')}
                className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Ir al inicio
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}