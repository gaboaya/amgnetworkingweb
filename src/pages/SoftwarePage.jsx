import { ArrowRight, Building2, ChartColumn, Check, ChevronUp, FileCheck, Globe, Layers, Package, ShoppingCart, Smartphone, Truck } from 'lucide-react';
import { whatsappLink } from '../config';
import { SOFTWARE_CONTACT, SOFTWARE_FAQ, SOFTWARE_PATH, SOFTWARE_PROCESS } from '../data/software';
import { PHOTOS } from '../photos';
import { PROJECTS_PATH } from '../routes';
import Contact from '../components/Contact';
import Faq from '../components/Faq';
import PageHeader from '../components/PageHeader';
import Process from '../components/Process';
import WhatsAppIcon from '../components/WhatsAppIcon';

const MODULES = [
  { icon: Package, title: 'Inventario', text: 'Existencias por bodega y sede, con movimientos y alertas de reposición.' },
  { icon: ShoppingCart, title: 'Ventas', text: 'Cotizaciones, pedidos y clientes en un solo lugar, desde cualquier sede.' },
  {
    icon: FileCheck,
    title: 'Facturación electrónica',
    text: 'Facturas generadas desde cada venta, con validación previa de la DIAN.',
    href: `${SOFTWARE_PATH}facturacion-electronica/`,
  },
  { icon: Truck, title: 'Compras', text: 'Proveedores y órdenes de compra que actualizan el inventario al recibir.' },
  { icon: ChartColumn, title: 'Reportes', text: 'Ventas y existencias al día para decidir con información confiable.' },
  { icon: Building2, title: 'Sedes y usuarios', text: 'Varias sedes en un mismo sistema, con permisos según cada cargo.' },
];

const OFFERS = [
  {
    icon: Layers,
    title: 'Software empresarial',
    text: 'Un sistema hecho a la medida de su operación, que reúne inventario, ventas y facturación electrónica.',
    items: ['Módulos según sus procesos', 'Una sola base de información', 'Facturación electrónica incluida'],
    href: `${SOFTWARE_PATH}software-empresarial/`,
    more: 'Ver software empresarial',
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones para empresas',
    text: 'Aplicaciones que automatizan tareas internas y conectan a su equipo, en la oficina o en campo.',
    items: ['Aplicaciones web y móviles', 'Automatización de procesos', 'Conexión con otros sistemas'],
    href: `${SOFTWARE_PATH}aplicaciones/`,
    more: 'Ver aplicaciones',
  },
  {
    icon: Globe,
    title: 'Páginas web',
    text: 'Sitios corporativos rápidos y claros, preparados para aparecer en Google y generar contactos.',
    items: ['Diseño propio para su marca', 'Optimización para Google (SEO)', 'WhatsApp, formularios y analítica'],
    href: `${SOFTWARE_PATH}paginas-web/`,
    more: 'Ver páginas web',
  },
];

const COMPARISON = [
  { aspect: 'Procesos', standard: 'Su empresa se adapta al programa.', custom: 'El software se adapta a su empresa.' },
  { aspect: 'Funciones', standard: 'Las que trae el paquete.', custom: 'Las que su operación realmente usa.' },
  { aspect: 'Integración', standard: 'Puede requerir otros programas.', custom: 'Inventario, ventas y facturación en un solo sistema.' },
  { aspect: 'Crecimiento', standard: 'Depende del fabricante.', custom: 'Se agregan módulos cuando los necesita.' },
];

// De arriba hacia abajo: de la factura al cable
const LAYERS = [
  'Facturación electrónica',
  'Software empresarial',
  'Aplicaciones y páginas web',
  'Servidores y computadores',
  'Redes, WiFi y cámaras de seguridad',
  'Cableado y fibra óptica',
];

// Página principal de desarrollo de software (/desarrollo-de-software/)
export default function SoftwarePage({ crumbs }) {
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow="Software, aplicaciones y páginas web"
        title="Desarrollo de software a la medida para empresas en Colombia"
        lead="Creamos software empresarial, aplicaciones y páginas web que automatizan los procesos de toda su empresa: del inventario a las ventas y la facturación electrónica, en un mismo sistema."
        photo={PHOTOS.software}
        actions={
          <>
            <a className="btn btn-primary" href="#contacto">
              Cotizar mi proyecto
            </a>
            <a
              className="btn btn-outline"
              href={whatsappLink('Hola AMG Networking, quiero cotizar: Desarrollo de software.')}
              target="_blank"
              rel="noopener noreferrer"
              data-service="Desarrollo de software"
            >
              <WhatsAppIcon className="wa-icon" /> Escribir por WhatsApp
            </a>
          </>
        }
      />

      <section id="sistema" className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Software empresarial</p>
              <h2 className="section-title">Un mismo sistema para toda su operación</h2>
            </div>
            <p className="section-lead">
              Cada área trabaja sobre la misma información. Lo que se vende en una sede se descuenta del inventario y queda
              listo para facturar, sin digitar dos veces ni cruzar archivos.
            </p>
          </div>
          <ul className="modules">
            {MODULES.map(({ icon: Icon, title, text, href }) => (
              <li key={title} className="module">
                <span className="icon-tile">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3>{href ? <a href={href}>{title}</a> : title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="desarrollamos" className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Qué desarrollamos</p>
              <h2 className="section-title">Software, aplicaciones y páginas web para empresas</h2>
            </div>
            <p className="section-lead">Empezamos por lo que su empresa necesita hoy y dejamos el sistema listo para crecer.</p>
          </div>
          <div className="offers">
            {OFFERS.map(({ icon: Icon, title, text, items, href, more }) => (
              <article key={title} className="offer-card">
                <span className="offer-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul className="offer-list">
                  {items.map((item) => (
                    <li key={item}>
                      <Check size={18} strokeWidth={2.25} aria-hidden="true" /> {item}
                    </li>
                  ))}
                </ul>
                <a className="more-link" href={href}>
                  {more} <ArrowRight size={17} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="comparacion" className="section">
        <div className="wrap split compare-section">
          <div>
            <p className="eyebrow">Antes de decidir</p>
            <h2 className="section-title">¿Software a la medida o programa estándar?</h2>
            <p className="about-text">
              Un programa estándar puede ser suficiente si sus procesos son simples. Cuando hay varias sedes, particularidades
              o mucho trabajo manual, un desarrollo a la medida suele rendir más. En el diagnóstico le decimos con claridad cuál
              le conviene.
            </p>
          </div>
          <div className="compare-wrap" role="region" aria-label="Comparación entre programa estándar y software a la medida" tabIndex={0}>
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col">Aspecto</th>
                  <th scope="col">Programa estándar</th>
                  <th scope="col">Software a la medida</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(({ aspect, standard, custom }) => (
                  <tr key={aspect}>
                    <th scope="row">{aspect}</th>
                    <td data-label="Programa estándar">{standard}</td>
                    <td data-label="Software a la medida">{custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="un-solo-responsable" className="section section-navy">
        <div className="wrap band">
          <div>
            <p className="eyebrow">Por qué AMG Networking</p>
            <h2 className="section-title">Del cable a la factura, un solo responsable</h2>
            <p className="band-text">
              Normalmente una empresa contrata por separado a quien instala la red y a quien desarrolla el software. Cuando algo
              falla, cada uno señala al otro. En AMG Networking el mismo equipo responde por toda la cadena.
            </p>
            <div className="band-actions">
              <a className="btn btn-primary" href="#contacto">
                Cotizar mi proyecto
              </a>
              <a className="more-link is-light" href={PROJECTS_PATH}>
                Ver nuestros proyectos <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="stack">
            <div className="stack-rail" aria-hidden="true">
              <ChevronUp size={24} />
            </div>
            <ul>
              {LAYERS.map((layer) => (
                <li key={layer}>{layer}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Process {...SOFTWARE_PROCESS} light />
      <Faq title="Preguntas sobre desarrollo de software" items={SOFTWARE_FAQ} alt />
      <Contact defaultService="Software empresarial" copy={SOFTWARE_CONTACT} plain />
    </>
  );
}
