import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/sections/Home';
import Footer from './components/layout/Footer';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <div className="section-between"></div>
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
