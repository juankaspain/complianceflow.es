# GitHub Actions Workflow Optimization

## 🚀 Optimizaciones Aplicadas

### Antes de la Optimización

**Problema**: Cada commit a `main` ejecutaba 5-7 workflows simultáneamente:
- ✅ CI Pipeline
- ✅ Security Scan (CodeQL + npm audit)
- ✅ Performance (Lighthouse)
- ✅ Deploy Preview (solo en PRs)
- ✅ Stale Issues
- ✅ Release
- ✅ Otros workflows de mantenimiento

**Resultado**: 
- ~15-20 minutos de ejecución por commit
- Alto consumo de minutos de GitHub Actions
- Feedback lento en PRs

### Después de la Optimización

**Solución**: Workflows inteligentes con triggers condicionales

#### 1. CI Pipeline (`.github/workflows/ci.yml`)

**Mejoras aplicadas**:
- ✅ **Path filters**: Ignora cambios en archivos de documentación (`.md`, `docs/`)
- ✅ **NPM cache**: Usa `cache: 'npm'` para acelerar instalación de dependencias
- ✅ **npm ci**: Instalaciones más rápidas y deterministas
- ✅ **Job consolidado**: Security scan integrado condicionalmente
- ✅ **Timeout**: 15 minutos máximo para evitar bloqueos

**Triggers**:
```yaml
on:
  push:
    branches: [main, develop]
    paths-ignore:
      - '**.md'
      - 'docs/**'
      - '.vscode/**'
```

**Ahorro estimado**: 30-40% reducción de tiempo en ejecuciones normales

---

#### 2. Security Scan (`.github/workflows/security.yml`)

**Cambios clave**:
- ❌ **Removido**: Trigger en `push` a main
- ✅ **Nuevo**: Solo se ejecuta semanalmente (Lunes a las 00:00)
- ✅ **Manual**: Disponible con `workflow_dispatch`
- ✅ **Timeout**: 20 minutos

**Triggers**:
```yaml
on:
  schedule:
    - cron: '0 0 * * 1' # Lunes semanalmente
  workflow_dispatch: # Ejecución manual
```

**Justificación**: CodeQL es costoso (10-15 min) y no necesita ejecutarse en cada commit. Los scans semanales son suficientes para detectar vulnerabilidades.

**Ahorro estimado**: 💰 **~1000 minutos/mes** (de 4-5 ejecuciones diarias a 4 mensuales)

---

#### 3. Performance Tests (`.github/workflows/performance.yml`)

**Cambios clave**:
- ❌ **Removido**: Trigger en pull requests
- ✅ **Nuevo**: Solo se ejecuta semanalmente (Lunes a las 02:00)
- ✅ **Manual**: Disponible con `workflow_dispatch`
- ✅ **NPM cache**: Instalación más rápida
- ✅ **Timeout**: 15 minutos

**Triggers**:
```yaml
on:
  schedule:
    - cron: '0 2 * * 1' # Lunes semanalmente a las 2 AM
  workflow_dispatch:
```

**Justificación**: Lighthouse es lento (5-10 min) y los cambios de performance son graduales. Tests semanales son suficientes para monitoreo.

**Ahorro estimado**: 💰 **~600 minutos/mes**

---

#### 4. Deploy Preview (`.github/workflows/deploy-preview.yml`)

**Estado**: Sin cambios - Optimizado previamente

**Justificación**: Solo se ejecuta en PRs, que es el comportamiento deseado.

---

## 📊 Resultados de la Optimización

### Workflows por Commit a Main

| Escenario | Antes | Después | Ahorro |
|-----------|-------|----------|--------|
| **Commit normal** | 5-7 workflows | 1-2 workflows | ~70% |
| **Cambio en docs/** | 5-7 workflows | 0 workflows | 100% |
| **Cambio en package.json** | 5-7 workflows | 2 workflows | ~65% |
| **Pull Request** | 3-4 workflows | 2 workflows | ~40% |

### Tiempo de Ejecución

| Métrica | Antes | Después | Mejora |
|---------|-------|----------|--------|
| **Tiempo promedio por commit** | ~15-20 min | ~5-8 min | 🚀 60% |
| **Minutos mensuales (estimado)** | ~2500 min | ~800 min | 💰 68% |
| **Feedback en PRs** | ~12-15 min | ~5-7 min | ⚡ 50% |

### Consumo de Recursos

**Plan GitHub Free**: 2000 minutos/mes

| Periodo | Antes | Después | Margen |
|---------|-------|----------|--------|
| **Uso mensual** | ~2500 min (⚠️ Exceso) | ~800 min (✅ OK) | 1200 min libres |
| **% del límite** | 125% | 40% | 🎯 |

---

## 🛠️ Cómo Ejecutar Workflows Manualmente

Los workflows de Security y Performance ahora soportan ejecución manual:

1. Ve a [Actions](https://github.com/juankaspain/complianceflow.es/actions)
2. Selecciona el workflow (Security Scan o Performance)
3. Click en "Run workflow"
4. Elige la rama y confirma

---

## 📝 Estrategia de Workflows

### En Cada Commit a Main
✅ **CI Pipeline** (5-8 min)
- Type checking
- Linting
- Tests unitarios
- Build
- Security scan (solo si cambia package.json)

### En Pull Requests
✅ **CI Pipeline** (5-8 min)
✅ **Deploy Preview** (3-5 min) - Solo si existe Netlify configurado

### Semanalmente (Automatizado)
📅 **Lunes 00:00** - Security Scan (CodeQL)
📅 **Lunes 02:00** - Performance Tests (Lighthouse)

### Bajo Demanda (Manual)
🔧 Security Scan
🔧 Performance Tests

---

## 🔮 Próximas Optimizaciones (Opcional)

Si quieres optimizar aún más:

1. **Matrix builds**: Ejecutar tests en paralelo para diferentes versiones de Node
2. **Artifact caching**: Guardar builds entre workflows
3. **Dependabot alerts**: En lugar de npm audit en cada commit
4. **Self-hosted runners**: Para proyectos grandes (sin límite de minutos)

---

## 📚 Referencias

- [GitHub Actions Best Practices](https://docs.github.com/en/actions/learn-github-actions/best-practices-for-github-actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Caching Dependencies](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows)

---

**Última actualización**: 2026-01-02
**Versión**: 2.0 (Optimizado)