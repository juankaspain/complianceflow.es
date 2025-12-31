import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de Tailwind CSS de forma segura
 * @param inputs - Clases a combinar
 * @returns String con clases combinadas
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formatea números grandes con separadores de miles
 * @param num - Número a formatear
 * @returns String formateado
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('es-ES').format(num);
}

/**
 * Formatea precios en euros
 * @param amount - Cantidad a formatear
 * @returns String formateado con símbolo de euro
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

/**
 * Trunca texto largo y añade puntos suspensivos
 * @param text - Texto a truncar
 * @param length - Longitud máxima
 * @returns Texto truncado
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return `${text.slice(0, length)}...`;
}

/**
 * Genera un ID único
 * @returns String con ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Sleep helper para delays
 * @param ms - Milisegundos a esperar
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Valida si un string es un email válido
 * @param email - Email a validar
 * @returns Boolean indicando si es válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Obtiene las iniciales de un nombre
 * @param name - Nombre completo
 * @returns Iniciales (máximo 2 caracteres)
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}