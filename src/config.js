// ─────────────────────────────────────────────────────────────
//  Datos de contacto de AMG Networking.
//  Edita este archivo para cambiar el WhatsApp, correo o redes sociales.
//  Las redes que dejes vacías ('') no se muestran en el sitio.
// ─────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: 'AMG Networking',
  tagline: 'Conectando Tecnología, Impulsando tus Ideas',

  // Número con indicativo de país, sin espacios ni "+" (57 = Colombia)
  whatsapp: '573184220099',
  phoneDisplay: '318 422 0099',

  email: '', // ej: 'contacto@amgnetworking.com'
  // Ciudad principal donde trabajas (ej: 'Bogotá'). Se agrega al título, al encabezado
  // principal y a los datos para Google: es lo que más ayuda al SEO local.
  city: '',

  social: {
    facebook: 'https://www.facebook.com/amgnetworking/',
    instagram: 'https://www.instagram.com/amgnetworkingsas/',
    tiktok: '', // ej: 'https://www.tiktok.com/@usuario'
    youtube: '',
    x: '',
  },
};

// ─── SEO y medición ───
export const SITE = {
  // Dominio donde se publica el sitio, con https y sin "/" al final
  // (ej: 'https://www.amgnetworking.com'). Activa la URL canónica, el sitemap.xml
  // y las vistas previas al compartir el enlace en WhatsApp y redes.
  url: '',
  // Google Analytics 4. Solo se carga en la versión publicada (npm run build), no en npm run dev.
  gaId: 'G-S1X987JEE0',
  // Google Search Console: código de la etiqueta meta "google-site-verification" (opcional;
  // también puedes verificar el sitio con el método "Google Analytics").
  googleSiteVerification: '',
};

export const DEFAULT_WHATSAPP_MESSAGE = 'Hola AMG Networking, quiero información sobre sus servicios.';

export function whatsappLink(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const phoneLink = `tel:+${BUSINESS.whatsapp}`;
