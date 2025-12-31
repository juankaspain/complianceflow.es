# Guía de Contribución 🤝

¡Gracias por tu interés en contribuir a ComplianceFlow! Esta guía te ayudará a entender cómo puedes colaborar en el proyecto.

## 🎯 Código de Conducta

Este proyecto se adhiere a un Código de Conducta. Al participar, se espera que mantengas un ambiente respetuoso y profesional.

### Principios Básicos
- Sé respetuoso y profesional
- Acepta críticas constructivas
- Enfoca en lo mejor para la comunidad
- Muestra empatía hacia otros miembros

## 🐛 Reportar Bugs

Antes de crear un issue, verifica que:
- El bug no haya sido reportado anteriormente
- El bug se reproduce en la última versión

### Template de Bug Report

```markdown
**Descripción del bug**
Una descripción clara del problema.

**Pasos para reproducir**
1. Ve a '...'
2. Haz click en '...'
3. Scroll hasta '...'
4. Ver error

**Comportamiento esperado**
Qué debería suceder.

**Screenshots**
Si aplica, añade capturas de pantalla.

**Entorno:**
 - OS: [e.g. macOS, Windows]
 - Navegador: [e.g. Chrome, Safari]
 - Versión: [e.g. 22]

**Contexto adicional**
Cualquier otra información relevante.
```

## ✨ Proponer Nuevas Funcionalidades

Para proponer una nueva funcionalidad:

1. Abre un issue con el prefijo `[FEATURE]`
2. Describe el problema que resuelve
3. Propone una solución
4. Menciona alternativas consideradas

## 🛠️ Proceso de Desarrollo

### Setup Inicial

```bash
# Fork y clona el repositorio
git clone https://github.com/TU-USUARIO/complianceflow.es.git
cd complianceflow.es

# Instala dependencias
npm install

# Crea una rama para tu feature
git checkout -b feature/nombre-descriptivo
```

### Convención de Nombres de Ramas

- `feature/` - Nuevas funcionalidades
- `fix/` - Corrección de bugs
- `docs/` - Cambios en documentación
- `refactor/` - Refactorización de código
- `test/` - Añadir o modificar tests
- `chore/` - Tareas de mantenimiento

### Convención de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject

body (opcional)

footer (opcional)
```

**Tipos permitidos:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formato, punto y coma faltantes, etc.
- `refactor`: Refactorización de código
- `test`: Añadir tests
- `chore`: Tareas de mantenimiento
- `perf`: Mejoras de rendimiento
- `ci`: Cambios en CI/CD

**Ejemplos:**
```bash
feat(api): add KYC validation endpoint
fix(ui): resolve mobile menu overflow issue
docs(readme): update installation instructions
```

## ✅ Checklist antes del Pull Request

Antes de enviar tu PR, asegúrate de:

- [ ] El código sigue las convenciones del proyecto
- [ ] Has ejecutado `npm run lint` sin errores
- [ ] Has ejecutado `npm run format`
- [ ] Has añadido tests si aplica
- [ ] Todos los tests pasan (`npm test`)
- [ ] La documentación está actualizada
- [ ] Los commits siguen Conventional Commits
- [ ] No hay console.logs olvidados
- [ ] Has probado en diferentes navegadores

## 📤 Envío de Pull Request

1. **Actualiza tu fork**
```bash
git remote add upstream https://github.com/juankaspain/complianceflow.es.git
git fetch upstream
git merge upstream/main
```

2. **Push a tu fork**
```bash
git push origin feature/nombre-descriptivo
```

3. **Crea el Pull Request**
   - Ve a GitHub y crea un PR desde tu rama
   - Usa una descripción clara del cambio
   - Referencia issues relacionados

### Template de Pull Request

```markdown
## Descripción
Descripción clara de los cambios.

## Tipo de cambio
- [ ] Bug fix (cambio que resuelve un issue)
- [ ] Nueva funcionalidad (cambio que añade funcionalidad)
- [ ] Breaking change (cambio que rompe compatibilidad)
- [ ] Documentación

## ¿Cómo se ha probado?
Describe las pruebas realizadas.

## Checklist:
- [ ] Mi código sigue las guías de estilo
- [ ] He realizado self-review
- [ ] He comentado código complejo
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan warnings
- [ ] He añadido tests
- [ ] Todos los tests pasan

## Screenshots (si aplica)
```

## 📝 Guía de Estilo

### HTML
- Usa HTML5 semántico
- Incluye atributos ARIA apropiados
- Optimiza para SEO
- Asegura accesibilidad WCAG 2.1 AA

### CSS
- Usa custom properties (CSS variables)
- Mobile-first approach
- Nombra clases con BEM cuando sea apropiado
- Evita !important

### JavaScript
- Usa ES6+
- Prefiere const sobre let
- Evita var
- Usa arrow functions apropiadamente
- Comenta código complejo
- Maneja errores apropiadamente

### Commits
- Mensajes claros y descriptivos
- Commits atómicos (un cambio por commit)
- Sigue Conventional Commits

## 🔍 Review Process

1. Un maintainer revisará tu PR
2. Pueden solicitar cambios
3. Una vez aprobado, se mergeará
4. El deploy es automático a Netlify

## 💬 ¿Preguntas?

Si tienes preguntas:
- Abre un issue con la etiqueta `question`
- Contacta a [hola@complianceflow.es](mailto:hola@complianceflow.es)

## 🚀 Deployment

El deployment es automático:
- Push a `main` → Deploy a producción
- Pull Requests → Deploy preview automático

## 📚 Recursos Útiles

- [Netlify Docs](https://docs.netlify.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

¡Gracias por contribuir a ComplianceFlow! 🚀
