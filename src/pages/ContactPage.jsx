import { BUSINESS } from '../config';
import { inCity } from '../seo';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

// Página de contacto (/contacto/)
export default function ContactPage({ crumbs }) {
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow="Contacto"
        title={`Contacto y cotizaciones${inCity}`}
        lead={`Escríbanos por WhatsApp al ${BUSINESS.phoneDisplay}, llámenos o déjenos su mensaje en el formulario. Atendemos empresas y hogares${inCity} y le respondemos directamente por WhatsApp.`}
      />
      <Contact />
    </>
  );
}
