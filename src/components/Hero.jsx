import { whatsappLink } from '../config';
import { PHOTOS } from '../photos';
import { SEO } from '../seo';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Software e infraestructura tecnológica</p>
        <h1 className="hero-title">{SEO.headline}</h1>
        <p className="hero-lead">
          Desarrollamos el software que administra su empresa, del inventario a la facturación electrónica, e instalamos
          las redes y cámaras que la mantienen conectada y segura. Un solo responsable de principio a fin.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href="#contacto">
            Solicitar cotización
          </a>
          <a className="btn btn-outline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="wa-icon" /> Escribir por WhatsApp
          </a>
        </div>
      </div>
      <div className="hero-media">
        <img {...PHOTOS.equipo} fetchPriority="high" />
      </div>
    </section>
  );
}
