#!/bin/bash

# ComplianceFlow - Script de Fix de Estilos
# Este script soluciona problemas de CSS/Tailwind

echo "🎨 ComplianceFlow - Fix de Estilos"
echo "================================"
echo ""

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}[1/6]${NC} Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js no está instalado${NC}"
    echo "Descarga Node.js desde: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version)
echo -e "${GREEN}✓${NC} Node.js $NODE_VERSION instalado"

echo ""
echo -e "${YELLOW}[2/6]${NC} Deteniendo servidor si está corriendo..."
pkill -f "next dev" 2>/dev/null || true
echo -e "${GREEN}✓${NC} Servidor detenido"

echo ""
echo -e "${YELLOW}[3/6]${NC} Limpiando archivos antiguos..."
rm -rf .next
rm -rf node_modules
rm -f package-lock.json
echo -e "${GREEN}✓${NC} Archivos limpiados"

echo ""
echo -e "${YELLOW}[4/6]${NC} Instalando dependencias..."
if npm install; then
    echo -e "${GREEN}✓${NC} Dependencias instaladas correctamente"
else
    echo -e "${RED}❌ Error al instalar dependencias${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}[5/6]${NC} Verificando Tailwind CSS..."
if npm list tailwindcss tailwindcss-animate &> /dev/null; then
    echo -e "${GREEN}✓${NC} Tailwind CSS instalado correctamente"
else
    echo -e "${YELLOW}⚠️${NC} Instalando Tailwind CSS..."
    npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
fi

echo ""
echo -e "${YELLOW}[6/6]${NC} Iniciando servidor de desarrollo..."
echo ""
echo -e "${GREEN}✓${NC} ¡Todo listo!"
echo ""
echo -e "Abre tu navegador en: ${GREEN}http://localhost:3000${NC}"
echo ""
echo -e "${YELLOW}Presiona Ctrl+C para detener el servidor${NC}"
echo ""

npm run dev
