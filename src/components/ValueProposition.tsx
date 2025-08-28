import React from 'react';
import { 
  Lightbulb, 
  Rocket, 
  Target, 
  Shield, 
  Users, 
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies and forward-thinking strategies to give you a competitive advantage.',
      gradient: 'from-gray-800 to-black'
    },
    {
      icon: Rocket,
      title: 'Rapid Execution',
      description: 'From concept to launch in record time. Our agile methodology ensures quick delivery without compromising quality.',
      gradient: 'from-gray-700 to-gray-800'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every solution is designed with measurable outcomes in mind. We focus on ROI and tangible business impact.',
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Your data and systems are protected by industry-leading security practices and compliance standards.',
      gradient: 'from-gray-800 to-black'
    }
  ];

  const stats = [
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '150+', label: 'Projects Delivered', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Users },
    { number: '300%', label: 'Average ROI Increase', icon: TrendingUp }
  ];

  return (
    <section id="value-proposition" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Why Partner with <span className="bg-gradient-to-r from-electric-blue to-cyber-purple bg-clip-text text-transparent">CaffeineCoders?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your vision, powered by our execution. We transform digital challenges into competitive advantages.
          </p>
        </div>

        {/* Main Value Props */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Bold Statements */}
          <div className="space-y-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="flex items-start gap-6 group">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} bg-opacity-10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 border border-gray-200`}>
                    <IconComponent className="w-8 h-8 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-electric-blue transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Success Stories */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Transformation Stories</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-electric-blue pl-6">
                  <h4 className="font-semibold text-electric-blue mb-2">E-commerce Revolution</h4>
                  <p className="text-gray-600 text-sm">
                    Transformed a traditional retail business into a digital-first operation, resulting in 400% online revenue growth in just 6 months.
                  </p>
                </div>
                
                <div className="border-l-4 border-cyber-purple pl-6">
                  <h4 className="font-semibold text-cyber-purple mb-2">SaaS Platform Launch</h4>
                  <p className="text-gray-600 text-sm">
                    Built and launched a complete SaaS platform from zero to 10,000+ users, generating $2M+ ARR within the first year.
                  </p>
                </div>
                
                <div className="border-l-4 border-hot-orange pl-6">
                  <h4 className="font-semibold text-hot-orange mb-2">Process Automation</h4>
                  <p className="text-gray-600 text-sm">
                    Automated manual workflows for a healthcare provider, reducing operational costs by 60% and improving patient satisfaction by 45%.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center group hover:border-electric-blue/50 transition-all duration-300 shadow-sm">
                    <IconComponent className="w-8 h-8 mx-auto mb-3 text-electric-blue group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Vision 2030 Section */}
        <div className="bg-gradient-to-r from-electric-blue/5 via-cyber-purple/5 to-hot-orange/5 rounded-3xl p-12 border border-electric-blue/20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-electric-blue to-cyber-purple bg-clip-text text-transparent">
              Vision 2030
            </span>
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            The future of business is digital, intelligent, and interconnected. We're not just building solutions for today—we're architecting the infrastructure for tomorrow's most successful companies. Join us in shaping the next decade of digital innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-electric-blue to-cyber-purple rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-electric-blue/30 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
            </button>
            <span className="text-gray-500 italic">The future starts now</span>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
            What You Get as Our <span className="text-electric-blue">Partner</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Dedicated Team</h4>
              <p className="text-gray-600">Your own dedicated team of experts working exclusively on your success</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyber-purple to-hot-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Guaranteed Results</h4>
              <p className="text-gray-600">We stand behind our work with performance guarantees and success metrics</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-hot-orange to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Ongoing Support</h4>
              <p className="text-gray-600">24/7 support and continuous optimization to ensure long-term success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;