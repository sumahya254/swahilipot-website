// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Programs from './components/programs';
import Events from './components/events';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Events /> 
      <Footer />

      
    
    </Router>
  );
}

export default App;
