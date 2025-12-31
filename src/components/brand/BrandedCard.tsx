'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BrandedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

export function BrandedCard({
  children,
  className,
  hover = false,
  gradient = false,
  onClick,
}: BrandedCardProps) {
  return (
    <div
      className={cn(
        'bg-card border border-border rounded-lg shadow-sm',
        'transition-all duration-200',
        hover && [
          'hover:shadow-md hover:border-brand-primary-500/50',
          'hover:-translate-y-1 cursor-pointer',
        ],
        gradient && 'bg-gradient-to-br from-white to-brand-primary-50 dark:from-gray-900 dark:to-brand-primary-900/20',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default BrandedCard;
