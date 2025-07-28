# Script para configurar steel-calculator
Write-Host "🚀 Configurando steel-calculator..." -ForegroundColor Green

# Crear directorios si no existen
$directories = @(
    "components",
    "hooks", 
    "lib",
    "types",
    "public"
)

foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir
        Write-Host "✅ Creado directorio: $dir" -ForegroundColor Green
    }
}

# Copiar archivos de componentes
$componentFiles = @(
    "SteelCalculator.tsx",
    "Header.tsx", 
    "Footer.tsx",
    "MobileMenu.tsx",
    "LegalModal.tsx"
)

foreach ($file in $componentFiles) {
    $source = "..\calculadoras\components\$file"
    $dest = "components\$file"
    if (Test-Path $source) {
        Copy-Item $source $dest -Force
        Write-Host "✅ Copiado: $file" -ForegroundColor Green
    } else {
        Write-Host "⚠️ No encontrado: $file" -ForegroundColor Yellow
    }
}

# Copiar directorio ui
if (Test-Path "..\calculadoras\components\ui") {
    Copy-Item "..\calculadoras\components\ui" "components\" -Recurse -Force
    Write-Host "✅ Copiado directorio: ui" -ForegroundColor Green
}

# Copiar hooks
$hookFiles = @(
    "useSteelCalculator.ts"
)

foreach ($file in $hookFiles) {
    $source = "..\calculadoras\hooks\$file"
    $dest = "hooks\$file"
    if (Test-Path $source) {
        Copy-Item $source $dest -Force
        Write-Host "✅ Copiado: $file" -ForegroundColor Green
    }
}

# Copiar lib
$libFiles = @(
    "steel-constants.ts",
    "csv-export.ts",
    "utils.ts"
)

foreach ($file in $libFiles) {
    $source = "..\calculadoras\lib\$file"
    $dest = "lib\$file"
    if (Test-Path $source) {
        Copy-Item $source $dest -Force
        Write-Host "✅ Copiado: $file" -ForegroundColor Green
    }
}

# Copiar types
if (Test-Path "..\calculadoras\types\index.ts") {
    Copy-Item "..\calculadoras\types\index.ts" "types\" -Force
    Write-Host "✅ Copiado: types/index.ts" -ForegroundColor Green
}

# Copiar archivos de configuración
$configFiles = @(
    "next.config.ts",
    "tailwind.config.ts", 
    "postcss.config.mjs",
    "tsconfig.json",
    "eslint.config.mjs"
)

foreach ($file in $configFiles) {
    $source = "..\calculadoras\$file"
    $dest = $file
    if (Test-Path $source) {
        Copy-Item $source $dest -Force
        Write-Host "✅ Copiado: $file" -ForegroundColor Green
    }
}

# Copiar globals.css
if (Test-Path "..\calculadoras\app\globals.css") {
    Copy-Item "..\calculadoras\app\globals.css" "app\" -Force
    Write-Host "✅ Copiado: globals.css" -ForegroundColor Green
}

# Copiar archivos públicos
if (Test-Path "..\calculadoras\public") {
    Copy-Item "..\calculadoras\public\*" "public\" -Recurse -Force
    Write-Host "✅ Copiados archivos públicos" -ForegroundColor Green
}

Write-Host "🎉 Configuración de steel-calculator completada!" -ForegroundColor Green
Write-Host "📝 Próximos pasos:" -ForegroundColor Cyan
Write-Host "   1. Ejecutar: npm install" -ForegroundColor White
Write-Host "   2. Ejecutar: npm run dev" -ForegroundColor White
Write-Host "   3. Crear repositorio en GitHub" -ForegroundColor White
Write-Host "   4. Configurar en Vercel" -ForegroundColor White 