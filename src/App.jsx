import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServicePage from './pages/ServicePage';
import SoftwarePage from './pages/SoftwarePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { SOFTWARE_PATH } from './data/software';
import { PROJECTS_PATH, findRoute } from './routes';

// Cada URL es una página prerenderizada; los enlaces entre páginas son enlaces normales
function Page({ route }) {
  if (!route) return <NotFoundPage />;
  if (route.service) return <ServicePage service={route.service} crumbs={route.crumbs} />;
  if (route.project) return <ProjectPage project={route.project} crumbs={route.crumbs} />;
  if (route.path === SOFTWARE_PATH) return <SoftwarePage crumbs={route.crumbs} />;
  if (route.path === PROJECTS_PATH) return <ProjectsPage crumbs={route.crumbs} />;
  if (route.path === '/servicios/') return <ServicesPage crumbs={route.crumbs} />;
  if (route.path === '/contacto/') return <ContactPage crumbs={route.crumbs} />;
  return <HomePage />;
}

export default function App({ path = '/' }) {
  const route = findRoute(path);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar currentPath={route?.path} />
      <main id="contenido">
        <Page route={route} />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </>
  );
}
