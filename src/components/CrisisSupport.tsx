import React, { useState } from 'react';
import { AlertTriangle, Phone, MessageCircle, X, Heart } from 'lucide-react';

interface CrisisSupportProps {
  isVisible: boolean;
  onClose: () => void;
}

const CrisisSupport: React.FC<CrisisSupportProps> = ({ isVisible, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  if (!isVisible) return null;

  const helplines = [
    {
      name: 'KIRAN Mental Health Helpline',
      nameHindi: 'किरण मानसिक स्वास्थ्य हेल्पलाइन',
      number: '1800-599-0019',
      description: '24/7 Government helpline for mental health support',
      descriptionHindi: 'मानसिक स्वास्थ्य सहायता के लिए 24/7 सरकारी हेल्पलाइन',
      type: 'call'
    },
    {
      name: 'Aasra Suicide Prevention',
      nameHindi: 'आसरा आत्महत्या रोकथाम',
      number: '91-9820466726',
      description: 'Mumbai-based crisis intervention center',
      descriptionHindi: 'मुंबई स्थित संकट हस्तक्षेप केंद्र',
      type: 'call'
    },
    {
      name: 'Sneha India',
      nameHindi: 'स्नेहा इंडिया',
      number: '044-24640050',
      description: 'Chennai-based emotional support helpline',
      descriptionHindi: 'चेन्नई स्थित भावनात्मक सहायता हेल्पलाइन',
      type: 'call'
    },
    {
      name: 'iCall Psychosocial Helpline',
      nameHindi: 'आईकॉल मनोसामाजिक हेल्पलाइन',
      number: '9152987821',
      description: 'Professional counseling support',
      descriptionHindi: 'पेशेवर परामर्श सहायता',
      type: 'call'
    }
  ];

  return (
    <>
      {/* Crisis Support Banner */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 shadow-lg z-50 animate-pulse">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Heart className="w-5 h-5 animate-bounce-gentle" />
            <span className="font-medium">
              Feeling overwhelmed? You're not alone. / परेशान महसूस कर रहे हैं? आप अकेले नहीं हैं।
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-red-500 px-4 py-1 rounded-full text-sm font-medium hover:bg-red-50 transition-colors"
            >
              Get Help Now / अभी मदद लें
            </button>
            <button
              onClick={onClose}
              className="text-white hover:text-red-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Crisis Support Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Immediate Support / तत्काल सहायता
                    </h2>
                    <p className="text-gray-600">
                      Professional help is available 24/7 / पेशेवर मदद 24/7 उपलब्ध है
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium mb-2">
                      If you're having thoughts of self-harm, please reach out immediately:
                    </p>
                    <p className="text-red-700 text-sm">
                      यदि आप आत्म-हानि के विचार रख रहे हैं, तो कृपया तुरंत संपर्क करें:
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {helplines.map((helpline, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-red-300 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{helpline.name}</h3>
                        <p className="text-sm text-gray-600 font-hindi">{helpline.nameHindi}</p>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={`tel:${helpline.number}`}
                          className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Call</span>
                        </a>
                      </div>
                    </div>
                    <p className="text-lg font-mono text-blue-600 mb-2">{helpline.number}</p>
                    <p className="text-sm text-gray-600">{helpline.description}</p>
                    <p className="text-sm text-gray-500 font-hindi">{helpline.descriptionHindi}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Remember / याद रखें:
                </h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Your feelings are valid and temporary / आपकी भावनाएं वैध और अस्थायी हैं</li>
                  <li>• Professional help is available and effective / पेशेवर मदद उपलब्ध और प्रभावी है</li>
                  <li>• You deserve support and care / आप सहायता और देखभाल के हकदार हैं</li>
                  <li>• There are people who want to help you / ऐसे लोग हैं जो आपकी मदद करना चाहते हैं</li>
                </ul>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close / बंद करें
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CrisisSupport;