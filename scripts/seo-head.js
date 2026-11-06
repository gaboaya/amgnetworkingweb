// Etiquetas del <head> para buscadores y redes sociales, generadas desde src/config.js y src/routes.js.
// Las usan el plugin de Vite (en desarrollo) y scripts/prerender.mjs (al compilar, una por página).
import { BUSINESS, SITE } from '../src/config.js';
import { consentHeadScript } from '../src/consent.js';
import { FAQ } from '../src/data/faq.js';
import { SERVICES, servicesOf } from '../src/data/services.js';
import { SOFTWARE_FAQ, SOFTWARE_LINE, SOFTWARE_PATH } from '../src/data/software.js';
import { SEO } from '../src/seo.js';
import { findRoute, servicePath } from '../src/routes.js';

// Marca en dist/index.html donde el prerender pone las etiquetas propias de cada página
export const PAGE_HEAD_MARKER = '<!--page-head-->';

export const siteUrl = SITE.url.replace(/\/+$/, '');
const absolute = (path) => (siteUrl ? `${siteUrl}${path}` : path);
const phone = `+${BUSINESS.whatsapp}`;
const businessId = absolute('/#negocio');

const escapeHtml = (text) =>
  String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const meta = (attr, key, content) => `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`;

const COUNTRY = { '@type': 'Country', name: 'Colombia' };
const homeCity = BUSINESS.city ? { '@type': 'City', name: BUSINESS.city } : COUNTRY;
const serviceAreas = BUSINESS.serviceAreas.map(({ type, name }) => ({ '@type': type, name }));

const offer = (s) => ({
  '@type': 'Offer',
  itemOffered: { '@type': 'Service', name: s.title, description: s.description, url: absolute(servicePath(s)) },
});

function business() {
  const node = {
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: BUSINESS.name,
    slogan: BUSINESS.tagline,
    description: SEO.description,
    telephone: phone,
    email: BUSINESS.email || undefined,
    address: { '@type': 'PostalAddress', addressLocality: BUSINESS.city || undefined, addressCountry: 'CO' },
    areaServed: BUSINESS.city ? [homeCity, ...serviceAreas] : serviceAreas,
    sameAs: Object.values(BUSINESS.social).filter(Boolean),
    contactPoint: { '@type': 'ContactPoint', telephone: phone, contactType: 'customer service', availableLanguage: 'es' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software, redes, seguridad y soporte técnico',
      itemListElement: SERVICES.map(offer),
    },
  };
  if (siteUrl) {
    Object.assign(node, { url: `${siteUrl}/`, image: absolute('/og-image.jpg'), logo: absolute('/favicon.png') });
  }
  return node;
}

const faqPage = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
});

const breadcrumb = (crumbs) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [['Inicio', '/'], ...crumbs].map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: absolute(path),
  })),
});

function structuredData(route) {
  const graph = [business()];
  if (route.path === '/') {
    graph.push(faqPage(FAQ));
    if (siteUrl) {
      graph.push({ '@type': 'WebSite', name: BUSINESS.name, url: `${siteUrl}/`, inLanguage: 'es-CO', publisher: { '@id': businessId } });
    }
  }
  if (route.crumbs) graph.push(breadcrumb(route.crumbs));
  if (route.service) {
    graph.push(
      {
        '@type': 'Service',
        name: route.service.title,
        serviceType: route.service.title,
        description: route.description,
        url: absolute(route.path),
        provider: { '@id': businessId },
        areaServed: route.service.national ? COUNTRY : homeCity,
      },
      faqPage(route.service.faqs),
    );
  }
  if (route.path === SOFTWARE_PATH) {
    graph.push(
      {
        '@type': 'Service',
        name: 'Desarrollo de software a la medida',
        serviceType: 'Desarrollo de software',
        description: route.description,
        url: absolute(route.path),
        provider: { '@id': businessId },
        areaServed: COUNTRY,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software, aplicaciones y páginas web',
          itemListElement: servicesOf(SOFTWARE_LINE).map(offer),
        },
      },
      faqPage(SOFTWARE_FAQ),
    );
  }
  if (route.project) {
    graph.push({
      '@type': 'CreativeWork',
      name: route.project.heading,
      description: route.description,
      url: absolute(route.path),
      creator: { '@id': businessId },
      contentLocation: { '@type': 'Place', name: route.project.place },
    });
  }
  if (route.path === '/contacto/') {
    graph.push({ '@type': 'ContactPage', name: route.title, url: absolute(route.path), about: { '@id': businessId } });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

// Etiquetas propias de cada página (título, descripción, URL canónica, vista previa, datos estructurados)
export function pageHeadHtml(path) {
  const route = findRoute(path) ?? findRoute('/');
  const url = absolute(route.path);
  const tags = [
    `<title>${escapeHtml(route.title)}</title>`,
    meta('name', 'description', route.description),
    meta('property', 'og:title', route.title),
    meta('property', 'og:description', route.description),
    meta('property', 'og:image', absolute('/og-image.jpg')),
    meta('name', 'twitter:title', route.title),
    meta('name', 'twitter:description', route.description),
    meta('name', 'twitter:image', absolute('/og-image.jpg')),
    `<script type="application/ld+json">${JSON.stringify(structuredData(route)).replace(/</g, '\\u003c')}</script>`,
  ];
  if (siteUrl) tags.push(`<link rel="canonical" href="${url}" />`, meta('property', 'og:url', url));
  return tags.join('\n    ');
}

// Etiquetas comunes a todas las páginas. Google Analytics solo en la versión publicada,
// con el consentimiento primero: sin permiso del visitante, Analytics no guarda cookies.
export function globalHeadHtml(isBuild) {
  const tags = [
    meta('name', 'robots', 'index, follow, max-image-preview:large'),
    meta('property', 'og:type', 'website'),
    meta('property', 'og:site_name', BUSINESS.name),
    meta('property', 'og:locale', 'es_CO'),
    meta('property', 'og:image:width', '1200'),
    meta('property', 'og:image:height', '630'),
    meta('property', 'og:image:alt', `${BUSINESS.name}: ${BUSINESS.tagline}`),
    meta('name', 'twitter:card', 'summary_large_image'),
  ];
  if (SITE.googleSiteVerification) tags.push(meta('name', 'google-site-verification', SITE.googleSiteVerification));
  if (isBuild && SITE.gaId) {
    tags.push(
      `<script>${consentHeadScript(SITE.gaId)}</script>`,
      `<script async src="https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}"></script>`,
    );
  }
  return tags.join('\n    ');
}
