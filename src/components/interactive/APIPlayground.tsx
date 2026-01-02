'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { Play, Copy, Check, Loader2, AlertCircle, Zap } from 'lucide-react';

interface APIEndpoint {
  id: string;
  name: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  defaultPayload?: string;
  requiresAuth: boolean;
}

const endpoints: APIEndpoint[] = [
  {
    id: 'sii-submit',
    name: 'Submit SII Invoice',
    method: 'POST',
    path: '/v1/sii/invoice',
    description: 'Submit an invoice to AEAT SII system',
    defaultPayload: `{
  "invoice_number": "2024-001",
  "amount": 1250.00,
  "customer": {
    "vat_id": "ESB12345678",
    "name": "Acme Corp"
  },
  "issue_date": "2024-01-15",
  "invoice_type": "F1"
}`,
    requiresAuth: true,
  },
  {
    id: 'verifactu-validate',
    name: 'Validate Verifactu',
    method: 'POST',
    path: '/v1/verifactu/validate',
    description: 'Validate invoice against Verifactu requirements',
    defaultPayload: `{
  "invoice_number": "2024-002",
  "hash": "sha256:abc123...",
  "timestamp": "2024-01-15T10:30:00Z"
}`,
    requiresAuth: true,
  },
  {
    id: 'kyc-verify',
    name: 'KYC Verification',
    method: 'POST',
    path: '/v1/kyc/verify',
    description: 'Verify customer identity with KYC check',
    defaultPayload: `{
  "customer_id": "CUST-12345",
  "document_type": "DNI",
  "document_number": "12345678A",
  "country": "ES"
}`,
    requiresAuth: true,
  },
];

export default function APIPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0]);
  const [payload, setPayload] = useState(endpoints[0].defaultPayload || '');
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [exportFormat, setExportFormat] = useState<'curl' | 'python' | 'javascript'>('curl');

  const handleEndpointChange = (endpoint: APIEndpoint) => {
    setSelectedEndpoint(endpoint);
    setPayload(endpoint.defaultPayload || '');
    setResponse(null);
    setError(null);
  };

  const executeRequest = async () => {
    setIsLoading(true);
    setError(null);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      // Validate JSON
      if (payload) {
        JSON.parse(payload);
      }

      // Mock successful response
      const mockResponse = {
        status: 200,
        statusText: 'OK',
        data: {
          success: true,
          message: `${selectedEndpoint.name} completed successfully`,
          id: `${selectedEndpoint.id}-${Date.now()}`,
          timestamp: new Date().toISOString(),
          processing_time: '47ms',
          ...(selectedEndpoint.id === 'sii-submit' && {
            sii_reference: 'SII-2024-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
            aeat_status: 'ACCEPTED',
          }),
          ...(selectedEndpoint.id === 'verifactu-validate' && {
            validation_result: 'VALID',
            compliance_score: 100,
          }),
          ...(selectedEndpoint.id === 'kyc-verify' && {
            verification_status: 'VERIFIED',
            risk_score: 'LOW',
            checks_passed: ['document_validity', 'identity_match', 'sanctions_check'],
          }),
        },
        headers: {
          'content-type': 'application/json',
          'x-request-id': 'req_' + Math.random().toString(36).substr(2, 9),
          'x-ratelimit-remaining': '99',
        },
      };

      setResponse(mockResponse);
    } catch (err: any) {
      setError(err.message || 'Invalid JSON payload');
    } finally {
      setIsLoading(false);
    }
  };

  const generateCode = (format: 'curl' | 'python' | 'javascript'): string => {
    const baseUrl = 'https://api.complianceflow.es';
    const endpoint = selectedEndpoint.path;
    const method = selectedEndpoint.method;

    switch (format) {
      case 'curl':
        return `curl -X ${method} ${baseUrl}${endpoint} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '${payload || '{}'}'`;

      case 'python':
        return `import requests

url = "${baseUrl}${endpoint}"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = ${payload || '{}'}

response = requests.${method.toLowerCase()}(url, json=payload, headers=headers)
print(response.json())`;

      case 'javascript':
        return `const response = await fetch('${baseUrl}${endpoint}', {
  method: '${method}',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(${payload || '{}'})
});

const data = await response.json();
console.log(data);`;

      default:
        return '';
    }
  };

  const copyCode = async (code: string, format: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(format);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const methodColors = {
    GET: 'text-green-400 bg-green-400/10 border-green-400/30',
    POST: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
    PUT: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
    DELETE: 'text-red-400 bg-red-400/10 border-red-400/30',
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gray-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary-400 text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            Interactive Playground
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Try Our{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              API Live
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Test endpoints in real-time, see responses, and export code in your favorite language
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Endpoint Selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-3"
          >
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Endpoints
            </h3>
            {endpoints.map((endpoint) => (
              <button
                key={endpoint.id}
                onClick={() => handleEndpointChange(endpoint)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedEndpoint.id === endpoint.id
                    ? 'bg-primary/10 border-primary/50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-2 py-0.5 text-xs font-bold rounded border ${
                      methodColors[endpoint.method]
                    }`}
                  >
                    {endpoint.method}
                  </span>
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {endpoint.name}
                </div>
                <div className="text-xs text-gray-400 font-mono">{endpoint.path}</div>
              </button>
            ))}
          </motion.div>

          {/* Main Playground */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-9 space-y-6"
          >
            {/* Request Panel */}
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Request</h3>
                <button
                  onClick={executeRequest}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Executing...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Run Request
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Endpoint
                  </label>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-2 text-sm font-bold rounded-lg border ${
                        methodColors[selectedEndpoint.method]
                      }`}
                    >
                      {selectedEndpoint.method}
                    </span>
                    <code className="flex-grow px-4 py-2 bg-gray-900/50 border border-white/10 rounded-lg text-sm text-gray-300 font-mono">
                      https://api.complianceflow.es{selectedEndpoint.path}
                    </code>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Request Body (JSON)
                  </label>
                  <textarea
                    value={payload}
                    onChange={(e) => setPayload(e.target.value)}
                    className="w-full h-64 px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-sm text-gray-300 font-mono focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none"
                    placeholder="Enter JSON payload..."
                  />
                </div>
              </div>
            </GlassCard>

            {/* Response Panel */}
            <AnimatePresence mode="wait">
              {(response || error) && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Response</h3>
                      {response && (
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-green-400/10 border border-green-400/30 text-green-400 text-sm font-semibold rounded-lg">
                            {response.status} {response.statusText}
                          </span>
                          <span className="text-sm text-gray-400">
                            {response.data.processing_time}
                          </span>
                        </div>
                      )}
                      {error && (
                        <span className="flex items-center gap-2 px-3 py-1 bg-red-400/10 border border-red-400/30 text-red-400 text-sm font-semibold rounded-lg">
                          <AlertCircle className="w-4 h-4" />
                          Error
                        </span>
                      )}
                    </div>

                    <pre className="p-4 bg-gray-900/50 border border-white/10 rounded-lg text-sm text-gray-300 font-mono overflow-x-auto scrollbar-custom">
                      {error
                        ? error
                        : JSON.stringify(response?.data, null, 2)}
                    </pre>
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Code Export */}
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Export Code</h3>
                <div className="flex gap-2">
                  {(['curl', 'python', 'javascript'] as const).map((format) => (
                    <button
                      key={format}
                      onClick={() => setExportFormat(format)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${
                        exportFormat === format
                          ? 'bg-primary text-white'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {format === 'curl' ? 'cURL' : format === 'python' ? 'Python' : 'JavaScript'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative">
                <pre className="p-4 bg-gray-900/50 border border-white/10 rounded-lg text-sm text-gray-300 font-mono overflow-x-auto scrollbar-custom">
                  {generateCode(exportFormat)}
                </pre>
                <button
                  onClick={() => copyCode(generateCode(exportFormat), exportFormat)}
                  className="absolute top-3 right-3 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all group"
                >
                  {copiedCode === exportFormat ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  )}
                </button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
