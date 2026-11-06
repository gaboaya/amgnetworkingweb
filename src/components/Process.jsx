const STEPS = [
  { title: 'Solicitud', text: 'Nos cuenta su necesidad por WhatsApp, teléfono o formulario.' },
  { title: 'Diagnóstico', text: 'Revisamos el lugar, la red o sus procesos, en sitio o de forma remota.' },
  { title: 'Propuesta', text: 'Recibe una cotización clara y detallada antes de empezar.' },
  { title: 'Ejecución y soporte', text: 'Ejecutamos, probamos, documentamos y le acompañamos después de la entrega.' },
];

// `light`: versión sobre fondo blanco
export default function Process({
  eyebrow = 'Metodología',
  title: heading = 'Un proceso claro, de la solicitud a la entrega',
  lead = 'Antes de iniciar, usted sabe qué se va a hacer, cuánto cuesta y cuándo estará listo.',
  steps = STEPS,
  light = false,
}) {
  const listClass = ['steps', light && 'is-light', steps.length > 4 && 'is-five'].filter(Boolean).join(' ');

  return (
    <section id="metodologia" className={light ? 'section' : 'section section-navy'}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title">{heading}</h2>
          </div>
          <p className="section-lead">{lead}</p>
        </div>

        <ol className={listClass}>
          {steps.map(({ title, text }, i) => (
            <li key={title} className="step">
              <span className="step-label">Paso {i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
