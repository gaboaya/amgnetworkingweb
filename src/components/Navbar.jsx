import { useEffect, useState } from 'react';
import { MapPin, Menu, Phone, X } from 'lucide-react';
import logo from '../assets/logo-claro.webp';
import { SOCIAL_LINKS, locationLabel, phoneIntl, phoneLink } from '../config';

// Son páginas propias, salvo Empresa, que es una sección del inicio
const LINKS = [
  { href: '/desarrollo-de-software/', label: 'Software' },
  { href: '/servicios/', label: 'Servicios' },
  { href: '/proyectos/', label: 'Proyectos' },
  { href: '/#empresa', label: 'Empresa' },
  { href: '/contacto/', label: 'Contacto' },
];

export default function Navbar({ currentPath = '' }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);
  const isCurrent = (href) => currentPath.startsWith(href);

  return (
    <>
      <div className="util-bar">
        <div className="wrap util-inner">
          <div className="util-group">
            <span>
              <MapPin size={15} aria-hidden="true" /> {locationLabel}
            </span>
            <a href={phoneLink}>
              <Phone size={15} aria-hidden="true" /> {phoneIntl}
            </a>
          </div>
          <div className="util-group util-social">
            {SOCIAL_LINKS.map(({ name, url, label }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap header-inner">
          <a href="/" className="header-logo" aria-label="AMG Networking, ir al inicio" onClick={close}>
            <img src={logo} alt="AMG Networking" width="444" height="180" />
          </a>

          <nav className="site-nav" aria-label="Principal">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="btn btn-primary btn-sm header-cta" href="/contacto/">
            Solicitar cotización
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <nav id="menu-movil" className="mobile-menu" aria-label="Menú">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
            <a className="btn btn-primary" href="/contacto/" onClick={close}>
              Solicitar cotización
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
