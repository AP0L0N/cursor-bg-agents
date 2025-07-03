import React, { useState } from 'react';
import { User, AuthView } from './types';
import Login from './components/Login';
import Registration from './components/Registration';
import ForgotPassword from './components/ForgotPassword';
import PasswordReset from './components/PasswordReset';
import Dashboard from './components/Dashboard';
import './styles/main.scss';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<AuthView>('login');

  const handleLogin = (userData: User): void => {
    setUser(userData);
    setIsAuthenticated(true);
    setCurrentView('login'); // Reset view after login
  };

  const handleRegister = (userData: User): void => {
    // For demo purposes, automatically log the user in after registration
    setUser(userData);
    setIsAuthenticated(true);
    setCurrentView('login'); // Reset view after registration
  };

  const handleLogout = (): void => {
    setUser(null);
    setIsAuthenticated(false);
    setCurrentView('login');
  };

  const showLogin = (): void => setCurrentView('login');
  const showRegistration = (): void => setCurrentView('registration');
  const showForgotPassword = (): void => setCurrentView('forgotPassword');
  const showPasswordReset = (): void => setCurrentView('passwordReset');

  const renderAuthView = (): JSX.Element => {
    switch (currentView) {
      case 'registration':
        return (
          <Registration
            onRegister={handleRegister}
            onShowLogin={showLogin}
          />
        );
      case 'forgotPassword':
        return (
          <ForgotPassword
            onShowLogin={showLogin}
            onShowPasswordReset={showPasswordReset}
          />
        );
      case 'passwordReset':
        return (
          <PasswordReset
            onPasswordReset={handleLogin}
            onShowLogin={showLogin}
          />
        );
      default:
        return (
          <Login
            onLogin={handleLogin}
            onShowForgotPassword={showForgotPassword}
            onShowRegistration={showRegistration}
          />
        );
    }
  };

  return (
    <div className="app">
      {isAuthenticated && user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        renderAuthView()
      )}
    </div>
  );
};

export default App;