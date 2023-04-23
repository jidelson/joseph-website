import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import NotFoundPage from './components/pages/NotFoundPage';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      <Footer />
      
    </div>
  );
}

export default App;