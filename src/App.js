import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Technology from './components/Technology';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Solutions />
      <Technology />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;