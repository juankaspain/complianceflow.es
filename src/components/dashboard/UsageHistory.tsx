'use client';

import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface ActivityItem {
  id: string;
  api: string;
  status: 'success' | 'error' | 'warning';
  timestamp: string;
  duration: number;
  ip: string;
}

export function UsageHistory() {
  const activities: ActivityItem[] = [
    {
      id: '1',
      api: 'SII Validation',
      status: 'success',
      timestamp: '2 minutes ago',
      duration: 156,
      ip: '192.168.1.1',
    },
    {
      id: '2',
      api: 'KYC Verification',
      status: 'success',
      timestamp: '5 minutes ago',
      duration: 234,
      ip: '192.168.1.2',
    },
    {
      id: '3',
      api: 'Fraud Detection',
      status: 'warning',
      timestamp: '8 minutes ago',
      duration: 445,
      ip: '192.168.1.3',
    },
    {
      id: '4',
      api: 'Customer Data',
      status: 'success',
      timestamp: '12 minutes ago',
      duration: 89,
      ip: '192.168.1.4',
    },
    {
      id: '5',
      api: 'SII Validation',
      status: 'error',
      timestamp: '15 minutes ago',
      duration: 1234,
      ip: '192.168.1.5',
    },
    {
      id: '6',
      api: 'Document Analysis',
      status: 'success',
      timestamp: '18 minutes ago',
      duration: 567,
      ip: '192.168.1.6',
    },
  ];

  const getStatusIcon = (status: ActivityItem['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-400" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-amber-400" />;
    }
  };

  const getStatusColor = (status: ActivityItem['status']) => {
    switch (status) {
      case 'success':
        return 'border-emerald-500/30';
      case 'error':
        return 'border-red-500/30';
      case 'warning':
        return 'border-amber-500/30';
    }
  };

  return (
    <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className={`p-4 rounded-lg bg-slate-800/50 border-l-2 ${
            getStatusColor(activity.status)
          } hover:bg-slate-800 transition-all`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-1">{getStatusIcon(activity.status)}</div>
              <div>
                <h4 className="font-medium text-white text-sm">{activity.api}</h4>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3 h-3" />
                    {activity.timestamp}
                  </div>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-400">
                    {activity.duration}ms
                  </span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-400 font-mono">
                    {activity.ip}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
