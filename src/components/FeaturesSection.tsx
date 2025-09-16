import React from 'react';
import { Target, BookOpen, TrendingUp, Users, Shield, Globe, Brain, Heart, Award } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'AI-Powered Career Matching',
      titleHindi: 'AI-संचालित करियर मैचिंग',
      description: 'Advanced algorithms analyze your profile to suggest perfect career paths based on Indian job market trends',
      descriptionHindi: 'उन्नत एल्गोरिदम भारतीय नौकरी बाजार के रुझानों के आधार पर सही करियर पथ सुझाने के लिए आपकी प्रोफ़ाइल का विश्लेषण करते हैं'
    },
    {
      icon: BookOpen,
      title: 'Free Learning Resources',
      titleHindi: 'मुफ्त शिक्षा संसाधन',
      description: 'Access to SWAYAM, NPTEL, and other quality courses at no cost with personalized learning paths',
      descriptionHindi: 'व्यक्तिगत शिक्षा पथों के साथ स्वयं, एनपीटीईएल और अन्य गुणवत्तापूर्ण पाठ्यक्रमों तक मुफ्त पहुंच'
    },
    {
      icon: TrendingUp,
      title: 'Skill-First Approach',
      titleHindi: 'कौशल-प्रथम दृष्टिकोण',
      description: 'Focus on practical skills that employers actually need, not just theoretical knowledge',
      descriptionHindi: 'केवल सैद्धांतिक ज्ञान नहीं, बल्कि व्यावहारिक कौशल पर ध्यान दें जिनकी नियोक्ताओं को वास्तव में आवश्यकता है'
    },
    {
      icon: Brain,
      title: 'Psychometric Assessment',
      titleHindi: 'मनोमितीय मूल्यांकन',
      description: 'Scientific personality and aptitude tests to understand your natural strengths and preferences',
      descriptionHindi: 'आपकी प्राकृतिक शक्तियों और प्राथमिकताओं को समझने के लिए वैज्ञानिक व्यक्तित्व और योग्यता परीक्षण'
    },
    {
      icon: Shield,
      title: 'Mental Health Support',
      titleHindi: 'मानसिक स्वास्थ्य सहायता',
      description: 'Built-in wellbeing checks and crisis support resources with immediate helpline access',
      descriptionHindi: 'तत्काल हेल्पलाइन पहुंच के साथ अंतर्निहित कल्याण जांच और संकट सहायता संसाधन'
    },
    {
      icon: Users,
      title: 'Parent Involvement',
      titleHindi: 'माता-पिता की भागीदारी',
      description: 'Clear communication tools to help parents understand and support your chosen career path',
      descriptionHindi: 'माता-पिता को आपके चुने गए करियर पथ को समझने और समर्थन करने में मदद करने के लिए स्पष्ट संचार उपकरण'
    },
    {
      icon: Globe,
      title: 'Multiple Pathways',
      titleHindi: 'कई मार्ग',
      description: 'Explore vocational, diploma, degree, and skill-based career options beyond traditional routes',
      descriptionHindi: 'पारंपरिक मार्गों से परे व्यावसायिक, डिप्लोमा, डिग्री और कौशल-आधारित करियर विकल्पों का अन्वेषण करें'
    },
    {
      icon: Heart,
      title: 'Judgment-Free Environment',
      titleHindi: 'निर्णय-मुक्त वातावरण',
      description: 'Safe space to explore your interests without pressure or judgment about past academic performance',
      descriptionHindi: 'पिछली शैक्षणिक प्रदर्शन के बारे में दबाव या निर्णय के बिना अपनी रुचियों का पता लगाने के लिए सुरक्षित स्थान'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      titleHindi: 'उद्योग मान्यता',
      description: 'Courses and certifications that are recognized and valued by employers across India',
      descriptionHindi: 'पाठ्यक्रम और प्रमाणन जो भारत भर के नियोक्ताओं द्वारा मान्यता प्राप्त और मूल्यवान हैं'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Astral?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            We understand the unique challenges faced by Indian students and provide personalized, practical solutions
          </p>
          <p className="text-lg text-gray-500 font-hindi">
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
  );
};

export default FeaturesSection;