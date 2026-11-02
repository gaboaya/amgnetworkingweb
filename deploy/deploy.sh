#!/bin/bash
# Despliegue de amgnetworking.com: descarga lo último de GitHub, compila y publica en Nginx.
#
# Instalación (una vez, fuera del repositorio):
#   sudo cp deploy/deploy.sh /usr/local/bin/deploy-amgnetworking
#   sudo chmod +x /usr/local/bin/deploy-amgnetworking
# Uso:
#   sudo deploy-amgnetworking

set -euo pipefail

PROJECT_DIR="/home/amgnetworking/amgnetworkingweb"
WEB_DIR="/var/www/amgnetworking/current"
BRANCH="main"

# Todo va dentro de main(): bash lee la función completa antes de ejecutarla, así el
# despliegue no se rompe si este archivo cambia con el `git reset` de más abajo.
main() {
    echo "========================================"
    echo "  Desplegando AMG Networking"
    echo "========================================"

    echo ""
    echo "Verificando Node.js..."
    # Vite 8 necesita Node 20.19+ o 22.12+
    if ! node -e 'const [a, b] = process.versions.node.split(".").map(Number); process.exit((a === 20 && b >= 19) || (a === 22 && b >= 12) || a > 22 ? 0 : 1)'; then
        echo "ERROR: se necesita Node.js 20.19+ o 22.12+ (instalado: $(node -v 2>/dev/null || echo ninguno))."
        exit 1
    fi

    echo ""
    echo "Entrando al proyecto..."
    cd "$PROJECT_DIR"

    echo ""
    echo "Actualizando repositorio..."
    git fetch origin
    git reset --hard "origin/$BRANCH"
    git clean -fd

    echo ""
    echo "Instalando dependencias..."
    npm ci

    echo ""
    echo "Compilando proyecto..."
    npm run build

    echo ""
    echo "Verificando la compilación..."
    if [ ! -f "dist/index.html" ]; then
        echo "ERROR: no se encontró dist/index.html."
        exit 1
    fi

    echo ""
    echo "Copiando archivos..."
    mkdir -p "$WEB_DIR"
    # rsync reemplaza los archivos y borra los viejos sin dejar el sitio vacío mientras copia
    rsync -a --delete dist/ "$WEB_DIR/"

    echo ""
    echo "Asignando permisos..."
    chown -R www-data:www-data /var/www/amgnetworking
    chmod -R u=rwX,go=rX /var/www/amgnetworking

    echo ""
    echo "Verificando configuración de Nginx..."
    nginx -t

    echo ""
    echo "Recargando Nginx..."
    systemctl reload nginx

    echo ""
    echo "Listo: https://amgnetworking.com"
}

main "$@"
