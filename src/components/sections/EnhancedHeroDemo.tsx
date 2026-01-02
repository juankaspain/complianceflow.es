'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GlassCard from '@/components/ui/GlassCard';
import CodePreview from '@/components/ui/CodePreview';
import { Zap, Shield, Clock, Globe } from 'lucide-react';
import Link from 'next/link';

/**
 * EnhancedHeroDemo - Enhanced hero section with interactive components
 * 
 * Drop this into your homepage to showcase:
 * - Animated statistics
 * - Interactive code examples
 * - Modern glassmorphism design
 * - Parallax scroll effects
 * - Micro-animations on CTAs
 */
export default function EnhancedHeroDemo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax transforms for background elements
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    {
      icon: <Shield className="w-6 h-6" />,
      value: 99.99,
      suffix: '%',
      decimals: 2,
      label: 'Uptime SLA',
      color: 'text-green-400',
      glowColor: 'bg-green-400/20',
      glowColorHover: 'group-hover:bg-green-400/30',
      glow: 'success' as const,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: 47,
      suffix: 'ms',
      decimals: 0,
      label: 'Respuesta API',
      color: 'text-blue-400',
      glowColor: 'bg-blue-400/20',
      glowColorHover: 'group-hover:bg-blue-400/30',
      glow: 'primary' as const,
    },
    {
      icon: <Globe className="w-6 h-6" />,
      value: 500,
      suffix: '+',
      decimals: 0,
      label: 'Empresas',
      color: 'text-purple-400',
      glowColor: 'bg-purple-400/20',
      glowColorHover: 'group-hover:bg-purple-400/30',
      glow: 'primary' as const,
    },
    {
      icon: <Zap className="w-6 h-6" />,
      value: 30,
      suffix: 'min',
      decimals: 0,
      label: 'Integración',
      color: 'text-yellow-400',
      glowColor: 'bg-yellow-400/20',
      glowColorHover: 'group-hover:bg-yellow-400/30',
      glow: 'warning' as const,
    },
  ];

  const codeExamples = [
    {
      language: 'javascript' as const,
      code: `import { ComplianceFlow } from '@complianceflow/sdk';

const client = new ComplianceFlow({
  apiKey: process.env.COMPLIANCEFLOW_API_KEY
});

const result = await client.sii.submitInvoice({
  invoiceNumber: '2024-001',
  amount: 1250.00,
  customer: {
    vatId: 'ESB12345678',
    name: 'Acme Corp'
  }
});

console.log('✅ Invoice submitted:', result.id);`,
    },
    {
      language: 'python' as const,
      code: `from complianceflow import ComplianceFlow

client = ComplianceFlow(
    api_key=os.environ['COMPLIANCEFLOW_API_KEY']
)

result = client.sii.submit_invoice(
    invoice_number='2024-001',
    amount=1250.00,
    customer={
        'vat_id': 'ESB12345678',
        'name': 'Acme Corp'
    }
)

print(f'✅ Invoice submitted: {result.id}')`,
    },
    {
      language: 'curl' as const,
      code: `curl -X POST https://api.complianceflow.es/v1/sii/invoice \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "invoice_number": "2024-001",
    "amount": 1250.00,
    "customer": {
      "vat_id": "ESB12345678",
      "name": "Acme Corp"
    }
  }'`,
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gray-950">
      {/* Enhanced Background Effects with Parallax */}
      <motion.div 
        className="absolute inset-0" 
        aria-hidden="true"
        style={{ opacity }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Gradient orbs with parallax and mouse tracking */}
        <motion.div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
          style={{
            y: y1,
            x: mousePosition.x,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-3xl"
          style={{
            y: y2,
            x: -mousePosition.x,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        
        {/* Fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Integración en{' '}
              <span 
                className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 40px rgba(103, 232, 249, 0.5), 0 0 20px rgba(147, 197, 253, 0.3)'
                }}
              >
                minutos
              </span>
              , compliance para siempre
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              APIs enterprise con certificaciones{' '}
              <span className="font-semibold text-white">ISO 27001</span>,{' '}
              <span className="font-semibold text-white">SOC 2 Type II</span> y{' '}
              <span className="font-semibold text-white">GDPR</span>.
              Automatiza el cumplimiento normativo sin esfuerzo.
            </p>
          </motion.div>

          {/* CTA Buttons with Micro-animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            {/* Primary CTA with Ripple Effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                href="/dashboard"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white overflow-hidden transition-all duration-300 bg-primary hover:bg-primary-600 rounded-xl shadow-lg shadow-primary/50 hover:shadow-primary/80"
              >
                {/* Ripple effect on hover */}
                <span className="absolute inset-0 w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
                
                <span className="relative">Ir al Dashboard</span>
                
                {/* Arrow with slide animation */}
                <svg 
                  className="relative ml-2 h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.a
              href="/docs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30"
            >
              <svg className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Documentación API
            </motion.a>
          </motion.div>
        </div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <GlassCard
                glow={stat.glow}
                hover
                className="text-center p-6 group"
              >
                {/* Icon with glow background */}
                <div className="flex justify-center mb-4">
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.glowColor} ${stat.glowColorHover} transition-all duration-300`}>
                    {/* Outer glow ring */}
                    <div className={`absolute inset-0 rounded-2xl ${stat.glowColor} blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                    {/* Icon */}
                    <div className={`relative ${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
                
                <div className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2}
                  />
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Code Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <CodePreview
            title="Empieza en menos de 5 minutos"
            examples={codeExamples}
            response={{
              status: 200,
              message: 'Invoice submitted to AEAT successfully',
              time: '47ms',
            }}
          />
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-10 font-semibold">
            Certificado y auditado por
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { name: 'ISO 27001', subtitle: 'Information Security' },
              { name: 'SOC 2 Type II', subtitle: 'Security & Privacy' },
              { name: 'GDPR', subtitle: 'Data Protection' },
              { name: 'HIPAA', subtitle: 'Healthcare Ready' },
            ].map((cert) => (
              <motion.div 
                key={cert.name} 
                className="text-center group cursor-default"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="text-xl font-bold text-white/80 group-hover:text-primary-400 transition-colors duration-300">
                  {cert.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">{cert.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
