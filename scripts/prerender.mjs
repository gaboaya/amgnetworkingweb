// Inserta el HTML completo de la página en dist/index.html (prerender), para que Google,
// Bing y las vistas previas de redes vean todo el contenido sin ejecutar JavaScript.
// Se ejecuta automáticamente al final de `npm run build`.
import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const ssrDir = path.join(root, '.ssr');
const indexFile = path.join(root, 'dist', 'index.html');
const marker = '<div id="root"></div>';

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const html = await readFile(indexFile, 'utf8');
if (!html.includes(marker)) throw new Error(`No se encontró ${marker} en dist/index.html`);

await writeFile(indexFile, html.replace(marker, () => `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });
console.log('Prerender listo: dist/index.html incluye todo el contenido de la página.');
