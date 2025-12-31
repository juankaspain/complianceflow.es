# Google Search Console Setup Guide

## 🎯 Objetivo

Configurar Google Search Console para monitorear el SEO y rendimiento de ComplianceFlow en los resultados de búsqueda de Google.

---

## 🚀 Pasos de Configuración

### 1. Crear Cuenta en Google Search Console

1. Ve a: https://search.google.com/search-console/
2. Haz clic en **"Empezar ahora"**
3. Inicia sesión con tu cuenta de Google

### 2. Añadir Propiedad

#### Opción A: Prefijo de URL (Recomendado)

1. Selecciona **"Prefijo de URL"**
2. Ingresa: `https://complianceflow.netlify.app`
3. Haz clic en **"Continuar"**

#### Opción B: Dominio

1. Selecciona **"Dominio"**
2. Ingresa: `complianceflow.netlify.app`
3. Necesitarás verificar vía DNS (más complejo)

### 3. Verificar Propiedad

#### Método 1: Meta Tag HTML (Más Fácil)

1. Google te dará un meta tag como:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ..." />
   ```

2. Añadir al archivo `src/app/layout.tsx`:

   ```tsx
   export const metadata: Metadata = {
     // ... otros metadatos
     verification: {
       google: 'ABC123XYZ...', // <-- Tu código aquí
     },
   };
   ```

3. Haz commit y push:
   ```bash
   git add src/app/layout.tsx
   git commit -m "feat: add Google Search Console verification"
   git push origin main
   ```

4. Espera 2-3 minutos a que Netlify haga deploy

5. Vuelve a Google Search Console y haz clic en **"Verificar"**

#### Método 2: Archivo HTML

1. Google te dará un archivo como: `google123abc.html`

2. Descarga el archivo y colócalo en:
   ```
   public/google123abc.html
   ```

3. Commit y push:
   ```bash
   git add public/google123abc.html
   git commit -m "feat: add Google verification file"
   git push origin main
   ```

4. Espera el deploy y verifica en Google Search Console

#### Método 3: Netlify (Automático si tienes dominio custom)

Si tienes dominio propio:
1. En Netlify Dashboard → Site settings → Domain management
2. Sigue las instrucciones de Netlify para verificación DNS

---

## 📊 Configuración Post-Verificación

### 1. Submit Sitemap

1. En Google Search Console, ve a **"Sitemaps"** (menú izquierdo)
2. Añade un nuevo sitemap:
   ```
   https://complianceflow.netlify.app/sitemap.xml
   ```
3. Haz clic en **"Enviar"**

**Resultado esperado:**
- Estado: Éxito
- URLs descubiertas: ~10-15 (dependiendo de tus páginas)

### 2. Configurar Preferencias

#### Dominio Preferido
1. Ve a **"Configuración"** → **"Configuración del sitio"**
2. Establece:
   - **URL preferida**: `https://complianceflow.netlify.app`
   - **País de destino**: España (si aplica)

#### Velocidad del Rastreo
1. **"Configuración"** → **"Velocidad de rastreo"**
2. Déjalo en **"Automático"** (recomendado)

---

## 🔍 Monitoring y Métricas

### KPIs a Monitorear (Semanalmente)

#### 1. Rendimiento de Búsqueda

Ubicación: **"Rendimiento"** en menú izquierdo

**Métricas clave:**
```
□ Total de clics
□ Total de impresiones
□ CTR promedio
□ Posición promedio
```

**Objetivos (3 meses):**
- Clics: 100+ / mes
- Impresiones: 5,000+ / mes
- CTR: >3%
- Posición promedio: <30

#### 2. Cobertura de Índice

Ubicación: **"Cobertura"**

**Verificar:**
```
□ Páginas válidas indexadas
□ Páginas excluidas (debería ser 0)
□ Errores de indexación (debería ser 0)
```

#### 3. Experiencia en la Página

Ubicación: **"Experiencia"** → **"Core Web Vitals"**

**Objetivos:**
```
✅ LCP < 2.5s (Good)
✅ FID < 100ms (Good)
✅ CLS < 0.1 (Good)
```

#### 4. Usabilidad Móvil

Ubicación: **"Experiencia"** → **"Usabilidad móvil"**

**Verificar:**
```
□ Sin errores de usabilidad
□ Todas las páginas "Utilizables"
```

#### 5. Mejoras

Ubicación: **"Mejoras"**

**Revisar:**
- **Breadcrumbs**: Deberían aparecer
- **Logos**: Verificar si se detectan
- **Sitelinks**: Configurar si aparecen

---

## 🚨 Solucionar Problemas Comunes

### Problema: "Sitemap no se puede leer"

**Solución:**
1. Verifica que el sitemap está accesible:
   ```
   curl https://complianceflow.netlify.app/sitemap.xml
   ```
2. Debe devolver XML válido
3. Si hay error 404, verifica que el archivo existe en `/public/`

### Problema: "Página no indexada"

**Causas posibles:**
1. **robots.txt bloqueando** - Verificar `/robots.txt`
2. **Meta noindex** - Revisar que no haya `<meta name="robots" content="noindex">`
3. **Redirect** - Página redirige antes de indexarse
4. **Contenido duplicado** - Google elige otra versión

**Solución:**
1. Ve a **"Inspección de URLs"**
2. Ingresa la URL problemática
3. Haz clic en **"Solicitar indexación"**
4. Espera 24-48 horas

### Problema: "Core Web Vitals en rojo"

**Solución:**
1. Ejecuta Lighthouse en local:
   ```bash
   npm run lighthouse
   ```
2. Identifica problemas
3. Optimiza imágenes, JavaScript, CSS
4. Verifica en PageSpeed Insights

---

## 📝 Reportes Recomendados

### Reporte Semanal

**Métricas a revisar:**
```markdown
### Semana [Número] - [Fecha]

**Rendimiento:**
- Clics: [número] (↑/↓ [%] vs semana anterior)
- Impresiones: [número] (↑/↓ [%])
- CTR: [%] (↑/↓ [%])
- Posición: [número] (↑/↓ [%])

**Top Queries:**
1. [query] - [posición] - [clics]
2. [query] - [posición] - [clics]
3. [query] - [posición] - [clics]

**Problemas:**
- [Si hay alguno]

**Acciones:**
- [Optimizaciones realizadas]
```

### Reporte Mensual

**Métricas adicionales:**
```markdown
### Mes [Nombre] [Año]

**Crecimiento:**
- Tráfico orgánico: [%]
- Nuevas keywords en top 20: [número]
- Páginas indexadas: [número]

**Core Web Vitals:**
- LCP: [ms] - [Good/Needs Improvement/Poor]
- FID: [ms] - [Good/Needs Improvement/Poor]
- CLS: [score] - [Good/Needs Improvement/Poor]

**Contenido nuevo:**
- Blog posts: [número]
- Páginas nuevas: [número]

**Objetivos próximo mes:**
1. [Objetivo 1]
2. [Objetivo 2]
3. [Objetivo 3]
```

---

## 🛠️ Herramientas Complementarias

### PageSpeed Insights
```
https://pagespeed.web.dev/
```
- Analiza Core Web Vitals
- Recomendaciones específicas
- Datos de campo (usuarios reales)

### Rich Results Test
```
https://search.google.com/test/rich-results
```
- Verifica JSON-LD
- Valida structured data
- Preview de rich snippets

### Mobile-Friendly Test
```
https://search.google.com/test/mobile-friendly
```
- Verifica usabilidad móvil
- Detecta problemas responsive

### Schema Markup Validator
```
https://validator.schema.org/
```
- Valida JSON-LD
- Verifica sintaxis
- Warnings y errores

---

## 🎯 Objetivos por Timeline

### Semana 1
```
✅ Propiedad verificada
✅ Sitemap submitted
✅ Primeras páginas indexadas (3-5)
```

### Mes 1
```
✅ 10+ páginas indexadas
✅ 100+ impresiones diarias
✅ 5+ keywords en top 100
✅ Core Web Vitals en "Good"
```

### Mes 3
```
✅ 1,000+ impresiones diarias
✅ 50+ clics mensuales
✅ 3+ keywords en top 20
✅ CTR >3%
```

### Mes 6
```
✅ 5,000+ impresiones diarias
✅ 200+ clics mensuales
✅ 10+ keywords en top 20
✅ CTR >4%
✅ Rich snippets visibles
```

---

## 📚 Recursos Adicionales

### Documentación Oficial
- [Google Search Console Help](https://support.google.com/webmasters/)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Search Console API](https://developers.google.com/webmasters/search-console-api-original)

### Comunidad
- [Google Search Central Blog](https://developers.google.com/search/blog)
- [Google Webmaster Forum](https://support.google.com/webmasters/community)
- [Twitter: @googlesearchc](https://twitter.com/googlesearchc)

---

## ✅ Checklist Final

```markdown
- [ ] Cuenta Google Search Console creada
- [ ] Propiedad añadida y verificada
- [ ] Sitemap submitted
- [ ] Preferencias configuradas
- [ ] Primera inspección de URLs realizada
- [ ] Calendario de monitoring semanal creado
- [ ] Dashboard de métricas configurado
- [ ] Alertas de errores activadas
```

---

**Creado:** 31 Diciembre 2025  
**Última actualización:** 31 Diciembre 2025  
**Owner:** Juan Carlos García Arriero
