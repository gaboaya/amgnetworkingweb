import { Check } from 'lucide-react';
import { BUSINESS, phoneLink, whatsappLink } from '../config';
import { lineOf, relatedServices } from '../data/services';
import { SOFTWARE_CONTACT, SOFTWARE_PATH, SOFTWARE_PROCESS } from '../data/software';
import { PHOTOS } from '../photos';
import { servicePath } from '../routes';
import { inCity } from '../seo';
import PageHeader from '../components/PageHeader';
import { FaqList } from '../components/Faq';
import Process from '../components/Process';
import Contact from '../components/Contact';

// Página propia de cada servicio (/servicios/<slug>/ y /desarrollo-de-software/<slug>/)
export default function ServicePage({ service, crumbs }) {
  const isSoftware = service.base === SOFTWARE_PATH;
  const quoteLink = whatsappLink(`Hola AMG Networking, quiero cotizar: ${service.title}.`);

  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow={lineOf(service).title}
        title={service.heading ?? `${service.title}${inCity}`}
        lead={service.intro}
        photo={PHOTOS[service.photo]}
        actions={
          <>
            <a className="btn btn-primary" href={quoteLink} target="_blank" rel="noopener noreferrer" data-service={service.title}>
              Cotizar este servicio
            </a>
            <a className="btn btn-outline" href={phoneLink}>
              Llamar: {BUSINESS.phoneDisplay}
            </a>
          </>
        }
      />

      <div className="wrap service-layout">
        <div className="service-main">
          <section>
            <h2 className="service-heading">Qué incluye el servicio</h2>
            <ul className="check-list">
              {service.items.map((item) => (
                <li key={item}>
                  <Check size={20} strokeWidth={2.25} aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="service-heading">A quién va dirigido</h2>
            <ul className="audience-grid">
              {service.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="service-heading">Preguntas frecuentes</h2>
            <FaqList items={service.faqs} />
          </section>
        </div>

        <aside className="service-aside">
          <div className="quote-card">
            <h2>Solicite una cotización</h2>
            <p>Cuéntenos qué necesita y dónde. Le responderemos directamente por WhatsApp.</p>
            <a
              className="btn btn-primary btn-block"
              href={quoteLink}
              target="_blank"
              rel="noopener noreferrer"
              data-service={service.title}
            >
              Escribir por WhatsApp
            </a>
            <p className="quote-phone">
              O llámenos al <a href={phoneLink}>{BUSINESS.phoneDisplay}</a>
            </p>
          </div>

          <nav className="other-services" aria-label="Otros servicios">
            <h2>Otros servicios</h2>
            <ul>
              {isSoftware && (
                <li>
                  <a href={SOFTWARE_PATH}>Desarrollo de software</a>
                </li>
              )}
              {relatedServices(service).map((s) => (
                <li key={s.slug}>
                  <a href={servicePath(s)}>{s.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      <Process {...(isSoftware ? SOFTWARE_PROCESS : {})} />
      <Contact defaultService={service.title} copy={isSoftware ? SOFTWARE_CONTACT : undefined} />
    </>
  );
}
