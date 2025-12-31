# ComplianceFlow Logo Usage Guide

## 🎨 Logo Variations

### Available Formats

#### 1. **Main Logo** (`logo-main.svg`)
- **Use for:** Primary branding, landing pages, marketing materials
- **Dimensions:** 240x60px
- **Colors:** Gradient (Primary #4F46E5 → Secondary #10B981)
- **Background:** Dark backgrounds recommended

#### 2. **Icon Only** (`logo-icon.svg`)
- **Use for:** App icons, social media avatars, small spaces
- **Dimensions:** 48x48px (square)
- **Colors:** Gradient shield with white checkmark
- **Background:** Any dark background

#### 3. **White Version** (`logo-white.svg`)
- **Use for:** Very dark backgrounds, print on dark surfaces
- **Dimensions:** 240x60px
- **Colors:** All white
- **Background:** Dark backgrounds only (#000 - #374151)

#### 4. **Horizontal Lockup** (`logo-horizontal.svg`)
- **Use for:** Headers, navigation bars, email signatures
- **Dimensions:** 300x48px
- **Colors:** Gradient icon + white text
- **Background:** Dark backgrounds

#### 5. **Favicon** (`favicon.svg`)
- **Use for:** Browser tabs, bookmarks, PWA icons
- **Dimensions:** 32x32px
- **Colors:** Gradient background with white shield
- **Background:** Included (rounded square)

---

## 📏 Usage Examples

### In HTML

```html
<!-- Main logo in header -->
<img src="/logo-main.svg" alt="ComplianceFlow" width="240" height="60" />

<!-- Icon only for small spaces -->
<img src="/logo-icon.svg" alt="CF" width="48" height="48" />

<!-- Horizontal in navigation -->
<img src="/logo-horizontal.svg" alt="ComplianceFlow" width="300" height="48" />

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

### In React/Next.js

```tsx
import Image from 'next/image';

// Main logo
<Image 
  src="/logo-main.svg" 
  alt="ComplianceFlow" 
  width={240} 
  height={60}
  priority
/>

// Icon
<Image 
  src="/logo-icon.svg" 
  alt="CF" 
  width={48} 
  height={48}
/>
```

### In CSS

```css
/* Background logo */
.hero {
  background-image: url('/logo-icon.svg');
  background-size: 200px;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.1;
}
```

---

## ✅ Do's

✅ **Use on dark backgrounds** (gray-900 to black)
✅ **Maintain aspect ratio** when scaling
✅ **Keep clear space** around logo (minimum 16px)
✅ **Use SVG format** for crisp rendering at any size
✅ **Use icon version** in spaces smaller than 48px wide
✅ **Use white version** on very dark backgrounds (#000-#1F2937)

---

## ❌ Don'ts

❌ **Don't use on light backgrounds** (colors will not be visible)
❌ **Don't distort** or change aspect ratio
❌ **Don't add effects** (shadows, outlines, glows)
❌ **Don't change colors** (use provided versions)
❌ **Don't rotate** or skew the logo
❌ **Don't place on busy backgrounds** without proper contrast
❌ **Don't use low-resolution formats** (always use SVG when possible)

---

## 🎨 Color Specifications

### Primary Gradient
```
Start: #4F46E5 (Indigo-600)
End: #10B981 (Green-500)
Angle: 135deg (diagonal)
```

### White Version
```
Color: #FFFFFF
Opacity: 100%
```

### Usage on Backgrounds

| Background | Logo Version | Example |
|------------|--------------|----------|
| `#030712` - `#111827` (Very dark) | Main (gradient) | Hero sections |
| `#1F2937` - `#374151` (Dark gray) | Main or White | Cards, headers |
| `#000000` (Pure black) | White version | Print, special cases |
| Light backgrounds | ❌ Not recommended | Use dark version of logo |

---

## 📱 Responsive Sizing

### Desktop
```
Header: 240x60px (logo-horizontal.svg)
Hero: 300x75px (logo-main.svg scaled)
Footer: 180x45px (logo-main.svg scaled)
```

### Tablet
```
Header: 200x50px
Hero: 240x60px
Footer: 160x40px
```

### Mobile
```
Header: 48x48px (logo-icon.svg)
Hero: 180x45px
Footer: 48x48px (logo-icon.svg)
```

---

## 🖌️ Clear Space

Maintain minimum clear space around logo:

```
Minimum: Height of shield (48px for main logo)
Recommended: 2x shield height (96px)
```

Example:
```html
<div style="padding: 96px;">
  <img src="/logo-main.svg" alt="ComplianceFlow" />
</div>
```

---

## 🚀 Quick Implementation

### Update your layout.tsx:

```tsx
// Replace the current logo in src/app/layout.tsx

<a href="/" className="flex items-center gap-3">
  <img 
    src="/logo-icon.svg" 
    alt="ComplianceFlow"
    className="h-10 w-10"
  />
  <div className="flex flex-col">
    <span className="text-xl font-bold text-white">
      ComplianceFlow
    </span>
    <span className="text-xs text-gray-500">
      Enterprise Compliance APIs
    </span>
  </div>
</a>
```

### Update favicon in layout.tsx metadata:

```tsx
export const metadata: Metadata = {
  // ...
  icons: {
    icon: '/favicon.svg',
    apple: '/logo-icon.svg',
  },
};
```

---

## 🌐 Social Media Specs

### Profile Pictures
- **Twitter/X:** logo-icon.svg (400x400px export)
- **LinkedIn:** logo-icon.svg (300x300px export)
- **Facebook:** logo-icon.svg (180x180px export)

### Cover Images
- **Twitter/X:** Use logo-horizontal.svg centered
- **LinkedIn:** Use logo-horizontal.svg on dark background
- **Facebook:** Use logo-main.svg on dark branded background

---

## 📧 Email Signature

```html
<table>
  <tr>
    <td style="padding-right: 16px;">
      <img src="https://complianceflow.netlify.app/logo-icon.svg" 
           alt="ComplianceFlow" 
           width="48" 
           height="48" />
    </td>
    <td>
      <strong style="color: #4F46E5;">ComplianceFlow</strong><br/>
      <span style="color: #6B7280;">Enterprise Compliance APIs</span>
    </td>
  </tr>
</table>
```

---

## 📋 Download & Export

### For Print
```bash
# Export to PNG at high resolution
inkscape logo-main.svg --export-png=logo-main-300dpi.png --export-dpi=300

# Export to PDF
inkscape logo-main.svg --export-pdf=logo-main.pdf
```

### For Social Media
```bash
# Square icon for profiles
inkscape logo-icon.svg --export-png=logo-icon-512.png --export-width=512

# Horizontal for covers
inkscape logo-horizontal.svg --export-png=logo-cover-1500.png --export-width=1500
```

---

## ❓ Need Help?

For questions about logo usage:
- Check: `/docs/BRAND_GUIDELINES.md`
- Contact: juanca755@hotmail.com
- Repository: https://github.com/juankaspain/complianceflow.es

---

**Last updated:** December 31, 2025
**Version:** 1.0.0
