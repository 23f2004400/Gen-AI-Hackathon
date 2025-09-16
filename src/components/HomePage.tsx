import React from 'react';
import { ArrowRight, BookOpen, Target, TrendingUp, Users, Shield, Globe } from 'lucide-react';

interface HomePageProps {
  onStartJourney: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartJourney }) => {
  const features = [
    {
      icon: Target,
      title: 'Personalized Career Paths',
      titleHindi: 'व्यक्तिगत करियर पथ',
      description: 'AI-powered recommendations based on your interests, skills, and constraints',
      descriptionHindi: 'आपकी रुचियों, कौशल और बाधाओं के आधार पर AI-संचालित सिफारिशें'
    },
    {
      icon: BookOpen,
      title: 'Free Learning Resources',
      titleHindi: 'मुफ्त शिक्षा संसाधन',
      description: 'Access to SWAYAM, NPTEL, and other quality courses at no cost',
      descriptionHindi: 'स्वयं, एनपीटीईएल और अन्य गुणवत्तापूर्ण पाठ्यक्रमों तक मुफ्त पहुंच'
    },
    {
      icon: TrendingUp,
      title: 'Skill-First Approach',
      titleHindi: 'कौशल-प्रथम दृष्टिकोण',
      description: 'Focus on practical skills that employers actually need',
      descriptionHindi: 'व्यावहारिक कौशल पर ध्यान दें जिनकी नियोक्ताओं को वास्तव में आवश्यकता है'
    },
    {
      icon: Shield,
      title: 'Mental Health Support',
      titleHindi: 'मानसिक स्वास्थ्य सहायता',
      description: 'Built-in wellbeing checks and crisis support resources',
      descriptionHindi: 'अंतर्निहित कल्याण जांच और संकट सहायता संसाधन'
    },
    {
      icon: Users,
      title: 'Parent Involvement',
      titleHindi: 'माता-पिता की भागीदारी',
      description: 'Clear communication tools to help parents understand your chosen path',
      descriptionHindi: 'माता-पिता को आपके चुने गए पथ को समझने में मदद करने के लिए स्पष्ट संचार उपकरण'
    },
    {
      icon: Globe,
      title: 'Multiple Pathways',
      titleHindi: 'कई मार्ग',
      description: 'Explore vocational, diploma, degree, and skill-based career options',
      descriptionHindi: 'व्यावसायिक, डिप्लोमा, डिग्री और कौशल-आधारित करियर विकल्पों का अन्वेषण करें'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Students Guided', labelHindi: 'छात्रों का मार्गदर्शन' },
    { number: '500+', label: 'Career Paths', labelHindi: 'करियर पथ' },
    { number: '95%', label: 'Success Rate', labelHindi: 'सफलता दर' },
    { number: '24/7', label: 'Support Available', labelHindi: 'सहायता उपलब्ध' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Safe, Supportive, and Judgment-Free</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              You don't need another{' '}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                drop year
              </span>
              <br />
              You need a{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                plan
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              AI-powered career guidance for Indian students who feel "stuck" after 12th grade
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto font-hindi">
              12वीं के बाद "फंसे हुए" महसूस करने वाले भारतीय छात्रों के लिए AI-संचालित करियर मार्गदर्शन
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onStartJourney}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-bounce-gentle"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
                <div className="text-sm text-gray-500 font-hindi">{stat.labelHindi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Astral?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges faced by Indian students and provide personalized, practical solutions
            </p>
            <p className="text-lg text-gray-500 mt-2 font-hindi">
              हम भारतीय छात्रों की अनूठी चुनौतियों को समझते हैं और व्यक्तिगत, व्यावहारिक समाधान प्रदान करते हैं
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 font-hindi">
                  {feature.titleHindi}
                </p>
                <p className="text-gray-600 mb-2">
                  {feature.description}
                </p>
                <p className="text-sm text-gray-500 font-hindi">
                  {feature.descriptionHindi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Find Your Path?
          </h2>
          <p className="text-xl text-orange-100 mb-4">
            Join thousands of students who have discovered their perfect career match
          </p>
          <p className="text-lg text-orange-200 mb-8 font-hindi">
            हजारों छात्रों में शामिल हों जिन्होंने अपना सही करियर मैच खोजा है
          </p>
          <button
            onClick={onStartJourney}
            className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
          >
            <span>Start Free Assessment</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;