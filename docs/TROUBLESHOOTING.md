# 🔧 Troubleshooting Guide - ComplianceFlow

## Common Issues & Solutions

---

## Build & Development Issues

### Issue: `npm install` fails

**Síntomas:**
```bash
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

**Solución:**
```bash
# Limpiar cache
npm cache clean --force

# Borrar node_modules y package-lock
rm -rf node_modules package-lock.json

# Reinstalar con legacy peer deps
npm install --legacy-peer-deps

# O usar flag force
npm install --force
```

---

### Issue: TypeScript errors after update

**Síntomas:**
```
Type error: Cannot find module '@/components/...' or its corresponding type declarations.
```

**Solución:**
```bash
# Verificar tsconfig.json paths
cat tsconfig.json

# Reiniciar TypeScript server en VSCode
# Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"

# Regenerar types
rm -rf .next
npm run build
```

---

### Issue: `next dev` no inicia

**Síntomas:**
```bash
Error: listen EADDRINUSE: address already in use :::3000
```

**Solución:**
```bash
# Encontrar proceso usando puerto 3000
lsof -ti:3000

# Matar proceso
kill -9 $(lsof -ti:3000)

# O usar puerto diferente
npm run dev -- -p 3001
```

---

## Styling Issues

### Issue: Tailwind classes no funcionan

**Síntomas:**
- Clases no aplican estilos
- Colores no se muestran

**Solución:**
```bash
# 1. Verificar tailwind.config.js content paths
cat tailwind.config.js

# 2. Limpiar cache y rebuild
rm -rf .next
npm run build

# 3. Verificar que globals.css importa Tailwind
cat src/app/globals.css
# Debe tener:
# @tailwind base;
# @tailwind components;
# @tailwind utilities;
```

---

### Issue: Colores custom no aparecen

**Síntomas:**
```tsx
<div className="bg-primary"> // No funciona
```

**Solución:**
```javascript
// tailwind.config.js debe tener:
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EDEEFF',
          // ...
        },
      },
    },
  },
};
```

---

## Performance Issues

### Issue: Build muy lento

**Síntomas:**
- `npm run build` toma >5 minutos
- High CPU usage

**Solución:**
```bash
# 1. Verificar dependencias pesadas
npm run analyze

# 2. Excluir archivos innecesarios
# En next.config.js:
module.exports = {
  webpack: (config) => {
    config.watchOptions = {
      ignored: ['**/node_modules', '**/.git'],
    };
    return config;
  },
};

# 3. Usar SWC (ya configurado)
# En next.config.js: swcMinify: true
```

---

### Issue: Imágenes no optimizan

**Síntomas:**
- Imágenes cargan lentas
- Lighthouse penaliza

**Solución:**
```tsx
// Usar Next.js Image component
import Image from 'next/image';

<Image
  src="/logo.svg"
  alt="Logo"
  width={100}
  height={100}
  priority // Para hero images
  loading="lazy" // Para images below fold
/>

// En next.config.js:
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 768, 1024, 1280, 1536],
}
```

---

## SEO Issues

### Issue: Google no indexa el sitio

**Síntomas:**
- No aparece en búsquedas
- Search Console sin datos

**Solución:**
```bash
# 1. Verificar robots.txt
curl https://complianceflow.netlify.app/robots.txt

# 2. Verificar sitemap.xml
curl https://complianceflow.netlify.app/sitemap.xml

# 3. Submit en Google Search Console
# https://search.google.com/search-console

# 4. Verificar meta robots
# En layout.tsx:
robots: {
  index: true,
  follow: true,
}
```

---

### Issue: OpenGraph image no aparece

**Síntomas:**
- Al compartir en redes sociales no sale imagen
- Facebook debugger muestra error

**Solución:**
```bash
# 1. Verificar imagen existe
ls -lh public/og-image.png

# 2. Verificar metadata
# En layout.tsx o page.tsx:
openGraph: {
  images: [{
    url: 'https://complianceflow.netlify.app/og-image.png',
    width: 1200,
    height: 630,
  }],
}

# 3. Limpiar cache de Facebook
# https://developers.facebook.com/tools/debug/

# 4. Verificar Twitter
# https://cards-dev.twitter.com/validator
```

---

## Deployment Issues

### Issue: Deploy falla en Netlify

**Síntomas:**
```
Build failed: Command failed with exit code 1
```

**Solución:**
```bash
# 1. Verificar build local
npm run build

# 2. Verificar Node version
# En netlify.toml:
[build.environment]
  NODE_VERSION = "18"

# 3. Verificar environment variables
# Netlify Dashboard -> Site settings -> Environment variables

# 4. Check build logs
# Netlify Dashboard -> Deploys -> Failed deploy -> Logs
```

---

### Issue: Environment variables no funcionan

**Síntomas:**
- `process.env.NEXT_PUBLIC_X` es undefined
- Analytics no trackea

**Solución:**
```bash
# 1. Verificar prefijo NEXT_PUBLIC_
# Solo variables con este prefijo son accesibles en cliente

# 2. Crear .env.local
cp .env.example .env.local

# 3. En Netlify:
# Site settings -> Environment variables -> Add variable

# 4. Rebuild después de añadir variables
# Netlify Dashboard -> Deploys -> Trigger deploy
```

---

## Component Issues

### Issue: Hydration error

**Síntomas:**
```
Error: Hydration failed because the initial UI does not match what was rendered on the server.
```

**Solución:**
```tsx
// 1. Usar 'use client' en componentes con estado
'use client';
import { useState } from 'react';

// 2. Verificar HTML válido
// ❌ <p><div>...</div></p>
// ✅ <div><p>...</p></div>

// 3. Usar useEffect para código que depende de browser
import { useEffect, useState } from 'react';

function Component() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return <div>{window.innerWidth}</div>;
}
```

---

### Issue: Componente no renderiza

**Síntomas:**
- Componente no aparece
- Console sin errores

**Solución:**
```tsx
// 1. Verificar export/import
// component.tsx
export default function Component() { ... }

// page.tsx
import Component from '@/components/Component';

// 2. Verificar conditional rendering
{isLoading && <Component />} // Solo muestra si isLoading es true
{isLoading ? <Loading /> : <Component />} // Mejor

// 3. Check props
console.log('Props:', props);
```

---

## Analytics Issues

### Issue: PostHog no trackea eventos

**Síntomas:**
- Dashboard sin datos
- `window.posthog` undefined

**Solución:**
```tsx
// 1. Verificar API key en .env.local
NEXT_PUBLIC_POSTHOG_KEY=phc_...

// 2. Verificar inicialización
// src/lib/analytics/posthog.tsx
import posthog from 'posthog-js';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: 'https://app.posthog.com',
  });
}

// 3. Verificar en browser console
window.posthog
```

---

### Issue: Google Analytics no funciona

**Síntomas:**
- Real-time sin usuarios

**Solución:**
```tsx
// 1. Añadir Google Analytics
// src/app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
  `}
</Script>

// 2. Verificar measurement ID
// Debe empezar con G-XXXXXXXXXX

// 3. Test con GA Debugger extension
// Chrome Web Store -> Google Analytics Debugger
```

---

## Email & Newsletter Issues

### Issue: Newsletter no envía emails

**Síntomas:**
- Form se envía pero no llega email

**Solución:**
```typescript
// 1. Implementar API route
// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  
  // Mailchimp
  const response = await fetch(
    `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    }
  );
  
  return NextResponse.json({ success: true });
}

// 2. Actualizar component para usar API
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
};
```

---

## Performance Monitoring

### Lighthouse CI no pasa thresholds

**Solución:**
```bash
# 1. Run Lighthouse local
npm run lighthouse

# 2. Identificar issues
# Check informe HTML generado

# 3. Ajustar thresholds si es necesario
# lighthouserc.js
assertions: {
  'categories:performance': ['warn', { minScore: 0.85 }],
}
```

---

## Need More Help?

### Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **TypeScript Handbook**: https://www.typescriptlang.org/docs
- **Lighthouse**: https://web.dev/lighthouse

### Community

- **Next.js Discord**: https://discord.gg/nextjs
- **GitHub Issues**: https://github.com/juankaspain/complianceflow.es/issues

### Contact

- **Email**: support@complianceflow.com
- **GitHub**: @juankaspain

---

**Last Updated:** 31 Diciembre 2025
