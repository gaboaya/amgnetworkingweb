import soluciones from '../assets/soluciones.webp';
import soluciones800 from '../assets/soluciones-800.webp';
import { whatsappLink } from '../config';
import { SERVICES } from '../data/services';
import { inCity } from '../seo';
import { BrandIcon } from '../components/BrandIcon';
import PageHeader from '../components/PageHeader';
import ServiceLinks from '../components/ServiceLinks';
import Process from '../components/Process';
import Contact from '../components/Contact';

// Página con todos los servicios (/servicios/)
export default function ServicesPage({ crumbs }) {
  return (
    <>
      <PageHeader
        code="AMG-PP08"
        label="Servicios · 8 puertos"
        units="4U"
        crumbs={crumbs}
        eyebrow="Redes · Cámaras de seguridad · Soporte técnico"
        title={`Servicios de redes y seguridad${inCity}`}
        lead="Instalamos y mantenemos la infraestructura tecnológica de hogares y empresas: redes de datos, cámaras de seguridad, WiFi, computadores y servidores, con soporte remoto y en sitio."
        actions={
          <a
            className="btn btn-wa"
            href={whatsappLink('Hola AMG Networking, quiero una cotización.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandIcon name="whatsapp" size={22} /> Cotizar por WhatsApp
          </a>
        }
        aside={
          <figure className="monitor">
            <img
              src={soluciones}
              srcSet={`${soluciones800} 800w, ${soluciones} 1600w`}
              sizes="(max-width: 900px) 100vw, 600px"
              width="1600"
              height="900"
              alt="AMG Networking: redes, seguridad informática y soluciones tecnológicas"
            />
            <figcaption>
              <span>CAM 03 · Soluciones AMG</span>
            </figcaption>
          </figure>
        }
      />
      <ServiceLinks
        id="servicios"
        code="AMG-CAT"
        label="Catálogo de servicios"
        title="Elige un servicio"
        lead="Cada servicio tiene su página con lo que incluye, para quién es y respuestas a las preguntas más comunes."
        services={SERVICES}
      />
      <Process />
      <Contact />
    </>
  );
}
