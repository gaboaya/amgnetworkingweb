import { PHOTOS } from '../photos';

const PRINCIPLES = [
  { title: 'Trabajo ordenado', text: 'Cableado etiquetado, racks organizados y entregas documentadas.' },
  { title: 'Equipos confiables', text: 'Recomendamos marcas reconocidas, acordes con su necesidad.' },
  { title: 'Asesoría clara', text: 'Explicamos cada decisión técnica sin tecnicismos.' },
  { title: 'Acompañamiento', text: 'Seguimos a su lado después de la entrega.' },
];

export default function About() {
  return (
    <section id="empresa" className="section">
      <div className="wrap split about">
        <img {...PHOTOS.tecnico} className="about-photo" loading="lazy" />
        <div>
          <p className="eyebrow">La empresa</p>
          <h2 className="section-title">Del cable a la factura, un solo equipo que responde</h2>
          <p className="about-text">
            AMG Networking desarrolla software e instala y mantiene la infraestructura tecnológica de empresas, comercios
            y hogares. Trabajamos con un objetivo concreto: que todo funcione desde el primer día y siga funcionando.
          </p>
          <div className="principles">
            {PRINCIPLES.map(({ title, text }) => (
              <div key={title} className="principle">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
