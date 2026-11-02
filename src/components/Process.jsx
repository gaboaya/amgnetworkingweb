import Module from './Module';

const STEPS = [
  { title: 'Contacto', text: 'Nos escribes por WhatsApp o redes y nos cuentas qué necesitas.', log: '[ OK ] mensaje recibido' },
  { title: 'Diagnóstico', text: 'Revisamos el lugar, la red o los equipos, en sitio o de forma remota.', log: '[ OK ] revisión hecha' },
  { title: 'Propuesta', text: 'Recibes una cotización clara y detallada antes de empezar.', log: '[ OK ] cotización enviada' },
  { title: 'Instalación y soporte', text: 'Instalamos, probamos, etiquetamos y te acompañamos después.', log: '[ EN LÍNEA ] red funcionando' },
];

export default function Process() {
  return (
    <Module id="proceso" code="AMG-SEQ04" label="Secuencia de servicio" units="3U">
      <div className="section-intro">
        <h2 className="title-lg">
          Así
          <br />
          trabajamos
        </h2>
        <p className="lead">
          Cuatro pasos, sin sorpresas: antes de empezar sabes qué se hará, cuánto cuesta y cuándo estará listo.
        </p>
      </div>

      <div className="steps-wrap">
        <div className="steps-line" aria-hidden="true" />
        <ol className="steps">
          {STEPS.map(({ title, text, log }, i) => {
            const final = i === STEPS.length - 1;
            return (
              <li key={title} className="step">
                <span className={`step-node ${final ? 'is-final' : ''}`} aria-hidden="true" />
                <span className="step-label">PASO {String(i + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className={`step-log ${final ? 'is-final' : ''}`}>{log}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </Module>
  );
}
