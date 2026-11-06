import logo from '../assets/logo-oscuro.webp';
import { BUSINESS, SOCIAL_LINKS, locationLabel, phoneIntl, phoneLink, whatsappLink } from '../config';
import { openCookieSettings } from '../consent';
import { SERVICE_LINES, servicesOf } from '../data/services';
import { SOFTWARE_LINE } from '../data/software';
import { PROJECTS_PATH, servicePath } from '../routes';

function LineLinks({ line }) {
  return (
    <>
      <p className="footer-title">{line.title}</p>
      <ul>
        {servicesOf(line).map((service) => (
          <li key={service.slug}>
            <a href={servicePath(service)}>{service.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Footer() {
  const [redes, seguridad, soporte] = SERVICE_LINES;

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <img className="footer-logo" src={logo} alt="AMG Networking" width="444" height="180" loading="lazy" />
          <p className="footer-tagline">{BUSINESS.tagline}</p>
        </div>

        {/* Enlaces a todas las páginas: ayudan a Google a encontrarlas */}
        <nav className="footer-col" aria-label="Software y empresa">
          <LineLinks line={SOFTWARE_LINE} />
          <p className="footer-title">Empresa</p>
          <ul>
            <li>
              <a href={PROJECTS_PATH}>Proyectos</a>
            </li>
            <li>
              <a href="/#marcas">Marcas</a>
            </li>
            <li>
              <a href="/#empresa">Quiénes somos</a>
            </li>
            <li>
              <a href="/#preguntas">Preguntas frecuentes</a>
            </li>
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Redes y seguridad">
          <LineLinks line={redes} />
          <LineLinks line={seguridad} />
        </nav>

        <div className="footer-col">
          <LineLinks line={soporte} />
          <p className="footer-title">Contacto</p>
          <ul>
            <li>{locationLabel}</li>
            <li>
              <a href={phoneLink}>{phoneIntl}</a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            {SOCIAL_LINKS.map(({ name, url, label }) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-legal">
        <div className="wrap">
          {/* El año se calcula en el navegador; puede diferir del HTML prerenderizado */}
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos reservados.
          </span>
          <div className="footer-legal-links">
            <a href="/politica-de-privacidad.html">Política de privacidad</a>
            <button type="button" className="footer-link" onClick={openCookieSettings}>
              Configurar cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
