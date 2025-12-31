type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogContext {
  [key: string]: unknown;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isProd = process.env.NODE_ENV === 'production';

  private formatMessage(level: LogLevel, message: string, context?: LogContext): string {
    const timestamp = new Date().toISOString();
    const contextStr = context ? ` ${JSON.stringify(context)}` : '';
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${contextStr}`;
  }

  private log(level: LogLevel, message: string, context?: LogContext): void {
    const formattedMessage = this.formatMessage(level, message, context);

    // In production, you'd send to a logging service (Sentry, LogRocket, etc.)
    if (this.isProd) {
      // TODO: Send to external logging service
      if (level === 'error') {
        console.error(formattedMessage);
      }
    } else if (this.isDevelopment) {
      switch (level) {
        case 'debug':
          console.debug(formattedMessage);
          break;
        case 'info':
          console.info(formattedMessage);
          break;
        case 'warn':
          console.warn(formattedMessage);
          break;
        case 'error':
          console.error(formattedMessage);
          break;
      }
    }
  }

  debug(message: string, context?: LogContext): void {
    this.log('debug', message, context);
  }

  info(message: string, context?: LogContext): void {
    this.log('info', message, context);
  }

  warn(message: string, context?: LogContext): void {
    this.log('warn', message, context);
  }

  error(message: string, error?: Error, context?: LogContext): void {
    const errorContext = error
      ? {
          ...context,
          error: {
            name: error.name,
            message: error.message,
            stack: error.stack,
          },
        }
      : context;

    this.log('error', message, errorContext);
  }

  // Performance monitoring
  time(label: string): () => void {
    const start = performance.now();
    return () => {
      const duration = performance.now() - start;
      this.debug(`Timer: ${label}`, { duration: `${duration.toFixed(2)}ms` });
    };
  }
}

export const logger = new Logger();

// Helper for async error handling
export async function withLogging<T>(
  fn: () => Promise<T>,
  context: { operation: string; [key: string]: unknown }
): Promise<T> {
  const endTimer = logger.time(context.operation);
  try {
    const result = await fn();
    endTimer();
    logger.info(`Successfully completed: ${context.operation}`, context);
    return result;
  } catch (error) {
    endTimer();
    logger.error(
      `Failed to complete: ${context.operation}`,
      error instanceof Error ? error : new Error(String(error)),
      context
    );
    throw error;
  }
}