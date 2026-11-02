import logo from '../assets/logo.webp';
import { BUSINESS, whatsappLink } from '../config';
import { openCookieSettings } from '../consent';
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
