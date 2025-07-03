import React, { useState, FormEvent, ChangeEvent } from 'react';
import { PasswordResetProps, PasswordResetFormData } from '../../types';
import styles from './PasswordReset.module.scss';

const PasswordReset: React.FC<PasswordResetProps> = ({ 
  onPasswordReset, 
  onShowLogin 
}) => {
  const [formData, setFormData] = useState<PasswordResetFormData>({
    token: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validation
    if (!formData.token || !formData.password || !formData.confirmPassword) {
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
      // For demo purposes, always succeed
      onPasswordReset({
        username: 'admin',
        name: 'Admin User',
        email: 'admin@example.com'
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Reset Password</h2>
        <p className={styles.description}>
          Enter the reset token and your new password.
        </p>
        
        {error && <div className={styles.errorMessage}>{error}</div>}
        
        <div className={styles.formGroup}>
          <label htmlFor="token" className={styles.label}>
            Reset Token:
          </label>
          <input
            type="text"
            id="token"
            name="token"
            value={formData.token}
            onChange={handleChange}
            placeholder="Enter reset token"
            disabled={isLoading}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            New Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password (min 6 characters)"
            disabled={isLoading}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your new password"
            disabled={isLoading}
            className={styles.input}
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading} 
          className={styles.submitButton}
        >
          {isLoading ? 'Resetting...' : 'Reset Password'}
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

export default PasswordReset;