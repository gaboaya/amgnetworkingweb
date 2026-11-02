import { BUSINESS } from '../config';
import { inCity } from '../seo';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

// Página de contacto (/contacto/)
export default function ContactPage({ crumbs }) {
  return (
    <>
      <PageHeader
        code="AMG-CON00"
        label="Contacto"
        crumbs={crumbs}
        eyebrow="WhatsApp · Llamada · Redes sociales"
        title={`Contacto y cotizaciones${inCity}`}
        lead={`Escríbenos por WhatsApp al ${BUSINESS.phoneDisplay}, llámanos o déjanos tu mensaje en el formulario. Atendemos hogares y empresas${inCity} y te respondemos directamente por WhatsApp.`}
      />
      <Contact />
    </>
  );
}
