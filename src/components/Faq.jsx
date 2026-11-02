import { FAQ } from '../data/faq';
import Module from './Module';

// Por defecto, las preguntas generales; las páginas de servicio pasan las suyas
export default function Faq({
  items = FAQ,
  lead = 'Lo que más nos preguntan antes de instalar una red, unas cámaras o pedir soporte técnico.',
}) {
  return (
    <Module id="preguntas" code="AMG-FAQ" label="Preguntas frecuentes" units="4U">
      <div className="section-intro">
        <h2 className="title-lg">
          Preguntas
          <br />
          frecuentes
        </h2>
        <p className="lead">{lead}</p>
      </div>

      <div className="faq">
        {items.map(({ question, answer }, i) => (
          <details key={question} className="faq-item">
            <summary>
              <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
              <span>{question}</span>
              <span className="faq-toggle" aria-hidden="true" />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </Module>
  );
}
