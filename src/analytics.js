// Medición con Google Analytics 4. Si el script de Google no está cargado
// (por ejemplo en `npm run dev`), estas funciones no hacen nada.
export function track(event, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, params);
  }
}

const SOCIAL_HOST = /^(?:[\w-]+\.)?(facebook|instagram|tiktok|youtube|x)\.com$/;

// Zona de la página donde está el enlace, para saber qué botones generan más contactos
function areaOf(el) {
  if (el.closest('.util-bar, .site-header')) return 'barra_superior';
  if (el.closest('.wa-float')) return 'boton_flotante';
  if (el.closest('.service-aside')) return 'panel_servicio';
  if (el.closest('footer')) return 'pie_de_pagina';
  return el.closest('section[id]')?.id ?? 'otro';
}

// Registra como eventos los clics en WhatsApp, teléfono y redes sociales de todo el sitio
export function trackContactClicks() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest?.('a[href]');
    if (!link) return;
    const params = { link_location: areaOf(link) };
    if (link.dataset.service) params.service = link.dataset.service;

    if (link.hostname === 'wa.me') {
      track('whatsapp_click', params);
    } else if (link.protocol === 'tel:') {
      track('phone_click', params);
    } else {
      const social = link.hostname.match(SOCIAL_HOST);
      if (social) track('social_click', { ...params, social_network: social[1] });
    }
  });
}
