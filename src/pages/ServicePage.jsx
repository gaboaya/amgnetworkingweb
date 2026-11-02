import { Phone } from 'lucide-react';
import { phoneLink, whatsappLink } from '../config';
import { SERVICES } from '../data/services';
import { inCity } from '../seo';
import { BrandIcon } from '../components/BrandIcon';
import PageHeader from '../components/PageHeader';
import Process from '../components/Process';
import Faq from '../components/Faq';
import ServiceLinks from '../components/ServiceLinks';
import Contact from '../components/Contact';

// Página propia de cada servicio (/servicios/<slug>/)
export default function ServicePage({ service, crumbs }) {
  const port = String(SERVICES.indexOf(service) + 1).padStart(2, '0');

  return (
    <>
      <PageHeader
        code={`AMG-SRV${port}`}
        label={`Servicio · Puerto ${port}`}
        units="4U"
        crumbs={crumbs}
        eyebrow={`Puerto ${port} · ${service.short}`}
        title={`${service.title}${inCity}`}
        lead={service.intro}
        actions={
          <>
            <a
              className="btn btn-wa"
              href={whatsappLink(`Hola AMG Networking, quiero cotizar: ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              data-service={service.title}
            >
              <BrandIcon name="whatsapp" size={22} /> Cotizar por WhatsApp
            </a>
            <a className="btn btn-panel" href={phoneLink}>
              <Phone size={18} aria-hidden="true" /> Llamar
            </a>
          </>
        }
        aside={
          <aside className="spec-sheet" aria-label={`Detalles de ${service.title.toLowerCase()}`}>
            <h2 className="spec-title">Incluye</h2>
            <ul className="spec-list">
              {service.items.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">›</span> {item}
                </li>
              ))}
            </ul>
            <h2 className="spec-title spec-title-gap">Ideal para</h2>
            <ul className="spec-list">
              {service.idealFor.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">›</span> {item}
                </li>
              ))}
            </ul>
          </aside>
        }
      />
      <Process />
      <Faq items={service.faqs} lead={`Lo que más nos preguntan sobre ${service.title.toLowerCase()}.`} />
      <ServiceLinks
        id="otros-servicios"
        code="AMG-PP08"
        label="Otros puertos"
        title="Otros servicios"
        services={SERVICES.filter((s) => s !== service)}
      />
      <Contact defaultService={service.title} />
    </>
  );
}
