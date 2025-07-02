import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Dashboard</h1>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </header>
      
      <main className="dashboard-content">
        <div className="user-info-card">
          <h2>User Information</h2>
          <div className="user-details">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Feature 1</h3>
            <p>This is a placeholder for your first feature.</p>
          </div>
          
          <div className="feature-card">
            <h3>Feature 2</h3>
            <p>This is a placeholder for your second feature.</p>
          </div>
          
          <div className="feature-card">
            <h3>Feature 3</h3>
            <p>This is a placeholder for your third feature.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;