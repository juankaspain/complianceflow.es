# ComplianceFlow - Professional SaaS Platform

> APIs de compliance para automatizar SII, Verifactu, KYC, fraude y análisis documental legal.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Analytics**: PostHog
- **Deployment**: Vercel/Netlify
- **CDN**: Cloudflare

## 🛠️ Setup Local

### Requisitos previos

- Node.js 20+
- npm 10+

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/juankaspain/complianceflow.es.git
cd complianceflow.es

# Cambiar a la rama de desarrollo
git checkout feature/nextjs-professional-saas

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local con tus valores

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm start            # Servidor de producción
npm run lint         # Ejecutar ESLint
npm run type-check   # Verificar tipos TypeScript
npm run format       # Formatear código con Prettier
npm run test:unit    # Tests unitarios
npm run test:e2e     # Tests E2E con Playwright
```

## 📋 Estructura del Proyecto

```
src/
├── app/                  # Next.js App Router
│   ├── (marketing)/      # Rutas públicas
│   ├── (legal)/          # Páginas legales
│   └── layout.tsx        # Layout raíz
├── components/
│   ├── ui/               # Componentes UI base
│   ├── layout/           # Header, Footer
│   ├── sections/         # Secciones de landing
│   ├── shared/           # Componentes compartidos
│   └── providers/        # Context providers
├── lib/                  # Utilidades y helpers
├── styles/               # Estilos globales
├── config/               # Configuración
└── types/                # TypeScript types
```

## 🔒 Seguridad

- **CSP**: Content Security Policy configurado
- **Headers**: Security headers en producción
- **Validación**: Zod schemas para todos los inputs
- **HTTPS**: Forzado en producción
- **GDPR**: Privacy-by-design

## ⚡ Performance

- **Lighthouse Score**: 90+ en todas las métricas
- **Core Web Vitals**: Optimizado
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automático con Next.js
- **Lazy Loading**: Componentes pesados

## 📊 SEO

- **Metadata**: Configuración completa por ruta
- **Structured Data**: Schema.org implementado
- **OpenGraph**: Tags completos
- **Sitemap**: Generado automáticamente
- **Robots.txt**: Configurado

## 🧪 Testing

```bash
# Tests unitarios (Vitest)
npm run test:unit

# Tests E2E (Playwright)
npm run test:e2e

# Tests E2E con UI
npm run test:e2e:ui
```

## 🚀 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push a `main`

### Netlify

1. Conecta tu repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

## 📝 To-Do

- [ ] Implementar demos interactivas completas
- [ ] Añadir sistema de autenticación
- [ ] Crear dashboard de cliente
- [ ] Documentación de API con OpenAPI
- [ ] Blog con MDX
- [ ] Internacionalización (i18n)
- [ ] Tests E2E completos

## 👥 Contribuir

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Proprietary - © 2025 ComplianceFlow

## 📧 Contacto

- Email: hola@complianceflow.es
- Web: https://complianceflow.es
- GitHub: [@juankaspain](https://github.com/juankaspain)
