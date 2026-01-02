# GitHub Actions Workflows - Optimized

## 🚀 Workflows Activos

### 1. **main.yml** - Main CI/CD Pipeline
**Cuándo se ejecuta:** En cada push a `main` y en PRs
**Qué hace:**
- ✅ Build del proyecto
- ✅ Type checking con TypeScript
- ✅ Linting con ESLint
- ✅ Format checking con Prettier
- ✅ Lighthouse audit (solo en main)
- ✅ Deploy automático a Netlify (solo en main)

**Jobs:**
1. `build-and-validate` - Validaciones y build
2. `lighthouse` - Performance audit
3. `deploy` - Información de deployment

### 2. **pr-checks.yml** - PR Quick Checks
**Cuándo se ejecuta:** En PRs (opened, synchronize, reopened)
**Qué hace:**
- ⚡ Validaciones rápidas antes del review
- ⚡ Type checking
- ⚡ Linting

### 3. **security-scheduled.yml** - Weekly Security Scan
**Cuándo se ejecuta:** 
- 🕐 Lunes a las 2 AM UTC (weekly)
- 🔧 Manualmente via workflow_dispatch
- 📦 Cuando cambian dependencias en PRs

**Qué hace:**
- 🔒 npm audit
- 🔍 CodeQL analysis

## 🗑️ Workflows Removidos/Consolidados

Estos workflows fueron **consolidados en main.yml** para evitar ejecuciones duplicadas:

- ❌ `ci.yml` → Consolidado en `main.yml`
- ❌ `test.yml` → Removido (scripts de test no existen)
- ❌ `deploy-production.yml` → Consolidado en `main.yml`
- ❌ `security.yml` → Ahora es `security-scheduled.yml` (solo weekly)
- ❌ `code-quality.yml` → Consolidado en `main.yml`
- ❌ `lighthouse.yml` → Consolidado en `main.yml`

## 📊 Mejoras de Performance

### Antes:
- 9+ jobs ejecutándose en paralelo en cada push
- ~15-20 minutos de ejecución total
- Múltiples instalaciones de dependencias
- Workflows fallando por scripts inexistentes

### Después:
- 3 jobs secuenciales y eficientes
- ~5-8 minutos de ejecución total
- Caché compartido entre jobs
- Sin errores de workflows

## 🔧 Configuración

### Secrets Necesarios (Opcionales)
- `LHCI_GITHUB_APP_TOKEN` - Para Lighthouse CI (opcional)

### Branch Protection Rules Recomendadas
```yaml
Required status checks:
  - Build & Validate
  - PR Checks / Quick Validation (para PRs)
```

## 📝 Comandos Disponibles

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Analysis
npm run analyze      # Analyze bundle size
npm run lighthouse   # Run Lighthouse audit
```

## 🎯 Workflow Triggers Summary

| Workflow | Push Main | PR | Schedule | Manual |
|----------|-----------|-------|----------|--------|
| main.yml | ✅ | ✅ | ❌ | ❌ |
| pr-checks.yml | ❌ | ✅ | ❌ | ❌ |
| security-scheduled.yml | ❌ | ✅* | ✅ | ✅ |

*Solo cuando cambian package.json o package-lock.json

## 💡 Tips

1. **Los workflows ahora son mucho más rápidos** gracias a la caché compartida
2. **Los security scans son semanales** para no ralentizar el desarrollo
3. **Lighthouse solo corre en main** para ahorrar tiempo en PRs
4. **Todos los workflows tienen timeout** para evitar ejecuciones colgadas
5. **Concurrency control** cancela workflows antiguos automáticamente

## 🚨 Si algo falla

1. **Build fails**: Verifica que el código compile localmente con `npm run build`
2. **Type check fails**: Ejecuta `npm run type-check` localmente
3. **Lint fails**: Ejecuta `npm run lint:fix` para auto-fix
4. **Deploy issues**: Netlify auto-deploys, verifica la configuración en Netlify dashboard
