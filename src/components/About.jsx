import espacio from '../assets/espacio-futurista.webp';
import espacio800 from '../assets/espacio-futurista-800.webp';
import { BUSINESS } from '../config';
import Module from './Module';

const SPECS = [
  ['Especialidad', 'Redes de datos, CCTV y soporte de equipos'],
  ['Cableado', 'Etiquetado y organizado'],
  ['Equipos', 'Marcas confiables, a tu medida'],
  ['Asesoría', 'Clara, sin tecnicismos'],
  ['Postventa', 'Seguimos contigo después de instalar'],
  ...(BUSINESS.city ? [['Cobertura', BUSINESS.city]] : []),
];

export default function About() {
  return (
    <Module id="nosotros" code="AMG-INFO" label="Ficha técnica" units="6U">
      <div className="about-grid">
        <figure className="monitor">
          <img
            src={espacio}
            srcSet={`${espacio800} 800w, ${espacio} 1600w`}
            sizes="(max-width: 900px) 100vw, 600px"
            width="1600"
            height="900"
            loading="lazy"
            alt="Escritorio de AMG Networking con servidores, router y equipo de desarrollo"
          />
          <figcaption>
            <span>CAM 02 · Laboratorio AMG</span>
          </figcaption>
        </figure>

        <div>
          <h2 className="title-lg">
            Ficha
            <br />
            técnica
          </h2>
          <p className="lead">
            En AMG Networking diseñamos, instalamos y mantenemos la infraestructura tecnológica de hogares y empresas:
            que todo funcione desde el primer día, y siga funcionando.
          </p>
          <dl className="spec-table">
            {SPECS.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Module>
  );
}
