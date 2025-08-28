import React from 'react';
import logo from '../assets/logo.png';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ArrowRight,
  Star
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const partnerLogos = [
    { name: 'AWS', width: 'w-16' },
    { name: 'Google Cloud', width: 'w-20' },
    { name: 'Microsoft Azure', width: 'w-18' },
    { name: 'Stripe', width: 'w-14' },
    { name: 'Shopify', width: 'w-16' },
    { name: 'Salesforce', width: 'w-20' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = () => {
    document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      {/* Main CTA Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black">
            Ready to Join the Revolution in
            <br />
            <span className="text-gray-800">
              Digital Partnerships?
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Don't let your competition get ahead. Partner with us today and transform your digital presence into a revenue-generating powerhouse.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button
              onClick={scrollToForm}
              className="group px-8 py-4 bg-black text-white font-semibold text-lg hover:bg-gray-800 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 transform hover:scale-105 flex items-center rounded-lg"
            >
              Start Your Partnership Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="flex items-center text-gray-600">
              <span className="text-2xl mr-2">⏰</span>
              <span>Free consultation • 24h response time</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="text-lg mr-2">🛡️</span>
              SOC 2 Type II Certified
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-black" />
              98% Client Satisfaction Rate
            </div>
            <div className="flex items-center">
              <span className="text-lg mr-2">🏆</span>
              Award-Winning Team
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="py-12 px-4 border-b border-gray-300">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-gray-600 text-sm uppercase tracking-wide mb-8">
            We work with these
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {partnerLogos.map((partner, index) => (
              <div key={index} className={`${partner.width} h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-700 border border-gray-300`}>
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <img src={logo} alt="CaffeineCoders logo" className="w-12 h-12 mr-3 object-cover rounded-md shadow" />
                  <span className="text-2xl font-bold text-black">CaffeineCoders</span>
                </div>
                <p className="text-gray-700 mb-6 max-w-md">
                  Revolutionizing digital partnerships through innovative solutions and cutting-edge technology. Your success is our mission.
                </p>
              
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/caffeinecoders-lk/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-300 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-black">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">SaaS Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Web Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Cloud Solutions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">AI Integration</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Brand Design</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-black">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                  <a href="mailto:caffeinecoders.sl@gmail.com" className="text-gray-600 hover:text-black transition-colors duration-300">
                    caffeinecoders.sl@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                  <a href="tel:+94767319134" className="text-gray-600 hover:text-black transition-colors duration-300">
                    +94 767319134
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Colombo, Sri Lanka
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 sm:mb-0">
            © {currentYear} CaffeineCoders. All rights reserved. | Privacy Policy | Terms of Service
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-600 hover:text-black transition-colors duration-300 text-sm"
          >
            Back to Top
            <ArrowRight className="w-4 h-4 ml-1 rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;