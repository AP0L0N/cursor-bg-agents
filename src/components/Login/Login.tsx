import React, { useState, FormEvent, ChangeEvent } from 'react';
import { LoginProps, LoginFormData } from '../../types';
import styles from './Login.module.scss';

const Login: React.FC<LoginProps> = ({ 
  onLogin, 
  onShowForgotPassword, 
  onShowRegistration 
}) => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: ''
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
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Login</h2>
        
        {error && <div className={styles.errorMessage}>{error}</div>}
        
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.label}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            disabled={isLoading}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            disabled={isLoading}
            className={styles.input}
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading} 
          className={styles.submitButton}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        <div className={styles.authLinks}>
          <button 
            type="button" 
            className={styles.linkButton} 
            onClick={onShowForgotPassword}
          >
            Forgot Password?
          </button>
          <span className={styles.separator}>|</span>
          <button 
            type="button" 
            className={styles.linkButton} 
            onClick={onShowRegistration}
          >
            Create Account
          </button>
        </div>

        <div className={styles.demoCredentials}>
          <p><strong>Demo credentials:</strong></p>
          <p>Username: admin</p>
          <p>Password: password</p>
        </div>
      </form>
    </div>
  );
};

export default Login;