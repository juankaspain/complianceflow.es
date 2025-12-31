# ComplianceFlow - Script de Fix de Estilos (PowerShell)
# Este script soluciona problemas de CSS/Tailwind en Windows

Write-Host "🎨 ComplianceFlow - Fix de Estilos" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/6] Verificando Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js $nodeVersion instalado" -ForegroundColor Green
}
catch {
    Write-Host "❌ Node.js no está instalado" -ForegroundColor Red
    Write-Host "Descarga Node.js desde: https://nodejs.org/" -ForegroundColor Yellow
    pause
    exit 1
}

Write-Host ""
Write-Host "[2/6] Deteniendo servidor si está corriendo..." -ForegroundColor Yellow
Get-Process -Name "node" -ErrorAction SilentlyContinue | Where-Object {$_.Path -like "*next*"} | Stop-Process -Force -ErrorAction SilentlyContinue
Write-Host "✓ Servidor detenido" -ForegroundColor Green

Write-Host ""
Write-Host "[3/6] Limpiando archivos antiguos..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
Write-Host "✓ Archivos limpiados" -ForegroundColor Green

Write-Host ""
Write-Host "[4/6] Instalando dependencias..." -ForegroundColor Yellow
Write-Host "(Esto puede tardar 2-3 minutos)" -ForegroundColor Gray
try {
    npm install 2>&1 | Out-Null
    Write-Host "✓ Dependencias instaladas correctamente" -ForegroundColor Green
}
catch {
    Write-Host "❌ Error al instalar dependencias" -ForegroundColor Red
    Write-Host "Intenta manualmente: npm install" -ForegroundColor Yellow
    pause
    exit 1
}

Write-Host ""
Write-Host "[5/6] Verificando Tailwind CSS..." -ForegroundColor Yellow
try {
    $tailwindCheck = npm list tailwindcss tailwindcss-animate 2>&1
    Write-Host "✓ Tailwind CSS instalado correctamente" -ForegroundColor Green
}
catch {
    Write-Host "⚠️ Instalando Tailwind CSS..." -ForegroundColor Yellow
    npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
}

Write-Host ""
Write-Host "[6/6] Iniciando servidor de desarrollo..." -ForegroundColor Yellow
Write-Host ""
Write-Host "✓ ¡Todo listo!" -ForegroundColor Green
Write-Host ""
Write-Host "Abre tu navegador en: " -NoNewline
Write-Host "http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Yellow
Write-Host ""

npm run dev
