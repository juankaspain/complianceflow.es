'use client';

import * as React from 'react';
import { cn } from '@/lib/utils/cn';
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const variantStyles = {
  info: {
    container: 'bg-blue-50 border-blue-200 text-blue-900',
    icon: 'text-blue-600',
    Icon: Info,
  },
  success: {
    container: 'bg-green-50 border-green-200 text-green-900',
    icon: 'text-green-600',
    Icon: CheckCircle,
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    icon: 'text-yellow-600',
    Icon: AlertTriangle,
  },
  error: {
    container: 'bg-red-50 border-red-200 text-red-900',
    icon: 'text-red-600',
    Icon: AlertCircle,
  },
};

export function Alert({
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
  className,
  children,
  ...props
}: AlertProps) {
  const [dismissed, setDismissed] = React.useState(false);
  const styles = variantStyles[variant];
  const Icon = styles.Icon;

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  if (dismissed) return null;

  return (
    <div
      className={cn(
        'relative rounded-lg border p-4',
        styles.container,
        className
      )}
      role="alert"
      {...props}
    >
      <div className="flex items-start gap-3">
        <Icon className={cn('h-5 w-5 flex-shrink-0', styles.icon)} />
        <div className="flex-1">
          {title && <h5 className="mb-1 font-medium">{title}</h5>}
          <div className="text-sm">{children}</div>
        </div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 rounded-lg p-1 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}