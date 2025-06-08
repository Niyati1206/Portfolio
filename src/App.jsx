import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
import Skills from './components/Skills';
import Experience from './components/Experience';
export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling down
    });
  })
  return (
    <main>
      {/* Gradient image  */}
      <img className="absolute right-0 top-0 opacity-60 -z-10"src="/gradient.png" alt="Gradient-image" />

      {/* Thoda sa glow chahiye */}
      <div className=" h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"> </div>
      <Header/>
      <Hero/>
     {/* Add section IDs + scroll margin for fixed navbar */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>
      <section id="experience" className="scroll-mt-24">
        <Experience />
      </section>
      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      <Footer />
    </main>
  )
}