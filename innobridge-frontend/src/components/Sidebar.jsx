import React from 'react';

export default function Sidebar({ activeTab, setActiveTab, role }) {
  const menuItems = [
    { id: 'dashboard', label: 'Overview Dashboard', icon: '📊' },
    { id: 'challenges', label: 'Department Challenges', icon: '🎯' },
    { id: 'pilots', label: 'Sandbox & Pilot Tracker', icon: '🧪' },
    { id: 'templates', label: 'GoM Template Center', icon: '📁' },
  ];

  return (
    <aside className="desktop-sidebar">
      <div className="portal-branding">
        <span className="portal-tag">Maha-ProcureInnovate</span>
        <h3>Public Innovation Pathway</h3>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="policy-badge">
          <small>Compliant with</small>
          <strong>Maharashtra Innovative Startup Policy 2018 & Direct Procurement GRs</strong>
        </div>
      </div>
    </aside>
  );
}