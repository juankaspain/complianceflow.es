'use client';

import React, { useState } from 'react';
import { Logo, BrandedButton, BrandedCard, GradientText } from '@/components/brand';
import { Code, Copy, Check, Terminal, Book, Zap } from 'lucide-react';

const codeExamples = {
  curl: `curl -X POST https://api.complianceflow.es/v1/validate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "document",
    "data": {
      "content": "...",
      "regulations": ["GDPR", "SOC2"]
    }
  }'`,
  javascript: `import ComplianceFlow from '@complianceflow/sdk';

const client = new ComplianceFlow({
  apiKey: process.env.COMPLIANCEFLOW_API_KEY
});

const result = await client.validate({
  type: 'document',
  data: {
    content: '...',
    regulations: ['GDPR', 'SOC2']
  }
});

console.log(result);`,
  python: `from complianceflow import ComplianceFlow

client = ComplianceFlow(
    api_key=os.environ['COMPLIANCEFLOW_API_KEY']
)

result = client.validate(
    type='document',
    data={
        'content': '...',
        'regulations': ['GDPR', 'SOC2']
    }
)

print(result)`,
  response: `{
  "status": "success",
  "data": {
    "id": "val_1234567890",
    "passed": true,
    "compliance_score": 98.5,
    "regulations": {
      "GDPR": {
        "passed": true,
        "score": 99.2
      },
      "SOC2": {
        "passed": true,
        "score": 97.8
      }
    },
    "recommendations": [],
    "timestamp": "2025-12-31T10:24:00Z"
  }
}`
};

export default function ApiDocsPage() {
  const [selectedLang, setSelectedLang] = useState<keyof typeof codeExamples>('javascript');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[selectedLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <nav className="flex items-center gap-6">
              <a href="/" className="text-sm font-medium hover:text-brand-primary-500 transition-colors">
                Inicio
              </a>
              <BrandedButton variant="gradient" size="sm">
                Obtener API Key
              </BrandedButton>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-primary-100 dark:bg-brand-primary-900/30 text-brand-primary-600 dark:text-brand-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Book className="w-4 h-4" />
              API Documentation v1.0
            </div>
            <GradientText as="h1" className="text-5xl md:text-6xl mb-6">
              API Documentation
            </GradientText>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Integra ComplianceFlow en tu aplicación en minutos con nuestra API RESTful
            </p>
          </div>

          {/* Quick Start */}
          <BrandedCard className="p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-primary-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Quick Start</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">1. Obtén tu API Key</h3>
                <p className="text-muted-foreground">
                  Regístrate en el dashboard y genera tu API key en la sección de configuración.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">2. Instala el SDK (Opcional)</h3>
                <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
                  npm install @complianceflow/sdk
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">3. Haz tu primera llamada</h3>
                <p className="text-muted-foreground mb-4">
                  Elige tu lenguaje favorito y empieza a validar compliance:
                </p>
                
                {/* Code Example */}
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedLang('curl')}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          selectedLang === 'curl'
                            ? 'bg-brand-primary-500 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        cURL
                      </button>
                      <button
                        onClick={() => setSelectedLang('javascript')}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          selectedLang === 'javascript'
                            ? 'bg-brand-primary-500 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        JavaScript
                      </button>
                      <button
                        onClick={() => setSelectedLang('python')}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          selectedLang === 'python'
                            ? 'bg-brand-primary-500 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        Python
                      </button>
                      <button
                        onClick={() => setSelectedLang('response')}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          selectedLang === 'response'
                            ? 'bg-brand-primary-500 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        Response
                      </button>
                    </div>
                    <button
                      onClick={copyCode}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-sm text-gray-300">{codeExamples[selectedLang]}</code>
                  </pre>
                </div>
              </div>
            </div>
          </BrandedCard>

          {/* Endpoints */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <BrandedCard hover className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-mono">
                  POST
                </div>
                <code className="text-sm">/v1/validate</code>
              </div>
              <h3 className="font-semibold mb-2">Validar Compliance</h3>
              <p className="text-sm text-muted-foreground">
                Valida documentos, procesos o datos contra regulaciones específicas.
              </p>
            </BrandedCard>

            <BrandedCard hover className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-mono">
                  GET
                </div>
                <code className="text-sm">/v1/reports</code>
              </div>
              <h3 className="font-semibold mb-2">Obtener Reportes</h3>
              <p className="text-sm text-muted-foreground">
                Descarga reportes de compliance generados automáticamente.
              </p>
            </BrandedCard>

            <BrandedCard hover className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-mono">
                  POST
                </div>
                <code className="text-sm">/v1/audit</code>
              </div>
              <h3 className="font-semibold mb-2">Crear Auditoría</h3>
              <p className="text-sm text-muted-foreground">
                Inicia una auditoría completa de compliance con tracking automático.
              </p>
            </BrandedCard>

            <BrandedCard hover className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-mono">
                  PATCH
                </div>
                <code className="text-sm">/v1/policies</code>
              </div>
              <h3 className="font-semibold mb-2">Actualizar Políticas</h3>
              <p className="text-sm text-muted-foreground">
                Gestiona y actualiza tus políticas de compliance dinámicamente.
              </p>
            </BrandedCard>
          </div>

          {/* Authentication */}
          <BrandedCard className="p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Autenticación</h2>
            <p className="text-muted-foreground mb-4">
              Todas las llamadas a la API requieren autenticación mediante API Key en el header:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
              Authorization: Bearer YOUR_API_KEY
            </div>
          </BrandedCard>

          {/* Rate Limits */}
          <BrandedCard className="p-8">
            <h2 className="text-2xl font-bold mb-4">Rate Limits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-brand-primary-500 mb-2">Starter</div>
                <p className="text-muted-foreground">100 requests/minuto</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary-500 mb-2">Pro</div>
                <p className="text-muted-foreground">1,000 requests/minuto</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary-500 mb-2">Enterprise</div>
                <p className="text-muted-foreground">Sin límites</p>
              </div>
            </div>
          </BrandedCard>
        </div>
      </div>
    </div>
  );
}
