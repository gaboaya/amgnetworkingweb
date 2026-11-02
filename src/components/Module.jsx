// Tornillos de montaje: en las 4 esquinas, o uno a cada lado (módulos de 1U)
export function Screws({ sides = false }) {
  const positions = sides ? ['ml', 'mr'] : ['tl', 'tr', 'bl', 'br'];
  return positions.map((p) => <span key={p} className={`screw screw-${p}`} aria-hidden="true" />);
}

// Un "equipo" del rack: placa frontal con etiqueta serigrafiada arriba
export default function Module({ id, code, label, units, status, className = '', children }) {
  return (
    <section id={id} className={`module ${className}`} data-reveal>
      <Screws />
      <div className="module-head">
        <span className="module-code">{code}</span>
        <span className="module-code module-sep">/</span>
        <span>{label}</span>
        <span className="module-spacer" />
        {units && <span className="hide-sm">{units}</span>}
        {status && (
          <span className="status">
            <span className="led led-green blink" /> {status}
          </span>
        )}
      </div>
      <div className="module-body">{children}</div>
    </section>
  );
}
