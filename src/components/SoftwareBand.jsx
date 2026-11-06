import { ChartColumn, ChevronRight, FileCheck, Package, ShoppingCart } from 'lucide-react';
import { SOFTWARE_LINE, SOFTWARE_PATH } from '../data/software';
import { SERVICES, servicesOf } from '../data/services';
import { servicePath } from '../routes';

// Lo que hace el sistema por sí solo después de una venta
const SALE_FLOW = [
  { icon: ShoppingCart, title: 'Ventas', text: 'Se registra el pedido del cliente.' },
  { icon: Package, title: 'Inventario', text: 'Las existencias se descuentan solas.' },
  { icon: FileCheck, title: 'Facturación electrónica', text: 'La factura se emite con validación previa de la DIAN.' },
  { icon: ChartColumn, title: 'Reportes', text: 'El informe de ventas queda al día.' },
];

// Facturación electrónica ya aparece en el ejemplo, por eso esta lista muestra los otros tres
const OFFERS = servicesOf(SOFTWARE_LINE).filter((service) => service !== SERVICES.find((s) => s.slug === 'facturacion-electronica'));

// Franja del inicio que presenta el desarrollo de software
export default function SoftwareBand() {
  return (
    <section id="software" className="section section-navy">
      <div className="wrap band">
        <div>
          <p className="eyebrow">Desarrollo de software</p>
          <h2 className="section-title">Toda su empresa en un mismo software</h2>
          <p className="band-text">
            Creamos páginas web, aplicaciones y software empresarial a la medida. Automatizamos los procesos de toda la
            empresa para que inventario, ventas y facturación electrónica trabajen en un solo sistema.
          </p>
          <ul className="band-links">
            {OFFERS.map((service) => (
              <li key={service.slug}>
                <a href={servicePath(service)}>
                  {service.title} <ChevronRight size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary" href={SOFTWARE_PATH}>
            Conocer el desarrollo de software
          </a>
        </div>

        <div className="sale-panel">
          <p className="eyebrow">Un ejemplo</p>
          <h3>Qué pasa cuando registra una venta</h3>
          <ol className="sale-flow">
            {SALE_FLOW.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <span className="icon-tile">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="sale-note">Un solo registro, sin digitar dos veces.</p>
        </div>
      </div>
    </section>
  );
}
