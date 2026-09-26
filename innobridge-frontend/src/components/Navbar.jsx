import React from 'react';

export default function Navbar({ activeTab, setActiveTab, role, setRole }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>GovStartup Bridge</h2>
        <span className="subtitle">Innovation Procurement Platform</span>
      </div>
      
      <div className="nav-links">
        <button 
          className={activeTab === 'dashboard' ? 'active' : ''} 
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={activeTab === 'challenges' ? 'active' : ''} 
          onClick={() => setActiveTab('challenges')}
        >
          Challenges
        </button>
        <button 
          className={activeTab === 'pilots' ? 'active' : ''} 
          onClick={() => setActiveTab('pilots')}
        >
          Pilot Tracker
        </button>
        <button 
          className={activeTab === 'templates' ? 'active' : ''} 
          onClick={() => setActiveTab('templates')}
        >
          Template Center
        </button>
      </div>

      <div className="role-selector">
        <label>Active Role: </label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Startup">Startup User</option>
          <option value="Department">Govt Department</option>
          <option value="Evaluator">Technical Evaluator</option>
        </select>
      </div>
    </nav>
  );
}