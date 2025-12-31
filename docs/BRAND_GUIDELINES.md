# ComplianceFlow Brand Guidelines

## Brand Identity

ComplianceFlow is a modern, professional compliance management platform that helps organizations automate and streamline their compliance processes through powerful APIs.

### Brand Values
- **Trust**: Reliable and secure compliance solutions
- **Innovation**: Modern API-first approach
- **Efficiency**: Streamlined workflows and automation
- **Professionalism**: Enterprise-grade quality

---

## Logo Usage

### Primary Logo
**File**: `public/logo.svg`
- Use on light backgrounds
- Minimum width: 120px
- Maintain clear space of 20px around logo

### Icon Logo
**File**: `public/logo-icon.svg`
- Use for favicons, app icons, social media avatars
- Minimum size: 32x32px

### White Logo
**File**: `public/logo-white.svg`
- Use on dark backgrounds or photos
- Ensure sufficient contrast

### Logo Don'ts
❌ Don't stretch or distort the logo
❌ Don't change colors
❌ Don't add effects (shadows, gradients)
❌ Don't place on busy backgrounds without proper contrast
❌ Don't rotate the logo

---

## Color Palette

### Primary Colors

#### Electric Blue (Brand Primary)
```css
--brand-primary: #0066FF
RGB: 0, 102, 255
HSL: 216, 100%, 50%
```
Use for: Primary actions, links, brand elements

#### Dark Blue
```css
--brand-primary-dark: #0052CC
RGB: 0, 82, 204
HSL: 216, 100%, 40%
```
Use for: Hover states, emphasis

#### Light Blue
```css
--brand-primary-light: #3385FF
RGB: 51, 133, 255
HSL: 216, 100%, 60%
```
Use for: Backgrounds, subtle accents

### Secondary Colors

#### Success Green
```css
--brand-secondary: #16A34A
RGB: 22, 163, 74
HSL: 142, 76%, 36%
```
Use for: Success states, positive actions

#### Purple (Accent)
```css
--brand-accent: #A000FF
RGB: 160, 0, 255
HSL: 280, 100%, 50%
```
Use for: Special features, premium elements

### Semantic Colors

#### Success
`#16A34A` - Green for successful operations

#### Warning
`#F59E0B` - Orange for warnings and cautions

#### Error
`#EF4444` - Red for errors and destructive actions

#### Info
`#0EA5E9` - Cyan for informational messages

### Neutral Colors

#### Light Mode
- Background: `#FFFFFF`
- Foreground: `#0F172A` (Dark Blue Gray)
- Muted: `#64748B` (Slate Gray)
- Border: `#E2E8F0` (Light Gray)

#### Dark Mode
- Background: `#0F172A` (Dark Blue Gray)
- Foreground: `#F8FAFC` (Almost White)
- Muted: `#94A3B8` (Light Slate)
- Border: `#1E293B` (Dark Slate)

---

## Typography

### Font Families

#### Primary Font: Inter
```css
font-family: 'Inter', system-ui, sans-serif;
```
- Clean, modern, highly legible
- Use for body text, UI elements
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

#### Monospace Font: Fira Code
```css
font-family: 'Fira Code', monospace;
```
- Use for code snippets, API examples
- Supports ligatures

### Type Scale

```css
/* Headings */
H1: 3rem (48px)    - font-weight: 700
H2: 2.25rem (36px) - font-weight: 700
H3: 1.875rem (30px) - font-weight: 600
H4: 1.5rem (24px)  - font-weight: 600
H5: 1.25rem (20px) - font-weight: 600
H6: 1rem (16px)    - font-weight: 600

/* Body */
Large: 1.125rem (18px) - font-weight: 400
Base: 1rem (16px)      - font-weight: 400
Small: 0.875rem (14px) - font-weight: 400
XS: 0.75rem (12px)     - font-weight: 400
```

### Line Height
- Headings: 1.2
- Body text: 1.6
- UI elements: 1.5

---

## Spacing System

Based on 4px base unit:

```css
1: 4px
2: 8px
3: 12px
4: 16px
5: 20px
6: 24px
8: 32px
10: 40px
12: 48px
16: 64px
20: 80px
24: 96px
```

---

## Design Patterns

### Buttons

#### Primary Button
```css
Background: gradient (Electric Blue → Cyan)
Text: White
Padding: 12px 24px
Border-radius: 8px
Font-weight: 600
```

#### Secondary Button
```css
Background: Transparent
Border: 2px solid Electric Blue
Text: Electric Blue
Padding: 10px 22px
Border-radius: 8px
Font-weight: 600
```

#### Ghost Button
```css
Background: Transparent
Text: Foreground color
Padding: 12px 24px
Hover: Background muted
```

### Cards

```css
Background: Card background
Border: 1px solid border color
Border-radius: 12px
Padding: 24px
Shadow: 0 1px 3px rgba(0,0,0,0.1)
```

### Inputs

```css
Background: Background
Border: 1px solid border color
Border-radius: 8px
Padding: 10px 12px
Focus: Border primary, Ring primary with 20% opacity
```

---

## Gradients

### Primary Gradient
```css
background: linear-gradient(135deg, #0066FF 0%, #00D4FF 100%);
```
Use for: Hero sections, CTAs, feature highlights

### Secondary Gradient
```css
background: linear-gradient(135deg, #16A34A 0%, #4ADE80 100%);
```
Use for: Success states, positive reinforcement

### Accent Gradient
```css
background: linear-gradient(135deg, #A000FF 0%, #FF00FF 100%);
```
Use for: Premium features, special promotions

### Dark Gradient
```css
background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
```
Use for: Dark sections, footers

---

## Effects

### Shadows

```css
/* Small */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

/* Medium */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

/* Large */
box-shadow: 0 10px 40px rgba(0, 102, 255, 0.15);

/* Brand Shadow */
box-shadow: 0 10px 40px -10px rgba(0, 102, 255, 0.3);
```

### Border Radius

```css
Small: 4px
Medium: 8px
Large: 12px
X-Large: 16px
Full: 9999px (pill shape)
```

---

## Iconography

### Icon Library
Use **Lucide React** icons for consistency

### Icon Sizes
- Small: 16px
- Medium: 20px
- Large: 24px
- X-Large: 32px

### Icon Colors
- Primary actions: Electric Blue
- Secondary: Foreground color
- Muted: Muted foreground
- Success: Green
- Warning: Orange
- Error: Red

---

## Animations

### Duration
```css
Fast: 150ms
Base: 200ms
Slow: 300ms
Slower: 500ms
```

### Easing
```css
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
ease-out: cubic-bezier(0, 0, 0.2, 1)
ease-in: cubic-bezier(0.4, 0, 1, 1)
```

### Common Animations
- Fade in: opacity 0 → 1
- Slide up: translateY(10px) → 0
- Scale: scale(0.95) → scale(1)
- Pulse: subtle scale + opacity variation

---

## Accessibility

### Color Contrast
All text must meet WCAG AA standards:
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum

### Focus States
All interactive elements must have visible focus indicators:
```css
outline: 2px solid primary color
outline-offset: 2px
```

### Alternative Text
All images and icons must have descriptive alt text

---

## Voice & Tone

### Professional
- Clear and concise
- Technical but accessible
- Authoritative without being condescending

### Helpful
- Provide context and explanations
- Guide users through complex processes
- Anticipate questions

### Modern
- Use contemporary language
- Avoid jargon when possible
- Be direct and efficient

---

## File Formats

### Logos
- **SVG**: Primary format for web (scalable, small file size)
- **PNG**: Fallback for email/presentations (transparent background)
- **JPG**: Photos and complex images only

### Icons
- **SVG**: Preferred for all icons
- **PNG**: Only when SVG not supported

### Images
- **WebP**: Modern format for web (smaller file size)
- **PNG**: Screenshots, UI elements
- **JPG**: Photos and gradients

---

## Implementation

### CSS Variables
All brand colors are available as CSS variables:
```css
var(--brand-primary)
var(--brand-secondary)
var(--brand-accent)
```

### Tailwind Classes
Use utility classes with brand colors:
```html
<button class="bg-gradient-primary text-white">
<div class="text-gradient-primary">
<div class="brand-shadow">
```

### Components
Use pre-built components from the design system:
```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
```

---

## Contact

For brand guidelines questions or to request additional assets:
- Email: branding@complianceflow.es
- GitHub: github.com/juankaspain/complianceflow.es

---

**Version**: 1.0
**Last Updated**: December 31, 2025
**Maintained by**: ComplianceFlow Design Team
