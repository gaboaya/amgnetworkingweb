import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CookieBanner from './components/CookieBanner';
import { Screws } from './components/Module';

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

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="rack">
        <div className="rail" aria-hidden="true" />
        <div className="rack-units">
          <Navbar />
          <main id="contenido">
            <Hero />
            {/* Panel ciego ventilado entre equipos */}
            <div className="module vent" aria-hidden="true">
              <Screws sides />
            </div>
            <Services />
            <Process />
            <About />
            <Faq />
            <Contact />
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
