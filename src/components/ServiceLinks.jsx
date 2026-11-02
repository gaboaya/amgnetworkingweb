import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { servicePath } from '../routes';
import Module from './Module';

// Tarjetas con enlace a la página de cada servicio
export default function ServiceLinks({ id, code, label, title, lead, services }) {
  return (
    <Module id={id} code={code} label={label} units="2U">
      <div className="section-intro">
        <h2 className="title-lg">{title}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
      <ul className="service-grid">
        {services.map((service) => (
          <li key={service.slug}>
            <a className="service-card" href={servicePath(service)}>
              <span className="service-card-head">
                <span className="port-num">{String(SERVICES.indexOf(service) + 1).padStart(2, '0')}</span>
                <span className="led" />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-card-more">
                Ver servicio <ArrowRight size={16} aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Module>
  );
}
