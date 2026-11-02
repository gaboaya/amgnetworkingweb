import { useState } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { track } from '../analytics';
import { BUSINESS, phoneLink, whatsappLink } from '../config';
import { SERVICES } from '../data/services';
import { BrandIcon, SOCIAL_LINKS } from './BrandIcon';
import Module from './Module';

const EMPTY_FORM = { name: '', service: '', message: '' };

// WhatsApp primero, luego la llamada directa y después las redes sociales
const [WHATSAPP, ...SOCIAL] = SOCIAL_LINKS;
const UPLINKS = [WHATSAPP, { name: 'phone', url: phoneLink, label: 'Llamar', handle: WHATSAPP.handle }, ...SOCIAL];
const LED = { whatsapp: 'led-green', phone: 'led-amber' };

// En la página de un servicio, el formulario llega con ese servicio ya elegido
export default function Contact({ defaultService = '' }) {
  const [form, setForm] = useState({ ...EMPTY_FORM, service: defaultService });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Arma el mensaje y abre WhatsApp con el texto listo para enviar
  const submit = (e) => {
    e.preventDefault();
    const lines = ['Hola AMG Networking, quiero solicitar un servicio.', `Nombre: ${form.name.trim()}`];
    if (form.service) lines.push(`Servicio: ${form.service}`);
    lines.push(`Mensaje: ${form.message.trim()}`);
    track('generate_lead', { method: 'formulario_whatsapp', service: form.service || 'sin_especificar' });
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <Module id="contacto" code="AMG-CON01" label="Consola de contacto" units="6U">
      <div className="contact-grid">
        <div>
          <h2 className="title-lg">
            Conéctate
            <br />
            con nosotros
          </h2>
          <a className="hotline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <small>LÍNEA DIRECTA · WHATSAPP</small>
            <strong>{BUSINESS.phoneDisplay}</strong>
          </a>

          <p className="uplinks-title">UPLINKS</p>
          <ul className="uplinks">
            {UPLINKS.map(({ name, url, label, handle }) => {
              const external = name !== 'phone';
              return (
                <li key={name}>
                  <a
                    className="uplink"
                    href={url}
                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    <span className={`led ${LED[name] ?? ''}`} />
                    <span className={`uplink-icon ${name === 'whatsapp' ? 'is-wa' : ''}`}>
                      {name === 'phone' ? <Phone size={20} aria-hidden="true" /> : <BrandIcon name={name} size={20} />}
                    </span>
                    <span>
                      <strong>{label}</strong>
                      <small>{handle}</small>
                    </span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <form className="console" onSubmit={submit}>
          <div className="console-head">
            <span>NUEVA SOLICITUD</span>
            <span className="status">
              <span className="led blink" /> LISTO
            </span>
          </div>
          <div className="console-body">
            <div className="field">
              <label htmlFor="name">NOMBRE</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="¿Cómo te llamas?"
                required
                value={form.name}
                onChange={update}
              />
            </div>

            <div className="field">
              <label htmlFor="service">SERVICIO</label>
              <select id="service" name="service" value={form.service} onChange={update}>
                <option value="">Selecciona un servicio (opcional)</option>
                {SERVICES.map(({ title }) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">MENSAJE</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Cuéntanos qué necesitas: tipo de lugar, cantidad de equipos, falla que presenta…"
                required
                value={form.message}
                onChange={update}
              />
            </div>

            <button type="submit" className="btn btn-wa btn-block">
              <BrandIcon name="whatsapp" size={22} /> Enviar por WhatsApp
            </button>
            <p className="form-note">Se abre WhatsApp con tu mensaje listo para enviar.</p>
          </div>
        </form>
      </div>
    </Module>
  );
}
