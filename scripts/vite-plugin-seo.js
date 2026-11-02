// Plugin de Vite que inserta en el <head> las etiquetas para buscadores y redes (ver seo-head.js).
// En desarrollo cada URL recibe aquí sus etiquetas; al compilar se deja una marca y
// scripts/prerender.mjs pone las de cada página, además de sitemap.xml y robots.txt.
import { normalizePath } from '../src/routes.js';
import { PAGE_HEAD_MARKER, globalHeadHtml, pageHeadHtml } from './seo-head.js';

export default function seo() {
  let isBuild = false;

  return {
    name: 'amg-seo',
    configResolved(config) {
      isBuild = config.command === 'build';
    },
    transformIndexHtml(html, ctx) {
      const pageHead = isBuild
        ? PAGE_HEAD_MARKER
        : pageHeadHtml(normalizePath(new URL(ctx.originalUrl ?? '/', 'http://localhost').pathname));
      return html.replace('</head>', `    ${globalHeadHtml(isBuild)}\n    ${pageHead}\n  </head>`);
    },
  };
}
