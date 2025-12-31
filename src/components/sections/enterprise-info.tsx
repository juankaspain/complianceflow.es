'use client';

import React from 'react';
import { EnterpriseBadge } from '../ui/enterprise-badge';

interface EnterpriseInfoProps {
  variant?: 'minimal' | 'full' | 'compact';
  className?: string;
}

export const EnterpriseInfo: React.FC<EnterpriseInfoProps> = ({
  variant = 'full',
  className = '',
}) => {
  return (
    <section className={`py-12 ${className}`}>
      <EnterpriseBadge variant={variant} />
    </section>
  );
};

export default EnterpriseInfo;
