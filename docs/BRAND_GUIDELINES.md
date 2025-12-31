# ComplianceFlow - Brand Guidelines

## 🎨 Logo Variations

### Logo Principal
**Archivo**: `public/logo-main.png`

- Logo completo con icono y texto
- Uso principal para web, documentos, presentaciones
- Versión horizontal
- Colores: Indigo (#4F46E5) y Emerald (#10B981)

**Cuándo usar**:
- ✅ Header del sitio web
- ✅ Documentación
- ✅ Email signatures
- ✅ Presentaciones
- ✅ Material de marketing

### Ícono de App
**Archivo**: `public/icon.png`

- Versión standalone del símbolo
- Formato cuadrado (1:1)
- Optimizado para tamaños pequeños
- Sin texto

**Cuándo usar**:
- ✅ Favicon (16x16, 32x32)
- ✅ App icons (iOS, Android)
- ✅ Social media profile pictures
- ✅ PWA manifest icons
- ✅ Loading spinners
- ✅ Watermarks

### Logo Alternativo
**Archivo**: `public/logo-alt.png`

- Concepto de flujo y conectividad
- Versión alternativa para contextos específicos
- Estilo más dinámico

**Cuándo usar**:
- ✅ Marketing materials alternativos
- ✅ Presentaciones especiales
- ✅ Variaciones para diferentes productos
- ✅ Eventos y conferencias

---

## 🎨 Paleta de Colores

### Colores Primarios

#### Indigo (Primary)
```css
--primary: #4F46E5;
--primary-50: #EEF2FF;
--primary-100: #E0E7FF;
--primary-600: #4F46E5;
--primary-700: #4338CA;
--primary-900: #312E81;
```

**Uso**: 
- Botones principales
- Links
- Headers
- Elementos interactivos
- Iconos principales

#### Emerald (Secondary)
```css
--secondary: #10B981;
--secondary-50: #ECFDF5;
--secondary-500: #10B981;
--secondary-600: #059669;
```

**Uso**:
- Estados de éxito
- Badges positivos
- Elementos de acento
- Ilustraciones

### Colores de Soporte

#### Grises (Neutral)
```css
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-500: #6B7280;
--gray-900: #111827;
```

**Uso**:
- Texto principal (gray-900)
- Texto secundario (gray-500)
- Fondos (gray-50, gray-100)
- Bordes

#### Estados
```css
--success: #10B981;  /* Green */
--warning: #F59E0B;  /* Amber */
--error: #EF4444;    /* Red */
--info: #3B82F6;     /* Blue */
```

---

## 📝 Tipografía

### Fuente Principal: Inter

```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

**Pesos disponibles**:
- Regular (400) - Texto de cuerpo
- Medium (500) - Subtítulos
- Semibold (600) - Títulos secundarios
- Bold (700) - Títulos principales

### Escalas de Tamaño

```css
/* Headings */
.text-4xl: 36px / 40px (Títulos principales)
.text-3xl: 30px / 36px (Títulos de sección)
.text-2xl: 24px / 32px (Subtítulos)
.text-xl: 20px / 28px (Títulos de card)

/* Body */
.text-base: 16px / 24px (Texto principal)
.text-sm: 14px / 20px (Texto secundario)
.text-xs: 12px / 16px (Labels, captions)
```

---

## 🖼️ Uso del Logo

### Espaciado Mínimo

- **Alrededor del logo**: Mínimo 20px de espacio libre
- **Entre icono y texto**: 12px
- **Tamaño mínimo**: No reducir por debajo de 120px de ancho

### Fondos Permitidos

✅ **Recomendados**:
- Fondo blanco (#FFFFFF)
- Fondo gris muy claro (#F9FAFB)
- Fondo indigo oscuro (#1E1B4B) - usar versión en blanco

❌ **No usar**:
- Fondos con patrones complejos
- Fondos con bajo contraste
- Sobre fotografías sin tratamiento

### Versiones de Color

1. **Full Color** (principal)
   - Gradiente indigo a emerald
   - Para fondos claros

2. **Monocromático Oscuro**
   - Gray-900 (#111827)
   - Para contextos formales

3. **Blanco**
   - Para fondos oscuros
   - Sobre indigo, navy, black

---

## 🚫 No Hacer

❌ No cambiar los colores del logo  
❌ No rotar el logo  
❌ No distorsionar las proporciones  
❌ No añadir efectos (sombras, 3D, etc.)  
❌ No colocar sobre fondos con bajo contraste  
❌ No usar versiones de baja resolución  
❌ No recrear el logo con otras fuentes  
❌ No añadir elementos decorativos  

---

## 📐 Especificaciones Técnicas

### Formatos de Archivo

**Para Web**:
- PNG con transparencia (24-bit)
- SVG para vectores escalables
- WebP para optimización

**Para Impresión**:
- PDF vectorial
- EPS
- AI (Adobe Illustrator)

### Tamaños Recomendados

**Web**:
- Header: 180px ancho
- Footer: 140px ancho
- Favicon: 32x32, 16x16
- Open Graph: 1200x630

**App Icons**:
- iOS: 180x180, 167x167, 152x152
- Android: 512x512, 192x192
- PWA: 512x512, 192x192

**Impresión**:
- Tarjetas: 300 DPI, 2 inches ancho
- Presentaciones: 300 DPI, flexible
- Roll-ups: Vectorial

---

## 🎯 Ejemplos de Uso

### Email Signature
```
[Logo 120px ancho]
Juan García
CEO, ComplianceFlow
juan@complianceflow.es
```

### Header Web
```html
<header>
  <img src="/logo-main.png" alt="ComplianceFlow" width="180" />
</header>
```

### Favicon
```html
<link rel="icon" href="/icon.png" sizes="32x32" />
<link rel="icon" href="/icon.png" sizes="16x16" />
<link rel="apple-touch-icon" href="/icon.png" />
```

---

## 📞 Contacto

Para solicitar archivos adicionales del logo o consultas sobre brand:
- Email: brand@complianceflow.es
- Design Team: design@complianceflow.es

---

## 📅 Versión

**Última actualización**: 31 de Diciembre de 2025  
**Versión**: 1.0.0

---

<div align="center">

**ComplianceFlow Brand Guidelines v1.0**

Made with ❤️ by ComplianceFlow Design Team

</div>
