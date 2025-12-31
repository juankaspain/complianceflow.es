'use client';

import { useState } from 'react';
import { FileText, Shield, CreditCard, Upload, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DemoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  inputPlaceholder?: string;
  buttonText: string;
  resultComponent?: React.ReactNode;
  onProcess: () => void;
}

function DemoCard({
  icon,
  title,
  description,
  inputPlaceholder,
  buttonText,
  resultComponent,
  onProcess,
}: DemoCardProps) {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleProcess = async () => {
    setProcessing(true);
    // Simular procesamiento
    await new Promise((resolve) => setTimeout(resolve, 1500));
    onProcess();
    setProcessing(false);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {inputPlaceholder && (
          <div className="space-y-2">
            <label
              htmlFor={`file-${title}`}
              className="flex items-center gap-2 px-4 py-2 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <Upload className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-600">
                {file ? file.name : inputPlaceholder}
              </span>
              <input
                id={`file-${title}`}
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.png"
              />
            </label>
          </div>
        )}

        <Button
          onClick={handleProcess}
          disabled={!file || processing}
          className="w-full"
        >
          {processing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Procesando...
            </>
          ) : (
            buttonText
          )}
        </Button>

        {resultComponent && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            {resultComponent}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function DemoSection() {
  const [siiResult, setSiiResult] = useState<any>(null);
  const [kycResult, setKycResult] = useState<any>(null);
  const [fraudResult, setFraudResult] = useState<any>(null);

  const demos = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Demo SII',
      description: 'Sube una factura PDF y obtén la respuesta SII-ready en JSON.',
      inputPlaceholder: 'Seleccionar archivo... Ningún archivo seleccionado',
      buttonText: 'Procesar factura',
      resultComponent: siiResult && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <span className="font-semibold">Factura procesada correctamente</span>
          </div>
          <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
            {JSON.stringify(
              {
                invoice_number: 'FAC-2025-001',
                date: '2025-12-31',
                amount: 1250.0,
                vat: 262.5,
                total: 1512.5,
                status: 'SII_READY',
              },
              null,
              2
            )}
          </pre>
        </div>
      ),
      onProcess: () => setSiiResult(true),
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Demo KYC',
      description: 'Simula verificación de identidad con documento + selfie.',
      inputPlaceholder: 'Elegir archivos... Ningún archivo seleccionado',
      buttonText: 'Verificar identidad',
      resultComponent: kycResult && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <span className="font-semibold">Verificación exitosa</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-600">Nombre:</span>
              <span className="ml-2 font-medium">Juan García</span>
            </div>
            <div>
              <span className="text-gray-600">DNI:</span>
              <span className="ml-2 font-medium">12345678A</span>
            </div>
            <div>
              <span className="text-gray-600">Score:</span>
              <span className="ml-2 font-medium text-green-600">98%</span>
            </div>
            <div>
              <span className="text-gray-600">Estado:</span>
              <span className="ml-2 font-medium text-green-600">Verificado</span>
            </div>
          </div>
        </div>
      ),
      onProcess: () => setKycResult(true),
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Demo Fraude',
      description: 'Modifica el JSON y observa cómo cambia el score de riesgo.',
      buttonText: 'Calcular riesgo',
      resultComponent: fraudResult && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Score de riesgo:</span>
            <span className="text-2xl font-bold text-orange-500">45/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full"
              style={{ width: '45%' }}
            />
          </div>
          <ul className="text-sm space-y-1 mt-2">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-orange-500 rounded-full" />
              Velocidad de transacción: Media
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full" />
              País de origen: Confiable
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-orange-500 rounded-full" />
              Edad del usuario: 45 días (Reciente)
            </li>
          </ul>
        </div>
      ),
      onProcess: () => setFraudResult(true),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Prueba ComplianceFlow en acción
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conecta con nuestro entorno de pruebas sin necesidad de registro.
            Experimenta la velocidad y precisión de ComplianceFlow en tiempo real.
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <DemoCard key={index} {...demo} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para la integración completa?
          </h3>
          <p className="text-gray-600 mb-6">
            Obtén tu API key gratuita y comienza a integrar estas funciones en tu
            aplicación en minutos.
          </p>
          <Button size="lg" className="text-lg px-8">
            Crear cuenta gratuita
          </Button>
        </div>
      </div>
    </section>
  );
}
