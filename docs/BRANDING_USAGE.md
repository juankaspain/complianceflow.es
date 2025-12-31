# ComplianceFlow Branding - Usage Guide

## Quick Start

### Import Brand Components

```tsx
import { Logo, BrandedButton, BrandedCard, GradientText } from '@/components/brand';
```

---

## Logo Component

### Basic Usage

```tsx
// Primary logo (default)
<Logo />

// White logo for dark backgrounds
<Logo variant="white" />

// Icon only
<Logo variant="icon" />

// Custom size
<Logo width={300} height={90} />

// Without link
<Logo href={undefined} />
```

### Props

```typescript
interface LogoProps {
  variant?: 'primary' | 'white' | 'icon';  // Default: 'primary'
  width?: number;                           // Default: 200 (44 for icon)
  height?: number;                          // Default: 60 (44 for icon)
  className?: string;                       // Additional CSS classes
  href?: string;                            // Link destination (default: '/')
  priority?: boolean;                       // Next.js Image priority
}
```

### Examples

```tsx
// Header
<header className="p-4">
  <Logo priority />
</header>

// Footer (white on dark background)
<footer className="bg-gray-900 p-8">
  <Logo variant="white" />
</footer>

// Favicon/Avatar
<div className="w-12 h-12">
  <Logo variant="icon" width={48} height={48} />
</div>
```

---

## Branded Button

### Variants

```tsx
// Primary (blue background)
<BrandedButton variant="primary">
  Get Started
</BrandedButton>

// Secondary (green background)
<BrandedButton variant="secondary">
  Learn More
</BrandedButton>

// Outline (transparent with blue border)
<BrandedButton variant="outline">
  View Details
</BrandedButton>

// Ghost (transparent, text only)
<BrandedButton variant="ghost">
  Cancel
</BrandedButton>

// Gradient (blue to cyan)
<BrandedButton variant="gradient">
  Premium Feature
</BrandedButton>
```

### Sizes

```tsx
<BrandedButton size="sm">Small</BrandedButton>
<BrandedButton size="md">Medium</BrandedButton>  {/* Default */}
<BrandedButton size="lg">Large</BrandedButton>
<BrandedButton size="xl">Extra Large</BrandedButton>
```

### With Icons

```tsx
import { ArrowRight, Download } from 'lucide-react';

<BrandedButton variant="gradient" size="lg">
  Get Started
  <ArrowRight className="w-5 h-5" />
</BrandedButton>

<BrandedButton variant="outline">
  <Download className="w-4 h-4" />
  Download
</BrandedButton>
```

### Props

```typescript
interface BrandedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
}
```

---

## Branded Card

### Basic Usage

```tsx
// Simple card
<BrandedCard>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</BrandedCard>

// With hover effect
<BrandedCard hover>
  <h3>Hover Me</h3>
  <p>This card lifts on hover</p>
</BrandedCard>

// With gradient background
<BrandedCard gradient>
  <h3>Gradient Card</h3>
  <p>Subtle gradient from white to blue</p>
</BrandedCard>

// Clickable card
<BrandedCard hover onClick={() => console.log('Clicked')}>
  <h3>Clickable Card</h3>
</BrandedCard>
```

### Full Example

```tsx
<BrandedCard hover className="p-6">
  <div className="flex items-start gap-4">
    <div className="bg-brand-primary-100 p-3 rounded-lg">
      <Shield className="w-6 h-6 text-brand-primary-500" />
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2">Security First</h3>
      <p className="text-muted-foreground">
        Enterprise-grade security for all your compliance needs
      </p>
    </div>
  </div>
</BrandedCard>
```

---

## Gradient Text

### Usage

```tsx
// Primary gradient (blue to cyan)
<GradientText>ComplianceFlow</GradientText>

// Secondary gradient (green)
<GradientText gradient="secondary">
  Success!
</GradientText>

// Accent gradient (purple)
<GradientText gradient="accent">
  Premium
</GradientText>

// As heading
<GradientText as="h1" className="text-5xl">
  Welcome to ComplianceFlow
</GradientText>
```

### Props

```typescript
interface GradientTextProps {
  children: React.ReactNode;
  gradient?: 'primary' | 'secondary' | 'accent';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}
```

---

## Using Brand Colors Directly

### Tailwind Classes

```tsx
// Background
<div className="bg-brand-primary-500">
<div className="bg-brand-secondary-500">
<div className="bg-brand-accent-500">

// Text
<p className="text-brand-primary-500">
<p className="text-brand-secondary-600">
<p className="text-brand-accent-400">

// Border
<div className="border-2 border-brand-primary-500">

// Hover
<button className="hover:bg-brand-primary-600">

// Gradients
<div className="bg-gradient-primary">
<div className="bg-gradient-secondary">
<div className="bg-gradient-accent">
```

### CSS Variables

```css
/* In your CSS files */
.custom-element {
  background-color: hsl(var(--brand-primary));
  color: hsl(var(--brand-secondary));
}

/* Gradients */
.custom-gradient {
  background: var(--gradient-primary);
}
```

---

## Complete Page Example

```tsx
import { Logo, BrandedButton, BrandedCard, GradientText } from '@/components/brand';
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container py-6">
        <Logo priority />
      </header>

      {/* Hero Section */}
      <section className="container py-20 text-center">
        <GradientText as="h1" className="text-6xl mb-6">
          Compliance Made Simple
        </GradientText>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Automate your compliance workflows with our powerful API platform
        </p>
        <div className="flex gap-4 justify-center">
          <BrandedButton variant="gradient" size="lg">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </BrandedButton>
          <BrandedButton variant="outline" size="lg">
            View Demo
          </BrandedButton>
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <BrandedCard hover className="p-6">
            <div className="bg-brand-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-brand-primary-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-muted-foreground">
              Enterprise-grade security for all your data
            </p>
          </BrandedCard>

          <BrandedCard hover gradient className="p-6">
            <div className="bg-brand-secondary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-brand-secondary-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast</h3>
            <p className="text-muted-foreground">
              Lightning-fast API responses
            </p>
          </BrandedCard>

          <BrandedCard hover className="p-6">
            <div className="bg-brand-accent-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-brand-accent-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Compliant</h3>
            <p className="text-muted-foreground">
              Meet all regulatory requirements
            </p>
          </BrandedCard>
        </div>
      </section>
    </div>
  );
}
```

---

## Best Practices

### Do's ✅
- Use `Logo` component for consistency
- Use `BrandedButton` for primary actions
- Use `gradient` variant for premium/important CTAs
- Use `hover` prop on cards for interactive elements
- Combine brand colors with neutral colors for balance

### Don'ts ❌
- Don't use raw logo files directly
- Don't create custom buttons with different styles
- Don't overuse gradients (1-2 per page max)
- Don't mix branded and non-branded buttons in the same section
- Don't use low contrast color combinations

---

## Accessibility

All branded components include:
- Proper focus states
- WCAG AA contrast ratios
- Keyboard navigation support
- Screen reader friendly markup

---

## Questions?

Refer to [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) for detailed brand specifications.
