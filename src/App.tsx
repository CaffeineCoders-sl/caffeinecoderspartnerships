import React from 'react';
import Hero from './components/Hero';
import PartnershipForm from './components/PartnershipForm';
import CaseStudies from './components/CaseStudies';
import ProductsGallery from './components/ProductsGallery';
import ValueProposition from './components/ValueProposition';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Hero />
      <PartnershipForm />
      <CaseStudies />
      <ProductsGallery />
      <ValueProposition />
      <Footer />
    </div>
  );
}

export default App;