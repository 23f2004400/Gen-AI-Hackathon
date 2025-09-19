import React, { useState } from 'react';
import { Heart, MessageCircle, TrendingUp, AlertTriangle } from 'lucide-react';
import { AIService } from '../services/aiServices';
import { WellbeingCheck as WellbeingCheckType } from '../types';

interface WellbeingCheckProps {
  onComplete: (wellbeing: WellbeingCheckType) => void;
}

const WellbeingCheck: React.FC<WellbeingCheckProps> = ({ onComplete }) => {
  const [responses, setResponses] = useState({
    mood: 5,
    stress: 5,
    motivation: 5,
    concerns: [] as string[],
    additionalThoughts: ''
  });
  const [loading, setLoading] = useState(false);

  const concernOptions = [
    { value: 'academic', label: 'Academic Pressure' },
    { value: 'family', label: 'Family Expectations' },
    { value: 'future', label: 'Uncertain Future'},
    { value: 'financial', label: 'Financial Worries' },
    { value: 'social', label: 'Social Comparison' },
    { value: 'confidence', label: 'Low Self-Confidence' },
    { value: 'direction', label: 'Lack of Direction' },
    { value: 'support', label: 'Lack of Support'}
  ];

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const wellbeing = await AIService.assessWellbeing(responses);
      onComplete(wellbeing);
    } catch (error) {
      console.error('Error assessing wellbeing:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleConcern = (concern: string) => {
    setResponses(prev => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter(c => c !== concern)
        : [...prev.concerns, concern]
    }));
  };

  const getMoodEmoji = (mood: number) => {
    if (mood <= 2) return '😢';
    if (mood <= 4) return '😕';
    if (mood <= 6) return '😐';
    if (mood <= 8) return '🙂';
    return '😊';
  };

  const getStressColor = (stress: number) => {
    if (stress <= 3) return 'text-green-600';
    if (stress <= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMotivationColor = (motivation: number) => {
    if (motivation <= 3) return 'text-red-600';
    if (motivation <= 6) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            How are you feeling today?
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Your mental wellbeing is important to us. Let's check in.
          </p>
          
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-8">
            {/* Mood Check */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Overall Mood 
                  </h3>
                  <p className="text-gray-600 text-sm">
                    How would you rate your mood today?
                  </p>
                </div>
                <div className="text-4xl">
                  {getMoodEmoji(responses.mood)}
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={responses.mood}
                onChange={(e) => setResponses(prev => ({ ...prev, mood: parseInt(e.target.value) }))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Very Low</span>
                <span className="font-semibold text-lg">{responses.mood}/10</span>
                <span>Very High</span>
              </div>
            </div>

            {/* Stress Level */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Stress Level 
                  </h3>
                  <p className="text-gray-600 text-sm">
                    How stressed are you feeling right now?
                  </p>
                </div>
                <div className={`text-2xl font-bold ${getStressColor(responses.stress)}`}>
                  {responses.stress}/10
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={responses.stress}
                onChange={(e) => setResponses(prev => ({ ...prev, stress: parseInt(e.target.value) }))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>No Stress</span>
                <span>Very Stressed</span>
              </div>
            </div>

            {/* Motivation Level */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Motivation Level / प्रेरणा का स्तर
                  </h3>
                  <p className="text-gray-600 text-sm">
                    How motivated do you feel about your future?
                  </p>
                </div>
                <div className={`text-2xl font-bold ${getMotivationColor(responses.motivation)}`}>
                  <TrendingUp className="w-6 h-6 inline mr-1" />
                  {responses.motivation}/10
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={responses.motivation}
                onChange={(e) => setResponses(prev => ({ ...prev, motivation: parseInt(e.target.value) }))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Not Motivated</span>
                <span>Very Motivated</span>
              </div>
            </div>

            {/* Concerns */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What's on your mind? 
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Select any concerns you're currently facing. It's okay to have multiple concerns.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {concernOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => toggleConcern(option.value)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      responses.concerns.includes(option.value)
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium">{option.label}</div>
                    {/* <div className="text-sm text-gray-500 font-hindi">{option.labelHindi}</div> */}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Thoughts */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Anything else you'd like to share? 
              </h3>
              <textarea
                value={responses.additionalThoughts}
                onChange={(e) => setResponses(prev => ({ ...prev, additionalThoughts: e.target.value }))}
                placeholder="Feel free to express your thoughts, worries, or anything that's on your mind..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={4}
              />
              <p className="text-sm text-gray-500 mt-2">
                This is a safe space. Your responses are confidential and will help us provide better support.
              </p>
            </div>

            {/* Warning for High Risk */}
            {(responses.stress > 8 || responses.motivation < 3 || responses.mood < 3) && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-red-800 font-medium">
                      We notice you might be going through a tough time.
                    </p>
                    <p className="text-red-700 text-sm mt-1">
                      Remember, it's okay to ask for help. Professional support is available if you need it.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4" />
                    <span>Complete Check-in</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellbeingCheck;