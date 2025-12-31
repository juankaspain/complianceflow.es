# Contribuir a ComplianceFlow

¡Gracias por tu interés en contribuir a ComplianceFlow! 🎉

## Código de Conducta

Este proyecto se adhiere a los estándares de conducta profesional. Se espera que todos los participantes:

- Sean respetuosos y considerados
- Acepten críticas constructivas
- Se centren en lo que es mejor para la comunidad
- Muestren empatía hacia otros miembros

## ¿Cómo puedo contribuir?

### Reportar Bugs

Antes de crear un reporte de bug:

1. **Verifica** que no exista ya un issue similar
2. **Recopila información** sobre el bug:
   - ¿Qué versión del navegador usas?
   - ¿Cuáles son los pasos para reproducirlo?
   - ¿Cuál es el comportamiento esperado vs el actual?
   - ¿Tienes screenshots o logs?

### Sugerir Mejoras

Las sugerencias de mejoras son bienvenidas:

1. **Usa un título claro y descriptivo**
2. **Describe el caso de uso actual** y por qué es insuficiente
3. **Explica la mejora propuesta** con ejemplos si es posible
4. **Considera el impacto** en usuarios existentes

### Pull Requests

1. **Fork** el repositorio
2. **Crea una rama** desde `main`:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Haz tus cambios** siguiendo las guías de estilo
4. **Ejecuta los tests**:
   ```bash
   npm run lint
   npm run format
   npm test
   ```
5. **Commit** tus cambios usando [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add amazing feature"
   ```
6. **Push** a tu fork:
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Abre un Pull Request**

## Guías de Estilo

### Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bug
- `docs:` - Cambios en documentación
- `style:` - Cambios de formato (espacios, punto y coma, etc.)
- `refactor:` - Refactorización de código
- `perf:` - Mejoras de performance
- `test:` - Añadir o corregir tests
- `chore:` - Cambios en build, CI, etc.

Ejemplos:
```bash
feat: add support for multi-language
fix: resolve mobile navigation bug
docs: update API documentation
```

### Código JavaScript

- Usa **ESLint** para validar código
- Usa **Prettier** para formatear
- Escribe **JSDoc comments** para funciones públicas
- Mantén funciones **pequeñas y enfocadas**
- Usa **nombres descriptivos**

Ejemplo:
```javascript
/**
 * Validate user input before API call
 * @param {string} email - User email address
 * @param {string} password - User password
 * @returns {Object} Validation result with errors if any
 */
function validateCredentials(email, password) {
  // Implementation
}
```

### HTML

- Usa **semántica HTML5**
- Incluye **ARIA labels** cuando sea necesario
- Asegúrate de que sea **accesible** (WCAG 2.1 AA)
- Usa **alt text** descriptivo en imágenes

### CSS

- Usa **custom properties** para valores reutilizables
- Sigue la metodología **BEM** cuando sea apropiado
- Asegúrate de que sea **responsive**
- Optimiza para **performance** (evita selectores pesados)

## Proceso de Revisión

1. Un maintainer revisará tu PR
2. Puede solicitar cambios o mejoras
3. Una vez aprobado, se mergeará a `main`
4. El deploy a producción es automático

## Testing

Antes de enviar tu PR:

```bash
# Lint
npm run lint

# Format
npm run format

# Tests unitarios
npm run test:unit

# Tests E2E
npm run test:e2e

# Performance audit
npm run lighthouse
```

## Recursos

- [Documentación API](https://complianceflow.es/docs/)
- [Issues abiertos](https://github.com/juankaspain/complianceflow.es/issues)
- [Roadmap del proyecto](https://github.com/juankaspain/complianceflow.es/projects)

## Preguntas?

Si tienes preguntas, no dudes en:

- Abrir un [issue](https://github.com/juankaspain/complianceflow.es/issues/new)
- Contactar a [hola@complianceflow.es](mailto:hola@complianceflow.es)

¡Gracias por contribuir! 🚀