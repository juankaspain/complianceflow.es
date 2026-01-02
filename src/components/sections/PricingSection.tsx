'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { Check, X, Sparkles, TrendingDown, Shield } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  pricePerK: number; // Price per 1000 API calls
  includedCalls: number;
  features: string[];
  notIncluded?: string[];
  popular?: boolean;
  cta: string;
}

const tiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    basePrice: 49,
    pricePerK: 0.05,
    includedCalls: 10000,
    features: [
      'Up to 10,000 API calls/month',
      'SII Integration',
      'Verifactu Support',
      'Email Support (48h)',
      'Dashboard Access',
      'Basic Analytics',
    ],
    notIncluded: [
      'KYC Verification',
      'Priority Support',
      'Custom Integrations',
      'SLA Guarantee',
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'pro',
    name: 'Professional',
    description: 'For growing companies with higher volume',
    basePrice: 199,
    pricePerK: 0.03,
    includedCalls: 100000,
    features: [
      'Up to 100,000 API calls/month',
      'Everything in Starter',
      'KYC Verification',
      'Priority Support (24h)',
      'Advanced Analytics',
      'Webhooks',
      'Custom Fields',
      '99.9% Uptime SLA',
    ],
    popular: true,
    cta: 'Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    basePrice: 999,
    pricePerK: 0.01,
    includedCalls: 1000000,
    features: [
      'Unlimited API calls',
      'Everything in Pro',
      'Dedicated Account Manager',
      'Priority Support (1h)',
      'Custom Integrations',
      'On-premise Deployment',
      'White-label Option',
      '99.99% Uptime SLA',
      'Legal Compliance Review',
    ],
    cta: 'Contact Sales',
  },
];

export default function PricingSection() {
  const [apiCalls, setApiCalls] = useState(50000);
  const [selectedTier, setSelectedTier] = useState('pro');
  const [isAnnual, setIsAnnual] = useState(true);

  const calculatePrice = (tier: PricingTier, calls: number): number => {
    if (tier.id === 'enterprise') {
      return tier.basePrice;
    }

    if (calls <= tier.includedCalls) {
      return tier.basePrice;
    }

    const extraCalls = calls - tier.includedCalls;
    const extraCost = (extraCalls / 1000) * tier.pricePerK;
    return tier.basePrice + extraCost;
  };

  const calculateSavings = (price: number): number => {
    // Assuming competitors charge 40% more
    const competitorPrice = price * 1.4;
    return competitorPrice - price;
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('es-ES').format(num);
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gray-950">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simple,{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Pay only for what you use. No hidden fees, no surprises.
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-white/5 border border-white/10 rounded-xl">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                !isAnnual
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                isAnnual
                  ? 'bg-primary text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 px-2 py-0.5 bg-green-400/20 text-green-400 text-xs rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard className="p-8 mb-12 max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-semibold text-white">
                  Estimate your monthly API calls
                </label>
                <div className="text-3xl font-bold text-primary">
                  {formatNumber(apiCalls)}
                </div>
              </div>
              <input
                type="range"
                min="1000"
                max="1000000"
                step="1000"
                value={apiCalls}
                onChange={(e) => setApiCalls(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary"
                style={{
                  background: `linear-gradient(to right, rgb(99 102 241) 0%, rgb(99 102 241) ${(apiCalls / 1000000) * 100}%, rgb(31 41 55) ${(apiCalls / 1000000) * 100}%, rgb(31 41 55) 100%)`,
                }}
              />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>1K</span>
                <span>250K</span>
                <span>500K</span>
                <span>750K</span>
                <span>1M</span>
              </div>
            </div>

            {/* Estimated Price for Selected Tier */}
            {selectedTier && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-300 mb-1">
                      Estimated monthly cost for {formatNumber(apiCalls)} API calls
                    </div>
                    <div className="text-4xl font-bold text-white">
                      {formatCurrency(
                        calculatePrice(
                          tiers.find((t) => t.id === selectedTier)!,
                          apiCalls
                        ) * (isAnnual ? 0.8 : 1)
                      )}
                      <span className="text-lg text-gray-400">/month</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-green-400 text-sm font-semibold mb-1">
                      <TrendingDown className="w-4 h-4" />
                      Save vs competitors
                    </div>
                    <div className="text-2xl font-bold text-green-400">
                      {formatCurrency(
                        calculateSavings(
                          calculatePrice(
                            tiers.find((t) => t.id === selectedTier)!,
                            apiCalls
                          )
                        ) * (isAnnual ? 0.8 : 1)
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </GlassCard>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => {
            const price = calculatePrice(tier, apiCalls) * (isAnnual ? 0.8 : 1);

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-bold rounded-full flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <GlassCard
                  hover
                  className={`p-8 h-full flex flex-col ${
                    tier.popular ? 'border-primary/50 bg-primary/5' : ''
                  } ${
                    selectedTier === tier.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-sm text-gray-400">{tier.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-5xl font-bold text-white mb-2">
                      {formatCurrency(price)}
                    </div>
                    <div className="text-sm text-gray-400">
                      per month
                      {isAnnual && <span className="text-green-400 ml-1">(20% off)</span>}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {tier.notIncluded?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 opacity-50">
                        <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      tier.popular
                        ? 'bg-primary hover:bg-primary-600 text-white shadow-lg shadow-primary/30'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white'
                    }`}
                  >
                    {tier.cta}
                  </motion.button>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 pt-12 border-t border-white/10"
        >
          <div className="flex items-center gap-3 text-gray-400">
            <Shield className="w-6 h-6 text-green-400" />
            <div>
              <div className="font-semibold text-white text-sm">30-Day Money-Back</div>
              <div className="text-xs">100% Satisfaction Guaranteed</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Check className="w-6 h-6 text-green-400" />
            <div>
              <div className="font-semibold text-white text-sm">No Setup Fees</div>
              <div className="text-xs">Start in minutes</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Check className="w-6 h-6 text-green-400" />
            <div>
              <div className="font-semibold text-white text-sm">Cancel Anytime</div>
              <div className="text-xs">No long-term contracts</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
