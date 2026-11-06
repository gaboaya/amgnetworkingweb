import { Check } from 'lucide-react';

const COMMITMENTS = [
  { title: 'Diagnóstico previo', text: 'Evaluamos el lugar, la red o sus procesos antes de proponer.' },
  { title: 'Cotización detallada', text: 'Propuesta clara antes de iniciar cualquier trabajo.' },
  { title: 'Entrega documentada', text: 'Instalaciones y sistemas probados y organizados.' },
  { title: 'Soporte posterior', text: 'Acompañamiento remoto y en sitio después de la entrega.' },
];

export default function Commitments() {
  return (
    <section className="commitments" aria-label="Nuestro compromiso">
      <ul className="wrap commitments-list">
        {COMMITMENTS.map(({ title, text }) => (
          <li key={title}>
            <Check size={22} strokeWidth={2.25} aria-hidden="true" />
            <div>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
