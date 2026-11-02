import { useRef, useState } from 'react';
import { track } from '../analytics';
import { whatsappLink } from '../config';
import { SERVICES } from '../data/services';
import { BrandIcon } from './BrandIcon';
import Module from './Module';

const portNumber = (i) => String(i + 1).padStart(2, '0');

// Panel de parcheo: cada servicio es un puerto RJ45 (pestaña); al "conectarlo" se muestra su detalle.
// Los 8 detalles están siempre en el HTML para que Google los lea; solo se oculta el inactivo.
export default function Services() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);

  const select = (i, focus = false) => {
    setActive(i);
    track('select_content', { content_type: 'servicio', content_id: SERVICES[i].short });
    if (focus) tabs.current[i]?.focus();
  };

  // Flechas, Inicio y Fin para moverse entre puertos con el teclado
  const onKeyDown = (e) => {
    const last = SERVICES.length - 1;
    const next = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(next, true);
  };

  return (
    <Module id="servicios" code="AMG-PP08" label="Panel de servicios · 8 puertos" units="4U">
      <div className="section-intro">
        <h2 className="title-lg">
          Panel de
          <br />
          servicios
        </h2>
        <p className="lead">
          Instalación de redes, cámaras de seguridad, WiFi y mantenimiento de equipos. Conecta un puerto para ver cada
          servicio en detalle y cotízalo directo por WhatsApp.
        </p>
      </div>

      <div className="ports" role="tablist" aria-label="Servicios" onKeyDown={onKeyDown}>
        {SERVICES.map((s, i) => (
          <button
            key={s.short}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`puerto-${i + 1}`}
            className={`port ${i === active ? 'is-active' : ''}`}
            aria-selected={i === active}
            aria-controls={`servicio-${i + 1}`}
            aria-label={`${portNumber(i)} ${s.title}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i)}
          >
            <span className="port-num">{portNumber(i)}</span>
            <span className={`led ${i === active ? '' : 'led-off'}`} />
            <span className="jack" aria-hidden="true" />
            <span className="port-label">{s.short}</span>
          </button>
        ))}
      </div>

      {SERVICES.map((s, i) => (
        <div
          key={s.short}
          id={`servicio-${i + 1}`}
          role="tabpanel"
          aria-labelledby={`puerto-${i + 1}`}
          className="readout"
          hidden={i !== active}
        >
          <div>
            <p className="eyebrow">Puerto {portNumber(i)} · Conectado</p>
            <h3>{s.title}</h3>
            <p className="lead">{s.description}</p>
            <a
              className="btn btn-wa"
              href={whatsappLink(`Hola AMG Networking, quiero cotizar: ${s.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              data-service={s.title}
            >
              <BrandIcon name="whatsapp" size={20} /> Cotizar este servicio
            </a>
          </div>
          <div>
            <p className="spec-title">Incluye</p>
            <ul className="spec-list">
              {s.items.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">›</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Module>
  );
}
