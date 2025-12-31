# Cómo Crear la Imagen OG para ComplianceFlow

## 🎯 Especificaciones

### Dimensiones
- **Width**: 1200px
- **Height**: 630px
- **Aspect Ratio**: 1.91:1
- **Formato**: PNG (preferido) o JPG
- **Tamaño**: < 1MB (idealmente < 500KB)
- **Nombre**: `og-image.png`
- **Ubicación**: `/public/og-image.png`

---

## 🎨 Diseño ya Creado

He creado un diseño profesional en SVG en:
```
/public/og-image.svg
```

### Elementos incluidos:
```
✅ Background oscuro (#030712) - matching site
✅ Grid pattern sutil
✅ Gradient blobs animados
✅ Logo shield con check
✅ Texto "ComplianceFlow" grande y bold
✅ Subtitle "Enterprise Compliance APIs" con gradient
✅ Descripción "Cumplimiento normativo automatizado"
✅ 3 Badges: ISO 27001, SOC 2 Type II, GDPR
✅ URL del sitio
✅ Elementos decorativos
```

---

## 🔄 Convertir SVG a PNG

### Opción 1: Online (Más Fácil)

#### CloudConvert
1. Ve a: https://cloudconvert.com/svg-to-png
2. Upload `/public/og-image.svg`
3. Configuración:
   - Width: 1200px
   - Height: 630px
   - Quality: Alta
4. Descargar como `og-image.png`
5. Guardar en `/public/og-image.png`

#### Convertio
1. Ve a: https://convertio.co/svg-png/
2. Upload el SVG
3. Descargar PNG
4. Verificar dimensiones

### Opción 2: Command Line (Más Control)

#### Con ImageMagick
```bash
# Instalar ImageMagick (si no lo tienes)
mac: brew install imagemagick
ubuntu: sudo apt-get install imagemagick

# Convertir
convert -density 300 -background none public/og-image.svg public/og-image.png

# Verificar dimensiones
identify public/og-image.png
# Debería mostrar: 1200x630
```

#### Con Inkscape
```bash
# Instalar Inkscape
mac: brew install inkscape
ubuntu: sudo apt-get install inkscape

# Convertir
inkscape public/og-image.svg --export-filename=public/og-image.png --export-width=1200 --export-height=630
```

#### Con rsvg-convert
```bash
# Instalar librsvg
mac: brew install librsvg
ubuntu: sudo apt-get install librsvg2-bin

# Convertir
rsvg-convert -w 1200 -h 630 public/og-image.svg -o public/og-image.png
```

### Opción 3: Figma/Canva (Más Personalizado)

#### Figma
1. Crear nuevo archivo: 1200x630px
2. Usar palette de ComplianceFlow:
   ```
   Background: #030712
   Primary: #4F46E5
   Secondary: #7C3AED
   Accent: #EC4899
   Text: #FFFFFF
   Text Secondary: #9CA3AF
   ```
3. Añadir elementos:
   - Logo (desde `/public/logo-icon.svg`)
   - Texto "ComplianceFlow"
   - Subtitle
   - Badges
4. Exportar como PNG (2x para calidad)

#### Canva
1. Ve a: https://www.canva.com
2. Custom size: 1200 x 630 px
3. Usar template "Open Graph"
4. Personalizar con brand de ComplianceFlow
5. Descargar como PNG

---

## ✅ Verificación

### 1. Verificar Dimensiones
```bash
file public/og-image.png
# Debería mostrar: PNG image data, 1200 x 630
```

### 2. Verificar Tamaño
```bash
ls -lh public/og-image.png
# Debería ser < 1MB
```

### 3. Verificar Visualmente
Abrir en navegador:
```
file:///[ruta-completa]/public/og-image.png
```

### 4. Optimizar (si es necesario)

#### Con TinyPNG
1. Ve a: https://tinypng.com
2. Upload `og-image.png`
3. Descargar versión optimizada
4. Reemplazar archivo

#### Con ImageOptim (Mac)
```bash
brew install imageoptim-cli
imageoptim public/og-image.png
```

---

## 🔗 Deploy y Testing

### 1. Commit y Push
```bash
git add public/og-image.png
git commit -m "feat: add OG image for social sharing"
git push origin main
```

### 2. Verificar en Producción
URL directa:
```
https://complianceflow.netlify.app/og-image.png
```

Debe cargar sin error 404.

### 3. Test en Facebook

Facebook Debugger:
```
https://developers.facebook.com/tools/debug/
```

1. Ingresa: `https://complianceflow.netlify.app`
2. Haz clic en "Scrape Again"
3. Verifica que aparece la imagen
4. Preview debería verse perfecto

### 4. Test en Twitter

Twitter Card Validator:
```
https://cards-dev.twitter.com/validator
```

1. Ingresa: `https://complianceflow.netlify.app`
2. Haz clic en "Preview card"
3. Verifica imagen y texto

### 5. Test en LinkedIn

LinkedIn Post Inspector:
```
https://www.linkedin.com/post-inspector/
```

1. Ingresa URL
2. Inspecciona
3. Verifica preview

---

## 👀 Preview Esperado

### Facebook
```
+------------------------------------------+
|  [Imagen OG 1200x630]                    |
|                                          |
|  ComplianceFlow                          |
|  Cumplimiento normativo automatizado     |
|  via APIs                                |
|                                          |
|  COMPLIANCEFLOW.NETLIFY.APP              |
+------------------------------------------+
```

### Twitter
```
+------------------------------------------+
|  [Imagen OG]                             |
|                                          |
|  ComplianceFlow                          |
|  Enterprise Compliance APIs              |
+------------------------------------------+
```

### LinkedIn
```
+------------------------------------------+
|  [Imagen OG - más grande]                |
|                                          |
|  ComplianceFlow - Enterprise Compliance  |
|  APIs                                    |
|  Automatiza compliance con APIs...       |
+------------------------------------------+
```

---

## 💡 Pro Tips

### Text Readability
```
✅ Font size mínimo: 60px para título
✅ Alto contraste: Blanco sobre oscuro
✅ Safe zones: 40px margin en todos lados
✅ Evitar texto muy pequeño (<24px)
```

### Visual Hierarchy
```
1. Logo (arriba izquierda)
2. Título (grande, centro-izquierda)
3. Subtitle (mediano, bajo título)
4. Badges (abajo)
5. URL (muy abajo, pequeño)
```

### Brand Consistency
```
✅ Usar colores exactos del sitio
✅ Mismo logo que en header
✅ Tipografía similar (sans-serif)
✅ Estilo visual coherente
```

### Testing Checklist
```
- [ ] Imagen carga en producción
- [ ] Facebook preview correcto
- [ ] Twitter card funciona
- [ ] LinkedIn muestra imagen
- [ ] WhatsApp preview OK
- [ ] Slack preview OK
- [ ] Discord embed correcto
```

---

## ⚠️ Common Issues

### Issue: Imagen no aparece en redes sociales

**Causas:**
1. Cache de redes sociales
2. URL incorrecta en meta tags
3. Imagen muy pesada (>8MB)
4. Formato no soportado

**Solución:**
```bash
# 1. Verificar meta tags
open https://complianceflow.netlify.app
# View source, buscar "og:image"

# 2. Limpiar cache Facebook
https://developers.facebook.com/tools/debug/

# 3. Verificar tamaño
ls -lh public/og-image.png
# Debe ser < 1MB
```

### Issue: Imagen se ve pixelada

**Solución:**
```bash
# Exportar a mayor resolución y escalar
convert -density 600 public/og-image.svg -resize 1200x630 public/og-image.png
```

### Issue: Texto ilegible en mobile

**Solución:**
- Aumentar font size
- Mejor contraste
- Simplificar diseño
- Menos texto

---

## 📚 Referencias

### Best Practices
- [Facebook Sharing Best Practices](https://developers.facebook.com/docs/sharing/best-practices)
- [Twitter Card Guidelines](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image)
- [LinkedIn Share Guidelines](https://www.linkedin.com/help/linkedin/answer/46687)

### Tools
- [OG Image Playground](https://og-playground.vercel.app/)
- [Social Share Preview](https://socialsharepreview.com/)
- [Meta Tags](https://metatags.io/)

---

## ✅ Final Checklist

```markdown
- [ ] SVG convertido a PNG
- [ ] Dimensiones correctas (1200x630)
- [ ] Tamaño < 1MB
- [ ] Guardado en /public/og-image.png
- [ ] Committed y pushed a GitHub
- [ ] Verificado en producción (URL directa funciona)
- [ ] Testeado en Facebook Debugger
- [ ] Testeado en Twitter Card Validator
- [ ] Testeado en LinkedIn Post Inspector
- [ ] Preview se ve profesional
- [ ] Texto legible
- [ ] Brand consistency verificado
```

---

**Creado:** 31 Diciembre 2025  
**Owner:** Juan Carlos García Arriero
