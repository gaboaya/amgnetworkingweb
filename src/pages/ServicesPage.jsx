import { ArrowRight } from 'lucide-react';
import { SERVICE_LINES, servicesOf } from '../data/services';
import { SOFTWARE_LINE } from '../data/software';
import { PHOTOS } from '../photos';
import { servicePath } from '../routes';
import { inCity } from '../seo';
import PageHeader from '../components/PageHeader';
import Process from '../components/Process';
import Contact from '../components/Contact';

// Página con todos los servicios (/servicios/), agrupados por línea
export default function ServicesPage({ crumbs }) {
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow="Servicios"
        title={`Servicios de software, redes y seguridad${inCity}`}
        lead="Desarrollamos software para empresas e instalamos y mantenemos su infraestructura tecnológica: redes de datos, radioenlaces, cámaras de seguridad, WiFi, computadores y servidores, con soporte remoto y en sitio."
        photo={PHOTOS.equipo}
        actions={
          <a className="btn btn-primary" href="/contacto/">
            Solicitar cotización
          </a>
        }
      />

      <div id="servicios" className="wrap section catalog">
        {[SOFTWARE_LINE, ...SERVICE_LINES].map((line) => (
          <section key={line.title} className="catalog-line">
            <div>
              <h2>{line.title}</h2>
              <p className="catalog-intro">{line.description}</p>
            </div>
            <ul className="catalog-grid">
              {servicesOf(line).map((service) => (
                <li key={service.slug}>
                  <a className="catalog-card" href={servicePath(service)}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="catalog-more">
                      Ver servicio <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Process />
      <Contact />
    </>
  );
}
