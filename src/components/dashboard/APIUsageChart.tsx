'use client';

import { useMemo } from 'react';

interface APIUsageChartProps {
  timeRange: '7d' | '30d' | '90d';
}

export function APIUsageChart({ timeRange }: APIUsageChartProps) {
  // Generate mock data based on time range
  const data = useMemo(() => {
    const points = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
    return Array.from({ length: points }, (_, i) => ({
      date: i,
      value: Math.floor(Math.random() * 50000) + 30000,
    }));
  }, [timeRange]);

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));

  return (
    <div className="relative h-80">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-500 pr-2">
        <span>{maxValue.toLocaleString()}</span>
        <span>{Math.floor((maxValue + minValue) / 2).toLocaleString()}</span>
        <span>{minValue.toLocaleString()}</span>
      </div>

      {/* Chart area */}
      <div className="ml-16 h-full relative">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="border-t border-slate-800" />
          ))}
        </div>

        {/* Chart */}
        <svg className="w-full h-full" preserveAspectRatio="none">
          {/* Gradient */}
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area */}
          <path
            d={`M 0 ${300 - ((data[0].value - minValue) / (maxValue - minValue)) * 280} ${
              data
                .map(
                  (d, i) =>
                    `L ${(i / (data.length - 1)) * 100}% ${300 - ((d.value - minValue) / (maxValue - minValue)) * 280}`
                )
                .join(' ')
            } L 100% 300 L 0 300 Z`}
            fill="url(#chartGradient)"
          />

          {/* Line */}
          <path
            d={`M 0 ${300 - ((data[0].value - minValue) / (maxValue - minValue)) * 280} ${
              data
                .map(
                  (d, i) =>
                    `L ${(i / (data.length - 1)) * 100}% ${300 - ((d.value - minValue) / (maxValue - minValue)) * 280}`
                )
                .join(' ')
            }`}
            stroke="rgb(99, 102, 241)"
            strokeWidth="2"
            fill="none"
          />

          {/* Dots */}
          {data.map((d, i) => (
            <circle
              key={i}
              cx={`${(i / (data.length - 1)) * 100}%`}
              cy={300 - ((d.value - minValue) / (maxValue - minValue)) * 280}
              r="3"
              fill="rgb(99, 102, 241)"
              className="hover:r-5 transition-all cursor-pointer"
            >
              <title>{`${d.value.toLocaleString()} calls`}</title>
            </circle>
          ))}
        </svg>

        {/* X-axis labels */}
        <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-slate-500">
          <span>Start</span>
          <span>Middle</span>
          <span>Now</span>
        </div>
      </div>
    </div>
  );
}
