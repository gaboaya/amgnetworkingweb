# Despliegue en el servidor (Linux + Nginx + Cloudflare Tunnel)

Cloudflare recibe las visitas (con https) y las envía por el túnel a Nginx en `http://localhost:82`.
Nginx sirve el sitio desde `/var/www/amgnetworking/current`, y `deploy.sh` descarga lo último de GitHub,
compila y copia el resultado ahí.

## Requisitos (una vez)

- **Node.js 22** instalado para todo el sistema (si lo instalas con nvm, no funciona con `sudo`). Por ejemplo, con NodeSource:

  ```bash
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt install -y nodejs
  ```

- git, rsync y Nginx:

  ```bash
  sudo apt install -y git rsync nginx
  ```

- Cloudflare Tunnel (`cloudflared`) instalado y conectado en el servidor.

## 1. Descargar el proyecto

Desde la carpeta del usuario, **no** desde dentro de `amgnetworkingweb` (si no, el proyecto queda en una subcarpeta):

```bash
cd /home/amgnetworking
sudo git clone git@github.com:gaboaya/amgnetworkingweb.git
```

Debe existir `/home/amgnetworking/amgnetworkingweb/package.json`.

## 2. Configuración de Nginx

```bash
sudo cp /home/amgnetworking/amgnetworkingweb/deploy/nginx/amgnetworking.com.conf /etc/nginx/sites-available/amgnetworking.com
sudo ln -sf /etc/nginx/sites-available/amgnetworking.com /etc/nginx/sites-enabled/amgnetworking.com
sudo nginx -t && sudo systemctl reload nginx
```

Escucha en el puerto 82 e incluye el paso a https, la redirección de www, la página 404, caché, compresión
y cabeceras de seguridad.

## 3. Cloudflare Tunnel

En Cloudflare Zero Trust → **Networks → Tunnels**, abre tu túnel (debe aparecer **Healthy**) y en
**Public Hostnames** agrega:

| Hostname                | Servicio              |
| ----------------------- | --------------------- |
| `amgnetworking.com`     | HTTP → `localhost:82` |
| `www.amgnetworking.com` | HTTP → `localhost:82` |

Si manejas el túnel con un archivo `config.yml`, las reglas equivalentes son (antes de la regla final `http_status:404`):

```yaml
  - hostname: amgnetworking.com
    service: http://localhost:82
  - hostname: www.amgnetworking.com
    service: http://localhost:82
```

En Cloudflare, en **SSL/TLS → Edge Certificates**, activa **Always Use HTTPS**.

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

- **`error code: 1033` en el navegador**: el túnel de Cloudflare no está conectado o no tiene el hostname.
  Revisa `sudo systemctl status cloudflared` y el paso 3.
- **`Could not read package.json`**: el proyecto quedó en una subcarpeta. Repite el paso 1 desde `/home/amgnetworking`.
- **`detected dubious ownership`**: el proyecto se descargó con otro usuario. Ejecuta una vez
  `sudo git config --global --add safe.directory /home/amgnetworking/amgnetworkingweb`.
- **`se necesita Node.js 20.19+ o 22.12+`**: instala Node 22 (ver Requisitos).
