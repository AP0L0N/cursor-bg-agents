import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin, onShowForgotPassword, onShowRegistration }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simple validation
    if (!formData.username || !formData.password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    // Simulate authentication (replace with real API call)
    setTimeout(() => {
      if (formData.username === 'admin' && formData.password === 'password') {
        onLogin({
          username: formData.username,
          name: 'Admin User',
          email: 'admin@example.com'
        });
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            disabled={isLoading}
          />
        </div>

        <button type="submit" disabled={isLoading} className="login-button">
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        <div className="auth-links">
          <button type="button" className="link-button" onClick={onShowForgotPassword}>
            Forgot Password?
          </button>
          <span className="separator">|</span>
          <button type="button" className="link-button" onClick={onShowRegistration}>
            Create Account
          </button>
        </div>

        <div className="demo-credentials">
          <p><strong>Demo credentials:</strong></p>
          <p>Username: admin</p>
          <p>Password: password</p>
        </div>
      </form>
    </div>
  );
};

export default Login;