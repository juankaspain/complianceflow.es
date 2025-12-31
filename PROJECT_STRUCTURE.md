# 📁 ComplianceFlow - Estructura del Proyecto

## 🎯 Visión General

Proyecto Next.js 14 con App Router, TypeScript y Tailwind CSS para una landing page profesional de servicios de compliance.

---

## 📂 Estructura de Carpetas

```
complianceflow.es/
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router (páginas)
│   │   ├── 📄 page.tsx            # 🏠 Home page
│   │   ├── 📄 layout.tsx          # Layout global con Header/Footer
│   │   ├── 📄 globals.css         # Estilos globales + Tailwind
│   │   ├── 📄 error.tsx           # Página de error
│   │   ├── 📄 not-found.tsx       # Página 404
│   │   │
│   │   ├── 📁 features/           # ✨ Página de características
│   │   ├── 📁 pricing/            # 💰 Página de precios
│   │   ├── 📁 security/           # 🔒 Página de seguridad
│   │   ├── 📁 contact/            # 📧 Página de contacto
│   │   │
│   │   ├── 📁 privacy/            # Legal: Política de privacidad
│   │   ├── 📁 terms/              # Legal: Términos y condiciones
│   │   ├── 📁 dpa/                # Legal: Data Processing Agreement
│   │   ├── 📁 sla/                # Legal: Service Level Agreement
│   │   │
│   │   ├── 📁 blog/               # 📝 Blog posts
│   │   ├── 📁 careers/            # 💼 Página de carreras
│   │   └── 📁 docs/               # 📖 Documentación
│   │
│   ├── 📁 components/             # Componentes reutilizables
│   │   ├── 📁 layout/             # Header, Footer, Navigation
│   │   ├── 📁 ui/                 # Botones, Cards, Modals, etc.
│   │   └── 📁 sections/           # Secciones de página
│   │
│   └── 📁 lib/                   # Utilidades y helpers
│
├── 📁 public/                   # Assets estáticos
│   ├── 🖼️ favicon.ico
│   ├── 🖼️ logo.svg
│   └── 🖼️ images/
│
├── 📁 .github/                  # GitHub Actions & configs
│   └── 📁 workflows/
│
├── 📄 package.json              # Dependencias npm
├── 📄 tsconfig.json             # Configuración TypeScript
├── 📄 tailwind.config.ts        # Configuración Tailwind CSS
├── 📄 next.config.js            # Configuración Next.js
├── 📄 .eslintrc.json            # Configuración ESLint
├── 📄 .prettierrc               # Configuración Prettier
├── 📄 netlify.toml              # Configuración Netlify
├── 📄 README.md                 # Documentación principal
└── 📄 LICENSE                   # Licencia MIT
```

---

## 🌐 Páginas Disponibles

### Marketing
| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/` | `src/app/page.tsx` | Home page con hero y CTA |
| `/features` | `src/app/features/page.tsx` | 8 características principales |
| `/pricing` | `src/app/pricing/page.tsx` | 3 planes de precios |
| `/security` | `src/app/security/page.tsx` | Certificaciones y seguridad |
| `/contact` | `src/app/contact/page.tsx` | Formulario de contacto |

### Legal
| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/privacy` | `src/app/privacy/page.tsx` | Política de privacidad GDPR |
| `/terms` | `src/app/terms/page.tsx` | Términos y condiciones |
| `/dpa` | `src/app/dpa/page.tsx` | Data Processing Agreement |
| `/sla` | `src/app/sla/page.tsx` | Service Level Agreement |

### Contenido
| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/blog` | `src/app/blog/page.tsx` | Listado de blog posts |
| `/careers` | `src/app/careers/page.tsx` | Ofertas de empleo |
| `/docs` | `src/app/docs/page.tsx` | Documentación y API reference |

### Utilidad
| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/error` | `src/app/error.tsx` | Página de error |
| `/404` | `src/app/not-found.tsx` | Página 404 |

---

## 🎨 Sistema de Diseño

### Colores Principales
```typescript
// tailwind.config.ts
colors: {
  primary: '#4F46E5',      // Indigo
  secondary: '#7C3AED',    // Purple
  success: '#10B981',      // Green
  warning: '#F59E0B',      // Orange
  error: '#EF4444',        // Red
  background: '#030712',   // Gray-950
}
```

### Tipografía
- **Font**: Inter (Google Fonts)
- **Tamaños**: text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl

### Espaciado
- **Gap**: gap-4, gap-6, gap-8, gap-12
- **Padding**: p-4, p-6, p-8, p-12, p-24
- **Margin**: m-4, m-6, m-8, m-12

---

## 🔧 Configuración del Proyecto

### Variables de Entorno
Crea un archivo `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://complianceflow.es
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Comandos Disponibles
```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo (http://localhost:3000)

# Build
npm run build        # Construir para producción
npm run start        # Iniciar servidor de producción

# Linting
npm run lint         # Ejecutar ESLint
npm run format       # Formatear código con Prettier

# Type checking
npm run type-check   # Verificar tipos TypeScript
```

---

## 📦 Dependencias Principales

### Runtime
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.4.0",
  "lucide-react": "^0.400.0"
}
```

### Dev Tools
```json
{
  "eslint": "^8.0.0",
  "prettier": "^3.0.0",
  "@typescript-eslint/parser": "^6.0.0"
}
```

---

## 🚀 Deployment

### Netlify (Recomendado)
1. Conecta tu repositorio de GitHub
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy automático con cada push a `main`

### Vercel
1. Importa proyecto desde GitHub
2. Detección automática de Next.js
3. Deploy instantáneo

---

## 📝 Convenciones de Código

### Estructura de Componentes
```typescript
// 1. Imports
import type { Metadata } from 'next';
import { ComponentName } from '@/components';

// 2. Metadata (páginas)
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};

// 3. Tipos
interface Props {
  // ...
}

// 4. Componente
export default function PageName() {
  return (
    <div>
      {/* Content */}
    </div>
  );
}
```

### Nomenclatura
- **Archivos**: kebab-case (`my-component.tsx`)
- **Componentes**: PascalCase (`MyComponent`)
- **Variables**: camelCase (`myVariable`)
- **Constantes**: UPPER_SNAKE_CASE (`MY_CONSTANT`)

---

## ✅ Checklist de Calidad

- [x] TypeScript configurado sin errores
- [x] ESLint configurado y sin warnings
- [x] Prettier formateando automáticamente
- [x] Responsive design (móvil, tablet, desktop)
- [x] Metadata SEO en todas las páginas
- [x] Favicon y manifest.json configurados
- [x] robots.txt y sitemap.xml generados
- [x] Lighthouse score > 90 en todas las métricas
- [x] Navegación funcional en Header y Footer

---

## 🔄 Flujo de Trabajo Git

```bash
# 1. Crear rama para nueva feature
git checkout -b feature/nueva-pagina

# 2. Hacer cambios y commitear
git add .
git commit -m "feat: add new page"

# 3. Push a GitHub
git push origin feature/nueva-pagina

# 4. Crear Pull Request
# 5. Merge a main después de review
```

---

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)

---

## 🆘 Troubleshooting

### Error: Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: Type errors
```bash
npm run type-check
```

### Error: Linting errors
```bash
npm run lint -- --fix
npm run format
```

---

**Última actualización:** 31 de diciembre de 2025
