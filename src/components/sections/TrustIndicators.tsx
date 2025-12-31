'use client';

export default function TrustIndicators() {
  const stats = [
    {
      number: '500+',
      label: 'Empresas confían en nosotros',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'text-primary-400',
    },
    {
      number: '10M+',
      label: 'APIs procesadas al mes',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'text-yellow-400',
    },
    {
      number: '98%',
      label: 'Auditorías pasadas primer intento',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'text-green-400',
    },
    {
      number: '< 2h',
      label: 'Tiempo medio de respuesta',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'text-blue-400',
    },
  ];

  const companyLogos = [
    { name: 'TechCorp', industry: 'Fintech' },
    { name: 'HealthSafe', industry: 'Healthcare' },
    { name: 'DataFlow', industry: 'Analytics' },
    { name: 'SecureBank', industry: 'Banking' },
    { name: 'CloudNet', industry: 'Cloud' },
    { name: 'PayFast', industry: 'Payments' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-primary/50 transition-all duration-300">
                <div className={`${stat.color} mb-4`}>{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Confían en ComplianceFlow
          </h3>
          <p className="text-gray-400">
            Empresas líderes en Fintech, Healthcare, y SaaS
          </p>
        </div>

        {/* Company Logos Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companyLogos.map((company, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              {/* Placeholder for company logo */}
              <div className="w-full h-16 flex items-center justify-center mb-2">
                <div className="text-2xl font-bold text-gray-600 group-hover:text-gray-400 transition-colors">
                  {company.name.substring(0, 2).toUpperCase()}
                </div>
              </div>
              <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                {company.industry}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8">
          {[
            { text: '🔒 SOC 2 Type II Certified', color: 'border-blue-500/30' },
            { text: '✅ ISO 27001:2022', color: 'border-green-500/30' },
            { text: '🇪🇺 GDPR Compliant', color: 'border-purple-500/30' },
            { text: '🏥 HIPAA Ready', color: 'border-yellow-500/30' },
          ].map((badge, index) => (
            <div
              key={index}
              className={`px-6 py-3 rounded-full border-2 ${badge.color} bg-gray-900/50 backdrop-blur-sm text-sm font-semibold text-white`}
            >
              {badge.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
