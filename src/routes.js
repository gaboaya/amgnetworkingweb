import { BUSINESS } from './config.js';
import { SEO, inCity } from './seo.js';
import { SERVICES } from './data/services.js';

// Páginas del sitio: cada una se prerenderiza en su propia URL y va en el sitemap.
// `crumbs`: ruta de navegación después de "Inicio" (se muestra y se envía a Google).
export const servicePath = (service) => `/servicios/${service.slug}/`;

export const ROUTES = [
  { path: '/', title: SEO.title, description: SEO.description },
  {
    path: '/servicios/',
    title: `Servicios de Redes, CCTV y Soporte${inCity} | ${BUSINESS.name}`,
    description: `Instalación de redes, cámaras de seguridad, WiFi, mantenimiento de computadores y servidores, y soporte técnico${inCity}. Conoce cada servicio y cotiza.`,
    crumbs: [['Servicios', '/servicios/']],
  },
  ...SERVICES.map((service) => ({
    path: servicePath(service),
    title: `${service.seoTitle}${inCity} | ${BUSINESS.name}`,
    description: service.seoDescription,
    crumbs: [
      ['Servicios', '/servicios/'],
      [service.title, servicePath(service)],
    ],
    service,
  })),
  {
    path: '/contacto/',
    title: `Contacto y Cotizaciones${inCity} | ${BUSINESS.name}`,
    description: `Escríbenos por WhatsApp al ${BUSINESS.phoneDisplay}, llámanos o síguenos en redes. Cotiza redes, cámaras de seguridad y soporte técnico${inCity}.`,
    crumbs: [['Contacto', '/contacto/']],
  },
];

// "/servicios/redes-wifi" e "/index.html" → "/servicios/redes-wifi/" y "/"
export function normalizePath(path) {
  const clean = path.replace(/index\.html$/, '');
  return clean.endsWith('/') ? clean : `${clean}/`;
}

export const findRoute = (path) => ROUTES.find((route) => route.path === normalizePath(path));
