'use client';

import { motion } from 'framer-motion';
import Tooltip from './Tooltip';

interface TrustBadgeProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  verificationUrl?: string;
  className?: string;
}

/**
 * TrustBadge - Certification badge with icon and verification
 * 
 * @example
 * <TrustBadge
 *   name="ISO 27001"
 *   description="Information Security Management"
 *   icon={<ISO27001Icon />}
 *   verificationUrl="https://..."
 * />
 */
export default function TrustBadge({
  name,
  description,
  icon,
  verificationUrl,
  className = '',
}: TrustBadgeProps) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className={`group cursor-default text-center ${className}`}
    >
      {/* Icon container */}
      <div className="relative inline-flex items-center justify-center w-20 h-20 mb-3 rounded-2xl bg-white/5 group-hover:bg-white/10 border border-white/10 group-hover:border-primary-400/50 transition-all duration-300">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-primary-400/0 group-hover:bg-primary-400/10 blur-xl transition-all duration-300" />
        
        {/* Icon */}
        <div className="relative text-white/80 group-hover:text-primary-400 transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* Badge name */}
      <div className="text-base font-bold text-white/80 group-hover:text-primary-400 transition-colors duration-300 mb-1">
        {name}
      </div>

      {/* Description */}
      <div className="text-xs text-gray-500 leading-tight">{description}</div>

      {/* Verification indicator */}
      {verificationUrl && (
        <div className="mt-2 text-xs text-primary-400/60 group-hover:text-primary-400 transition-colors flex items-center justify-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Verificado</span>
        </div>
      )}
    </motion.div>
  );

  if (verificationUrl) {
    return (
      <Tooltip
        content={
          <div className="text-center">
            <div className="font-semibold mb-1">{name}</div>
            <div className="text-xs text-gray-400 mb-2">{description}</div>
            <div className="text-xs text-primary-400">Click para verificar certificado</div>
          </div>
        }
        position="top"
      >
        <a
          href={verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          {content}
        </a>
      </Tooltip>
    );
  }

  return (
    <Tooltip content={description} position="top">
      {content}
    </Tooltip>
  );
}

/**
 * Pre-built trust badges with icons
 */

export function ISO27001Badge() {
  return (
    <TrustBadge
      name="ISO 27001"
      description="Information Security Management System certified"
      verificationUrl="https://www.iso.org/standard/27001"
      icon={
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    />
  );
}

export function SOC2Badge() {
  return (
    <TrustBadge
      name="SOC 2 Type II"
      description="Security, Availability & Privacy controls audited"
      verificationUrl="https://www.aicpa.org/soc2"
      icon={
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            fill="currentColor"
            opacity="0.2"
          />
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="7" r="1.5" fill="currentColor" />
          <circle cx="12" cy="17" r="1.5" fill="currentColor" />
        </svg>
      }
    />
  );
}

export function GDPRBadge() {
  return (
    <TrustBadge
      name="GDPR"
      description="EU General Data Protection Regulation compliant"
      verificationUrl="https://gdpr.eu"
      icon={
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.2" />
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 6v6l4 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 3.5A9 9 0 0120.5 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      }
    />
  );
}

export function HIPAABadge() {
  return (
    <TrustBadge
      name="HIPAA"
      description="Healthcare data privacy and security ready"
      verificationUrl="https://www.hhs.gov/hipaa"
      icon={
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8v8M8 12h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      }
    />
  );
}
