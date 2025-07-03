import React, { useState, FormEvent, ChangeEvent } from 'react';
import { ForgotPasswordProps, ForgotPasswordFormData } from '../../types';
import styles from './ForgotPassword.module.scss';

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ 
  onShowLogin, 
  onShowPasswordReset 
}) => {
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: ''
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    // Validation
    if (!formData.email) {
      setError('Please enter your email address');
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Simulate password reset request (replace with real API call)
    setTimeout(() => {
      setSuccess('Password reset link has been sent to your email address');
      setIsLoading(false);
      
      // Automatically redirect to password reset form after 2 seconds
      setTimeout(() => {
        onShowPasswordReset();
      }, 2000);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Forgot Password</h2>
        <p className={styles.description}>
          Enter your email address and we'll send you a link to reset your password.
        </p>
        
        {error && <div className={styles.errorMessage}>{error}</div>}
        {success && <div className={styles.successMessage}>{success}</div>}
        
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            disabled={isLoading}
            className={styles.input}
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading} 
          className={styles.submitButton}
        >
          {isLoading ? 'Sending...' : 'Send Reset Link'}
        </button>

        <div className={styles.authLinks}>
          <button 
            type="button" 
            className={styles.linkButton} 
            onClick={onShowLogin}
          >
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;