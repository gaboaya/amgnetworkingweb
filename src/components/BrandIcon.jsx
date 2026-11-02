import { siFacebook, siInstagram, siTiktok, siWhatsapp, siX, siYoutube } from 'simple-icons';
import { BUSINESS, whatsappLink } from '../config';

const ICONS = {
  whatsapp: siWhatsapp,
  facebook: siFacebook,
  instagram: siInstagram,
  tiktok: siTiktok,
  youtube: siYoutube,
  x: siX,
};

const LABELS = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  x: 'X',
};

export function BrandIcon({ name, size = 20, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...props}>
      <path d={ICONS[name].path} />
    </svg>
  );
}

// Texto corto que se muestra bajo el nombre de la red (ej: @usuario)
function handleFor(url) {
  const user = url.replace(/\/+$/, '').split('/').pop().replace(/^@/, '');
  return `@${user}`;
}

// WhatsApp + redes configuradas en config.js (las vacías se omiten)
export const SOCIAL_LINKS = [
  {
    name: 'whatsapp',
    url: whatsappLink(),
    label: 'WhatsApp',
    handle: `+${BUSINESS.whatsapp.slice(0, 2)} ${BUSINESS.phoneDisplay}`,
  },
  ...Object.entries(BUSINESS.social)
    .filter(([, url]) => url)
    .map(([name, url]) => ({ name, url, label: LABELS[name], handle: handleFor(url) })),
];

export function SocialLinks({ className = '' }) {
  return (
    <ul className={`social-links ${className}`}>
      {SOCIAL_LINKS.map(({ name, url, label }) => (
        <li key={name}>
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
            <BrandIcon name={name} size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
