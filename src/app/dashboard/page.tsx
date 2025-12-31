'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { APIUsageChart } from '@/components/dashboard/APIUsageChart';
import { APIMetricsGrid } from '@/components/dashboard/APIMetricsGrid';
import { APIList } from '@/components/dashboard/APIList';
import { UsageHistory } from '@/components/dashboard/UsageHistory';
import { BillingOverview } from '@/components/dashboard/BillingOverview';
import {
  Activity,
  TrendingUp,
  DollarSign,
  AlertCircle,
} from 'lucide-react';

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                API Dashboard
              </h1>
              <p className="text-slate-400">
                Monitor your API usage, metrics, and billing in real-time
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setTimeRange('7d')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  timeRange === '7d'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                7 days
              </button>
              <button
                onClick={() => setTimeRange('30d')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  timeRange === '30d'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                30 days
              </button>
              <button
                onClick={() => setTimeRange('90d')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  timeRange === '90d'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                90 days
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Metrics Overview */}
        <APIMetricsGrid />

        {/* Usage Chart */}
        <div className="mt-8">
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-1">
                    API Usage Trends
                  </h2>
                  <p className="text-sm text-slate-400">
                    Track your API calls over time
                  </p>
                </div>
                <Activity className="w-6 h-6 text-indigo-400" />
              </div>
              <APIUsageChart timeRange={timeRange} />
            </div>
          </Card>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* API List */}
          <div>
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1">
                      Available APIs
                    </h2>
                    <p className="text-sm text-slate-400">
                      Your active API endpoints
                    </p>
                  </div>
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <APIList />
              </div>
            </Card>
          </div>

          {/* Usage History */}
          <div>
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1">
                      Recent Activity
                    </h2>
                    <p className="text-sm text-slate-400">
                      Latest API calls and events
                    </p>
                  </div>
                  <AlertCircle className="w-6 h-6 text-amber-400" />
                </div>
                <UsageHistory />
              </div>
            </Card>
          </div>
        </div>

        {/* Billing Overview */}
        <div className="mt-8">
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-1">
                    Billing Overview
                  </h2>
                  <p className="text-sm text-slate-400">
                    Current billing period and costs
                  </p>
                </div>
                <DollarSign className="w-6 h-6 text-green-400" />
              </div>
              <BillingOverview timeRange={timeRange} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
