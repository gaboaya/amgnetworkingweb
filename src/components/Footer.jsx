import logo from '../assets/logo.webp';
import { BUSINESS, whatsappLink } from '../config';
import { openCookieSettings } from '../consent';
import { SERVICES } from '../data/services';
import { servicePath } from '../routes';
import { SEO } from '../seo';
import { SocialLinks } from './BrandIcon';
import { Screws } from './Module';

export default function Footer() {
  return (
    <footer className="module footer">
      <Screws sides />
      <span className="logo-plate">
        <img src={logo} alt="AMG Networking" width="520" height="216" loading="lazy" />
      </span>
      <p className="footer-tagline">{BUSINESS.tagline}</p>
      <span className="footer-spacer" />
      <SocialLinks />

      {/* Enlaces a todas las páginas: ayudan a Google a encontrarlas */}
      <div className="footer-links">
        <nav aria-label="Servicios">
          <p className="footer-links-title">SERVICIOS</p>
          <ul>
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <a href={servicePath(service)}>{service.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Sitio">
          <p className="footer-links-title">SITIO</p>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/servicios/">Todos los servicios</a>
            </li>
            <li>
              <a href="/#preguntas">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="/contacto/">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>

      <p className="footer-nap">
        {SEO.headline}. WhatsApp:{' '}
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          {BUSINESS.phoneDisplay}
        </a>
      </p>
      <div className="footer-bottom">
        {/* El año se calcula en el navegador; puede diferir del HTML prerenderizado */}
        <span suppressHydrationWarning>
          © {new Date().getFullYear()} {BUSINESS.name}
        </span>
        <a href="/politica-de-privacidad.html">Política de privacidad</a>
        <button type="button" className="footer-link" onClick={openCookieSettings}>
          Configurar cookies
        </button>
        <span>AMG-RACK-01</span>
      </div>
    </footer>
  );
}
