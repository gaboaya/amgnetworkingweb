# Despliegue en el servidor (Linux + Nginx)

Nginx sirve el sitio desde `/var/www/amgnetworking/current`.
`deploy.sh` descarga lo último de GitHub, compila y copia el resultado ahí.

## Requisitos (una vez)

- **Node.js 22** instalado para todo el sistema (si lo instalas con nvm, no funciona con `sudo`). Por ejemplo, con NodeSource:

  ```bash
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt install -y nodejs
  ```

- git, rsync, Nginx y Certbot:

  ```bash
  sudo apt install -y git rsync nginx certbot
  ```

- El dominio apuntando al servidor: registros DNS `A` de `amgnetworking.com` y `www.amgnetworking.com` con la IP del servidor.

## 1. Descargar el proyecto

El repositorio es público, así que no hace falta ninguna clave:

```bash
sudo git clone https://github.com/gaboaya/amgnetworkingweb.git /home/amgnetworking/amgnetworkingweb
```

## 2. Certificado SSL (si aún no lo tienes)

Primero una configuración temporal, solo con http, para que Let's Encrypt pueda verificar el dominio:

```bash
sudo mkdir -p /var/www/letsencrypt /var/www/amgnetworking/current
sudo tee /etc/nginx/sites-available/amgnetworking.com > /dev/null <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name amgnetworking.com www.amgnetworking.com;
    location /.well-known/acme-challenge/ { root /var/www/letsencrypt; }
}
EOF
sudo ln -sf /etc/nginx/sites-available/amgnetworking.com /etc/nginx/sites-enabled/amgnetworking.com
sudo nginx -t && sudo systemctl reload nginx
sudo certbot certonly --webroot -w /var/www/letsencrypt -d amgnetworking.com -d www.amgnetworking.com --deploy-hook "systemctl reload nginx"
```

Certbot renueva el certificado solo y recarga Nginx cuando lo hace.

## 3. Configuración de Nginx

```bash
sudo cp /home/amgnetworking/amgnetworkingweb/deploy/nginx/amgnetworking.com.conf /etc/nginx/sites-available/amgnetworking.com
sudo ln -sf /etc/nginx/sites-available/amgnetworking.com /etc/nginx/sites-enabled/amgnetworking.com
sudo nginx -t && sudo systemctl reload nginx
```

Incluye la redirección a https y a `amgnetworking.com` sin www, la página 404, caché, compresión y cabeceras de seguridad.

## 4. Script de despliegue

```bash
sudo cp /home/amgnetworking/amgnetworkingweb/deploy/deploy.sh /usr/local/bin/deploy-amgnetworking
sudo chmod +x /usr/local/bin/deploy-amgnetworking
```

Cada vez que subas cambios a GitHub, publícalos con:

```bash
sudo deploy-amgnetworking
```

Si algún día cambia `deploy.sh` en el repositorio, vuelve a copiarlo (paso 4).

## Problemas comunes

- **`detected dubious ownership`**: el proyecto se descargó con otro usuario. Ejecuta una vez
  `sudo git config --global --add safe.directory /home/amgnetworking/amgnetworkingweb`.
- **`se necesita Node.js 20.19+ o 22.12+`**: instala Node 22 (ver Requisitos).
- **`nginx -t` falla por el certificado**: haz primero el paso 2.
