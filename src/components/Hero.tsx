import React, { useEffect, useState } from 'react';
import { ChevronDown,  Rocket } from 'lucide-react';
import logo from '../assets/logo.png';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const gridPattern = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23e5e7eb' stroke-width='0.5'%3E%3Cpath d='m0 .5h32m-32 32v-32'/%3E%3C/svg%3E";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToForm = () => {
    document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCaseStudies = () => {
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/40 via-transparent to-gray-200/30"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.08), transparent 40%)`
          }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-gray-400 rounded-full animate-float opacity-40"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-gray-500 rounded-full animate-float opacity-35" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gray-300 rounded-full animate-float opacity-45" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-gray-600 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-gray-700 rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-7 h-7 bg-gray-400 rounded-full animate-float opacity-35" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-gray-500 rounded-full animate-float opacity-40" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-gray-300 rounded-full animate-float opacity-45" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Additional Animated Shapes */}
        <div className="absolute top-32 left-1/2 w-8 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full animate-float opacity-40" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-48 right-1/4 w-6 h-6 border-2 border-gray-300 rounded-full animate-pulse opacity-50" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-5 h-5 bg-gray-500 rounded-full animate-float opacity-40" style={{ animationDelay: '4.5s' }}></div>
        
        {/* Grid Pattern */}
        <div className={`absolute inset-0 bg-[url('${gridPattern}')] opacity-15`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-8">
            <img src={logo} alt="CaffeineCoders logo" className="w-20 h-20 mr-4 rounded-md object-cover shadow-md" />
            <h1 className="text-4xl md:text-5xl font-bold text-black drop-shadow-lg">
              CaffeineCoders
            </h1>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-black drop-shadow-sm">
            Revolutionizing
            <br />
            <span className="text-gray-900">
              Digital Partnerships
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-800 mb-4 max-w-3xl mx-auto">
            From Friction to Fortune — Partner with us to solve your toughest digital pain points.
          </p>
          
          <p className="text-sm md:text-base text-gray-700 mb-12 italic">
            Powered by innovation. Driven by results.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
          <button
            onClick={scrollToForm}
            className="group relative px-8 py-4 bg-black text-white font-semibold text-lg transition-all duration-300 hover:bg-gray-900 hover:shadow-2xl hover:shadow-gray-400/20 hover:scale-105 transform overflow-hidden rounded-lg"
          >
            <span className="relative z-10 flex items-center">
              <Rocket className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Start Your Partnership
            </span>
            <div className="absolute inset-0 bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={scrollToCaseStudies}
            className="group relative px-8 py-4 border-2 border-black text-black font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-gray-400/20 hover:scale-105 transform overflow-hidden rounded-lg"
          >
            <span className="relative z-10">See Success Stories</span>
            <div className="absolute inset-0 bg-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <ChevronDown className="w-8 h-8 text-gray-700 drop-shadow-sm" />
          <div className="absolute inset-0 w-8 h-8 bg-gray-400 rounded-full blur-sm opacity-30 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
};

export default Hero;