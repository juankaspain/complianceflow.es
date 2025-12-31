'use client';

import { CreditCard, DollarSign, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BillingOverviewProps {
  timeRange: '7d' | '30d' | '90d';
}

export function BillingOverview({ timeRange }: BillingOverviewProps) {
  // Mock data based on time range
  const getBillingData = () => {
    switch (timeRange) {
      case '7d':
        return { totalCost: 234.56, calls: 245678, avgCost: 0.00095 };
      case '30d':
        return { totalCost: 1245.89, calls: 1456789, avgCost: 0.00085 };
      case '90d':
        return { totalCost: 3678.45, calls: 4234567, avgCost: 0.00087 };
    }
  };

  const data = getBillingData();

  const apiCosts = [
    { name: 'SII Validation', calls: 856432, cost: 428.22, percentage: 34 },
    { name: 'KYC Verification', calls: 642108, cost: 385.26, percentage: 27 },
    { name: 'Fraud Detection', calls: 523876, cost: 314.33, percentage: 22 },
    { name: 'Customer Data', calls: 298453, cost: 149.23, percentage: 12 },
    { name: 'Document Analysis', calls: 145672, cost: 72.84, percentage: 5 },
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="w-8 h-8 text-indigo-400" />
            <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
              Current Period
            </Badge>
          </div>
          <p className="text-4xl font-bold text-white mb-2">
            ${data.totalCost.toFixed(2)}
          </p>
          <p className="text-sm text-slate-400">Total cost</p>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-emerald-400" />
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
              API Calls
            </Badge>
          </div>
          <p className="text-4xl font-bold text-white mb-2">
            {(data.calls / 1000000).toFixed(2)}M
          </p>
          <p className="text-sm text-slate-400">Total calls</p>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-amber-600/20 to-orange-600/20 border border-amber-500/30">
          <div className="flex items-center justify-between mb-4">
            <CreditCard className="w-8 h-8 text-amber-400" />
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">
              Avg Cost
            </Badge>
          </div>
          <p className="text-4xl font-bold text-white mb-2">
            ${data.avgCost.toFixed(5)}
          </p>
          <p className="text-sm text-slate-400">Per call</p>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Cost Breakdown by API
        </h3>
        <div className="space-y-4">
          {apiCosts.map((api, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-white">
                    {api.name}
                  </span>
                  <span className="text-xs text-slate-400">
                    {api.calls.toLocaleString()} calls
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-white">
                    ${api.cost.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-400 ml-2">
                    {api.percentage}%
                  </span>
                </div>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all"
                  style={{ width: `${api.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-slate-700">
              <CreditCard className="w-6 h-6 text-slate-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Payment Method</p>
              <p className="text-xs text-slate-400 mt-1">
                •••• •••• •••• 4242
              </p>
            </div>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
