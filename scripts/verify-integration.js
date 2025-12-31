#!/usr/bin/env node

/**
 * Script de verificación automática de integración
 * Verifica que todos los componentes de demos estén correctamente integrados
 */

const fs = require('fs');
const path = require('path');

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';
const CHECKMARK = '✓';
const CROSS = '✗';

let errors = 0;
let warnings = 0;
let checks = 0;

function log(message, color = RESET) {
  console.log(`${color}${message}${RESET}`);
}

function success(message) {
  checks++;
  log(`${CHECKMARK} ${message}`, GREEN);
}

function error(message) {
  checks++;
  errors++;
  log(`${CROSS} ${message}`, RED);
}

function warning(message) {
  warnings++;
  log(`! ${message}`, YELLOW);
}

function checkFileExists(filePath, description) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    success(`${description}: ${filePath}`);
    return true;
  } else {
    error(`${description} NO ENCONTRADO: ${filePath}`);
    return false;
  }
}

function checkFileContains(filePath, searchString, description) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf-8');
    if (content.includes(searchString)) {
      success(`${description}`);
      return true;
    } else {
      error(`${description} - No encontrado: "${searchString}"`);
      return false;
    }
  } else {
    error(`${description} - Archivo no existe: ${filePath}`);
    return false;
  }
}

function checkPackageDependency(packageName) {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };
    if (allDeps[packageName]) {
      success(`Dependencia instalada: ${packageName} (${allDeps[packageName]})`);
      return true;
    } else {
      error(`Dependencia NO instalada: ${packageName}`);
      return false;
    }
  }
  return false;
}

log('\n==============================================', BLUE);
log('  VERIFICACIÓN DE INTEGRACIÓN - DEMOS', BLUE);
log('==============================================\n', BLUE);

log('\n[1/5] Verificando dependencias...\n', YELLOW);
checkPackageDependency('lucide-react');
checkPackageDependency('next');
checkPackageDependency('react');
checkPackageDependency('tailwindcss');

log('\n[2/5] Verificando componentes UI...\n', YELLOW);
checkFileExists('src/components/ui/button.tsx', 'Componente Button');
checkFileExists('src/components/ui/card.tsx', 'Componente Card');
checkFileExists('src/components/ui/alert.tsx', 'Componente Alert');
checkFileExists('src/components/ui/toast.tsx', 'Componente Toast');

log('\n[3/5] Verificando sección de demos...\n', YELLOW);
checkFileExists('src/components/sections/DemoSection.tsx', 'DemoSection');
checkFileContains(
  'src/components/sections/DemoSection.tsx',
  'from \'lucide-react\'',
  'Importación de Lucide React'
);
checkFileContains(
  'src/components/sections/DemoSection.tsx',
  '<FileText',
  'Icono FileText (Demo SII)'
);
checkFileContains(
  'src/components/sections/DemoSection.tsx',
  '<CreditCard',
  'Icono CreditCard (Demo KYC)'
);
checkFileContains(
  'src/components/sections/DemoSection.tsx',
  '<Shield',
  'Icono Shield (Demo Fraude)'
);

log('\n[4/5] Verificando integración en página principal...\n', YELLOW);
checkFileExists('src/app/page.tsx', 'Página principal');
checkFileContains(
  'src/app/page.tsx',
  'import DemoSection',
  'Importación de DemoSection'
);
checkFileContains(
  'src/app/page.tsx',
  '<DemoSection',
  'Uso de DemoSection en JSX'
);

log('\n[5/5] Verificando configuración...\n', YELLOW);
checkFileExists('tailwind.config.ts', 'Configuración de Tailwind');
checkFileContains(
  'tailwind.config.ts',
  'primary',
  'Color primary configurado'
);
checkFileExists('src/app/layout.tsx', 'Layout principal');
checkFileExists('src/app/globals.css', 'Estilos globales');

log('\n==============================================', BLUE);
log('  RESUMEN DE VERIFICACIÓN', BLUE);
log('==============================================\n', BLUE);

log(`Total de checks: ${checks}`);
if (errors > 0) {
  log(`Errores: ${errors}`, RED);
} else {
  log(`Errores: ${errors}`, GREEN);
}
if (warnings > 0) {
  log(`Advertencias: ${warnings}`, YELLOW);
}

if (errors === 0) {
  log('\n✅ INTEGRACIÓN COMPLETA Y CORRECTA!\n', GREEN);
  log('Puedes iniciar el servidor con:', BLUE);
  log('  npm run dev\n', GREEN);
  log('Y visitar:', BLUE);
  log('  http://localhost:3000/#demos\n', GREEN);
  process.exit(0);
} else {
  log('\n❌ ERRORES ENCONTRADOS\n', RED);
  log('Por favor, revisa los errores arriba y:', YELLOW);
  log('1. Verifica que todos los archivos existan', YELLOW);
  log('2. Ejecuta: npm install', YELLOW);
  log('3. Vuelve a ejecutar: node scripts/verify-integration.js\n', YELLOW);
  process.exit(1);
}
