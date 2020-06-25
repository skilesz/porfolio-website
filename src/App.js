import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/sections/Home';
import Footer from './components/layout/Footer';
import Projects from './components/sections/Projects';
import About from './components/sections/About';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
