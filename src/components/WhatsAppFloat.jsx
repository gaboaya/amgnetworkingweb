import { whatsappLink } from '../config';
import WhatsAppIcon from './WhatsAppIcon';

// Solo se muestra en móvil (ver .wa-float en index.css)
export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbanos por WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
