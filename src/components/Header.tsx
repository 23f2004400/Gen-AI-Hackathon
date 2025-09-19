import React from 'react';
import { Compass, Home, Star, Phone, LogIn, UserPlus, User, LogOut } from 'lucide-react';

interface HeaderProps {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  onLogin: () => void;
  onSignup: () => void;
  onLogout: () => void;
  onNavigate: (section: string) => void;
  currentSection: string;
}

const Header: React.FC<HeaderProps> = ({ 
  isAuthenticated, 
  user, 
  onLogin, 
  onSignup, 
  onLogout, 
  onNavigate,
  currentSection 
}) => {
  const navItems = [
    { id: 'home', label: 'Home', labelHindi: 'होम', icon: Home },
    { id: 'features', label: 'Features', labelHindi: 'विशेषताएं', icon: Star },
    { id: 'emergency', label: 'Emergency', labelHindi: 'आपातकाल', icon: Phone }
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Compass className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Astral
              </h1>
              <p className="text-xs text-gray-600 font-hindi">Astral – Your Career Companion</p>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentSection === item.id
                    ? 'bg-orange-100 text-orange-700 shadow-sm'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={onLogin}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </button>
                <button
                  onClick={onSignup}
                  className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Sign Up</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex justify-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all ${
                currentSection === item.id
                  ? 'bg-orange-100 text-orange-700'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;