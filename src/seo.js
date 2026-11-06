import { BUSINESS } from './config.js';

// Textos para buscadores. Si define la ciudad en config.js, se incluye automáticamente.
const city = BUSINESS.city;
export const inCity = city ? ` en ${city}` : '';

export const SEO = {
  title: `Software, Redes y CCTV en ${city ? `${city} y ` : ''}Colombia | ${BUSINESS.name}`,
  // Ideal: menos de 160 caracteres, para que Google la muestre completa
  description: `Software empresarial, páginas web y aplicaciones; redes, radioenlaces y cámaras de seguridad para empresas en Colombia. Cotice al ${BUSINESS.phoneDisplay}.`,
  // Encabezado principal (H1) de la página de inicio
  headline: 'Software, redes y cámaras de seguridad para empresas en Colombia',
};
