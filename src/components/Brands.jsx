import { BRANDS } from '../data/brands';

// Marcas en texto: los buscadores las leen y no sugieren una alianza oficial con el fabricante
export default function Brands() {
  return (
    <section id="marcas" className="section section-sm section-alt">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Marcas</p>
            <h2 className="section-title">Marcas con las que trabajamos</h2>
          </div>
          <p className="section-lead">
            Elegimos los equipos según cada proyecto, con fabricantes reconocidos de videovigilancia, redes y
            telecomunicaciones.
          </p>
        </div>
        <ul className="brand-grid">
          {BRANDS.map(({ name, use }) => (
            <li key={name} className="brand-tile">
              <strong>{name}</strong>
              <span>{use}</span>
            </li>
          ))}
          <li className="brand-tile is-more">
            <strong>Y más</strong>
            <span>Otras marcas de telecomunicaciones</span>
          </li>
        </ul>
        <p className="brand-note">Los nombres de las marcas pertenecen a sus respectivos titulares.</p>
      </div>
    </section>
  );
}
