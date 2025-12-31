'use client';

export default function SocialProof() {
  const badges = [
    {
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </svg>
      ),
      label: 'ISO 27001',
      sublabel: 'Certified 2024',
      color: 'text-blue-400',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
      ),
      label: 'SOC 2 Type II',
      sublabel: 'Audited',
      color: 'text-green-400',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      label: 'GDPR',
      sublabel: 'Compliant',
      color: 'text-purple-400',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      ),
      label: '99.99% Uptime',
      sublabel: 'SLA Guaranteed',
      color: 'text-emerald-400',
    },
  ];

  return (
    <div className="py-12 bg-gray-900/50 border-y border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className={`${badge.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {badge.icon}
              </div>
              <div className="font-semibold text-white text-sm">{badge.label}</div>
              <div className="text-xs text-gray-500 mt-1">{badge.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
