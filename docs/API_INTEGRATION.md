# 🔌 API Integration Guide - ComplianceFlow

## Overview

Esta guía te ayudará a integrar servicios de terceros con ComplianceFlow.

---

## 📧 Newsletter Integration

### Option 1: Mailchimp

#### Setup

1. **Crear cuenta en Mailchimp**
   - https://mailchimp.com/signup/
   - Crear una nueva audience (lista)

2. **Obtener API Key**
   - Account -> Extras -> API Keys
   - Create New Key
   - Copiar key (empieza con tu datacenter: us1, us2, etc.)

3. **Obtener Audience ID**
   - Audience -> Settings -> Audience name and defaults
   - Audience ID (ej: `a1b2c3d4e5`)

4. **Añadir a .env.local**
   ```bash
   MAILCHIMP_API_KEY=abc123-us1
   MAILCHIMP_LIST_ID=a1b2c3d4e5
   MAILCHIMP_SERVER=us1  # Del API key
   ```

#### Implementación
```typescript
// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER;

    const url = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        tags: ['website', 'complianceflow'],
        merge_fields: {
          SOURCE: 'website',
          SIGNUP_DATE: new Date().toISOString(),
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Usuario ya existe
      if (data.title === 'Member Exists') {
        return NextResponse.json(
          { message: 'Ya estás suscrito' },
          { status: 200 }
        );
      }
      throw new Error(data.detail || 'Error al suscribir');
    }

    return NextResponse.json(
      { message: '¡Suscripción exitosa!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
```

#### Frontend Update

```typescript
// src/components/sections/NewsletterSection.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');

  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    setStatus('error');
    console.error('Newsletter error:', error);
  }
};
```

---

### Option 2: SendGrid

#### Setup

1. **Crear cuenta en SendGrid**
   - https://signup.sendgrid.com/
   - Verificar email

2. **Crear API Key**
   - Settings -> API Keys -> Create API Key
   - Full Access o Mail Send permissions

3. **Crear Marketing List**
   - Marketing -> Contacts -> Lists
   - Create New List

4. **Añadir a .env.local**
   ```bash
   SENDGRID_API_KEY=SG.xxx...
   SENDGRID_LIST_ID=xxx-xxx-xxx
   ```

#### Implementación

```typescript
// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        list_ids: [process.env.SENDGRID_LIST_ID],
        contacts: [
          {
            email: email,
            custom_fields: {
              source: 'website',
              signup_date: new Date().toISOString(),
            },
          },
        ],
      }),
    });

    if (!response.ok) throw new Error('SendGrid error');

    return NextResponse.json({ message: 'Suscrito exitosamente' });
  } catch (error) {
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}
```

---

## 📊 Analytics Integration

### PostHog

#### Setup

1. **Crear cuenta en PostHog**
   - https://app.posthog.com/signup
   - Crear proyecto

2. **Obtener Project API Key**
   - Project Settings -> Project API Key
   - Copiar (empieza con `phc_`)

3. **Añadir a .env.local**
   ```bash
   NEXT_PUBLIC_POSTHOG_KEY=phc_xxx...
   NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
   ```

#### Implementación

```typescript
// src/lib/analytics/posthog.tsx
'use client';

import posthog from 'posthog-js';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: false, // Manual control
    capture_pageleave: true,
  });
}

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams?.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture('$pageview', {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

// Custom events
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  posthog.capture(eventName, properties);
};

// User identification
export const identifyUser = (userId: string, traits?: Record<string, any>) => {
  posthog.identify(userId, traits);
};
```

#### Uso

```typescript
// En cualquier componente
import { trackEvent } from '@/lib/analytics/posthog';

const handleDemoClick = () => {
  trackEvent('demo_clicked', {
    demo_type: 'gdpr',
    source: 'hero_section',
  });
};
```

---

### Google Analytics 4

#### Setup

1. **Crear property en GA4**
   - https://analytics.google.com/
   - Admin -> Create Property
   - Obtener Measurement ID (G-XXXXXXXXXX)

2. **Añadir a .env.local**
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

#### Implementación

```typescript
// src/app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## 📨 Contact Form Integration

### Option 1: Resend (Recomendado)

#### Setup

1. **Crear cuenta en Resend**
   - https://resend.com/signup

2. **Obtener API Key**
   - API Keys -> Create API Key

3. **Verificar dominio**
   - Domains -> Add Domain
   - Añadir DNS records

4. **Añadir a .env.local**
   ```bash
   RESEND_API_KEY=re_xxx...
   CONTACT_EMAIL=contact@complianceflow.com
   ```

#### Implementación

```typescript
// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // Validaciones
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos requeridos faltantes' },
        { status: 400 }
      );
    }

    // Enviar email
    const { data, error } = await resend.emails.send({
      from: 'ComplianceFlow <noreply@complianceflow.com>',
      to: [process.env.CONTACT_EMAIL!],
      reply_to: email,
      subject: `Nuevo contacto de ${name} - ${company || 'Sin empresa'}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Error al enviar mensaje' },
      { status: 500 }
    );
  }
}
```

---

## 🔐 Authentication (Opcional)

### NextAuth.js

```bash
npm install next-auth
```

```typescript
// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Añadir custom data a session
      return session;
    },
  },
});

export { handler as GET, handler as POST };
```

---

## 📦 Deployment Variables

### Netlify

```bash
# Site settings -> Environment variables

NEXT_PUBLIC_POSTHOG_KEY=phc_xxx
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXX
MAILCHIMP_API_KEY=xxx
MAILCHIMP_LIST_ID=xxx
RESEND_API_KEY=re_xxx
CONTACT_EMAIL=contact@complianceflow.com
```

---

## ✅ Testing Checklist

### Newsletter

- [ ] Form se envía correctamente
- [ ] Email llega a Mailchimp/SendGrid
- [ ] Mensaje de éxito aparece
- [ ] Validación de email funciona
- [ ] Double opt-in configurado

### Analytics

- [ ] PostHog captura pageviews
- [ ] Custom events se trackeoan
- [ ] GA4 muestra usuarios en tiempo real
- [ ] Conversion tracking funciona

### Contact Form

- [ ] Form valida campos
- [ ] Email llega correctamente
- [ ] Reply-to está configurado
- [ ] Mensaje de confirmación aparece
- [ ] Rate limiting implementado

---

## 💡 Best Practices

### Rate Limiting

```typescript
// Prevenir spam
const rateLimitMap = new Map();

function rateLimit(ip: string, limit = 5, window = 60000) {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  
  const recentRequests = requests.filter((time: number) => now - time < window);
  
  if (recentRequests.length >= limit) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}
```

### Error Handling

```typescript
// Siempre capturar y logear errores
try {
  // API call
} catch (error) {
  console.error('Error:', error);
  // Log to monitoring service
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture('api_error', {
      error: error.message,
      endpoint: '/api/newsletter',
    });
  }
}
```

---

**Creado:** 31 Diciembre 2025
**Owner:** Juan Carlos García Arriero
