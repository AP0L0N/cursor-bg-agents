import React, { useState } from 'react';
import './PasswordReset.css';

const PasswordReset = ({ onPasswordReset, onShowLogin }) => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

    // Validation
    if (!formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    // Simulate password reset (replace with real API call)
    setTimeout(() => {
      setIsSuccess(true);
      setIsLoading(false);
      // Auto redirect to login after 3 seconds
      setTimeout(() => {
        onShowLogin();
      }, 3000);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="password-reset-container">
        <div className="password-reset-form">
          <div className="success-icon">✓</div>
          <h2>Password Reset Successful</h2>
          <p>Your password has been successfully reset.</p>
          <p>You will be redirected to the login page in a few seconds...</p>
          
          <button className="primary-button" onClick={onShowLogin}>
            Go to Login Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="password-reset-container">
      <form className="password-reset-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <p>Enter your new password below.</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password (min 6 characters)"
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm New Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your new password"
            disabled={isLoading}
          />
        </div>

        <button type="submit" disabled={isLoading} className="reset-button">
          {isLoading ? 'Resetting...' : 'Reset Password'}
        </button>

        <div className="auth-links">
          <button type="button" className="link-button" onClick={onShowLogin}>
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;