import { ChevronRight } from 'lucide-react';
import { SERVICE_LINES, servicesOf } from '../data/services';
import { PHOTOS } from '../photos';
import { servicePath } from '../routes';

// Las tres líneas de servicio de la página de inicio, con enlace a cada servicio
export default function ServiceLines() {
  return (
    <section id="servicios" className="section section-alt">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Infraestructura</p>
            <h2 className="section-title">Tres líneas de servicio para toda su infraestructura</h2>
          </div>
          <p className="section-lead">
            Desde el primer punto de red hasta el soporte diario de sus equipos, un solo proveedor responde por el
            funcionamiento de su tecnología.
          </p>
        </div>

        <div className="lines">
          {SERVICE_LINES.map((line) => (
            <article key={line.title} className="line-card">
              <img {...PHOTOS[line.photo]} loading="lazy" />
              <div className="line-body">
                <h3>{line.title}</h3>
                <p>{line.description}</p>
                <ul className="link-list">
                  {servicesOf(line).map((service) => (
                    <li key={service.slug}>
                      <a href={servicePath(service)}>
                        {service.title} <ChevronRight size={18} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
