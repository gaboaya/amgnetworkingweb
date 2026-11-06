import { ArrowRight, MapPin } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { PROJECTS_PATH, projectPath } from '../routes';
import ProjectArt from './ProjectArt';

// Cifra y dibujo del proyecto sobre fondo azul marino
export function ProjectPanel({ project }) {
  return (
    <div className="project-panel">
      <p className="project-count">
        <strong>{project.count}</strong> <span>{project.unit}</span>
      </p>
      <ProjectArt project={project} />
    </div>
  );
}

// `heading`: nivel del título de cada tarjeta, según la página donde se muestre
export function ProjectGrid({ heading: Heading = 'h3' }) {
  return (
    <div className="project-grid">
      {PROJECTS.map((project) => (
        <article key={project.slug} className="project-card">
          <ProjectPanel project={project} />
          <div className="project-body">
            <p className="project-place">
              <MapPin size={15} aria-hidden="true" /> {project.place}
            </p>
            <Heading className="project-title">
              <a href={projectPath(project)}>{project.title}</a>
            </Heading>
            <p className="project-text">{project.summary}</p>
            <ul className="tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <a className="more-link" href={projectPath(project)} aria-label={`Ver proyecto: ${project.crumb}`}>
              Ver proyecto <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

// Sección del inicio
export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Nuestros proyectos</p>
            <h2 className="section-title">Redes y cámaras de seguridad en Bucaramanga y el Huila</h2>
          </div>
          <p className="section-lead">
            De empresas con varias sedes a fincas en zona rural: diseñamos cada instalación según el lugar y la entregamos
            funcionando.
          </p>
        </div>
        <ProjectGrid />
        <a className="more-link section-more" href={PROJECTS_PATH}>
          Ver todos los proyectos <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
