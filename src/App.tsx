import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import FeaturesSection from './components/FeaturesSection';
import EmergencySection from './components/EmergencySection';
import AuthModal from './components/AuthModal';
import IntakeForm from './components/IntakeForm';
import CareerPaths from './components/CareerPaths';
import WellbeingCheck from './components/WellbeingCheck';
import CrisisSupport from './components/CrisisSupport';
import { UserProfile, WellbeingCheck as WellbeingCheckType } from './types';
import { AIService } from './services/aiServices';
import { careerPaths } from './data/careers';

type AppState = 'home' | 'features' | 'emergency' | 'intake' | 'paths' | 'wellbeing';
type AuthState = { isAuthenticated: boolean; user: { name: string; email: string } | null };

function App() {
  const [currentState, setCurrentState] = useState<AppState>('home');
  const [authState, setAuthState] = useState<AuthState>({ isAuthenticated: false, user: null });
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [showCrisisSupport, setShowCrisisSupport] = useState(false);
  const [motivationalMessage, setMotivationalMessage] = useState<string>('');

  const handleLogin = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleSignup = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  const handleAuthSubmit = (data: any) => {
    setAuthState({
      isAuthenticated: true,
      user: { name: data.name || 'User', email: data.email }
    });
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setAuthState({ isAuthenticated: false, user: null });
    setCurrentState('home');
    setUserProfile(null);
    setShowCrisisSupport(false);
    setMotivationalMessage('');
  };

  const handleNavigate = (section: string) => {
    setCurrentState(section as AppState);
  };

  const handleStartJourney = () => {
    if (!authState.isAuthenticated) {
      setAuthMode('signup');
      setShowAuthModal(true);
    } else {
      setCurrentState('intake');
    }
  };

  const handleIntakeComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    setCurrentState('wellbeing');
  };

  const handleWellbeingComplete = async (wellbeing: WellbeingCheckType) => {
    try {
      if (!userProfile) {
        console.error("No user profile found. Cannot generate message.");
        return;
      }

      const message = await AIService.generateMotivationalMessage(wellbeing, userProfile);
      setMotivationalMessage(message);

      if (wellbeing.riskLevel === "crisis" || wellbeing.riskLevel === "high") {
        setShowCrisisSupport(true);
      }

      setCurrentState("paths");
    } catch (error) {
      console.error("Error generating motivational message:", error);
      setMotivationalMessage("Stay strong! Better days are ahead. 🌟");
      setCurrentState("paths");
    }
  };

  const handleBackToHome = () => {
    setCurrentState('home');
    setUserProfile(null);
    setShowCrisisSupport(false);
    setMotivationalMessage('');
  };

  const handleBackToIntake = () => {
    setCurrentState('intake');
  };

  const renderCurrentState = () => {
    switch (currentState) {
      case 'home':
        return <HomePage onStartJourney={handleStartJourney} />;

      case 'features':
        return <FeaturesSection />;

      case 'emergency':
        return <EmergencySection />;

      case 'intake':
        return authState.isAuthenticated ? (
          <IntakeForm onComplete={handleIntakeComplete} onBack={handleBackToHome} />
        ) : (
          <HomePage onStartJourney={handleStartJourney} />
        );

      case 'wellbeing':
        return authState.isAuthenticated ? (
          <WellbeingCheck onComplete={handleWellbeingComplete} />
        ) : (
          <HomePage onStartJourney={handleStartJourney} />
        );

      case 'paths':
        if (!authState.isAuthenticated || !userProfile) {
          return <HomePage onStartJourney={handleStartJourney} />;
        }
        return (
          <div>
            {motivationalMessage && (
              <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 text-center">
                <p className="font-medium">{motivationalMessage}</p>
              </div>
            )}
            <CareerPaths
              profile={userProfile}
              onBack={handleBackToIntake}
            />
          </div>
        );

      default:
        return <HomePage onStartJourney={handleStartJourney} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthModal
        isOpen={showAuthModal}
        mode={authMode}
        onClose={() => setShowAuthModal(false)}
        onSubmit={handleAuthSubmit}
        onSwitchMode={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
      />

      <CrisisSupport
        isVisible={showCrisisSupport}
        onClose={() => setShowCrisisSupport(false)}
      />

      <Header
        isAuthenticated={authState.isAuthenticated}
        user={authState.user}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onNavigate={handleNavigate}
        currentSection={currentState}
      />

      <main>{renderCurrentState()}</main>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Astral</h3>
              <p className="text-gray-400 text-sm">
                Empowering Indian students to find their perfect career path through AI-powered guidance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <button onClick={() => handleNavigate('home')} className="block text-gray-400 hover:text-white transition-colors">Home</button>
                <button onClick={() => handleNavigate('features')} className="block text-gray-400 hover:text-white transition-colors">Features</button>
                <button onClick={() => handleNavigate('emergency')} className="block text-gray-400 hover:text-white transition-colors">Emergency Support</button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency Support</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>KIRAN: 1800-599-0019</p>
                <p>Aasra: 9820466726</p>
                <p>Available 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 mb-2">
              Astral - Empowering Indian students to find their perfect career path
            </p>
            <p className="text-sm text-gray-500 font-hindi mb-4">
              एस्ट्रल - भारतीय छात्रों को उनका सही करियर पथ खोजने में सशक्त बनाना
            </p>
            <p className="text-xs text-gray-500">
              © 2025 Astral. Built with ❤️ for Indian students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
