'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary - Catches React errors and displays fallback UI
 * 
 * @example
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 */
export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to monitoring service (e.g., Sentry)
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, send to error tracking service
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry.captureException(error, { contexts: { react: errorInfo } });
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full"
          >
            {/* Error Card */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-900/80 backdrop-blur-xl border border-red-500/30 p-8 shadow-2xl shadow-red-500/10">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/20">
                    <div className="absolute inset-0 rounded-2xl bg-red-500/20 blur-xl opacity-50" />
                    <svg
                      className="relative w-10 h-10 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white text-center mb-3">
                  Algo salió mal
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-center mb-6">
                  Lo sentimos, ha ocurrido un error inesperado. Nuestro equipo ha sido
                  notificado y estamos trabajando en solucionarlo.
                </p>

                {/* Error details (development only) */}
                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <div className="mb-6 p-4 rounded-lg bg-gray-950/50 border border-gray-800">
                    <p className="text-xs font-mono text-red-400 break-all">
                      {this.state.error.toString()}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <motion.button
                    onClick={this.handleReset}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-600 text-white font-semibold shadow-lg shadow-primary/30 transition-all"
                  >
                    Intentar de nuevo
                  </motion.button>

                  <motion.a
                    href="/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 hover:border-white/30 transition-all text-center"
                  >
                    Volver al inicio
                  </motion.a>
                </div>

                {/* Support link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                  ¿Necesitas ayuda?{' '}
                  <a
                    href="mailto:support@complianceflow.es"
                    className="text-primary-400 hover:text-primary-300 underline"
                  >
                    Contacta con soporte
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * useErrorHandler - Hook to manually trigger error boundary
 * 
 * @example
 * const throwError = useErrorHandler();
 * throwError(new Error('Something went wrong'));
 */
export function useErrorHandler() {
  return (error: Error) => {
    throw error;
  };
}
