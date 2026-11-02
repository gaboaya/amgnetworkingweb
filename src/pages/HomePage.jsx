import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import About from '../components/About';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import { Screws } from '../components/Module';

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
