# 🔧 Guía de Solución de Problemas - ComplianceFlow

**Fecha**: 31 de Diciembre de 2025

---

## 🚨 Errores Comunes y Soluciones

### Error 1: "Middleware cannot be used with output: export"

**Error**:
```
⚨ Middleware cannot be used with "output: export"
```

**Solución**: ✅ **YA SOLUCIONADO**

- Eliminado `output: 'export'` de `next.config.js`
- Middleware deshabilitado temporalmente
- El proyecto ahora funciona en modo servidor de desarrollo

---

### Error 2: "Module not found: Can't resolve '@sentry/nextjs'"

**Error**:
```
Module not found: Can't resolve '@sentry/nextjs'
```

**Solución**: ✅ **YA SOLUCIONADO**

- Sentry es ahora opcional
- El proyecto funciona sin Sentry instalado
- Si quieres Sentry, instalar con: `npm install @sentry/nextjs`

---

### Error 3: "Cannot find module 'critters'"

**Error**:
```
Error: Cannot find module 'critters'
```

**Solución**: ✅ **YA SOLUCIONADO**

- Removida optimización CSS experimental
- Ya no se requiere 'critters'

---

## 🔄 Cómo Aplicar las Correcciones (IMPORTANTE)

### Paso 1: Actualizar desde GitHub

```bash
# En tu terminal, dentro de la carpeta del proyecto
cd complianceflow.es

# Descargar los últimos cambios
git pull origin main
```

### Paso 2: Limpiar instalación anterior

```bash
# Eliminar node_modules y archivos de cache
rm -rf node_modules
rm -rf .next
rm package-lock.json

# En Windows (PowerShell):
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force .next
Remove-Item -Force package-lock.json
```

### Paso 3: Reinstalar dependencias

```bash
npm install
```

Esto tardará 1-2 minutos.

### Paso 4: Iniciar servidor

```bash
npm run dev
```

**¡Debería funcionar sin errores!** 🎉

Abre: `http://localhost:3000`

---

## ✅ Verificación de Instalación

### Comandos de verificación:

```bash
# 1. Verificar Node.js
node --version
# Debe mostrar: v18.x.x o superior

# 2. Verificar npm
npm --version
# Debe mostrar: 9.x.x o superior

# 3. Verificar que la carpeta existe
ls -la
# Debe mostrar: src/, public/, node_modules/, etc.

# 4. Verificar integración
npm run verify:integration
```

---

## 🐛 Otros Problemas Comunes

### Puerto 3000 ocupado

**Error**:
```
Port 3000 is already in use
```

**Solución**:
```bash
# Usar otro puerto
npm run dev -- -p 3001

# Luego abrir:
http://localhost:3001
```

---

### Error de permisos en Windows

**Error**:
```
EPERM: operation not permitted
```

**Solución**:
1. Ejecutar PowerShell como Administrador
2. Navegar a la carpeta del proyecto
3. Ejecutar: `npm install --legacy-peer-deps`

---

### "npm: command not found" (después de instalar Node.js)

**Solución**:
1. **Cerrar TODAS las ventanas de terminal/cmd/PowerShell**
2. Abrir una nueva terminal
3. Verificar: `node --version`
4. Si sigue fallando: **Reiniciar Windows**

---

### Git Bash no reconoce comandos

**Solución**:
Usa **PowerShell** en su lugar:

1. Presiona `Windows + R`
2. Escribe `powershell`
3. Presiona Enter
4. Navega: `cd E:\OneDrive\Escritorio\complianceflow.es\github\complianceflow.es`
5. Ejecuta: `npm install`

---

### Error "ENOENT: no such file or directory"

**Solución**:
Verifica que estás en la carpeta correcta:

```bash
# Mostrar ruta actual
pwd

# Debe mostrar algo como:
E:\OneDrive\Escritorio\complianceflow.es\github\complianceflow.es

# Si no, navega a la carpeta correcta:
cd E:\OneDrive\Escritorio\complianceflow.es\github\complianceflow.es
```

---

## 📊 Estado de Dependencias

### Dependencias Requeridas (✅ Instaladas automáticamente)

- `next` - Framework
- `react` - Librería UI
- `react-dom` - React DOM
- `tailwindcss` - Estilos
- `lucide-react` - Iconos
- `typescript` - Tipado

### Dependencias Opcionales (❌ No requeridas)

- `@sentry/nextjs` - Monitoring (opcional)
- `posthog-js` - Analytics (opcional)

**El proyecto funciona SIN estas dependencias opcionales.**

---

## 🛠️ Comandos Útiles

### Desarrollo
```bash
npm run dev              # Iniciar servidor de desarrollo
npm run build            # Compilar para producción
npm run start            # Servidor de producción
```

### Limpieza
```bash
npm run clean            # Limpiar cache y builds
rm -rf node_modules      # Eliminar dependencias
rm -rf .next             # Eliminar build
```

### Verificación
```bash
npm run lint             # Verificar código
npm run type-check       # Verificar TypeScript
npm run verify:integration  # Verificar integración
```

---

## 📞 ¿Sigues con problemas?

### Información a proporcionar:

1. **Sistema operativo**: Windows 10/11, Mac, Linux
2. **Versión de Node.js**: Ejecuta `node --version`
3. **Error exacto**: Copia el mensaje de error completo
4. **Comando ejecutado**: ¿Qué comando dio el error?
5. **Ruta actual**: Ejecuta `pwd` y copia el resultado

### Canales de soporte:

- **GitHub Issues**: [Crear issue](https://github.com/juankaspain/complianceflow.es/issues)
- **Documentación**: [Ver docs](docs/)
- **Quick Start**: [QUICK_START.md](QUICK_START.md)

---

## ✅ Lista de Verificación Final

Antes de reportar un error, verifica:

- [ ] Node.js 18+ instalado (`node --version`)
- [ ] Estoy en la carpeta correcta del proyecto
- [ ] Ejecuté `git pull origin main`
- [ ] Eliminé `node_modules` y `.next`
- [ ] Ejecuté `npm install` desde cero
- [ ] Cerré y volví a abrir la terminal
- [ ] El puerto 3000 está libre
- [ ] No hay otros procesos de Node.js corriendo

---

## 🚀 Solución Rápida (Copy-Paste)

**Si tienes cualquier error, ejecuta esto**:

```bash
# 1. Actualizar desde GitHub
git pull origin main

# 2. Limpiar todo
rm -rf node_modules .next package-lock.json

# 3. Reinstalar
npm install

# 4. Iniciar
npm run dev
```

**En Windows (PowerShell)**:

```powershell
# 1. Actualizar desde GitHub
git pull origin main

# 2. Limpiar todo
Remove-Item -Recurse -Force node_modules, .next, package-lock.json -ErrorAction SilentlyContinue

# 3. Reinstalar
npm install

# 4. Iniciar
npm run dev
```

---

## 🎉 ¡Listo!

Si seguiste estos pasos, el proyecto debería funcionar perfectamente.

Abre tu navegador en: **http://localhost:3000**

Y deberías ver el nuevo diseño oscuro profesional. 🎉

---

<div align="center">

**🔧 Guía de solución actualizada - 31/12/2025**

Made with ❤️ by ComplianceFlow

</div>
