import { useEffect, useRef, useState } from 'react';
import { onOpenCookieSettings, readConsent, saveConsent } from '../consent';
import { Screws } from './Module';

// Aviso de cookies: aceptar todas, solo las necesarias o elegir. No va en el HTML prerenderizado:
// aparece en el navegador solo si el visitante aún no ha elegido (o si abre "Configurar cookies").
export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const panel = useRef(null);

  useEffect(() => {
    if (!readConsent()) setOpen(true);
    return onOpenCookieSettings(() => {
      setAnalytics(Boolean(readConsent()?.analytics));
      setCustom(true);
      setOpen(true);
    });
  }, []);

  // Al abrir la configuración, el foco pasa al aviso (útil con teclado y lectores de pantalla)
  useEffect(() => {
    if (open && custom) panel.current?.focus();
  }, [open, custom]);

  if (!open) return null;

  const choose = (value) => {
    saveConsent(value);
    setOpen(false);
    setCustom(false);
  };

  return (
    <section
      ref={panel}
      className="module cookie-banner"
      role="dialog"
      aria-labelledby="cookies-titulo"
      aria-describedby="cookies-texto"
      tabIndex={-1}
    >
      <Screws />
      <div className="module-head">
        <span className="module-code">AMG-PRIV</span>
        <span className="module-code module-sep">/</span>
        <span>Cookies</span>
        <span className="module-spacer" />
        <span className="status">
          <span className="led led-amber blink" /> Esperando tu elección
        </span>
      </div>

      <div className="cookie-body">
        <h2 id="cookies-titulo" className="cookie-title">
          ¿Aceptas las cookies?
        </h2>
        <p id="cookies-texto">
          Usamos cookies de Google Analytics para saber cuántas personas visitan el sitio y mejorarlo. Las cookies
          necesarias solo guardan tu elección. <a href="/politica-de-privacidad.html">Política de privacidad</a>
        </p>

        {custom && (
          <div className="cookie-options">
            <label className="cookie-option is-locked">
              <input type="checkbox" checked disabled />
              <span className="switch" aria-hidden="true" />
              <span>
                <strong>Necesarias</strong>
                <small>Guardan tu elección de cookies. Siempre activas.</small>
              </span>
            </label>
            <label className="cookie-option">
              <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
              <span className="switch" aria-hidden="true" />
              <span>
                <strong>Analítica</strong>
                <small>Google Analytics: visitas, páginas vistas y clics en los botones de contacto.</small>
              </span>
            </label>
          </div>
        )}

        <div className="cookie-actions">
          {custom ? (
            <button type="button" className="btn btn-panel" onClick={() => choose(analytics)}>
              Guardar selección
            </button>
          ) : (
            <button type="button" className="btn btn-panel" onClick={() => choose(false)}>
              Solo necesarias
            </button>
          )}
          <button type="button" className="btn btn-led" onClick={() => choose(true)}>
            Aceptar todas
          </button>
          {!custom && (
            <button type="button" className="btn-link" onClick={() => setCustom(true)}>
              Configurar
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
