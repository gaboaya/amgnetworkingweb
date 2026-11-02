import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { findRoute } from './routes';

// Anima la aparición de los módulos que están más abajo de la pantalla al cargar.
// El contenido es visible por defecto (HTML prerenderizado): solo se oculta lo que aún no se ve.
function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add('reveal-pending');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}

// Cada URL es una página prerenderizada; los enlaces entre páginas son enlaces normales
function Page({ route }) {
  if (!route) return <NotFoundPage />;
  if (route.service) return <ServicePage service={route.service} crumbs={route.crumbs} />;
  if (route.path === '/servicios/') return <ServicesPage crumbs={route.crumbs} />;
  if (route.path === '/contacto/') return <ContactPage crumbs={route.crumbs} />;
  return <HomePage />;
}

export default function App({ path = '/' }) {
  useReveal();
  const route = findRoute(path);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="rack">
        <div className="rail" aria-hidden="true" />
        <div className="rack-units">
          <Navbar currentPath={route?.path} />
          <main id="contenido">
            <Page route={route} />
          </main>
          <Footer />
        </div>
        <div className="rail" aria-hidden="true" />
      </div>
      <WhatsAppFloat />
      <CookieBanner />
    </>
  );
}
