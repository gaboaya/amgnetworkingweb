import { whatsappLink } from '../config';
import { BrandIcon } from './BrandIcon';

// Solo se muestra en móvil (ver .wa-float en index.css); en escritorio el WhatsApp está en la barra superior
export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <BrandIcon name="whatsapp" size={30} />
    </a>
  );
}
