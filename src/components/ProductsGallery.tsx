import React, { useState } from 'react';
import { 
  Zap, 
  Globe, 
  Palette, 
  Server, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Bot,
  ArrowRight,
  X
} from 'lucide-react';

interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
  category: string;
  demoUrl?: string;
}

const ProductsGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 'saas-solutions',
      title: 'SaaS Solutions',
      description: 'Custom software-as-a-service platforms built for scalability and growth',
      features: ['Cloud-native architecture', 'Multi-tenant support', 'API-first design', 'Advanced analytics'],
      icon: Zap,
      gradient: 'from-gray-800 to-black',
      category: 'Software'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers',
      features: ['React/Next.js expertise', 'SEO optimized', 'Mobile-first design', 'Performance focused'],
      icon: Globe,
      gradient: 'from-gray-700 to-gray-800',
      category: 'Development'
    },
    {
      id: 'brand-design',
      title: 'Brand & Creative',
      description: 'Compelling brand identities and creative assets that stand out',
      features: ['Brand strategy', 'Logo design', 'Marketing materials', 'UI/UX design'],
      icon: Palette,
      gradient: 'from-gray-600 to-gray-700',
      category: 'Design'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Scalable infrastructure and deployment automation',
      features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'CI/CD pipelines', '24/7 monitoring'],
      icon: Server,
      gradient: 'from-gray-800 to-black',
      category: 'Infrastructure'
    },
    {
      id: 'marketing-automation',
      title: 'Marketing Automation',
      description: 'Intelligent marketing systems that nurture leads into customers',
      features: ['Email campaigns', 'Lead scoring', 'Customer journeys', 'Analytics dashboard'],
      icon: BarChart3,
      gradient: 'from-gray-700 to-gray-800',
      category: 'Marketing'
    },
    {
      id: 'security-solutions',
      title: 'Security Solutions',
      description: 'Enterprise-grade security for your digital assets',
      features: ['Penetration testing', 'Security audits', 'Compliance assistance', 'Incident response'],
      icon: Shield,
      gradient: 'from-gray-600 to-gray-700',
      category: 'Security'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      features: ['React Native', 'Flutter development', 'App Store optimization', 'Push notifications'],
      icon: Smartphone,
      gradient: 'from-gray-700 to-gray-800',
      category: 'Mobile'
    },
    {
      id: 'ai-integration',
      title: 'AI Integration',
      description: 'Intelligent automation and AI-powered features for your business',
      features: ['ChatGPT integration', 'Machine learning', 'Process automation', 'Data analysis'],
      icon: Bot,
      gradient: 'from-gray-800 to-black',
      category: 'AI/ML'
    }
  ];

  return (
    <section id="products-gallery" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Digital <span className="text-gray-800">Products & Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Comprehensive solutions designed to accelerate your digital transformation
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-electric-blue/50 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-electric-blue/10"
                onClick={() => setSelectedProduct(product)}
                style={{
                  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5 rounded-2xl transition-opacity duration-500 group-hover:opacity-10`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} bg-opacity-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-gray-200`}>
                      <IconComponent className="w-6 h-6 text-gray-800" />
                    </div>
                    <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-electric-blue transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center text-electric-blue text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>

                {/* Floating Animation Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-electric-blue rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-6 left-4 w-1 h-1 bg-cyber-purple rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-electric-blue/5 to-cyber-purple/5 rounded-2xl p-8 border border-electric-blue/20">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Need Something Custom?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We specialize in creating bespoke solutions tailored to your unique business requirements. 
              Let's discuss how we can build something extraordinary together.
            </p>
            <button 
              onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-electric-blue to-cyber-purple rounded-full text-white font-semibold hover:shadow-lg hover:shadow-electric-blue/30 transition-all duration-300 transform hover:scale-105"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedProduct.gradient} bg-opacity-10 flex items-center justify-center border border-gray-200`}>
                  <selectedProduct.icon className="w-8 h-8 text-gray-800" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.title}</h3>
                  <span className="text-gray-500">{selectedProduct.category}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-gray-600 text-lg mb-6">{selectedProduct.description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-electric-blue">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-electric-blue to-cyber-purple rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-6 py-3 border border-gray-300 rounded-full text-gray-600 hover:text-gray-800 hover:border-gray-400 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsGallery;