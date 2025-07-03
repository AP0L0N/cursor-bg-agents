// User interface
export interface User {
  username: string;
  name: string;
  email: string;
}

// Form interfaces
export interface LoginFormData {
  username: string;
  password: string;
}

export interface RegistrationFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordFormData {
  email: string;
}

export interface PasswordResetFormData {
  token: string;
  password: string;
  confirmPassword: string;
}

// Component props interfaces
export interface LoginProps {
  onLogin: (userData: User) => void;
  onShowForgotPassword: () => void;
  onShowRegistration: () => void;
}

export interface RegistrationProps {
  onRegister: (userData: User) => void;
  onShowLogin: () => void;
}

export interface ForgotPasswordProps {
  onShowLogin: () => void;
  onShowPasswordReset: () => void;
}

export interface PasswordResetProps {
  onPasswordReset: (userData: User) => void;
  onShowLogin: () => void;
}

export interface DashboardProps {
  user: User;
  onLogout: () => void;
}

// App state types
export type AuthView = 'login' | 'registration' | 'forgotPassword' | 'passwordReset';

export type DashboardNavItem = 'Dashboard' | 'Analytics' | 'Reports' | 'Settings';