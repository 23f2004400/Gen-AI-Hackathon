import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, User, MapPin, DollarSign, Clock, Brain, BookOpen, Heart } from 'lucide-react';
import { UserProfile } from '../types';

interface IntakeFormProps {
  onComplete: (profile: UserProfile) => void;
  onBack: () => void;
}

const IntakeForm: React.FC<IntakeFormProps> = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    age: 18,
    location: '',
    interests: [] as string[],
    budget: 50000,
    timeAvailable: 20,
    learningStyle: 'mixed' as const,
    examHistory: {
      class10: 75,
      class12: 70,
      attempts: 1
    },
    psychometric: {
      grit: 5,
      openness: 5,
      verbalPreference: 5,
      quantPreference: 5,
      visualPreference: 5
    },
    constraints: [] as string[],
    language: 'english' as const
  });

  const steps = [
    { title: 'Basic Info', icon: User },
    { title: 'Interests', icon: Heart },
    { title: 'Constraints', icon: MapPin },
    { title: 'Learning Style', icon: Brain },
    { title: 'Academic History', icon: BookOpen },
    { title: 'Personality', icon: Brain }
  ];

  const interestOptions = [
    { value: 'technology', label: 'Technology & Computers' },
    { value: 'creative', label: 'Creative & Design'},
    { value: 'business', label: 'Business & Management' },
    { value: 'healthcare', label: 'Healthcare & Medicine' },
    { value: 'education', label: 'Education & Teaching' },
    { value: 'engineering', label: 'Engineering & Technical' },
    { value: 'arts', label: 'Arts & Entertainment' },
    { value: 'social', label: 'Social Work & NGO'}
  ];

  const constraintOptions = [
    { value: 'budget', label: 'Limited Budget' },
    { value: 'location', label: 'Location Restrictions' },
    { value: 'family', label: 'Family Pressure'},
    { value: 'language', label: 'Language Barriers'},
    { value: 'time', label: 'Time Constraints' },
    { value: 'confidence', label: 'Lack of Confidence' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const profile: UserProfile = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date()
      };
      onComplete(profile);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateNestedFormData = (parent: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...((prev[parent as keyof typeof prev] as object) || {}),
        [field]: value
      }
    }));
  };

  const toggleArrayValue = (field: string, value: string) => {
    const currentArray = formData[field as keyof typeof formData] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateFormData(field, newArray);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Basic Info
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name 
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age 
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => updateFormData('age', parseInt(e.target.value))}
                min="16"
                max="25"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location (City/State) 
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => updateFormData('location', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="e.g., Mumbai, Maharashtra"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Language 
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'english', label: 'English' },
                  { value: 'hindi', label: 'Hindi' },
                  { value: 'mixed', label: 'Both' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('language', option.value)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.language === option.value
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 1: // Interests
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What interests you? 
              </h3>
              <p className="text-gray-600 mb-4">
                Select all that apply. Don't worry if you're unsure - we'll help you explore!
              </p>
              
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {interestOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => toggleArrayValue('interests', option.value)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.interests.includes(option.value)
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{option.label}</div>
                  {/* <div className="text-sm text-gray-500 font-hindi">{option.labelHindi}</div> */}
                </button>
              ))}
            </div>
          </div>
        );

      case 2: // Constraints
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What challenges are you facing?              </h3>
              <p className="text-gray-600 mb-4">
                It's okay to have constraints. We'll work around them to find the best path for you.
              </p>
              
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {constraintOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => toggleArrayValue('constraints', option.value)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.constraints.includes(option.value)
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{option.label}</div>
                  {/* <div className="text-sm text-gray-500 font-hindi">{option.labelHindi}</div> */}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget for learning (₹) 
                </label>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="10000"
                  value={formData.budget}
                  onChange={(e) => updateFormData('budget', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-lg font-semibold text-orange-600 mt-2">
                  ₹{formData.budget.toLocaleString()}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time available per week (hours) 
                </label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="5"
                  value={formData.timeAvailable}
                  onChange={(e) => updateFormData('timeAvailable', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-lg font-semibold text-orange-600 mt-2">
                  {formData.timeAvailable} hours
                </div>
              </div>
            </div>
          </div>
        );

      case 3: // Learning Style
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do you learn best?               </h3>
              <p className="text-gray-600 mb-6">
                Understanding your learning style helps us recommend the right courses and resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: 'visual', label: 'Visual Learner', description: 'Learn through images, diagrams, and videos' },
                { value: 'auditory', label: 'Auditory Learner', description: 'Learn through listening and discussion' },
                { value: 'kinesthetic', label: 'Hands-on Learner', description: 'Learn through practice and doing' },
                { value: 'mixed', label: 'Mixed Approach', description: 'Combination of all learning styles'}
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => updateFormData('learningStyle', option.value)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.learningStyle === option.value
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium mb-1">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.description}</div>
                  {/* <div className="text-sm text-gray-500 font-hindi">{option.labelHindi}</div> */}
                </button>
              ))}
            </div>
          </div>
        );

      case 4: // Academic History
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Academic Background 
              </h3>
              <p className="text-gray-600 mb-6">
                This helps us understand your academic journey. No judgment here - every path is valid!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class 10 Percentage 
                </label>
                <input
                  type="number"
                  value={formData.examHistory.class10}
                  onChange={(e) => updateNestedFormData('examHistory', 'class10', parseInt(e.target.value))}
                  min="0"
                  max="100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class 12 Percentage 
                </label>
                <input
                  type="number"
                  value={formData.examHistory.class12}
                  onChange={(e) => updateNestedFormData('examHistory', 'class12', parseInt(e.target.value))}
                  min="0"
                  max="100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Competitive Exam Attempts 
              </label>
              <div className="grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map(attempts => (
                  <button
                    key={attempts}
                    onClick={() => updateNestedFormData('examHistory', 'attempts', attempts)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.examHistory.attempts === attempts
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {attempts === 0 ? 'None' : attempts === 3 ? '3+' : attempts}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 5: // Personality Assessment
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quick Personality Check 
              </h3>
              <p className="text-gray-600 mb-6">
                Rate yourself on these traits. Be honest - there are no right or wrong answers!
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { key: 'grit', label: 'Persistence & Determination', description: 'How well do you stick to long-term goals?' },
                { key: 'openness', label: 'Openness to New Experiences', description: 'How comfortable are you with trying new things?' },
                { key: 'verbalPreference', label: 'Verbal Skills',  description: 'How comfortable are you with reading, writing, and communication?' },
                { key: 'quantPreference', label: 'Quantitative Skills', description: 'How comfortable are you with numbers and logical reasoning?' },
                { key: 'visualPreference', label: 'Visual-Spatial Skills', description: 'How well do you work with visual information and spatial relationships?' }
              ].map(trait => (
                <div key={trait.key}>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        {trait.label}
                      </label>
                      {/* <div className="text-sm text-gray-500 font-hindi">{trait.descriptionHindi}</div> */}
                    </div>
                    <span className="text-lg font-semibold text-orange-600">
                      {formData.psychometric[trait.key as keyof typeof formData.psychometric]}/10
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{trait.description}</p>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={formData.psychometric[trait.key as keyof typeof formData.psychometric]}
                    onChange={(e) => updateNestedFormData('psychometric', trait.key, parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Low</span>
                    <span>High</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Career Assessment 
            </h2>
            <span className="text-sm text-gray-500">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          
          <div className="flex items-center space-x-4 overflow-x-auto pb-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg whitespace-nowrap ${
                  index === currentStep
                    ? 'bg-orange-100 text-orange-700'
                    : index < currentStep
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                <step.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {steps[currentStep].title}
            </h3>
            
          </div>
          
          {renderStep()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            
            <button
              onClick={handleNext}
              disabled={
                (currentStep === 0 && !formData.name) ||
                (currentStep === 1 && formData.interests.length === 0)
              }
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{currentStep === steps.length - 1 ? 'Complete Assessment' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeForm;