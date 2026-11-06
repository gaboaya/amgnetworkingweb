// Encabezado de las páginas internas: ruta de navegación, H1, texto de entrada y, opcionalmente,
// botones, una foto (o `media`) a la derecha y más contenido debajo (`children`)
export default function PageHeader({ crumbs, eyebrow, title, lead, actions, photo, media, children }) {
  const side = media ?? (photo && <img {...photo} className="page-header-photo" fetchPriority="high" />);

  return (
    <section id="inicio" className="page-header">
      <div className="wrap">
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

        <div className={side ? 'page-header-grid' : undefined}>
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="page-title">{title}</h1>
            <p className="page-lead">{lead}</p>
            {actions && <div className="actions">{actions}</div>}
          </div>
          {side}
        </div>
        {children}
      </div>
    </section>
  );
}
