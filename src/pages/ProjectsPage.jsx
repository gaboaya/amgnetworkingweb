import { ProjectGrid } from '../components/Projects';
import Brands from '../components/Brands';
import Contact from '../components/Contact';
import PageHeader from '../components/PageHeader';

// Página con todos los proyectos (/proyectos/)
export default function ProjectsPage({ crumbs }) {
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow="Nuestros proyectos"
        title="Proyectos de redes, cámaras de seguridad y radioenlaces en Colombia"
        lead="De empresas con varias sedes en Bucaramanga a fincas conectadas por radioenlace en el Huila: diseñamos cada instalación según el lugar y la entregamos funcionando."
        actions={
          <a className="btn btn-primary" href="#contacto">
            Solicitar cotización
          </a>
        }
      />
      <section id="proyectos" className="section">
        <div className="wrap">
          <ProjectGrid heading="h2" />
        </div>
      </section>
      <Brands />
      <Contact plain />
    </>
  );
}
