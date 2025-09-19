import React from 'react';
import { Phone, MessageCircle, Heart, AlertTriangle, Clock, Shield } from 'lucide-react';

const EmergencySection: React.FC = () => {
  const helplines = [
    {
      name: 'KIRAN Mental Health Helpline',
      //nameHindi: 'किरण मानसिक स्वास्थ्य हेल्पलाइन',
      number: '1800-599-0019',
      description: '24/7 Government helpline for mental health support',
      //descriptionHindi: 'मानसिक स्वास्थ्य सहायता के लिए 24/7 सरकारी हेल्पलाइन',
      type: 'government',
      available: '24/7'
    },
    {
      name: 'Aasra Suicide Prevention',
      //nameHindi: 'आसरा आत्महत्या रोकथाम',
      number: '91-9820466726',
      description: 'Mumbai-based crisis intervention center',
      //descriptionHindi: 'मुंबई स्थित संकट हस्तक्षेप केंद्र',
      type: 'ngo',
      available: '24/7'
    },
    {
      name: 'Sneha India',
      //nameHindi: 'स्नेहा इंडिया',
      number: '044-24640050',
      description: 'Chennai-based emotional support helpline',
      //descriptionHindi: 'चेन्नई स्थित भावनात्मक सहायता हेल्पलाइन',
      type: 'ngo',
      available: '24/7'
    },
    {
      name: 'iCall Psychosocial Helpline',
      //nameHindi: 'आईकॉल मनोसामाजिक हेल्पलाइन',
      number: '9152987821',
      description: 'Professional counseling support',
      //descriptionHindi: 'पेशेवर परामर्श सहायता',
      type: 'professional',
      available: 'Mon-Sat, 8AM-10PM'
    },
    {
      name: 'Vandrevala Foundation',
      //nameHindi: 'वंद्रेवाला फाउंडेशन',
      number: '9999666555',
      description: 'Free counseling and crisis support',
      //descriptionHindi: 'मुफ्त परामर्श और संकट सहायता',
      type: 'ngo',
      available: '24/7'
    },
    {
      name: 'Sumaitri',
      //nameHindi: 'सुमैत्री',
      number: '011-23389090',
      description: 'Delhi-based emotional support center',
      //descriptionHindi: 'दिल्ली स्थित भावनात्मक सहायता केंद्र',
      type: 'ngo',
      available: '3PM-9PM'
    }
  ];

  const warningSignsData = [
    {
      category: 'Emotional Signs',
      //categoryHindi: 'भावनात्मक संकेत',
      signs: [
        'Persistent sadness or hopelessness',
        'Extreme mood swings',
        'Loss of interest in activities ',
        'Feeling overwhelmed or worthless '
      ]
    },
    {
      category: 'Behavioral Signs',
      //categoryHindi: 'व्यवहारिक संकेत',
      signs: [
        'Withdrawal from friends and family ',
        'Changes in sleep or eating patterns ',
        'Decline in academic performance ',
        'Increased substance use '
      ]
    },
    {
      category: 'Physical Signs',
      //categoryHindi: 'शारीरिक संकेत',
      signs: [
        'Frequent headaches or stomach aches ',
        'Fatigue or low energy ',
        'Changes in appetite ',
        'Unexplained aches and pains '
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'government': return 'bg-blue-100 text-blue-800';
      case 'ngo': return 'bg-green-100 text-green-800';
      case 'professional': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Emergency Support & Crisis Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            If you're feeling overwhelmed, stressed, or having thoughts of self-harm, please reach out immediately
          </p>
          
        </div>

        {/* Crisis Alert */}
        <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg mb-12">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Immediate Crisis Support 
              </h3>
              <p className="text-red-700 mb-2">
                If you're having thoughts of self-harm or suicide, please call one of these helplines immediately:
              </p>
              
            </div>
          </div>
        </div>

        {/* Helplines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {helplines.map((helpline, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{helpline.name}</h3>
                  
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(helpline.type)}`}>
                    {helpline.type.charAt(0).toUpperCase() + helpline.type.slice(1)}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{helpline.available}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <a
                  href={`tel:${helpline.number}`}
                  className="text-2xl font-mono text-blue-600 hover:text-blue-700 transition-colors block mb-2"
                >
                  {helpline.number}
                </a>
                <p className="text-sm text-gray-600 mb-1">{helpline.description}</p>
                
              </div>
              
              <div className="flex space-x-2">
                <a
                  href={`tel:${helpline.number}`}
                  className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <MessageCircle className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Signs */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="w-6 h-6 text-orange-500 mr-3" />
            Warning Signs to Watch For           
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {warningSignsData.map((category, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 mb-2">{category.category}</h4>
                
                <ul className="space-y-2">
                  {category.signs.map((sign, signIndex) => (
                    <li key={signIndex} className="text-sm text-gray-700 flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Support Message */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-2xl">
          <Heart className="w-12 h-12 mx-auto mb-4 animate-pulse" />
          <h3 className="text-2xl font-bold mb-4">You Are Not Alone </h3>
          <p className="text-lg mb-2">
            Every life has value and meaning. Professional help is available, and recovery is possible.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;