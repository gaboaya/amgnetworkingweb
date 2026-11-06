import { BUSINESS } from './config.js';
import { SEO, inCity } from './seo.js';
import { PROJECTS } from './data/projects.js';
import { SERVICES } from './data/services.js';
import { SOFTWARE_PATH } from './data/software.js';

// Páginas del sitio: cada una se prerenderiza en su propia URL y va en el sitemap.
// `crumbs`: ruta de navegación después de "Inicio" (se muestra y se envía a Google).
export const PROJECTS_PATH = '/proyectos/';
export const servicePath = (service) => `${service.base ?? '/servicios/'}${service.slug}/`;
export const projectPath = (project) => `${PROJECTS_PATH}${project.slug}/`;

const softwareCrumb = ['Desarrollo de software', SOFTWARE_PATH];
const servicesCrumb = ['Servicios', '/servicios/'];
const projectsCrumb = ['Proyectos', PROJECTS_PATH];

export const ROUTES = [
  { path: '/', title: SEO.title, description: SEO.description },
  {
    path: SOFTWARE_PATH,
    title: `Desarrollo de Software a la Medida en Colombia | ${BUSINESS.name}`,
    description:
      'Desarrollamos software empresarial a la medida: inventario, ventas y facturación electrónica en un solo sistema, además de aplicaciones y páginas web.',
    crumbs: [softwareCrumb],
  },
  {
    path: '/servicios/',
    title: `Servicios de Software, Redes y CCTV${inCity} | ${BUSINESS.name}`,
    description:
      'Desarrollo de software, páginas web, instalación de redes, radioenlaces, cámaras de seguridad, mantenimiento de equipos y soporte técnico. Cotice aquí.',
    crumbs: [servicesCrumb],
  },
  ...SERVICES.map((service) => ({
    path: servicePath(service),
    title: `${service.seoTitle}${service.national ? '' : inCity} | ${BUSINESS.name}`,
    description: service.seoDescription,
    crumbs: [service.base ? softwareCrumb : servicesCrumb, [service.title, servicePath(service)]],
    service,
  })),
  {
    path: PROJECTS_PATH,
    title: `Proyectos de Redes, CCTV y Radioenlaces | ${BUSINESS.name}`,
    description:
      'Conozca proyectos de cámaras de seguridad, redes y radioenlaces en Bucaramanga y el Huila: empresas con varias sedes y fincas conectadas con Starlink.',
    crumbs: [projectsCrumb],
  },
  ...PROJECTS.map((project) => ({
    path: projectPath(project),
    title: `${project.seoTitle} | ${BUSINESS.name}`,
    description: project.seoDescription,
    crumbs: [projectsCrumb, [project.crumb, projectPath(project)]],
    project,
  })),
  {
    path: '/contacto/',
    title: `Contacto y Cotizaciones${inCity} | ${BUSINESS.name}`,
    description: `Escríbanos por WhatsApp al ${BUSINESS.phoneDisplay}, llámenos o síganos en redes. Cotice software, redes, cámaras de seguridad y soporte técnico.`,
    crumbs: [['Contacto', '/contacto/']],
  },
];

// "/servicios/redes-wifi" e "/index.html" → "/servicios/redes-wifi/" y "/"
export function normalizePath(path) {
  const clean = path.replace(/index\.html$/, '');
  return clean.endsWith('/') ? clean : `${clean}/`;
}

export const findRoute = (path) => ROUTES.find((route) => route.path === normalizePath(path));
