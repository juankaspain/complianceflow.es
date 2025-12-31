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
  Sparkles,
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
    teal: 'from-teal-500/5 to-teal-400/0 border-teal-500/30 text-teal-300 hover:border-teal-500/50 hover:from-teal-500/10',
    blue: 'from-blue-500/5 to-blue-400/0 border-blue-500/30 text-blue-300 hover:border-blue-500/50 hover:from-blue-500/10',
    amber: 'from-amber-500/5 to-amber-400/0 border-amber-500/30 text-amber-300 hover:border-amber-500/50 hover:from-amber-500/10',
    emerald:
      'from-emerald-500/5 to-emerald-400/0 border-emerald-500/30 text-emerald-300 hover:border-emerald-500/50 hover:from-emerald-500/10',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, translateY: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`group relative flex flex-col items-center gap-2 rounded-lg border bg-gradient-to-br px-3 py-5 sm:px-4 sm:py-6 transition-all duration-300 ${colorClasses[color]} overflow-hidden`}
    >
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10" />

      <div className="relative z-10 text-2xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="relative z-10 text-center space-y-0.5">
        <h4 className="font-bold text-xs sm:text-sm leading-tight">{title}</h4>
        <p className="text-xs opacity-75 leading-tight">{description}</p>
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
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  if (variant === 'minimal') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`relative rounded-lg border border-white/10 bg-gradient-to-br from-white/3 to-transparent p-6 backdrop-blur-sm ${className}`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Left section */}
          <div className="flex items-center gap-3 min-w-0">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
              className="relative flex-shrink-0"
            >
              <Shield className="h-8 w-8 text-teal-400" strokeWidth={1.5} />
              <div className="absolute inset-0 animate-pulse rounded-full bg-teal-400/15 blur-md" />
            </motion.div>

            <div className="min-w-0">
              <p className="font-bold text-base text-white truncate">ComplianceFlow</p>
              <p className="text-xs text-gray-400 truncate">Enterprise APIs</p>
            </div>
          </div>

          {/* Right section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-end gap-1.5 text-xs text-emerald-400 font-semibold flex-shrink-0 px-2 py-1 bg-emerald-500/10 rounded"
          >
            <Check className="h-3.5 w-3.5" />
            <span>Verified</span>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`rounded-lg border border-teal-500/20 bg-gradient-to-br from-teal-500/8 to-teal-400/0 p-4 backdrop-blur-sm ${className}`}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-teal-400 flex-shrink-0" />
            <span className="font-bold text-sm text-white">ComplianceFlow</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            ISO 27001 • SOC 2 Type II • GDPR • SLA 99.99%
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
      className={`space-y-12 ${className}`}
    >
      {/* Premium Header */}
      <motion.div variants={itemVariants} className="space-y-4 text-center">
        <motion.div
          className="flex items-center justify-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="relative flex-shrink-0"
          >
            <Shield className="h-14 w-14 text-teal-400" strokeWidth={1.2} />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-teal-400/20 blur-lg -z-10"
            />
          </motion.div>
          <div>
            <motion.h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              ComplianceFlow
            </motion.h2>
            <p className="text-sm sm:text-base text-teal-300 font-semibold mt-1">
              Enterprise Compliance APIs
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Professional Description */}
      <motion.div variants={itemVariants} className="space-y-3">
        <p className="mx-auto max-w-3xl text-center text-base sm:text-lg text-gray-300 leading-relaxed">
          Infraestructura enterprise-grade con las certificaciones y estándares
          más exigentes del sector.
        </p>
        <p className="mx-auto max-w-3xl text-center text-sm text-gray-400">
          Protegemos tu cumplimiento normativo con soluciones escalables, seguras
          y confiables.
        </p>
      </motion.div>

      {/* Certifications Grid - IMPROVED */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
      >
        <CertificationBadge
          icon={<Lock className="h-5 w-5 sm:h-6 sm:w-6" />}
          title="ISO 27001"
          description="Security"
          color="teal"
        />
        <CertificationBadge
          icon={<FileCheck className="h-5 w-5 sm:h-6 sm:w-6" />}
          title="SOC 2 Type II"
          description="Compliance"
          color="blue"
        />
        <CertificationBadge
          icon={<Globe className="h-5 w-5 sm:h-6 sm:w-6" />}
          title="GDPR"
          description="Privacy"
          color="amber"
        />
        <CertificationBadge
          icon={<Award className="h-5 w-5 sm:h-6 sm:w-6" />}
          title="SLA 99.99%"
          description="Uptime"
          color="emerald"
        />
      </motion.div>

      {/* Feature Highlights - IMPROVED */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 gap-3 sm:grid-cols-3"
      >
        {[
          {
            icon: <Zap className="h-5 w-5" />,
            title: 'Zero-Trust Security',
            description: 'Seguridad de nivel militar',
          },
          {
            icon: <Lock className="h-5 w-5" />,
            title: 'Encryption AES-256',
            description: 'At rest & in transit',
          },
          {
            icon: <Check className="h-5 w-5" />,
            title: 'Complete Audit Logs',
            description: 'Immutable records',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, translateY: -2 }}
            className="group relative rounded-lg border border-white/10 bg-gradient-to-br from-white/4 to-transparent p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <div className="flex items-start gap-3 relative z-10">
              <div className="text-teal-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-0.5">
                {feature.icon}
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-sm text-white leading-tight">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Statistics - IMPROVED STYLING */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-3 gap-2 sm:gap-4 rounded-lg border border-white/10 bg-gradient-to-r from-teal-500/8 via-white/2 to-blue-500/8 p-6 sm:p-8 backdrop-blur-sm"
      >
        {[
          { label: 'Companies', value: '+500', icon: '🏢' },
          { label: 'Countries', value: '45+', icon: '🌍' },
          { label: 'Data Protected', value: 'PB+', icon: '🔒' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center space-y-1"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-lg opacity-0">{stat.icon}</p>
            <p className="text-2xl sm:text-3xl font-bold text-teal-400 leading-tight">
              {stat.value}
            </p>
            <p className="text-xs text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Badge */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/10 bg-white/3 backdrop-blur-sm"
      >
        <Sparkles className="h-4 w-4 text-amber-400" />
        <p className="text-xs sm:text-sm text-gray-400 text-center">
          Confía en los mismos estándares que utilizan empresas Fortune 500
        </p>
      </motion.div>
    </motion.div>
  );
};

export default EnterpriseBadge;
