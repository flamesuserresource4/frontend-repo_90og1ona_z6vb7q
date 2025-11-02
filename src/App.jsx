import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <CaseStudies />
      <CTA />
    </div>
  );
}

export default App;
