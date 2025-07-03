import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = ({ onShowLogin, onShowPasswordReset }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Email validation
    if (!email) {
      setError('Please enter your email address');
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Simulate sending email (replace with real API call)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="forgot-password-container">
        <div className="forgot-password-form">
          <div className="success-icon">✓</div>
          <h2>Reset Email Sent</h2>
          <p>We've sent a password reset link to <strong>{email}</strong></p>
          <p>Please check your email and follow the instructions to reset your password.</p>
          
          <div className="action-buttons">
            <button className="primary-button" onClick={onShowPasswordReset}>
              Reset Password Now
            </button>
            <button className="secondary-button" onClick={onShowLogin}>
              Back to Login
            </button>
          </div>
          
          <div className="help-text">
            <p>Didn't receive an email? Check your spam folder or try again.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <p>Enter your email address and we'll send you a link to reset your password.</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            disabled={isLoading}
          />
        </div>

        <button type="submit" disabled={isLoading} className="reset-button">
          {isLoading ? 'Sending...' : 'Send Reset Link'}
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

export default ForgotPassword;