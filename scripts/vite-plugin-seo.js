// Plugin de Vite que genera, a partir de src/config.js, todo lo que leen buscadores y redes:
// título, descripción, Open Graph, datos estructurados (JSON-LD), Google Analytics,
// verificación de Search Console, robots.txt y sitemap.xml.
import { BUSINESS, SITE } from '../src/config.js';
import { consentHeadScript } from '../src/consent.js';
import { SEO } from '../src/seo.js';
import { SERVICES } from '../src/data/services.js';
import { FAQ } from '../src/data/faq.js';

const siteUrl = SITE.url.replace(/\/+$/, '');
const absolute = (path) => (siteUrl ? `${siteUrl}${path}` : path);
const phone = `+${BUSINESS.whatsapp}`;

function structuredData() {
  const business = {
    '@type': 'ProfessionalService',
    name: BUSINESS.name,
    slogan: BUSINESS.tagline,
    description: SEO.description,
    telephone: phone,
    email: BUSINESS.email || undefined,
    address: { '@type': 'PostalAddress', addressLocality: BUSINESS.city || undefined, addressCountry: 'CO' },
    areaServed: BUSINESS.city ? { '@type': 'City', name: BUSINESS.city } : { '@type': 'Country', name: 'Colombia' },
    sameAs: Object.values(BUSINESS.social).filter(Boolean),
    contactPoint: { '@type': 'ContactPoint', telephone: phone, contactType: 'customer service', availableLanguage: 'es' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de redes, seguridad y soporte técnico',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.description },
      })),
    },
  };
  if (siteUrl) {
    Object.assign(business, {
      '@id': `${siteUrl}/#negocio`,
      url: `${siteUrl}/`,
      image: absolute('/og-image.jpg'),
      logo: absolute('/favicon.png'),
    });
  }

  const graph = [
    business,
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ];
  if (siteUrl) {
    graph.push({
      '@type': 'WebSite',
      name: BUSINESS.name,
      url: `${siteUrl}/`,
      inLanguage: 'es-CO',
      publisher: { '@id': `${siteUrl}/#negocio` },
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

const meta = (attrs) => ({ tag: 'meta', attrs, injectTo: 'head' });

function headTags(isBuild) {
  const tags = [
    { tag: 'title', children: SEO.title, injectTo: 'head' },
    meta({ name: 'description', content: SEO.description }),
    meta({ name: 'robots', content: 'index, follow, max-image-preview:large' }),
    meta({ property: 'og:type', content: 'website' }),
    meta({ property: 'og:site_name', content: BUSINESS.name }),
    meta({ property: 'og:locale', content: 'es_CO' }),
    meta({ property: 'og:title', content: SEO.title }),
    meta({ property: 'og:description', content: SEO.description }),
    meta({ property: 'og:image', content: absolute('/og-image.jpg') }),
    meta({ property: 'og:image:width', content: '1200' }),
    meta({ property: 'og:image:height', content: '630' }),
    meta({ property: 'og:image:alt', content: `${BUSINESS.name}: ${BUSINESS.tagline}` }),
    meta({ name: 'twitter:card', content: 'summary_large_image' }),
    meta({ name: 'twitter:title', content: SEO.title }),
    meta({ name: 'twitter:description', content: SEO.description }),
    meta({ name: 'twitter:image', content: absolute('/og-image.jpg') }),
    {
      tag: 'script',
      attrs: { type: 'application/ld+json' },
      children: JSON.stringify(structuredData()).replace(/</g, '\\u003c'),
      injectTo: 'head',
    },
  ];

  if (siteUrl) {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' });
    tags.push(meta({ property: 'og:url', content: `${siteUrl}/` }));
  }
  if (SITE.googleSiteVerification) {
    tags.push(meta({ name: 'google-site-verification', content: SITE.googleSiteVerification }));
  }
  // Google Analytics solo en la versión publicada, para no contar las visitas de desarrollo.
  // El consentimiento va primero: sin permiso del visitante, Analytics no guarda cookies.
  if (isBuild && SITE.gaId) {
    tags.push(
      { tag: 'script', children: consentHeadScript(SITE.gaId), injectTo: 'head' },
      {
        tag: 'script',
        attrs: { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}` },
        injectTo: 'head',
      },
    );
  }
  return tags;
}

export default function seo() {
  let isBuild = false;
  let isSsr = false;

  return {
    name: 'amg-seo',
    configResolved(config) {
      isBuild = config.command === 'build';
      isSsr = Boolean(config.build.ssr);
    },
    transformIndexHtml() {
      return headTags(isBuild);
    },
    generateBundle() {
      if (isSsr) return;
      const robots = ['User-agent: *', 'Allow: /'];
      if (siteUrl) robots.push('', `Sitemap: ${siteUrl}/sitemap.xml`);
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `${robots.join('\n')}\n` });

      if (!siteUrl) {
        this.warn('SITE.url está vacío en src/config.js: no se generó sitemap.xml ni la URL canónica.');
        return;
      }
      const today = new Date().toISOString().slice(0, 10);
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`,
      });
    },
  };
}
