'use client';

import { Toaster as SonnerToaster } from 'sonner';

/**
 * Premium toast notification system using Sonner
 * 
 * Usage in your components:
 * ```tsx
 * import { toast } from 'sonner';
 * 
 * // Success
 * toast.success('Operation completed successfully');
 * 
 * // Error
 * toast.error('Something went wrong');
 * 
 * // Info
 * toast.info('Please review the changes');
 * 
 * // Warning
 * toast.warning('This action cannot be undone');
 * 
 * // Promise (for async operations)
 * toast.promise(
 *   fetch('/api/data'),
 *   {
 *     loading: 'Loading...',
 *     success: 'Data loaded successfully',
 *     error: 'Failed to load data',
 *   }
 * );
 * 
 * // Custom with action
 * toast('Event created', {
 *   action: {
 *     label: 'Undo',
 *     onClick: () => console.log('Undo'),
 *   },
 * });
 * ```
 */
export function Toaster() {
  return (
    <SonnerToaster
      theme="dark"
      position="top-right"
      expand
      richColors
      closeButton
      toastOptions={{
        // Default styling for all toasts
        classNames: {
          toast:
            'glass glow-primary rounded-xl p-4 text-white border-white/10 shadow-xl backdrop-blur-xl',
          title: 'text-base font-semibold',
          description: 'text-sm text-gray-300 mt-1',
          actionButton:
            'bg-primary hover:bg-primary-600 text-white font-medium rounded-lg px-4 py-2 transition-colors',
          cancelButton:
            'bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg px-4 py-2 transition-colors',
          closeButton:
            'bg-white/10 hover:bg-white/20 text-white border-white/20 transition-colors',
          success: 'border-success/30 glow-success',
          error: 'border-error/30',
          warning: 'border-warning/30',
          info: 'border-primary/30 glow-primary',
        },
        // Default duration
        duration: 4000,
        // Custom icons would go here if needed
      }}
    />
  );
}

/**
 * Export toast utility for convenience
 * Import this in components that need to show toasts
 */
export { toast } from 'sonner';
