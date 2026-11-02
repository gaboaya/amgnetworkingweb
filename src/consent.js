// Preferencias de cookies del visitante (modo de consentimiento v2 de Google).
// Se guardan en el navegador y se vuelven a pedir después de un año.
export const CONSENT_KEY = 'amg-consent';
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
const OPEN_EVENT = 'amg:cookie-settings';

export function readConsent() {
  try {
    const saved = JSON.parse(localStorage.getItem(CONSENT_KEY));
    if (saved && Date.now() - saved.date < CONSENT_MAX_AGE_MS) return saved;
  } catch {
    // Almacenamiento bloqueado o dato inválido: se trata como "sin elección"
  }
  return null;
}

export function saveConsent(analytics) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics, date: Date.now() }));
  } catch {
    // Sin almacenamiento, la elección dura solo esta visita
  }
  window.gtag?.('consent', 'update', { analytics_storage: analytics ? 'granted' : 'denied' });
  if (!analytics) removeAnalyticsCookies();
}

// Borra las cookies de Google Analytics (_ga, _ga_XXXX) cuando el visitante retira su permiso
function removeAnalyticsCookies() {
  const baseDomain = location.hostname.replace(/^www\./, '');
  document.cookie
    .split(';')
    .map((cookie) => cookie.split('=')[0].trim())
    .filter((name) => name.startsWith('_ga'))
    .forEach((name) => {
      [null, location.hostname, `.${baseDomain}`].forEach((domain) => {
        document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`;
      });
    });
}

// "Configurar cookies" (pie de página) abre el aviso aunque ya se haya elegido
export const openCookieSettings = () => window.dispatchEvent(new Event(OPEN_EVENT));

export function onOpenCookieSettings(handler) {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}

// Código en línea para el <head> (lo inserta scripts/vite-plugin-seo.js): todo denegado por
// defecto y, si el visitante ya aceptó antes, se concede antes de que cargue Google Analytics.
export function consentHeadScript(gaId) {
  return [
    'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}',
    "gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});",
    `try{var c=JSON.parse(localStorage.getItem('${CONSENT_KEY}'));if(c&&c.analytics&&Date.now()-c.date<${CONSENT_MAX_AGE_MS})gtag('consent','update',{analytics_storage:'granted'});}catch(e){}`,
    "gtag('js',new Date());",
    `gtag('config','${gaId}');`,
  ].join('');
}
