'use client';

import { Badge } from '@/components/ui/badge';
import { FileText, CreditCard, Shield, Users, FileCheck, AlertTriangle } from 'lucide-react';

interface API {
  id: string;
  name: string;
  endpoint: string;
  status: 'active' | 'deprecated' | 'beta';
  calls: number;
  icon: React.ReactNode;
}

export function APIList() {
  const apis: API[] = [
    {
      id: '1',
      name: 'SII Validation',
      endpoint: '/api/v1/sii/validate',
      status: 'active',
      calls: 856432,
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: '2',
      name: 'KYC Verification',
      endpoint: '/api/v1/kyc/verify',
      status: 'active',
      calls: 642108,
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: '3',
      name: 'Fraud Detection',
      endpoint: '/api/v1/fraud/detect',
      status: 'active',
      calls: 523876,
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: '4',
      name: 'Customer Data',
      endpoint: '/api/v1/customers',
      status: 'active',
      calls: 298453,
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: '5',
      name: 'Document Analysis',
      endpoint: '/api/v1/documents/analyze',
      status: 'beta',
      calls: 145672,
      icon: <FileCheck className="w-5 h-5" />,
    },
    {
      id: '6',
      name: 'Risk Assessment',
      endpoint: '/api/v1/risk/assess',
      status: 'deprecated',
      calls: 42156,
      icon: <AlertTriangle className="w-5 h-5" />,
    },
  ];

  const getStatusColor = (status: API['status']) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'beta':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'deprecated':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
    }
  };

  return (
    <div className="space-y-3">
      {apis.map((api) => (
        <div
          key={api.id}
          className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all border border-slate-700/50 group"
        >
          <div className="flex items-center gap-3 flex-1">
            <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600/30 transition-colors">
              {api.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-white">{api.name}</h3>
                <Badge className={getStatusColor(api.status)}>
                  {api.status}
                </Badge>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">
                {api.endpoint}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-white">
              {api.calls.toLocaleString()}
            </p>
            <p className="text-xs text-slate-400">calls</p>
          </div>
        </div>
      ))}
    </div>
  );
}
