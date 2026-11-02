import { BUSINESS } from './config.js';

// Textos para buscadores. Si defines la ciudad en config.js, se incluye automáticamente.
const city = BUSINESS.city;
const inCity = city ? ` en ${city}` : '';

export const SEO = {
  title: city
    ? `Redes y Cámaras de Seguridad en ${city} | ${BUSINESS.name}`
    : `Redes, Cámaras de Seguridad y Soporte Técnico | ${BUSINESS.name}`,
  description: `Instalación de redes y cableado estructurado, cámaras de seguridad, WiFi y mantenimiento de computadores y servidores${inCity}. Cotiza por WhatsApp: ${BUSINESS.phoneDisplay}.`,
  // Frase con las palabras clave principales (va en el H1 y en el pie de página)
  headline: `Instalación de redes, cámaras de seguridad y soporte técnico${inCity}`,
};
