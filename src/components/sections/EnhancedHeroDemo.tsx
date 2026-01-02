'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GlassCard from '@/components/ui/GlassCard';
import CodePreview from '@/components/ui/CodePreview';
import { Zap, Shield, Clock, Globe } from 'lucide-react';

/**
 * EnhancedHeroDemo - Enhanced hero section with interactive components
 * 
 * Drop this into your homepage to showcase:
 * - Animated statistics
 * - Interactive code examples
 * - Modern glassmorphism design
 */
export default function EnhancedHeroDemo() {
  const stats = [
    {
      icon: <Shield className="w-6 h-6" />,
      value: 99.99,
      suffix: '%',
      decimals: 2,
      label: 'Uptime SLA',
      color: 'text-green-400',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: 47,
      suffix: 'ms',
      decimals: 0,
      label: 'Respuesta API',
      color: 'text-blue-400',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      value: 500,
      suffix: '+',
      decimals: 0,
      label: 'Empresas',
      color: 'text-purple-400',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      value: 30,
      suffix: 'min',
      decimals: 0,
      label: 'Integración',
      color: 'text-yellow-400',
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
    <section className="relative py-24 overflow-hidden bg-gray-950">
      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e505_1px,transparent_1px),linear-gradient(to_bottom,#4f46e505_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integración en{' '}
              <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                minutos
              </span>
              , compliance para siempre
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              APIs enterprise con certificaciones ISO 27001, SOC 2 Type II y GDPR.
              Automatiza el cumplimiento normativo sin esfuerzo.
            </p>
          </motion.div>
        </div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <GlassCard
              key={stat.label}
              glow="primary"
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={`flex justify-center mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  duration={2}
                />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Code Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <CodePreview
            title="Empieza en menos de 5 minutos"
            examples={codeExamples}
            response={{
              status: 200,
              message: 'Invoice submitted successfully',
              time: '47ms',
            }}
          />
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8">
            Certificado y auditado por
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { name: 'ISO 27001', subtitle: 'Information Security' },
              { name: 'SOC 2 Type II', subtitle: 'Security & Privacy' },
              { name: 'GDPR', subtitle: 'Data Protection' },
              { name: 'HIPAA', subtitle: 'Healthcare Ready' },
            ].map((cert) => (
              <div key={cert.name} className="text-center group cursor-default">
                <div className="text-lg font-bold text-white/70 group-hover:text-primary-400 transition-colors">
                  {cert.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">{cert.subtitle}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
