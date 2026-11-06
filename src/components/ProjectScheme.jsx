import { House, RadioTower, SatelliteDish } from 'lucide-react';

function Node({ icon: Icon, name, detail, hub = false }) {
  return (
    <div className={hub ? 'scheme-node is-hub' : 'scheme-node'}>
      <Icon size={hub ? 28 : 26} aria-hidden="true" />
      <p>
        <strong>{name}</strong> {detail}
      </p>
    </div>
  );
}

// Esquema de una conexión: el origen de internet llega al sitio principal y de allí sale un
// radioenlace hacia cada sitio. En celular se apila de arriba hacia abajo (ver index.css).
export default function ProjectScheme({ scheme }) {
  return (
    <figure className="scheme">
      <div className="scheme-flow">
        <Node icon={SatelliteDish} {...scheme.source} />
        <div className="scheme-link">
          <span className="scheme-label">Satelital</span>
        </div>
        <Node icon={House} hub {...scheme.hub} />
        <div className="scheme-fork">
          <span className="scheme-head is-top" />
          <span className="scheme-head is-bottom" />
          <span className="scheme-label">
            Radioenlace
            <br />
            punto a punto
          </span>
        </div>
        <div className="scheme-sites">
          {scheme.sites.map((site) => (
            <Node key={site.name} icon={RadioTower} {...site} />
          ))}
        </div>
      </div>
    </figure>
  );
}
