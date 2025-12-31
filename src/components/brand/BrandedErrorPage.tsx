'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { BrandedButton } from './BrandedButton';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';

interface BrandedErrorPageProps {
  statusCode?: number;
  title?: string;
  message?: string;
  showBackButton?: boolean;
}

export function BrandedErrorPage({
  statusCode = 404,
  title,
  message,
  showBackButton = true,
}: BrandedErrorPageProps) {
  const defaultTitles: Record<number, string> = {
    404: 'Página no encontrada',
    500: 'Error del servidor',
    403: 'Acceso denegado',
  };

  const defaultMessages: Record<number, string> = {
    404: 'La página que buscas no existe o ha sido movida.',
    500: 'Algo salió mal en nuestros servidores. Estamos trabajando para solucionarlo.',
    403: 'No tienes permisos para acceder a este recurso.',
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo variant="primary" />
        </div>

        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-brand-primary-100 dark:bg-brand-primary-900/20 p-6 rounded-full">
            <AlertCircle className="w-16 h-16 text-brand-primary-500" />
          </div>
        </div>

        {/* Status Code */}
        <div className="text-8xl font-bold text-gradient-primary mb-4">
          {statusCode}
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">
          {title || defaultTitles[statusCode] || 'Error'}
        </h1>

        {/* Message */}
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          {message || defaultMessages[statusCode] || 'Ha ocurrido un error inesperado.'}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {showBackButton && (
            <BrandedButton
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </BrandedButton>
          )}
          <Link href="/">
            <BrandedButton variant="gradient" size="lg">
              <Home className="w-5 h-5" />
              Ir al Inicio
            </BrandedButton>
          </Link>
        </div>

        {/* Help Text */}
        <p className="mt-12 text-sm text-muted-foreground">
          ¿Necesitas ayuda?{' '}
          <Link href="/contact" className="text-brand-primary-500 hover:underline">
            Contáctanos
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BrandedErrorPage;
