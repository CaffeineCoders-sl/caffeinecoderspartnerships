import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, User, Target, Mail,  Code, BarChart3, MessageSquare, Trophy } from 'lucide-react';

interface FormData {
  // Basic Info
  name: string;
  industry: string;
  website: string;
  companySize: string;
  location: string;

  // Challenges & Goals
  challenges: string[];
  customChallenge: string;
  goals: string[];
  targetAudience: string;
  competitors: string[];

  // Project Details
  projectType: string[];
  techStack: string[];
  features: string[];
  integrations: string[];
  timeline: string;
  budget: string;

  // Business Metrics
  successMetrics: string[];
  currentTools: string[];

  // Contact & Preferences
  email: string;
  phone: string;
  preferredContact: string;
  communicationStyle: string;
  previousExperience: string;
}

const PartnershipForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<FormData>({
    name: '',
    industry: '',
    website: '',
    companySize: '',
    location: '',
    challenges: [],
    customChallenge: '',
    goals: [],
    targetAudience: '',
    competitors: [],
    projectType: [],
    techStack: [],
    features: [],
    integrations: [],
    timeline: '',
    budget: '',
    successMetrics: [],
    currentTools: [],
    email: '',
    phone: '',
    preferredContact: '',
    communicationStyle: '',
    previousExperience: ''
  });

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  // industries list removed — we collect industry in step 0 already

  const ourSolutions = [
    'Custom Web Applications',
    'E-commerce Platforms',
    'Mobile App Development',
    'Digital Marketing Solutions',
    'Business Automation',
    'Data Analytics & BI',
    'Cloud Migration',
    'API Integration',
    'UI/UX Design',
    'Performance Optimization',
    'Security Implementation',
    'Consulting & Strategy'
  ];

  const challenges = [
    'Outdated website or digital presence',
    'Manual business processes',
    'Poor customer experience',
    'Inefficient data management',
    'Scalability limitations',
    'Security vulnerabilities',
    'Integration challenges',
    'Mobile optimization needed',
    'Performance issues',
    'Lack of automation',
    'Custom business needs'
  ];

  const goals = [
    'Increase online sales/revenue',
    'Improve operational efficiency',
    'Enhance customer experience',
    'Expand market reach',
    'Launch new digital products',
    'Modernize legacy systems',
    'Reduce operational costs',
    'Improve data insights',
    'Strengthen brand presence',
    'Accelerate growth'
  ];

  const communicationStyles = [
    'Daily standups',
    'Weekly updates',
    'Bi-weekly reports',
    'Milestone reviews',
    'Flexible communication'
  ];

  const steps = [
    { title: 'Your Business', icon: User },
    { title: 'Our Solutions', icon: Code },
    { title: 'Your Challenges', icon: Target },
    { title: 'Project Goals', icon: BarChart3 },
    { title: 'Contact & Budget', icon: Mail },
    { title: 'Success!', icon: Check }
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    switch (step) {
      case 0:
        if (!formData.name.trim()) newErrors.name = 'Company name is required';
        if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
        if (!formData.companySize) newErrors.companySize = 'Company size is required';
        break;

      case 1:
        if (formData.projectType.length === 0) newErrors.projectType = 'Please select at least one solution';
        break;

      case 2:
        if (formData.challenges.length === 0) newErrors.challenges = 'Please select at least one challenge';
        break;

      case 3:
        if (formData.goals.length === 0) newErrors.goals = 'Please select at least one goal';
        break;

      case 4:
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
        if (!formData.preferredContact) newErrors.preferredContact = 'Preferred contact method is required';
        if (!formData.budget) newErrors.budget = 'Please select a budget range';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleArrayItem = (array: string[], item: string, field: keyof FormData) => {
    const newArray = array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];
    setFormData(prev => ({ ...prev, [field]: newArray }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    setEmailError(null);

    try {
      // Try sending via EmailJS REST API if env vars are set
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

      const buildBody = () => {
        // Flatten arrays to comma separated strings for email body/template
        const flat: Record<string, string> = {};
        Object.entries(formData).forEach(([k, v]) => {
          if (Array.isArray(v)) flat[k] = v.join(', ');
          else flat[k] = String(v ?? '');
        });
        return flat;
      };

      const template_params = {
        to_email: 'caffeinecoders.sl@gmail.com',
        ...buildBody()
      };

      if (SERVICE_ID && TEMPLATE_ID && USER_ID) {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: USER_ID,
            template_params
          })
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`EmailJS error: ${res.status} ${text}`);
        }
      } else {
        // Fallback: open user's mail client with prefilled mailto (best-effort)
        const subject = encodeURIComponent(`Partnership Request from ${formData.name || 'Website'}`);
        const body = encodeURIComponent(Object.entries(template_params).map(([k, v]) => `${k}: ${v}`).join('\n'));
        window.location.href = `mailto:caffeinecoders.sl@gmail.com?subject=${subject}&body=${body}`;
      }

      // success
      setCurrentStep(steps.length - 1);
    } catch (err: unknown) {
      console.error('Failed to send partnership email', err);
      const message = err instanceof Error ? err.message : String(err);
      setEmailError(message || 'Failed to send email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-center mb-8 text-black">Tell us about your business</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-black focus:ring-2 transition-all duration-300 ${
                    errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-black focus:ring-black/20'
                  }`}
                  placeholder="Your company name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                <input
                  type="text"
                  value={formData.industry}
                  onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-black focus:ring-2 transition-all duration-300 ${
                    errors.industry ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-black focus:ring-black/20'
                  }`}
                  placeholder="e.g., E-commerce, SaaS, Healthcare"
                />
                {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Size *</label>
                <select
                  value={formData.companySize}
                  onChange={(e) => setFormData(prev => ({ ...prev, companySize: e.target.value }))}
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-black focus:ring-2 transition-all duration-300 ${
                    errors.companySize ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-black focus:ring-black/20'
                  }`}
                >
                  <option value="">Select company size</option>
                  {companySizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                {errors.companySize && <p className="text-red-500 text-sm mt-1">{errors.companySize}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300"
                placeholder="City, Country"
              />
            </div>
          </div>
        );

  // case 1 removed: we collect industry in step 0 already

      case 1:
        return (
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-center mb-8 text-black">Our Solutions</h3>
            <p className="text-gray-600 text-center mb-6">We offer comprehensive digital solutions</p>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-black">Our Solutions</h4>
              <p className="text-gray-600 mb-4">Select the solutions you're interested in</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ourSolutions.map((solution) => (
                  <button
                    key={solution}
                    onClick={() => toggleArrayItem(formData.projectType, solution, 'projectType')}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 text-left text-sm ${
                      formData.projectType.includes(solution)
                        ? 'border-black bg-gray-100 text-black font-medium'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-black/50 hover:bg-gray-50'
                    }`}
                  >
                    {solution}
                  </button>
                ))}
              </div>
              {errors.projectType && <p className="text-red-500 text-sm mt-2">{errors.projectType}</p>}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-center mb-8 text-black">Your Challenges</h3>
            <p className="text-gray-600 text-center mb-6">What challenges are you currently facing?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {challenges.map((challenge) => (
                <button
                  key={challenge}
                  onClick={() => toggleArrayItem(formData.challenges, challenge, 'challenges')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    formData.challenges.includes(challenge)
                      ? 'border-black bg-gray-100 text-black font-medium'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-black/50 hover:bg-gray-50'
                  }`}
                >
                  {challenge}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Other Challenges (Optional)</label>
              <textarea
                value={formData.customChallenge}
                onChange={(e) => setFormData(prev => ({ ...prev, customChallenge: e.target.value }))}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300"
                placeholder="Describe any other specific challenges you're facing that aren't listed above..."
                rows={4}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-center mb-8 text-black">Project Goals</h3>

            <p className="text-gray-600 text-center mb-6">What are your main objectives?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {goals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => toggleArrayItem(formData.goals, goal, 'goals')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    formData.goals.includes(goal)
                      ? 'border-black bg-gray-100 text-black font-medium'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-black/50 hover:bg-gray-50'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
            {errors.goals && <p className="text-red-500 text-sm mt-2">{errors.goals}</p>}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Tools & Systems</label>
              <textarea
                value={formData.currentTools.join(', ')}
                onChange={(e) => setFormData(prev => ({ ...prev, currentTools: e.target.value.split(',').map(s => s.trim()) }))}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300"
                placeholder="List your current tools, software, or systems..."
                rows={3}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-center mb-8 text-black">Contact & Budget</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-black focus:ring-2 transition-all duration-300 ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-black focus:ring-black/20'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300"
                  placeholder="+94 XX XXX XXXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method *</label>
              <select
                value={formData.preferredContact}
                onChange={(e) => setFormData(prev => ({ ...prev, preferredContact: e.target.value }))}
                className={`w-full px-4 py-3 bg-white border rounded-xl text-black focus:ring-2 transition-all duration-300 ${
                  errors.preferredContact ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-black focus:ring-black/20'
                }`}
              >
                <option value="">Select preferred contact method</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="video">Video Call</option>
                <option value="chat">Chat/Messaging</option>
              </select>
              {errors.preferredContact && <p className="text-red-500 text-sm mt-1">{errors.preferredContact}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Budget (LKR) *</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                className={`w-full px-4 py-3 bg-white border rounded-xl text-black focus:ring-2 transition-all duration-300 ${
                  errors.budget ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-black focus:ring-black/20'
                }`}
              >
                <option value="">Select your budget range</option>
                <option value="under-500k">Under LKR 500,000</option>
                <option value="500k-1m">LKR 500,000 - 1,000,000</option>
                <option value="1m-2m">LKR 1,000,000 - 2,000,000</option>
                <option value="2m-5m">LKR 2,000,000 - 5,000,000</option>
                <option value="5m-10m">LKR 5,000,000 - 10,000,000</option>
                <option value="over-10m">Over LKR 10,000,000</option>
                <option value="discuss">Let's discuss</option>
              </select>
              {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Communication Style</label>
              <select
                value={formData.communicationStyle}
                onChange={(e) => setFormData(prev => ({ ...prev, communicationStyle: e.target.value }))}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300"
              >
                <option value="">Select communication preference</option>
                {communicationStyles.map(style => (
                  <option key={style} value={style}>{style}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Previous Experience</label>
              <textarea
                value={formData.previousExperience}
                onChange={(e) => setFormData(prev => ({ ...prev, previousExperience: e.target.value }))}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300"
                placeholder="Tell us about your experience with similar projects..."
                rows={3}
              />
            </div>
          </div>
        );

  case 5:
        return (
          <div className="text-center space-y-6 animate-slide-up">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-black">Partnership Request Submitted!</h3>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for providing detailed information about your project. We'll analyze your requirements and get back to you within 24 hours with a customized proposal.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="text-lg font-semibold mb-4 text-black">What's Next?</h4>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• Detailed requirements analysis</li>
                <li>• Technical feasibility assessment</li>
                <li>• Custom solution blueprint</li>
                <li>• Project timeline & milestones</li>
                <li>• Partnership proposal with pricing</li>
                <li>• Kickoff meeting scheduling</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-black rounded-full text-white font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
              >
                <Trophy className="w-5 h-5 inline mr-2" />
                Explore Success Stories
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 border border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Start New Request
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="partnership-form" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Start Your <span className="text-gray-800">Partnership Journey</span>
          </h2>
          <p className="text-xl text-gray-700">A comprehensive approach to understanding your business needs</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    index < currentStep
                      ? 'bg-black text-white shadow-lg'
                      : index === currentStep
                      ? 'bg-gray-800 text-white animate-pulse shadow-lg'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`text-xs mt-2 text-center max-w-20 ${
                    index <= currentStep ? 'text-black font-medium' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep) / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
          {renderStep()}

          {/* Navigation Buttons */}
          {currentStep < steps.length - 1 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  currentStep === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Back
              </button>

              {currentStep === steps.length - 2 ? (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center px-6 py-3 bg-black rounded-full text-white font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <Check className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  className="flex items-center px-6 py-3 bg-black rounded-full text-white font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
                >
                  Continue
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              )}
            </div>
          )}
          {emailError && (
            <p className="text-red-500 text-sm mt-4 text-center">{emailError}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnershipForm;
