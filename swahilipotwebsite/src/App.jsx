// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Programs from './components/programs';
import Events from './components/events';
import Partners from './components/partners';
import Contact from './components/contact';
import Footer from './components/footer';
import EventDetails from './pages/EventDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Programs />
            <Events />
            <Partners />
            <Contact />
          </>
        } />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
