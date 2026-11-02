import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.webp';
import { BUSINESS, whatsappLink } from '../config';
import { BrandIcon } from './BrandIcon';
import { Screws } from './Module';

const LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="module topbar">
      <Screws sides />
      <a href="#inicio" className="logo-plate" aria-label="AMG Networking, ir al inicio" onClick={close}>
        <img src={logo} alt="AMG Networking" width="520" height="216" />
      </a>

      <nav className="navports" aria-label="Principal">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            <span className="led" /> {link.label}
          </a>
        ))}
      </nav>

      <a
        className="wa-pill"
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${BUSINESS.phoneDisplay}`}
      >
        <span className="wa-pill-icon">
          <BrandIcon name="whatsapp" size={22} />
        </span>
        <span className="wa-pill-text">
          <small>WHATSAPP</small>
          <strong>{BUSINESS.phoneDisplay}</strong>
        </span>
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

      {open && (
        <nav id="menu-movil" className="module mobile-menu" aria-label="Menú">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              <span className="led" /> {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
