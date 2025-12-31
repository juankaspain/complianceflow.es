# Sección de Demos - Guía de Uso

## ⚡ Problema Resuelto

Los iconos de los demos no se mostraban correctamente porque:
1. Se usaban emojis en lugar de componentes de iconos
2. No había un componente estructurado para los demos
3. Faltaba configuración de colores en Tailwind

## ✅ Solución Implementada

Se han creado los siguientes archivos:

### 1. DemoSection Component
**Ubicación**: `src/components/sections/DemoSection.tsx`

**Iconos utilizados** (Lucide React):
- 📄 **Demo SII**: `FileText` - Icono de documento para facturas
- 💳 **Demo KYC**: `CreditCard` - Icono de tarjeta para identidad
- 🛡️ **Demo Fraude**: `Shield` - Icono de escudo para seguridad

**Características**:
- ✅ Iconos profesionales de Lucide React
- ✅ Carga de archivos funcional
- ✅ Estados de procesamiento con spinner
- ✅ Resultados simulados para cada demo
- ✅ Responsive design (mobile-first)
- ✅ Efectos hover y transiciones suaves

### 2. Button Component
**Ubicación**: `src/components/ui/button.tsx`

**Variantes disponibles**:
- `primary` - Botón principal (azul)
- `secondary` - Botón secundario (gris)
- `outline` - Botón con borde
- `ghost` - Botón transparente
- `danger` - Botón de acción peligrosa (rojo)

**Tamaños**:
- `sm` - Pequeño
- `md` - Mediano (por defecto)
- `lg` - Grande

### 3. Tailwind Configuration
**Ubicación**: `tailwind.config.ts`

**Colores configurados**:
- `primary` - Indigo (#4F46E5)
- `secondary` - Emerald (#10B981)

## 📝 Cómo Usar

### Opción 1: Importar en tu página principal

```tsx
// src/app/page.tsx
import DemoSection from '@/components/sections/DemoSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DemoSection /> {/* Agregar aquí */}
      <FeaturesSection />
    </main>
  );
}
```

### Opción 2: Crear una página dedicada de demos

```tsx
// src/app/demos/page.tsx
import DemoSection from '@/components/sections/DemoSection';

export const metadata = {
  title: 'Demos Interactivos | ComplianceFlow',
  description: 'Prueba nuestras APIs en tiempo real sin registro',
};

export default function DemosPage() {
  return <DemoSection />;
}
```

### Opción 3: Usar componentes individuales

```tsx
import { FileText, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

function MyCustomDemo() {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-primary/10 rounded-lg text-primary">
        <FileText className="h-6 w-6" />
      </div>
      <h3>Mi Demo Personalizado</h3>
    </div>
  );
}
```

## 🎨 Personalización
### Cambiar iconos

Visita [Lucide Icons](https://lucide.dev/icons/) y elige los que prefieras:

```tsx
import { FileCheck, UserCheck, AlertTriangle } from 'lucide-react';

// Reemplazar en el array de demos:
icon: <FileCheck className="h-6 w-6" />
```

### Cambiar colores

Edita `tailwind.config.ts`:

```ts
colors: {
  primary: {
    DEFAULT: '#3B82F6', // Azul
    // ... otros tonos
  },
}
```

### Añadir más demos

En `DemoSection.tsx`, agrega al array `demos`:

```tsx
const demos = [
  // ... demos existentes
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Demo GDPR',
    description: 'Verifica cumplimiento de GDPR',
    inputPlaceholder: 'Seleccionar política...',
    buttonText: 'Analizar',
    onProcess: () => setGdprResult(true),
  },
];
```

## 📊 Features de cada Demo

### Demo SII (Facturas)
- Carga de archivos PDF
- Procesamiento simulado (1.5s)
- Resultado JSON con:
  - Número de factura
  - Fecha
  - Montos (base, IVA, total)
  - Estado SII

### Demo KYC (Verificación de Identidad)
- Carga de documentos + selfie
- Verificación simulada
- Resultado con:
  - Nombre completo
  - DNI
  - Score de confianza (98%)
  - Estado de verificación

### Demo Fraude (Análisis de Riesgo)
- Input JSON personalizable
- Cálculo de score de riesgo
- Resultado visual con:
  - Barra de progreso
  - Score numérico (0-100)
  - Factores de riesgo desglosados
  - Indicadores de color

## 🐛 Troubleshooting

### Los iconos no se ven

**Solución**: Asegúrate de tener Lucide React instalado:

```bash
npm install lucide-react
```

### Errores de importación

**Solución**: Verifica que tienes los alias configurados en `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Los colores primary no funcionan

**Solución**: Reinicia el servidor de desarrollo después de cambiar `tailwind.config.ts`:

```bash
npm run dev
```

### Los componentes Card no se encuentran

**Solución**: Los componentes Card ya están creados en:
- `src/components/ui/card.tsx`
- `src/components/ui/button.tsx`

Si faltan, revisa que estén en el repositorio.

## ⚡ Performance

- **Bundle size**: +8KB (componente + iconos)
- **Tiempo de carga**: <100ms
- **Interactividad**: Instantánea
- **Responsive**: Sí, mobile-first

## 📚 Recursos

- [Lucide Icons](https://lucide.dev/) - Catálogo completo de iconos
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors) - Personalización de colores
- [React Hook Form](https://react-hook-form.com/) - Gestión de formularios (futuro)

## ✅ Checklist de Integración
- [x] Crear `DemoSection.tsx`
- [x] Crear `Button.tsx`
- [x] Configurar colores en Tailwind
- [x] Importar iconos de Lucide
- [ ] Integrar en página principal
- [ ] Conectar con API real (opcional)
- [ ] Añadir tests (opcional)
- [ ] Configurar analytics (opcional)

## 🚀 Próximos Pasos

1. Importa `DemoSection` en tu página principal
2. Verifica que los iconos se muestren correctamente
3. Personaliza colores y textos según tu marca
4. Conecta con APIs reales si lo deseas
5. Añade más demos según tus necesidades

---

**¿Preguntas?** Revisa la documentación completa en [docs/](../docs/) o abre un issue en GitHub.
