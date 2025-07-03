import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import ForgotPassword from './components/ForgotPassword';
import PasswordReset from './components/PasswordReset';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('login'); // 'login', 'registration', 'forgotPassword', 'passwordReset'

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    setCurrentView('login'); // Reset view after login
  };

  const handleRegister = (userData) => {
    // For demo purposes, automatically log the user in after registration
    setUser(userData);
    setIsAuthenticated(true);
    setCurrentView('login'); // Reset view after registration
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setCurrentView('login');
  };

  const showLogin = () => setCurrentView('login');
  const showRegistration = () => setCurrentView('registration');
  const showForgotPassword = () => setCurrentView('forgotPassword');
  const showPasswordReset = () => setCurrentView('passwordReset');

  const renderAuthView = () => {
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
    <div className="App">
      {isAuthenticated ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        renderAuthView()
      )}
    </div>
  );
}

export default App;