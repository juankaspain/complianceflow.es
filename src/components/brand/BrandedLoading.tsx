'use client';

import React from 'react';
import { Logo } from './Logo';

export function BrandedLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-pulse-glow">
          <Logo variant="icon" width={64} height={64} />
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-primary-500 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-brand-primary-500 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-brand-primary-500 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}

export function BrandedSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div
      className={`${sizeClasses[size]} border-brand-primary-200 border-t-brand-primary-500 rounded-full animate-spin`}
      role="status"
      aria-label="Cargando"
    />
  );
}

export default BrandedLoading;
