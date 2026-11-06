import { ArrowRight, Check } from 'lucide-react';
import { BUSINESS, phoneLink, whatsappLink } from '../config';
import { PROJECTS } from '../data/projects';
import { PHOTOS } from '../photos';
import { projectPath } from '../routes';
import PageHeader from '../components/PageHeader';
import ProjectScheme from '../components/ProjectScheme';
import { ProjectPanel } from '../components/Projects';

// Página propia de cada proyecto (/proyectos/<slug>/)
export default function ProjectPage({ project, crumbs }) {
  const { scheme, includes, specs, photos, guide, cta } = project;
  const others = PROJECTS.filter((p) => p !== project);

  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow={`Proyecto en ${project.place}`}
        title={project.heading}
        lead={project.summary}
        media={scheme ? undefined : <ProjectPanel project={project} />}
      >
        <dl className="fact-strip">
          {project.facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      {scheme && (
        <section id="esquema" className="section">
          <div className="wrap">
            <div className="project-intro">
              <p className="eyebrow">Esquema de la solución</p>
              <h2 className="section-title">Cómo quedó conectado</h2>
              <p className="section-lead">{scheme.text}</p>
            </div>
            <ProjectScheme scheme={scheme} />
          </div>
        </section>
      )}

      <section id="alcance" className={scheme ? 'section section-tight' : 'section'}>
        <div className="wrap">
          <div className={specs.length > 0 ? 'project-scope' : undefined}>
            <div>
              <h2 className="service-heading">Qué incluyó el proyecto</h2>
              <ul className="check-list is-wide">
                {includes.map((item) => (
                  <li key={item}>
                    <Check size={20} strokeWidth={2.25} aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            {specs.length > 0 && (
              <div>
                <h2 className="service-heading">Ficha técnica</h2>
                <dl className="spec-list">
                  {specs.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          {photos.length > 0 && (
            <div className="project-photos">
              {photos.map((name) => (
                <img key={name} {...PHOTOS[name]} loading="lazy" />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="orientacion" className="section section-alt">
        <div className="wrap split">
          <div>
            <p className="eyebrow">{guide.eyebrow}</p>
            <h2 className="section-title">{guide.title}</h2>
            <p className="about-text">{guide.text}</p>
            <a className="more-link guide-link" href={guide.link.href}>
              {guide.link.label} <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <ul className="guide-list">
            {guide.items.map(({ title, text }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="cotizar" className="cta-band">
        <div className="wrap">
          <div>
            <h2>{cta.title}</h2>
            <p>{cta.text}</p>
          </div>
          <div className="actions">
            <a className="btn btn-primary" href={whatsappLink(cta.message)} target="_blank" rel="noopener noreferrer">
              Escribir por WhatsApp
            </a>
            <a className="btn btn-light" href={phoneLink}>
              Llamar: {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section id="otros" className="section">
        <div className="wrap">
          <h2 className="service-heading">Otros proyectos</h2>
          <div className="other-grid">
            {others.map((other) => (
              <a key={other.slug} className="other-card" href={projectPath(other)}>
                <span className="other-count">
                  <strong>{other.count}</strong> <span>{other.unit}</span>
                </span>
                <span className="other-body">
                  <span className="other-place">{other.place}</span>
                  <span className="other-title">{other.title}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
