import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Layout/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Layout/Footer/Footer';
import Resume from './components/Resume/Resume'; // Ensure this import is correct

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Resume /> {/* Add Resume component here */}
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;