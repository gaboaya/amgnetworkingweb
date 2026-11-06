import Hero from '../components/Hero';
import Commitments from '../components/Commitments';
import SoftwareBand from '../components/SoftwareBand';
import ServiceLines from '../components/ServiceLines';
import Projects from '../components/Projects';
import Brands from '../components/Brands';
import About from '../components/About';
import Process from '../components/Process';
import Faq from '../components/Faq';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Commitments />
      <SoftwareBand />
      <ServiceLines />
      <Projects />
      <Brands />
      <About />
      <Process />
      <Faq />
      <Contact />
    </>
  );
}
