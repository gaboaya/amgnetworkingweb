import { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { track } from '../analytics';
import { BUSINESS, locationLabel, phoneIntl, phoneLink, whatsappLink } from '../config';
import { SERVICES } from '../data/services';
import WhatsAppIcon from './WhatsAppIcon';

const EMPTY_FORM = { name: '', company: '', service: '', message: '' };

// Textos de la sección; las páginas de software cambian algunos con la propiedad `copy`
const COPY = {
  title: 'Solicite una cotización',
  text: 'Cuéntenos qué necesita y le responderemos directamente por WhatsApp.',
  note: 'Si nos envía fotos, videos o una descripción de sus procesos, la cotización será más rápida y precisa.',
  greeting: 'Hola AMG Networking, quiero solicitar una cotización.',
  serviceLabel: 'Servicio de interés',
  placeholder: 'Procesos que desea automatizar, tipo de lugar, cantidad de equipos o puntos de red…',
  services: SERVICES,
};

// En la página de un servicio, el formulario llega con ese servicio ya elegido.
// `plain`: fondo blanco, para alternar con la sección anterior.
export default function Contact({ defaultService = '', copy, plain = false }) {
  const [form, setForm] = useState({ ...EMPTY_FORM, service: defaultService });
  const { title, text, note, greeting, serviceLabel, placeholder, services } = { ...COPY, ...copy };

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Arma el mensaje y abre WhatsApp con el texto listo para enviar
  const submit = (e) => {
    e.preventDefault();
    const lines = [greeting, `Nombre: ${form.name.trim()}`];
    if (form.company.trim()) lines.push(`Empresa: ${form.company.trim()}`);
    if (form.service) lines.push(`Servicio: ${form.service}`);
    lines.push(`Mensaje: ${form.message.trim()}`);
    track('generate_lead', { method: 'formulario_whatsapp', service: form.service || 'sin_especificar' });
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className={plain ? 'section contact-plain' : 'section section-alt'}>
      <div className="wrap split">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="section-title">{title}</h2>
          <p className="contact-text">{text}</p>

          <ul className="contact-list">
            <li>
              <span className="contact-icon is-whatsapp">
                <WhatsAppIcon size={22} />
              </span>
              <div>
                <small>WhatsApp</small>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  {phoneIntl}
                </a>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <Phone size={21} aria-hidden="true" />
              </span>
              <div>
                <small>Teléfono</small>
                <a href={phoneLink}>{BUSINESS.phoneDisplay}</a>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <MapPin size={21} aria-hidden="true" />
              </span>
              <div>
                <small>Ubicación</small>
                <strong>{locationLabel}</strong>
              </div>
            </li>
          </ul>

          <p className="contact-note">{note}</p>
        </div>

        <form className="form-card" onSubmit={submit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Nombre</label>
              <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={update} />
            </div>
            <div className="field">
              <label htmlFor="company">Empresa</label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Opcional"
                value={form.company}
                onChange={update}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="service">{serviceLabel}</label>
            <select id="service" name="service" value={form.service} onChange={update}>
              <option value="">Seleccione un servicio</option>
              {services.map(({ title: option }) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder={placeholder}
              required
              value={form.message}
              onChange={update}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Enviar solicitud
          </button>
          <p className="form-note">Se abrirá WhatsApp con su solicitud lista para enviar.</p>
        </form>
      </div>
    </section>
  );
}
