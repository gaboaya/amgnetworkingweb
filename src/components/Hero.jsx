import { ArrowDown } from 'lucide-react';
import centro from '../assets/centro-operaciones.webp';
import centro800 from '../assets/centro-operaciones-800.webp';
import { whatsappLink } from '../config';
import { SEO } from '../seo';
import { BrandIcon } from './BrandIcon';
import Module from './Module';

const INDICATORS = [
  { led: 'led-green', label: 'ENLACE' },
  { led: 'led-amber', label: 'CCTV' },
  { led: '', label: 'SOPORTE' },
  { led: 'led-green', label: 'WIFI' },
];

export default function Hero() {
  return (
    <Module id="inicio" code="AMG-OPS01" label="Centro de operaciones" units="8U" status="En línea" className="hero">
      <div className="hero-grid">
        <div>
          {/* El H1 lleva las palabras clave (línea pequeña) y el lema de la marca (texto grande) */}
          <h1 className="hero-title">
            <span className="eyebrow">{SEO.headline}</span>
            <span className="title-xl">
              Redes que
              <br />
              <span className="accent">no se caen.</span>
            </span>
          </h1>
          <p className="lead">
            Instalamos, configuramos y mantenemos redes, cámaras de seguridad, computadores y servidores para que tu
            hogar o negocio siga en línea.
          </p>

          <div className="actions">
            <a
              className="btn btn-wa"
              href={whatsappLink('Hola AMG Networking, quiero una cotización.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandIcon name="whatsapp" size={22} /> Cotizar por WhatsApp
            </a>
            <a className="btn btn-panel" href="#servicios">
              Ver panel de servicios <ArrowDown size={18} />
            </a>
          </div>

          <div className="indicators" aria-hidden="true">
            {INDICATORS.map(({ led, label }) => (
              <span key={label}>
                <span className={`led ${led}`} /> {label}
              </span>
            ))}
          </div>
        </div>

        <figure className="monitor">
          <div className="monitor-screen">
            <img
              src={centro}
              srcSet={`${centro800} 800w, ${centro} 1600w`}
              sizes="(max-width: 900px) 100vw, 640px"
              width="1600"
              height="900"
              alt="Equipo de AMG Networking monitoreando cámaras, trabajando en un rack de red e instalando un access point"
              fetchPriority="high"
            />
            <span className="corner corner-tl" aria-hidden="true" />
            <span className="corner corner-tr" aria-hidden="true" />
            <span className="corner corner-bl" aria-hidden="true" />
            <span className="corner corner-br" aria-hidden="true" />
          </div>
          <figcaption>
            <span>CAM 01 · Centro de operaciones AMG</span>
            <span className="rec">
              <span className="led blink" /> REC
            </span>
          </figcaption>
        </figure>
      </div>
    </Module>
  );
}
