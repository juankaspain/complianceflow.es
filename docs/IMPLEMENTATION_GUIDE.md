# Guía de Implementación - Componentes UI Mejorados

**Fecha:** 2 de enero de 2026  
**Versión:** 1.0.0  
**Estado:** ✅ Listos para producción

---

## 📦 Componentes Creados

Se han añadido 4 nuevos componentes enterprise-grade:

1. **AnimatedCounter** - Contadores animados con spring physics
2. **GlassCard** - Cards con efecto glassmorphism
3. **CodePreview** - Preview de código multi-lenguaje interactivo
4. **EnhancedHeroDemo** - Sección hero mejorada integrando todo

---

## 🚀 Quick Start

### 1. AnimatedCounter

**Ubicación:** `src/components/ui/AnimatedCounter.tsx`

**Uso Básico:**
```tsx
import AnimatedCounter from '@/components/ui/AnimatedCounter';

// En tu componente:
<AnimatedCounter 
  value={99.99} 
  suffix="%" 
  decimals={2} 
  duration={2}
/>
```

**Ejemplos Avanzados:**

```tsx
// Porcentaje con 2 decimales
<AnimatedCounter value={99.99} suffix="%" decimals={2} />

// Número con sufijo "+"
<AnimatedCounter value={500} suffix="+" decimals={0} />

// Tiempo en milisegundos
<AnimatedCounter value={47} suffix="ms" decimals={0} />

// Precio con prefijo
<AnimatedCounter value={1250000} prefix="$" decimals={0} />

// Con clases personalizadas
<AnimatedCounter 
  value={99.99} 
  suffix="%" 
  decimals={2}
  className="text-5xl font-bold text-primary-400"
/>
```

**Props:**

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `value` | `number` | - | Valor final del contador |
| `duration` | `number` | `2` | Duración de la animación en segundos |
| `suffix` | `string` | `''` | Sufijo (ej: '%', 'ms', '+') |
| `prefix` | `string` | `''` | Prefijo (ej: '$', '€') |
| `decimals` | `number` | `0` | Número de decimales |
| `className` | `string` | `''` | Clases CSS adicionales |

**Características:**
- ✅ Animación suave con spring physics (Framer Motion)
- ✅ Se activa al entrar en viewport (IntersectionObserver)
- ✅ Una sola animación por página (once: true)
- ✅ Optimizado para performance

---

### 2. GlassCard

**Ubicación:** `src/components/ui/GlassCard.tsx`

**Uso Básico:**
```tsx
import GlassCard from '@/components/ui/GlassCard';

<GlassCard glow="primary" hover>
  <h3>Título</h3>
  <p>Contenido de la card</p>
</GlassCard>
```

**Ejemplos con Diferentes Glows:**

```tsx
// Card con glow primario (azul)
<GlassCard glow="primary">
  <div className="text-center">
    <h3 className="text-2xl font-bold text-white mb-2">99.99%</h3>
    <p className="text-gray-400">Uptime SLA</p>
  </div>
</GlassCard>

// Card con glow de éxito (verde)
<GlassCard glow="success" hover={false}>
  <div className="flex items-center gap-4">
    <CheckCircle className="w-8 h-8 text-green-400" />
    <div>
      <h4 className="font-semibold text-white">Certificado ISO 27001</h4>
      <p className="text-sm text-gray-400">Auditado anualmente</p>
    </div>
  </div>
</GlassCard>

// Card con glow warning (amarillo)
<GlassCard glow="warning" className="p-8">
  <AlertTriangle className="w-6 h-6 text-yellow-400 mb-4" />
  <p className="text-white">Acción requerida</p>
</GlassCard>

// Card sin glow ni hover
<GlassCard glow="none" hover={false}>
  <p className="text-gray-300">Contenido estático</p>
</GlassCard>
```

**Variante Strong:**

```tsx
import { GlassCardStrong } from '@/components/ui/GlassCard';

// Card con efecto glass más intenso
<GlassCardStrong glow="primary">
  <h3>Mayor contraste y blur</h3>
</GlassCardStrong>
```

**Props:**

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Contenido de la card |
| `glow` | `'none' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'none'` | Efecto de glow |
| `hover` | `boolean` | `true` | Activar efecto hover |
| `className` | `string` | `''` | Clases CSS adicionales |

**Características:**
- ✅ Glassmorphism moderno con backdrop-blur
- ✅ Animación de entrada al viewport
- ✅ Hover effect con scale
- ✅ 5 variantes de glow
- ✅ Compatible con todas las props de motion.div

---

### 3. CodePreview

**Ubicación:** `src/components/ui/CodePreview.tsx`

**Uso Básico:**
```tsx
import CodePreview from '@/components/ui/CodePreview';

const examples = [
  {
    language: 'javascript',
    code: `const result = await client.submit({ ... });`
  },
  {
    language: 'python',
    code: `result = client.submit({ ... })`
  }
];

<CodePreview
  title="Ejemplo de Integración"
  examples={examples}
  response={{
    status: 200,
    message: 'Invoice submitted successfully',
    time: '47ms'
  }}
/>
```

**Ejemplo Completo:**

```tsx
const codeExamples = [
  {
    language: 'javascript',
    code: `import { ComplianceFlow } from '@complianceflow/sdk';

const client = new ComplianceFlow({
  apiKey: process.env.COMPLIANCEFLOW_API_KEY
});

const result = await client.sii.submitInvoice({
  invoiceNumber: '2024-001',
  amount: 1250.00,
  customer: {
    vatId: 'ESB12345678',
    name: 'Acme Corp'
  }
});

console.log('✅ Invoice submitted:', result.id);`
  },
  {
    language: 'python',
    code: `from complianceflow import ComplianceFlow

client = ComplianceFlow(
    api_key=os.environ['COMPLIANCEFLOW_API_KEY']
)

result = client.sii.submit_invoice(
    invoice_number='2024-001',
    amount=1250.00,
    customer={
        'vat_id': 'ESB12345678',
        'name': 'Acme Corp'
    }
)

print(f'✅ Invoice submitted: {result.id}')`
  },
  {
    language: 'typescript',
    code: `import { ComplianceFlow, Invoice } from '@complianceflow/sdk';

const client = new ComplianceFlow({
  apiKey: process.env.COMPLIANCEFLOW_API_KEY
});

const invoice: Invoice = {
  invoiceNumber: '2024-001',
  amount: 1250.00,
  customer: {
    vatId: 'ESB12345678',
    name: 'Acme Corp'
  }
};

const result = await client.sii.submitInvoice(invoice);`
  },
  {
    language: 'curl',
    code: `curl -X POST https://api.complianceflow.es/v1/sii/invoice \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "invoice_number": "2024-001",
    "amount": 1250.00,
    "customer": {
      "vat_id": "ESB12345678",
      "name": "Acme Corp"
    }
  }'`
  }
];

<CodePreview
  title="Envía una factura al SII en segundos"
  examples={codeExamples}
  response={{
    status: 200,
    message: 'Invoice submitted to AEAT successfully',
    time: '47ms'
  }}
/>
```

**Con Error Response:**

```tsx
<CodePreview
  examples={examples}
  response={{
    status: 401,
    message: 'Invalid API key',
  }}
/>
```

**Props:**

| Prop | Tipo | Descripción |
|------|------|-------------|
| `examples` | `CodeExample[]` | Array de ejemplos de código |
| `title` | `string` \| `undefined` | Título opcional |
| `response` | `{ status: number, message: string, time?: string }` \| `undefined` | Respuesta de la API |
| `className` | `string` | Clases CSS adicionales |

**CodeExample Type:**
```typescript
type Language = 'curl' | 'javascript' | 'typescript' | 'python';

interface CodeExample {
  language: Language;
  code: string;
  label?: string; // Label personalizado (default: capitalizado)
}
```

**Características:**
- ✅ Tabs animados con Framer Motion
- ✅ Copy to clipboard con feedback visual
- ✅ Soporte para 4 lenguajes
- ✅ Response preview con colores semánticos
- ✅ Dark theme optimizado

---

### 4. EnhancedHeroDemo

**Ubicación:** `src/components/sections/EnhancedHeroDemo.tsx`

**Uso:**
```tsx
import EnhancedHeroDemo from '@/components/sections/EnhancedHeroDemo';

// En tu page.tsx
export default function HomePage() {
  return (
    <main>
      <EnhancedHeroDemo />
      {/* Resto de secciones */}
    </main>
  );
}
```

**Características:**
- ✅ Grid de stats con AnimatedCounter
- ✅ Cards con GlassCard y glow effects
- ✅ CodePreview integrado
- ✅ Trust badges
- ✅ Background con mesh gradient
- ✅ Totalmente responsive

---

## 📝 Integración en Homepage

### Opción 1: Reemplazar Hero Actual

```tsx
// src/app/page.tsx
import EnhancedHeroDemo from '@/components/sections/EnhancedHeroDemo';
// ... otros imports

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* NUEVO: Hero mejorado */}
      <EnhancedHeroDemo />
      
      {/* Mantener tus secciones existentes */}
      <LiveMetricsBar />
      <SocialProof />
      <SecuritySection />
      <FeaturesSection />
      {/* ... */}
    </main>
  );
}
```

### Opción 2: Usar Componentes Individualmente

```tsx
// Actualiza tu hero existente
<section className="relative py-24 overflow-hidden">
  {/* Background con mesh gradient */}
  <div className="absolute inset-0 mesh-gradient-bg" />
  
  <div className="relative max-w-7xl mx-auto px-4">
    <h1 className="gradient-text text-6xl font-bold mb-8">
      Cumplimiento normativo automatizado
    </h1>
    
    {/* Grid de stats con AnimatedCounter */}
    <div className="grid grid-cols-4 gap-6 mb-16">
      <GlassCard glow="primary">
        <AnimatedCounter value={99.99} suffix="%" decimals={2} />
        <p className="text-sm text-gray-400 mt-2">Uptime SLA</p>
      </GlassCard>
      {/* Más stats... */}
    </div>
    
    {/* Code preview */}
    <CodePreview examples={codeExamples} response={...} />
  </div>
</section>
```

### Opción 3: Mejorar Secciones Existentes

```tsx
// En cualquier sección, reemplaza divs por GlassCard:

// Antes:
<div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
  <h3>Feature</h3>
</div>

// Después:
<GlassCard glow="primary" hover>
  <h3>Feature</h3>
</GlassCard>
```

---

## 🎨 Utilidades CSS Disponibles

Ya están disponibles en `globals.css`:

### Glassmorphism
```tsx
<div className="glass rounded-2xl p-6">
  {/* Glass effect standard */}
</div>

<div className="glass-strong rounded-2xl p-6">
  {/* Glass effect más intenso */}
</div>

<div className="glass-light rounded-2xl p-6">
  {/* Glass effect sutil */}
</div>
```

### Glow Effects
```tsx
<div className="glow-primary rounded-xl p-6">
  {/* Glow azul primario */}
</div>

<div className="glow-primary-strong rounded-xl p-6">
  {/* Glow intenso */}
</div>

<div className="glow-success rounded-xl p-6">
  {/* Glow verde */}
</div>
```

### Background Effects
```tsx
<section className="mesh-gradient-bg py-24">
  {/* Mesh gradient animado */}
</section>
```

### Interactive Cards
```tsx
<div className="interactive-card glass rounded-xl p-6">
  {/* Hover scale + shadow */}
</div>

<div className="interactive-card-subtle glass rounded-xl p-6">
  {/* Hover sutil */}
</div>
```

### CTA Buttons
```tsx
<button className="cta-button bg-primary px-6 py-3 rounded-lg">
  {/* Shine effect on hover */}
  Call to Action
</button>
```

### Loading States
```tsx
<div className="shimmer h-48 w-full rounded-lg">
  {/* Skeleton con shimmer */}
</div>
```

### Gradient Text
```tsx
<h1 className="gradient-text text-5xl font-bold">
  Título con Gradiente
</h1>

<span className="gradient-text-success text-2xl">
  Éxito
</span>
```

---

## ⚡ Performance Tips

### 1. Lazy Loading

Para componentes pesados con animaciones:

```tsx
import dynamic from 'next/dynamic';

const EnhancedHeroDemo = dynamic(
  () => import('@/components/sections/EnhancedHeroDemo'),
  { ssr: true } // SSR habilitado para SEO
);
```

### 2. Framer Motion Optimization

Los componentes ya usan:
- `viewport={{ once: true }}` - Anima solo una vez
- `margin: '-50px'` - Pre-trigger antes de entrar
- `whileInView` en lugar de `animate` para viewport-based

### 3. Reducir Animaciones en Móvil

```tsx
import { useReducedMotion } from 'framer-motion';

const shouldReduceMotion = useReducedMotion();

<motion.div
  animate={shouldReduceMotion ? {} : { scale: 1.05 }}
>
```

---

## ♿ Accesibilidad

Todos los componentes incluyen:

- ✅ Focus states visibles (outline automático)
- ✅ ARIA labels donde corresponde
- ✅ Respeto a `prefers-reduced-motion`
- ✅ Contraste WCAG AA (verificar con Lighthouse)
- ✅ Keyboard navigation

### Testing Accesibilidad

```bash
# Lighthouse CI (ya configurado)
npm run lighthouse

# Axe DevTools en navegador
# https://chrome.google.com/webstore/detail/axe-devtools
```

---

## 🐛 Troubleshooting

### Error: "Cannot find module 'framer-motion'"

```bash
# Framer Motion ya está instalado, verifica:
npm list framer-motion

# Si no aparece:
npm install framer-motion
```

### Error: AnimatedCounter no anima

**Causa:** Componente fuera del viewport o SSR issue.

**Solución:**
```tsx
// Añade 'use client' al top del componente padre
'use client';

import AnimatedCounter from '@/components/ui/AnimatedCounter';
```

### GlassCard no tiene efecto blur

**Causa:** Navegador sin soporte para backdrop-filter.

**Solución:** Fallback automático incluido con `-webkit-backdrop-filter`.

### CodePreview tabs no cambian

**Causa:** Estado no actualiza correctamente.

**Verificar:**
```tsx
// Asegúrate de que examples es un array válido
console.log(examples); // Debe tener objetos con { language, code }
```

---

## 📊 Métricas de Impacto

Después de implementar:

### Monitorear con Lighthouse CI

```bash
npm run lighthouse
```

**Objetivos:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Analytics a Observar

- **Bounce Rate:** Objetivo -15%
- **Time on Page:** Objetivo +30%
- **CTA Click Rate:** Objetivo +25%
- **Scroll Depth:** Objetivo +20%

### Testing A/B

Recomendado probar:
1. Hero actual vs EnhancedHeroDemo
2. Cards normales vs GlassCard
3. Stats estáticos vs AnimatedCounter

---

## 🔧 Próximos Pasos

### Fase 1: Implementación Básica (Esta Semana)
- [ ] Integrar EnhancedHeroDemo en homepage
- [ ] Reemplazar cards por GlassCard en 2-3 secciones
- [ ] Añadir CodePreview en sección de documentación
- [ ] Testing en desarrollo

### Fase 2: Optimización (Próxima Semana)
- [ ] Lighthouse audit
- [ ] Performance profiling
- [ ] Accessibility audit
- [ ] Mobile testing

### Fase 3: Expansión (Siguiente Sprint)
- [ ] Crear más variantes de componentes
- [ ] Añadir Storybook
- [ ] Documentar design system
- [ ] Unit tests para componentes

---

## 📚 Recursos Adicionales

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Glassmorphism Generator](https://ui.glass/generator/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Frontend Audit Report](../FRONTEND_AUDIT_REPORT.md)

---

**¿Preguntas?** Crea un issue en el repo o consulta el [Frontend Audit Report](../FRONTEND_AUDIT_REPORT.md) para más detalles.
