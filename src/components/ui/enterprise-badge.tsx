'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Check,
  Lock,
  Zap,
  Globe,
  Award,
  FileCheck,
} from 'lucide-react';

interface CertificationBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'teal' | 'blue' | 'amber' | 'emerald';
}

const CertificationBadge: React.FC<CertificationBadgeProps> = ({
  icon,
  title,
  description,
  color,
}) => {
  const colorClasses = {
    teal: 'bg-teal-500/10 border-teal-500/20 text-teal-400 hover:bg-teal-500/15',
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/15',
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400 hover:bg-amber-500/15',
    emerald:
      'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/15',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`group relative flex flex-col items-center gap-3 rounded-xl border px-4 py-6 transition-all duration-300 ${colorClasses[color]}`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 text-2xl">{icon}</div>
      <div className="relative z-10 text-center">
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-xs opacity-75 mt-1">{description}</p>
      </div>
    </motion.div>
  );
};

interface EnterpriseBadgeProps {
  className?: string;
  variant?: 'minimal' | 'full' | 'compact';
}

export const EnterpriseBadge: React.FC<EnterpriseBadgeProps> = ({
  className = '',
  variant = 'full',
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  if (variant === 'minimal') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-md ${className}`}
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(88,199,192,0.1),transparent_50%)]" />
        </div>

        <div className="flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Shield className="h-10 w-10 text-teal-400" strokeWidth={1.5} />
              <div className="absolute inset-0 animate-pulse rounded-full bg-teal-400/20 blur" />
            </motion.div>

            <div>
              <p className="font-bold text-lg text-white">ComplianceFlow</p>
              <p className="text-sm text-gray-400">Enterprise Compliance APIs</p>
            </div>
          </div>

          {/* Right section */}
          <div className="text-right">
            <div className="flex items-center justify-end gap-2 text-xs text-emerald-400">
              <Check className="h-4 w-4" />
              <span className="font-semibold">Enterprise Grade</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`rounded-lg border border-teal-500/20 bg-teal-500/5 p-4 backdrop-blur-sm ${className}`}
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-teal-400" />
            <span className="font-bold text-white">ComplianceFlow</span>
          </div>
          <p className="text-xs text-gray-400">
            ISO 27001 • SOC 2 Type II • GDPR • Data Privacy
          </p>
        </div>
      </motion.div>
    );
  }

  // Full variant (default)
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`space-y-8 ${className}`}
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="space-y-3 text-center"
      >
        <motion.div
          className="flex items-center justify-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="relative"
          >
            <Shield className="h-12 w-12 text-teal-400" strokeWidth={1.5} />
            <div className="absolute inset-0 animate-pulse rounded-full bg-teal-400/20 blur-lg" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white">ComplianceFlow</h3>
            <p className="text-sm text-gray-400">Enterprise Compliance APIs</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="mx-auto max-w-2xl text-center text-gray-300 leading-relaxed"
      >
        Infraestructura enterprise-grade con las certificaciones y estándares más
        exigentes del sector. Protegemos tu cumplimiento normativo con soluciones
        escalables, seguras y confiables.
      </motion.p>

      {/* Certifications Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        <CertificationBadge
          icon={<Lock className="h-6 w-6" />}
          title="ISO 27001"
          description="Information Security Management"
          color="teal"
        />
        <CertificationBadge
          icon={<FileCheck className="h-6 w-6" />}
          title="SOC 2 Type II"
          description="Security & Compliance"
          color="blue"
        />
        <CertificationBadge
          icon={<Globe className="h-6 w-6" />}
          title="GDPR Compliant"
          description="Data Privacy Protection"
          color="amber"
        />
        <CertificationBadge
          icon={<Award className="h-6 w-6" />}
          title="Enterprise SLA"
          description="99.99% Uptime Guarantee"
          color="emerald"
        />
      </motion.div>

      {/* Additional features */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {[
          {
            icon: <Zap className="h-5 w-5" />,
            title: 'Zero-Trust Architecture',
            description:
              'Seguridad de nivel militar en cada punto de acceso',
          },
          {
            icon: <Shield className="h-5 w-5" />,
            title: 'Encryption at Rest & Transit',
            description: 'AES-256 y TLS 1.3 estándar',
          },
          {
            icon: <Check className="h-5 w-5" />,
            title: 'Audit Trails Completos',
            description: 'Registro inmutable de todas las operaciones',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ translateY: -4 }}
            className="group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-teal-500/30"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 text-teal-400 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-semibold text-white">{feature.title}</h4>
                <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-3 gap-4 rounded-xl border border-white/10 bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-6 backdrop-blur-sm"
      >
        {[
          { label: 'Empresas Confiadas', value: '+500' },
          { label: 'Países Cubiertos', value: '45+' },
          { label: 'Datos Protegidos', value: 'Petabytes' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-2xl font-bold text-teal-400">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer note */}
      <motion.p
        variants={itemVariants}
        className="text-center text-xs text-gray-500 border-t border-white/10 pt-6"
      >
        Confía en los mismos estándares que utilizan Fortune 500 empresas
      </motion.p>
    </motion.div>
  );
};

export default EnterpriseBadge;
