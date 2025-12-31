/**
 * Global Toast Manager
 * Provides a simple API to show notifications from anywhere in the app
 */

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
}

class ToastManager {
  private listeners: Set<(toasts: ToastMessage[]) => void> = new Set();
  private toasts: ToastMessage[] = [];

  subscribe(listener: (toasts: ToastMessage[]) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((listener) => listener([...this.toasts]));
  }

  private add(message: string, type: ToastType, duration: number = 5000) {
    const id = Math.random().toString(36).substring(7);
    const toast: ToastMessage = { id, message, type, duration };
    
    this.toasts.push(toast);
    this.notify();

    setTimeout(() => {
      this.remove(id);
    }, duration);

    return id;
  }

  remove(id: string) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    this.notify();
  }

  success(message: string, duration?: number) {
    return this.add(message, 'success', duration);
  }

  error(message: string, duration?: number) {
    return this.add(message, 'error', duration);
  }

  warning(message: string, duration?: number) {
    return this.add(message, 'warning', duration);
  }

  info(message: string, duration?: number) {
    return this.add(message, 'info', duration);
  }

  clear() {
    this.toasts = [];
    this.notify();
  }
}

export const toast = new ToastManager();

// Convenience exports
export const showSuccess = (message: string) => toast.success(message);
export const showError = (message: string) => toast.error(message);
export const showWarning = (message: string) => toast.warning(message);
export const showInfo = (message: string) => toast.info(message);