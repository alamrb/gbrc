import React from 'react';
import { Cloud, Globe, Code, Server, Users, Shield } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;