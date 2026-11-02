// Genera el HTML completo de cada página (prerender) para que Google, Bing y las vistas previas de
// redes vean todo el contenido sin ejecutar JavaScript, y crea sitemap.xml (con las fotos) y robots.txt.
// Se ejecuta automáticamente al final de `npm run build`.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROUTES } from '../src/routes.js';
import { PAGE_HEAD_MARKER, pageHeadHtml, siteUrl } from './seo-head.js';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, '.ssr');
const rootMarker = '<div id="root"></div>';

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = await readFile(path.join(dist, 'index.html'), 'utf8');
if (!template.includes(rootMarker) || !template.includes(PAGE_HEAD_MARKER)) {
  throw new Error('dist/index.html no tiene las marcas que necesita el prerender.');
}

const today = new Date().toISOString().slice(0, 10);
const sitemapEntries = [];

for (const route of ROUTES) {
  const body = render(route.path);
  const html = template
    .replace(PAGE_HEAD_MARKER, () => pageHeadHtml(route.path))
    .replace(rootMarker, () => `<div id="root">${body}</div>`);
  const dir = path.join(dist, route.path);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), html);

  // Fotos de la página para el sitemap de imágenes (sin el logo, que se repite en todas)
  const images = [...new Set([...body.matchAll(/<img[^>]*?\ssrc="(\/assets\/[^"]+)"/g)].map((m) => m[1]))].filter(
    (src) => !src.includes('/logo'),
  );
  const imageTags = images.map((src) => `\n    <image:image>\n      <image:loc>${siteUrl}${src}</image:loc>\n    </image:image>`);
  sitemapEntries.push(`  <url>\n    <loc>${siteUrl}${route.path}</loc>\n    <lastmod>${today}</lastmod>${imageTags.join('')}\n  </url>`);
}

const robots = ['User-agent: *', 'Allow: /'];
if (siteUrl) {
  robots.push('', `Sitemap: ${siteUrl}/sitemap.xml`);
  await writeFile(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapEntries.join('\n')}
</urlset>
`,
  );
} else {
  console.warn('SITE.url está vacío en src/config.js: no se generó sitemap.xml ni la URL canónica.');
}
await writeFile(path.join(dist, 'robots.txt'), `${robots.join('\n')}\n`);

await rm(ssrDir, { recursive: true, force: true });
console.log(`Prerender listo: ${ROUTES.length} páginas, sitemap.xml y robots.txt.`);
