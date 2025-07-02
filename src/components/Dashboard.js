import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Analytics', icon: '📈' },
    { name: 'Reports', icon: '📋' },
    { name: 'Settings', icon: '⚙️' }
  ];

  const renderContent = () => {
    switch (activeNavItem) {
      case 'Dashboard':
        return (
          <>
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
          </>
        );
      case 'Analytics':
        return (
          <div className="content-section">
            <h2>Analytics</h2>
            <div className="analytics-grid">
              <div className="stat-card">
                <h3>Total Users</h3>
                <p className="stat-number">1,234</p>
              </div>
              <div className="stat-card">
                <h3>Revenue</h3>
                <p className="stat-number">$45,678</p>
              </div>
              <div className="stat-card">
                <h3>Growth</h3>
                <p className="stat-number">+12.5%</p>
              </div>
            </div>
          </div>
        );
      case 'Reports':
        return (
          <div className="content-section">
            <h2>Reports</h2>
            <div className="reports-list">
              <div className="report-item">
                <h3>Monthly Report</h3>
                <p>Generated on {new Date().toLocaleDateString()}</p>
                <button className="download-btn">Download</button>
              </div>
              <div className="report-item">
                <h3>Quarterly Report</h3>
                <p>Generated on {new Date().toLocaleDateString()}</p>
                <button className="download-btn">Download</button>
              </div>
            </div>
          </div>
        );
      case 'Settings':
        return (
          <div className="content-section">
            <h2>Settings</h2>
            <div className="settings-form">
              <div className="setting-item">
                <label>Email Notifications</label>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="setting-item">
                <label>Dark Mode</label>
                <input type="checkbox" />
              </div>
              <div className="setting-item">
                <label>Language</label>
                <select>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Select a section from the navigation</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Dashboard</h1>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </header>
      
      <nav className="dashboard-nav">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`nav-item ${activeNavItem === item.name ? 'active' : ''}`}
            onClick={() => setActiveNavItem(item.name)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
          </button>
        ))}
      </nav>
      
      <main className="dashboard-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;