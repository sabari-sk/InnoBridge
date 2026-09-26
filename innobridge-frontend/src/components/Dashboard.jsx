import React from 'react';

export default function Dashboard({ setActiveTab, role }) {
  return (
    <div className="desktop-view">
      <div className="dashboard-hero">
        <div className="hero-text">
          <h2>Maharashtra Startup Innovation Procurement Portal</h2>
          <p>
            Enabling GoM departments to formulate outcome-based challenges, run controlled sandboxes/pilots, 
            and scale proven startup solutions without turnover or prior experience constraints.
          </p>
          <div className="action-row">
            <button className="btn-primary-large" onClick={() => setActiveTab('challenges')}>
              Explore Active GoM Challenges
            </button>
            {role === 'Department' && (
              <button className="btn-secondary-large">
                + Create New Departmental Challenge
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="metrics-row">
        <div className="metric-card">
          <span className="metric-title">Active GoM Challenges</span>
          <span className="metric-value">64</span>
          <span className="metric-sub">Across 18 State Departments</span>
        </div>
        <div className="metric-card">
          <span className="metric-title">Registered Startups</span>
          <span className="metric-value">1,480</span>
          <span className="metric-sub">DPIIT & MahaMSME Validated</span>
        </div>
        <div className="metric-card">
          <span className="metric-title">Active Sandbox Pilots</span>
          <span className="metric-value">38</span>
          <span className="metric-sub">In 12 Districts (Mumbai, Pune, Nagpur, etc.)</span>
        </div>
        <div className="metric-card highlight">
          <span className="metric-title">Direct Procurement Released</span>
          <span className="metric-value">₹18.5 Cr</span>
          <span className="metric-sub">Milestone payments via e-Grants</span>
        </div>
      </div>

      <div className="desktop-split-panel">
        <div className="panel flex-2">
          <h3>Recent High-Impact Direct Innovation Challenges</h3>
          <table className="desktop-table">
            <thead>
              <tr>
                <th>Challenge Title</th>
                <th>Department</th>
                <th>Pilot Budget</th>
                <th>Stage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI-Driven Pothole & Road Quality Auditing</td>
                <td>Public Works Dept (PWD)</td>
                <td>₹25,00,000</td>
                <td><span className="tag open">Open for Submissions</span></td>
              </tr>
              <tr>
                <td>Sugarcane Crop Yield & Pest Early Warning System</td>
                <td>Agriculture Dept</td>
                <td>₹18,00,000</td>
                <td><span className="tag evaluation">Under Evaluation</span></td>
              </tr>
              <tr>
                <td>Smart Water Metering Sandbox for Tier-2 Municipal Corporations</td>
                <td>Urban Development</td>
                <td>₹40,00,000</td>
                <td><span className="tag pilot">Pilot Active</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="panel flex-1">
          <h3>Policy & Compliance Quick Links</h3>
          <ul className="policy-list">
            <li>📌 Prior Experience/Turnover Exemption Guidelines</li>
            <li>📌 Model Pilot Contract & IP Sharing Framework</li>
            <li>📌 Cyber Security & Data Localization Rules (MahaGD)</li>
            <li>📌 Milestone Verification & Direct Scale-Up Pathway</li>
          </ul>
        </div>
      </div>
    </div>
  );
}