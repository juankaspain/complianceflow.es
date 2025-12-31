'use client';

import { Card } from '@/components/ui/card';
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Zap,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  iconColor: string;
}

function MetricCard({ title, value, change, icon, iconColor }: MetricCardProps) {
  const isPositive = change >= 0;

  return (
    <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-slate-400 mb-1">{title}</p>
            <p className="text-3xl font-bold text-white mb-2">{value}</p>
            <div className="flex items-center gap-1">
              {isPositive ? (
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-400" />
              )}
              <span
                className={`text-sm font-medium ${
                  isPositive ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {isPositive ? '+' : ''}{change}%
              </span>
              <span className="text-xs text-slate-500 ml-1">vs last period</span>
            </div>
          </div>
          <div className={`p-3 rounded-xl ${iconColor}`}>
            {icon}
          </div>
        </div>
      </div>
    </Card>
  );
}

export function APIMetricsGrid() {
  const metrics = [
    {
      title: 'Total API Calls',
      value: '2.4M',
      change: 12.5,
      icon: <Activity className="w-6 h-6 text-white" />,
      iconColor: 'bg-indigo-600',
    },
    {
      title: 'Success Rate',
      value: '99.8%',
      change: 0.3,
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      iconColor: 'bg-emerald-600',
    },
    {
      title: 'Avg Response Time',
      value: '124ms',
      change: -8.2,
      icon: <Zap className="w-6 h-6 text-white" />,
      iconColor: 'bg-amber-600',
    },
    {
      title: 'Error Rate',
      value: '0.2%',
      change: -15.3,
      icon: <XCircle className="w-6 h-6 text-white" />,
      iconColor: 'bg-red-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}
