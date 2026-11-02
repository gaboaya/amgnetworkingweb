import Module from './Module';

// Encabezado de las páginas internas: ruta de navegación, H1, texto de entrada y,
// opcionalmente, botones y un panel a la derecha
export default function PageHeader({ code, label, units, crumbs, eyebrow, title, lead, actions, aside }) {
  return (
    <Module id="inicio" code={code} label={label} units={units}>
      <nav className="breadcrumb" aria-label="Ruta de navegación">
        <ol>
          <li>
            <a href="/">Inicio</a>
          </li>
          {crumbs.map(([name, path], i) => (
            <li key={path}>
              {i === crumbs.length - 1 ? <span aria-current="page">{name}</span> : <a href={path}>{name}</a>}
            </li>
          ))}
        </ol>
      </nav>

      <div className={aside ? 'page-header-grid' : undefined}>
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="title-lg page-title">{title}</h1>
          {lead && <p className="lead page-lead">{lead}</p>}
          {actions && <div className="actions">{actions}</div>}
        </div>
        {aside}
      </div>
    </Module>
  );
}
