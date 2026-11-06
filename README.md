# AMG Networking — Sitio web

Sitio web corporativo en React + Vite para promocionar los servicios de AMG Networking.

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
| Servicios: líneas de servicio y página de cada uno     | `src/data/services.js`    |
| Desarrollo de software: servicios, preguntas y proceso | `src/data/software.js`    |
| Proyectos: tarjetas y página de cada uno               | `src/data/projects.js`    |
| Marcas con las que trabaja                             | `src/data/brands.js`      |
| Páginas del sitio (URL, título y descripción)          | `src/routes.js`           |
| Fotos y logos (recortes desde `fotos/`)                | `scripts/optimize-images.mjs`, `src/photos.js` |
| Preguntas frecuentes                                   | `src/data/faq.js`         |
| Título y descripción para Google                       | `src/seo.js`              |
| Colores y estilos                                      | `src/index.css` (`:root`) |
| Textos de cada sección                                 | `src/components/*.jsx`    |
| Política de privacidad                                 | `public/politica-de-privacidad.html` |
| Despliegue en el servidor y Nginx                      | `deploy/`                 |

Las redes sociales que dejes vacías en `src/config.js` no aparecen en el sitio.
Si cambias `src/config.js` mientras corre `npm run dev`, reinicia el servidor para ver los cambios en el título y las etiquetas.

## SEO

El sitio tiene 21 páginas, cada una con su propia URL para que Google pueda mostrarla en los resultados:

| Página                                | URL                                                |
| ------------------------------------- | -------------------------------------------------- |
| Inicio                                | `/`                                                |
| Desarrollo de software                | `/desarrollo-de-software/`                         |
| Cada servicio de software (4 páginas) | `/desarrollo-de-software/software-empresarial/`, … |
| Todos los servicios                   | `/servicios/`                                      |
| Cada servicio (9 páginas)             | `/servicios/instalacion-de-redes/`, …              |
| Todos los proyectos                   | `/proyectos/`                                      |
| Cada proyecto (3 páginas)             | `/proyectos/radioenlace-starlink-fincas-timana-huila/`, … |
| Contacto                              | `/contacto/`                                       |

Al compilar (`npm run build`) se genera automáticamente:

- **HTML prerenderizado** de cada página con todo el contenido: Google, Bing y las vistas previas de WhatsApp lo leen sin ejecutar JavaScript.
- **Título, descripción, URL canónica y Open Graph** propios de cada página (`src/routes.js`, con la ciudad de `src/config.js`).
- **Datos estructurados (JSON-LD)**: negocio, servicio, ruta de navegación (Inicio › Servicios › …), preguntas frecuentes y página de contacto.
- **`sitemap.xml`** con las 21 páginas y sus fotos, y **`robots.txt`** apuntando a él.

Para agregar un servicio, añádelo en `src/data/services.js` (en `SERVICES` y en la línea de `SERVICE_LINES` que le corresponda): su página, el sitemap, el inicio y el pie de página se actualizan solos.

Para agregar un proyecto, añádelo en `src/data/projects.js`: su tarjeta, su página y el sitemap se crean solos. La ficha técnica (`specs`) y las fotos reales (`photos`) son opcionales y solo aparecen cuando se llenan.

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

En Google Analytics ve a **Administrar → Eventos** y marca `whatsapp_click`, `phone_click` y `generate_lead` como **eventos clave**, para medirlos como clientes potenciales.

## Google Search Console

1. Publica el sitio en `https://amgnetworking.com`.
2. En [Search Console](https://search.google.com/search-console) agrega una propiedad de tipo **Prefijo de URL**: `https://amgnetworking.com/`.
3. Verifícala con el método **Google Analytics** (con la misma cuenta de Google del ID de Analytics). Otra opción: copia el código de la **etiqueta HTML** en `SITE.googleSiteVerification` y vuelve a publicar.
4. En **Sitemaps**, envía `sitemap.xml` (queda en `https://amgnetworking.com/sitemap.xml`).

## Publicar

El sitio se publica en tu servidor Linux con Nginx, detrás de Cloudflare Tunnel. Los pasos (Node, Nginx,
el túnel y el script de despliegue) están en [deploy/README.md](deploy/README.md). Una vez configurado, cada vez que subas cambios a GitHub:

```bash
sudo deploy-amgnetworking
```
