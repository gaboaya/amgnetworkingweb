const WIDTH = 340;
const BUILDING = 40;
const GAP = 16;
const GROUND = 111;
const HEIGHTS = [61, 85, 53, 73, 97, 65];

// Un edificio por sede (hasta seis), centrados sobre la línea de suelo
function Buildings({ count }) {
  const heights = HEIGHTS.slice(0, count);
  const start = (WIDTH - heights.length * BUILDING - (heights.length - 1) * GAP) / 2;

  return heights.map((height, i) => {
    const x = start + i * (BUILDING + GAP);
    const top = GROUND - height;
    const floors = [];
    for (let y = top + 10; y <= GROUND - 15; y += 10) floors.push(`M${x + 8} ${y}h24`);

    return (
      <g key={x}>
        <rect x={x} y={top} width={BUILDING} height={height} />
        <path className="art-accent" d={floors.join('')} />
      </g>
    );
  });
}

// Satélite, finca con antena y radioenlaces hacia dos fincas más
function Farms() {
  return (
    <>
      <path d="M28 111V83H84V111" />
      <path d="M20 83 56 59 92 83" />
      <path d="M50 111V95H62V111" />
      <path d="M56 59V46" />
      <path d="M42 46 70 38" strokeWidth="3" />
      <rect x="102" y="10" width="16" height="8" />
      <rect x="122" y="8" width="12" height="12" />
      <rect x="138" y="10" width="16" height="8" />
      <path d="M118 14h4M134 14h4" />
      <path className="art-accent" d="M122 22 62 38" strokeDasharray="4 4" />
      <path d="M104 111V46" />
      <rect className="art-solid" x="104" y="44" width="7" height="16" />
      <path className="art-accent" d="M111 52 209 62M111 52 293 51" strokeDasharray="4 4" />
      <path d="M192 111V92H240V111" />
      <path d="M184 92 216 74 248 92" />
      <path d="M216 74V62" />
      <rect className="art-solid" x="209" y="57" width="7" height="10" />
      <path d="M274 111V90H326V111" />
      <path d="M266 90 300 70 334 90" />
      <path d="M300 70V52" />
      <rect className="art-solid" x="293" y="46" width="7" height="10" />
    </>
  );
}

// Dibujo de cada proyecto, mientras no haya fotos reales de la instalación
export default function ProjectArt({ project }) {
  const label =
    project.art === 'fincas'
      ? 'Una conexión Starlink en la finca principal y radioenlaces que llevan internet a dos fincas más'
      : `Un edificio por cada una de las ${project.count} ${project.unit} de la empresa`;

  return (
    <svg className="project-art" viewBox={`0 0 ${WIDTH} 112`} role="img" aria-label={label}>
      <path className="art-ground" d={`M0 ${GROUND}H${WIDTH}`} />
      {project.art === 'fincas' ? <Farms /> : <Buildings count={project.count} />}
    </svg>
  );
}
