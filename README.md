# AMG Networking — Sitio web

Sitio web en React + Vite para promocionar los servicios de AMG Networking (diseño "Rack 19 pulgadas").

## Comandos

```bash
npm install       # instalar dependencias (solo la primera vez)
npm run dev       # ver el sitio en modo desarrollo
npm run build     # generar la versión para publicar (carpeta dist/)
npm run preview   # ver la versión de producción localmente
npm run images    # regenerar imágenes optimizadas desde la carpeta fotos/
```

## Dónde editar

| Qué quieres cambiar                                    | Archivo                   |
| ------------------------------------------------------ | ------------------------- |
| WhatsApp, correo, ciudad, redes sociales, dominio, GA  | `src/config.js`           |
| Servicios (puertos del panel, detalle)                 | `src/data/services.js`    |
| Preguntas frecuentes                                   | `src/data/faq.js`         |
| Título y descripción para Google                       | `src/seo.js`              |
| Colores y estilos                                      | `src/index.css` (`:root`) |
| Textos de cada sección                                 | `src/components/*.jsx`    |
| Política de privacidad                                 | `public/politica-de-privacidad.html` |
| Despliegue en el servidor y Nginx                      | `deploy/`                 |

Las redes sociales que dejes vacías en `src/config.js` no aparecen en el sitio.
Si cambias `src/config.js` mientras corre `npm run dev`, reinicia el servidor para ver los cambios en el título y las etiquetas.

## SEO

Al compilar (`npm run build`) se genera automáticamente:

- **HTML prerenderizado** con todo el contenido: Google, Bing y las vistas previas de WhatsApp lo leen sin ejecutar JavaScript.
- **Título, descripción y Open Graph** desde `src/seo.js` (incluyen la ciudad si la defines en `src/config.js`).
- **Datos estructurados (JSON-LD)**: negocio, catálogo de servicios y preguntas frecuentes.
- **`robots.txt`** y **`sitemap.xml`** (el sitemap y la URL canónica solo se generan si configuras `SITE.url`).

El dominio (`SITE.url`, hoy `https://amgnetworking.com`) y la ciudad (`BUSINESS.city`, hoy `Bogotá`)
están en `src/config.js`. Si cambian, edítalos ahí y vuelve a compilar.

## Cookies

Al entrar, el visitante ve un aviso para **aceptar todas**, quedarse con **solo las necesarias** o **configurar**
(activar o no la analítica). Usa el modo de consentimiento v2 de Google: mientras no acepte, Google Analytics
no guarda cookies. La elección se guarda un año y se puede cambiar con **Configurar cookies** en el pie de página.
El aviso está en `src/components/CookieBanner.jsx` y la lógica en `src/consent.js`.

## Archivos públicos (carpeta `public/`)

| Archivo                       | Para qué sirve                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------- |
| `404.html`                    | Página para direcciones que no existen                                           |
| `site.webmanifest`, íconos    | Nombre e íconos del sitio en celulares y en Google                               |
| `politica-de-privacidad.html` | Política de privacidad y lista de cookies (actualízala si cambias el ID de Analytics) |

La redirección a HTTPS y a `amgnetworking.com` sin www, la caché y las cabeceras de seguridad están en la
configuración de Nginx: `deploy/nginx/amgnetworking.com.conf`.

## Google Analytics 4

El ID está en `SITE.gaId`. El script de Google solo se incluye en la versión publicada (`npm run build`), así que las pruebas en `npm run dev` no se cuentan.

Eventos que registra el sitio:

| Evento           | Cuándo ocurre                                                       |
| ---------------- | ------------------------------------------------------------------- |
| `whatsapp_click` | Clic en cualquier botón de WhatsApp (`link_location` dice dónde)     |
| `phone_click`    | Clic en "Llamar"                                                    |
| `social_click`   | Clic en Facebook, Instagram u otra red                              |
| `generate_lead`  | Envío del formulario de contacto                                    |
| `select_content` | Selección de un puerto del panel de servicios                       |

En Google Analytics ve a **Administrar → Eventos** y marca `whatsapp_click`, `phone_click` y `generate_lead` como **eventos clave**, para medirlos como clientes potenciales.

## Google Search Console

1. Publica el sitio en `https://amgnetworking.com`.
2. En [Search Console](https://search.google.com/search-console) agrega una propiedad de tipo **Prefijo de URL**: `https://amgnetworking.com/`.
3. Verifícala con el método **Google Analytics** (con la misma cuenta de Google del ID de Analytics). Otra opción: copia el código de la **etiqueta HTML** en `SITE.googleSiteVerification` y vuelve a publicar.
4. En **Sitemaps**, envía `sitemap.xml` (queda en `https://amgnetworking.com/sitemap.xml`).

## Publicar

El sitio se publica en tu servidor Linux con Nginx. Los pasos (Node, certificado SSL, Nginx y el script de
despliegue) están en [deploy/README.md](deploy/README.md). Una vez configurado, cada vez que subas cambios a GitHub:

```bash
sudo deploy-amgnetworking
```
