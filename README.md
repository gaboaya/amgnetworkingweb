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

Las redes sociales que dejes vacías en `src/config.js` no aparecen en el sitio.
Si cambias `src/config.js` mientras corre `npm run dev`, reinicia el servidor para ver los cambios en el título y las etiquetas.

## SEO

Al compilar (`npm run build`) se genera automáticamente:

- **HTML prerenderizado** con todo el contenido: Google, Bing y las vistas previas de WhatsApp lo leen sin ejecutar JavaScript.
- **Título, descripción y Open Graph** desde `src/seo.js` (incluyen la ciudad si la defines en `src/config.js`).
- **Datos estructurados (JSON-LD)**: negocio, catálogo de servicios y preguntas frecuentes.
- **`robots.txt`** y **`sitemap.xml`** (el sitemap y la URL canónica solo se generan si configuras `SITE.url`).

Para el mejor resultado, completa en `src/config.js`:

- `SITE.url`: tu dominio, por ejemplo `https://www.amgnetworking.com`.
- `BUSINESS.city`: tu ciudad, por ejemplo `Bogotá`. Es lo que más ayuda a aparecer en búsquedas locales.

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

1. Publica el sitio con `SITE.url` configurado.
2. En [Search Console](https://search.google.com/search-console) agrega una propiedad de tipo **Prefijo de URL** con tu dominio.
3. Verifícala con el método **Google Analytics** (con la misma cuenta de Google del ID de Analytics). Otra opción: copia el código de la **etiqueta HTML** en `SITE.googleSiteVerification` y vuelve a publicar.
4. En **Sitemaps**, envía `sitemap.xml`.

## Publicar

Ejecuta `npm run build` y sube el contenido de la carpeta `dist/` a cualquier hosting estático
(Netlify, Vercel, Hostinger, cPanel, etc.).
