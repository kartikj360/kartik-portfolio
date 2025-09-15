import Header from './components/common/Header';
import Hero from './components/common/Hero';
import About from './components/common/About';
import Experience from './components/common/Experience';
import Projects from './components/common/Projects';
import Skills from './components/common/Skills';
import Education from './components/common/Education';
import Footer from './components/common/Footer';
import Contact from './components/common/Contact';
import Achievements, { Publications, Thesis } from './components/common/Achievements';
import Hobbies from './components/common/Hobbies';

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
        <Thesis />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
