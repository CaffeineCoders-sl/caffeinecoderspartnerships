import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Stethoscope, ShoppingCart, Code, DollarSign, GraduationCap, Factory, Store, Building } from 'lucide-react';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const industries = [
    {
      name: "Healthcare",
      description: "Revolutionizing patient care and medical operations with cutting-edge technology",
      icon: Stethoscope,
      color: "from-gray-800 to-black",
      products: [
        "AI-powered patient management systems",
        "Telemedicine platforms with video consultation",
        "Electronic Health Records (EHR) integration",
        "Medical appointment scheduling & reminders",
        "Healthcare analytics & reporting dashboards",
        "Medical device connectivity solutions",
        "Patient portal applications",
        "HIPAA-compliant mobile apps"
      ]
    },
    {
      name: "E-commerce",
      description: "Building scalable online stores and marketplace solutions",
      icon: ShoppingCart,
      color: "from-gray-700 to-gray-800",
      products: [
        "Custom e-commerce platforms",
        "Multi-vendor marketplace development",
        "Inventory management systems",
        "Payment gateway integration",
        "Order tracking & logistics software",
        "Customer loyalty programs",
        "Mobile shopping applications",
        "AI-powered product recommendations"
      ]
    },
    {
      name: "SaaS",
      description: "Developing cloud-based software solutions for modern businesses",
      icon: Code,
      color: "from-gray-600 to-gray-700",
      products: [
        "Multi-tenant SaaS platforms",
        "Subscription management systems",
        "API development & integration",
        "User authentication & authorization",
        "Real-time collaboration tools",
        "Automated billing & invoicing",
        "Data analytics & reporting",
        "Scalable cloud infrastructure"
      ]
    },
    {
      name: "Finance",
      description: "Creating secure financial technology solutions and banking platforms",
      icon: DollarSign,
      color: "from-gray-800 to-black",
      products: [
        "Digital banking platforms",
        "Fintech mobile applications",
        "Cryptocurrency trading systems",
        "Payment processing solutions",
        "Risk assessment & fraud detection",
        "Investment portfolio management",
        "Regulatory compliance software",
        "Financial analytics dashboards"
      ]
    },
    {
      name: "Education",
      description: "Building learning management systems and educational technology",
      icon: GraduationCap,
      color: "from-gray-700 to-gray-800",
      products: [
        "Learning Management Systems (LMS)",
        "Online course platforms",
        "Student information systems",
        "Virtual classroom software",
        "Assessment & testing tools",
        "Educational mobile apps",
        "E-learning content management",
        "Progress tracking & analytics"
      ]
    },
    {
      name: "Manufacturing",
      description: "Implementing Industry 4.0 solutions and smart factory automation",
      icon: Factory,
      color: "from-gray-600 to-gray-700",
      products: [
        "IoT manufacturing solutions",
        "Production monitoring systems",
        "Supply chain management software",
        "Quality control automation",
        "Predictive maintenance platforms",
        "Warehouse management systems",
        "MES (Manufacturing Execution Systems)",
        "Digital twin technology"
      ]
    },
    {
      name: "Retail",
      description: "Enhancing retail experiences with digital transformation",
      icon: Store,
      color: "from-gray-700 to-gray-800",
      products: [
        "Point of Sale (POS) systems",
        "Retail management software",
        "Customer relationship management",
        "Inventory optimization tools",
        "Loyalty program platforms",
        "In-store digital signage",
        "Mobile retail applications",
        "E-commerce integration"
      ]
    },
    {
      name: "Real Estate",
      description: "Developing property management and real estate technology solutions",
      icon: Building,
      color: "from-gray-800 to-black",
      products: [
        "Property management systems",
        "Real estate listing platforms",
        "Tenant screening software",
        "Rental payment processing",
        "Property maintenance tracking",
        "Virtual property tours",
        "Real estate analytics",
        "Smart building automation"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length);
  };

  const currentIndustry = industries[currentSlide];

  return (
    <section id="case-studies" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Industries <span className="text-gray-800">We Serve</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Tailored solutions for every industry. Discover what we can build for your business.
          </p>
        </div>

        {/* Main Case Study Display */}
        <div className="relative">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${currentIndustry.color} bg-opacity-10`}>
                      <currentIndustry.icon className="w-8 h-8 text-gray-800" />
                    </div>
                    <span className="text-gray-600">Industry Solution</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
                    {currentIndustry.name}
                  </h3>
                  <p className="text-gray-700 text-lg">{currentIndustry.description}</p>
                </div>

                <div>
                  <h4 className="text-electric-blue font-semibold mb-4">Products & Services We Offer</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {currentIndustry.products.map((product, index) => (
                      <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentIndustry.color}`}></div>
                        <span className="text-gray-700">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-electric-blue/5 to-cyber-purple/5 rounded-xl p-6 border border-electric-blue/20">
                  <p className="text-gray-700 mb-4">
                    Ready to transform your {currentIndustry.name.toLowerCase()} business with cutting-edge technology?
                  </p>
                  <button className="bg-gradient-to-r from-electric-blue to-cyber-purple text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-electric-blue/25 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className={`p-12 rounded-2xl bg-gradient-to-r ${currentIndustry.color} bg-opacity-10`}>
                    <currentIndustry.icon className="w-24 h-24 text-gray-800" />
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 border border-electric-blue shadow-lg shadow-electric-blue/20">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-electric-blue" />
                    <span className="text-sm font-medium text-gray-700">Custom Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-electric-blue transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {industries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-electric-blue to-cyber-purple' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-electric-blue transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-electric-blue mb-2">8+</div>
            <div className="text-gray-600">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-purple mb-2">50+</div>
            <div className="text-gray-600">Products & Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-hot-orange mb-2">100%</div>
            <div className="text-gray-600">Custom Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-2">24/7</div>
            <div className="text-gray-600">Industry Expertise</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;