'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface BrandedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-primary-500 text-white hover:bg-brand-primary-600 shadow-brand',
  secondary: 'bg-brand-secondary-500 text-white hover:bg-brand-secondary-600',
  outline: 'border-2 border-brand-primary-500 text-brand-primary-500 hover:bg-brand-primary-500 hover:text-white',
  ghost: 'text-brand-primary-500 hover:bg-brand-primary-50 dark:hover:bg-brand-primary-900/20',
  gradient: 'bg-gradient-primary text-white shadow-brand-lg hover:shadow-brand',
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

export function BrandedButton({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: BrandedButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'font-semibold rounded-lg',
        'transition-all duration-200',
        'hover:scale-105 active:scale-95',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500 focus-visible:ring-offset-2',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default BrandedButton;
