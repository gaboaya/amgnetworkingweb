import { Plus } from 'lucide-react';
import { FAQ } from '../data/faq';

// Lista de preguntas; las respuestas quedan en el HTML aunque estén cerradas, así Google las lee
export function FaqList({ items }) {
  return (
    <div className="faq">
      {items.map(({ question, answer }, i) => (
        <details key={question} className="faq-item" open={i === 0}>
          <summary>
            {question} <Plus size={20} aria-hidden="true" />
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

// `alt`: fondo gris, para alternar con la sección anterior
export default function Faq({ title = 'Lo que nuestros clientes suelen preguntar', items = FAQ, alt = false }) {
  return (
    <section id="preguntas" className={alt ? 'section section-alt' : 'section'}>
      <div className="wrap split">
        <div>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="section-title">{title}</h2>
        </div>
        <FaqList items={items} />
      </div>
    </section>
  );
}
