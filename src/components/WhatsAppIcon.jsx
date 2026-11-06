import { siWhatsapp } from 'simple-icons';

export default function WhatsAppIcon({ size = 20, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...props}>
      <path d={siWhatsapp.path} />
    </svg>
  );
}
