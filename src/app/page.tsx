import Header from './components/common/Header';
import Hero from './components/common/Hero';
import About from './components/common/About';
import Experience from './components/common/Experience';
import Projects from './components/common/Projects';
import Skills from './components/common/Skills';
import Education from './components/common/Education';
import Footer from './components/common/Footer';
import Contact from './components/common/Contact';
import Achievements, { Publications } from './components/common/Achievements';

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
