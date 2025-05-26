import React from 'react';
import Header from '../components/Layout/Header/Header';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Layout/Footer/Footer';

const Homepage = ({ toggleTheme }: { toggleTheme: () => void }) => {
  return (
    <>
      <Header />
      <Hero toggleTheme={toggleTheme} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;