import React, { useState, MouseEvent } from 'react';
import { DashboardProps, DashboardNavItem } from '../../types';
import styles from './Dashboard.module.scss';

interface NavItem {
  name: DashboardNavItem;
  icon: string;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [activeNavItem, setActiveNavItem] = useState<DashboardNavItem>('Dashboard');

  const navItems: NavItem[] = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Analytics', icon: '📈' },
    { name: 'Reports', icon: '📋' },
    { name: 'Settings', icon: '⚙️' }
  ];

  const handleNavClick = (item: DashboardNavItem) => {
    setActiveNavItem(item);
  };

  const handleDownload = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Simulate download action
    console.log('Download initiated');
  };

  const renderContent = (): JSX.Element => {
    switch (activeNavItem) {
      case 'Dashboard':
        return (
          <>
            <div className={styles.userInfoCard}>
              <h2>User Information</h2>
              <div className={styles.userDetails}>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </div>
            </div>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <h3>Feature 1</h3>
                <p>This is a placeholder for your first feature.</p>
              </div>
              
              <div className={styles.featureCard}>
                <h3>Feature 2</h3>
                <p>This is a placeholder for your second feature.</p>
              </div>
              
              <div className={styles.featureCard}>
                <h3>Feature 3</h3>
                <p>This is a placeholder for your third feature.</p>
              </div>
            </div>
          </>
        );
      case 'Analytics':
        return (
          <div className={styles.contentSection}>
            <h2>Analytics</h2>
            <div className={styles.analyticsGrid}>
              <div className={styles.statCard}>
                <h3>Total Users</h3>
                <p className={styles.statNumber}>1,234</p>
              </div>
              <div className={styles.statCard}>
                <h3>Revenue</h3>
                <p className={styles.statNumber}>$45,678</p>
              </div>
              <div className={styles.statCard}>
                <h3>Growth</h3>
                <p className={styles.statNumber}>+12.5%</p>
              </div>
            </div>
          </div>
        );
      case 'Reports':
        return (
          <div className={styles.contentSection}>
            <h2>Reports</h2>
            <div className={styles.reportsList}>
              <div className={styles.reportItem}>
                <div>
                  <h3>Monthly Report</h3>
                  <p>Generated on {new Date().toLocaleDateString()}</p>
                </div>
                <button className={styles.downloadBtn} onClick={handleDownload}>
                  Download
                </button>
              </div>
              <div className={styles.reportItem}>
                <div>
                  <h3>Quarterly Report</h3>
                  <p>Generated on {new Date().toLocaleDateString()}</p>
                </div>
                <button className={styles.downloadBtn} onClick={handleDownload}>
                  Download
                </button>
              </div>
            </div>
          </div>
        );
      case 'Settings':
        return (
          <div className={styles.contentSection}>
            <h2>Settings</h2>
            <div className={styles.settingsForm}>
              <div className={styles.settingItem}>
                <label>Email Notifications</label>
                <input type="checkbox" defaultChecked />
              </div>
              <div className={styles.settingItem}>
                <label>Dark Mode</label>
                <input type="checkbox" />
              </div>
              <div className={styles.settingItem}>
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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Dashboard</h1>
        <button onClick={onLogout} className={styles.logoutButton}>
          Logout
        </button>
      </header>
      
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`${styles.navItem} ${activeNavItem === item.name ? styles.active : ''}`}
            onClick={() => handleNavClick(item.name)}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            <span className={styles.navText}>{item.name}</span>
          </button>
        ))}
      </nav>
      
      <main className={styles.content}>
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;