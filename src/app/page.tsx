'use client';

import React from 'react';
import { Logo, BrandedButton, BrandedCard, GradientText } from '@/components/brand';
import {
  ArrowRight,
  Shield,
  Zap,
  Lock,
  CheckCircle,
  BarChart3,
  FileText,
  Users,
  Globe,
  Star,
  TrendingUp,
  Clock,
  Award,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo priority />
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium hover:text-brand-primary-500 transition-colors">
                Características
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-brand-primary-500 transition-colors">
                Precios
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-brand-primary-500 transition-colors">
                Testimonios
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-brand-primary-500 transition-colors">
                Contacto
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <BrandedButton variant="ghost" size="sm">
                Iniciar Sesión
              </BrandedButton>
              <BrandedButton variant="gradient" size="sm">
                Prueba Gratis
              </BrandedButton>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-50 via-background to-brand-accent-50/30 dark:from-brand-primary-950/20 dark:via-background dark:to-brand-accent-950/10" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-primary-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-accent-500/10 blur-[120px] rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-primary-100 dark:bg-brand-primary-900/30 text-brand-primary-600 dark:text-brand-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Star className="w-4 h-4 fill-current" />
              Plataforma de Compliance #1 en España
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in">
              <GradientText as="span" className="block">
                Compliance
              </GradientText>
              <span className="text-foreground">Simplificado</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: '0.1s' }}>
              Automatiza tus procesos de cumplimiento normativo con nuestra potente plataforma API-first.
              Ahorra tiempo, reduce riesgos y mantén el control total.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <BrandedButton variant="gradient" size="xl">
                Comenzar Gratis
                <ArrowRight className="w-5 h-5" />
              </BrandedButton>
              <BrandedButton variant="outline" size="xl">
                Ver Demo
              </BrandedButton>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-brand-primary-500 mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-brand-primary-500 mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Empresas</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-brand-primary-500 mb-1">50M+</div>
                <div className="text-sm text-muted-foreground">APIs/mes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <GradientText as="h2" className="text-4xl md:text-5xl font-bold mb-4">
              Todo lo que necesitas
            </GradientText>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Una plataforma completa para gestionar todos tus requisitos de compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <BrandedCard hover className="p-8 group">
              <div className="bg-gradient-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seguridad Enterprise</h3>
              <p className="text-muted-foreground mb-4">
                Cumple con SOC 2, ISO 27001, GDPR y todas las normativas de seguridad más exigentes.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Encriptación end-to-end
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Autenticación multifactor
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Auditoría completa
                </li>
              </ul>
            </BrandedCard>

            {/* Feature 2 */}
            <BrandedCard hover className="p-8 group">
              <div className="bg-gradient-secondary w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">API Lightning Fast</h3>
              <p className="text-muted-foreground mb-4">
                APIs ultra-rápidas con latencia < 50ms. Escala sin límites con nuestra infraestructura global.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  CDN global
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Auto-scaling
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  99.9% uptime SLA
                </li>
              </ul>
            </BrandedCard>

            {/* Feature 3 */}
            <BrandedCard hover className="p-8 group">
              <div className="bg-gradient-accent w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics Avanzado</h3>
              <p className="text-muted-foreground mb-4">
                Dashboards en tiempo real con métricas detalladas de compliance y alertas inteligentes.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Dashboards personalizables
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Alertas en tiempo real
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Reportes automáticos
                </li>
              </ul>
            </BrandedCard>

            {/* Feature 4 */}
            <BrandedCard hover className="p-8 group">
              <div className="bg-brand-primary-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Documentación Automática</h3>
              <p className="text-muted-foreground mb-4">
                Genera documentación de compliance automáticamente lista para auditorías.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Templates pre-configurados
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Versionado automático
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Exportación PDF/Excel
                </li>
              </ul>
            </BrandedCard>

            {/* Feature 5 */}
            <BrandedCard hover className="p-8 group">
              <div className="bg-brand-secondary-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Colaboración en Equipo</h3>
              <p className="text-muted-foreground mb-4">
                Gestión de roles, permisos granulares y flujos de aprobación personalizables.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Control de acceso RBAC
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Workflows de aprobación
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Comentarios y menciones
                </li>
              </ul>
            </BrandedCard>

            {/* Feature 6 */}
            <BrandedCard hover className="p-8 group">
              <div className="bg-brand-accent-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-región</h3>
              <p className="text-muted-foreground mb-4">
                Cumple con normativas locales de cada país con soporte multi-región incluido.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Europa, América, Asia
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Residencia de datos
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-secondary-500" />
                  Compliance local
                </li>
              </ul>
            </BrandedCard>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary-500 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent-500 blur-[100px] rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Award className="w-16 h-16 mx-auto mb-6 text-brand-primary-300" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Más de 500 empresas confían en ComplianceFlow para gestionar sus requisitos de cumplimiento normativo
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Santander</div>
              <div className="text-2xl font-bold">BBVA</div>
              <div className="text-2xl font-bold">Telefónica</div>
              <div className="text-2xl font-bold">Iberdrola</div>
              <div className="text-2xl font-bold">Inditex</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <GradientText as="h2" className="text-4xl md:text-5xl font-bold mb-4">
              Precios Transparentes
            </GradientText>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sin costes ocultos. Elige el plan que mejor se adapte a tu empresa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <BrandedCard className="p-8">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-muted-foreground mb-6">Para equipos pequeños</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">€99</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>Hasta 100K API calls/mes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>5 usuarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>Documentación básica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>Soporte por email</span>
                </li>
              </ul>
              <BrandedButton variant="outline" className="w-full">
                Comenzar
              </BrandedButton>
            </BrandedCard>

            {/* Professional Plan */}
            <BrandedCard className="p-8 relative border-2 border-brand-primary-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-muted-foreground mb-6">Para empresas en crecimiento</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">€299</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>Hasta 1M API calls/mes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>20 usuarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>Documentación avanzada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>Soporte prioritario 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>Analytics avanzado</span>
                </li>
              </ul>
              <BrandedButton variant="gradient" className="w-full">
                Comenzar
              </BrandedButton>
            </BrandedCard>

            {/* Enterprise Plan */}
            <BrandedCard className="p-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">Para grandes organizaciones</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>API calls ilimitadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>Usuarios ilimitados</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>Todas las funcionalidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>Account manager dedicado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>SLA personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-secondary-500 mt-0.5" />
                  <span>On-premise disponible</span>
                </li>
              </ul>
              <BrandedButton variant="outline" className="w-full">
                Contactar Ventas
              </BrandedButton>
            </BrandedCard>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <GradientText as="h2" className="text-4xl md:text-5xl font-bold mb-4">
              Lo que dicen nuestros clientes
            </GradientText>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <BrandedCard className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "ComplianceFlow ha transformado completamente nuestra gestión de compliance. 
                Lo que antes nos tomaba semanas ahora lo hacemos en horas."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                  MA
                </div>
                <div>
                  <div className="font-semibold">María Álvarez</div>
                  <div className="text-sm text-muted-foreground">CTO, Banco Digital</div>
                </div>
              </div>
            </BrandedCard>

            <BrandedCard className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "La mejor inversión que hemos hecho. Las APIs son rapidísimas y la documentación 
                es excelente. Soporte técnico de primera."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
                  JR
                </div>
                <div>
                  <div className="font-semibold">Juan Ramírez</div>
                  <div className="text-sm text-muted-foreground">COO, FinTech Solutions</div>
                </div>
              </div>
            </BrandedCard>

            <BrandedCard className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "Implementación súper rápida y sin complicaciones. En menos de una semana 
                estábamos operativos. El ROI ha sido increíble."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-accent-500 rounded-full flex items-center justify-center text-white font-semibold">
                  LC
                </div>
                <div>
                  <div className="font-semibold">Laura Castro</div>
                  <div className="text-sm text-muted-foreground">Head of Compliance, TechCorp</div>
                </div>
              </div>
            </BrandedCard>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BrandedCard gradient className="p-12 md:p-16 text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-brand-primary-500" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para transformar tu compliance?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a más de 500 empresas que ya confían en ComplianceFlow. 
              Prueba gratis durante 14 días, sin tarjeta de crédito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BrandedButton variant="gradient" size="xl">
                Comenzar Prueba Gratuita
                <ArrowRight className="w-5 h-5" />
              </BrandedButton>
              <BrandedButton variant="outline" size="xl">
                Hablar con Ventas
              </BrandedButton>
            </div>
          </BrandedCard>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-muted/50 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo variant="primary" className="mb-4" />
              <p className="text-sm text-muted-foreground mb-4">
                La plataforma de compliance más avanzada del mercado.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">Características</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">Precios</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">API Docs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">Integraciones</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">Carreras</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">Privacidad</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">Términos</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">Seguridad</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-brand-primary-500 transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 ComplianceFlow. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
