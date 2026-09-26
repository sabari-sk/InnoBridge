import React, { useState } from 'react';

export default function StartupPortal({ user }) {

  const [activeTab, setActiveTab] = useState('dashboard');

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="portal-container">

      <div className="portal-sub-header">

        <div>
          <h2>🚀 Startup Innovation Workspace</h2>

          <p className="portal-description">
            Discover government challenges, submit proposals and manage
            innovation pilots.
          </p>
        </div>

        <span className="verification-badge">
          ✓ DPIIT Verified Startup
        </span>

      </div>

      <div className="portal-nav-bar">

        <button
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>

        <button
          className={activeTab === 'browse' ? 'active' : ''}
          onClick={() => setActiveTab('browse')}
        >
          🎯 Browse Challenges
        </button>

        <button
          className={activeTab === 'my-proposals' ? 'active' : ''}
          onClick={() => setActiveTab('my-proposals')}
        >
          📄 My Proposals
        </button>

        <button
          className={activeTab === 'pilots' ? 'active' : ''}
          onClick={() => setActiveTab('pilots')}
        >
          🧪 Active Pilots
        </button>

        <button
          className={activeTab === 'payments' ? 'active' : ''}
          onClick={() => setActiveTab('payments')}
        >
          💳 Payments
        </button>

        <button
          className={activeTab === 'profile' ? 'active' : ''}
          onClick={() => setActiveTab('profile')}
        >
          👤 Profile
        </button>

      </div>


      {/* DASHBOARD */}

      {activeTab === 'dashboard' && (

        <div className="portal-content">

          <div className="welcome-panel">

            <div>
              <h3>
                Welcome, {user.name}
              </h3>

              <p>
                Track your participation in government innovation
                procurement programmes from one workspace.
              </p>
            </div>

            <button
              className="btn-primary-large"
              onClick={() => setActiveTab('browse')}
            >
              Explore Challenges →
            </button>

          </div>

          <div className="metrics-row">

            <div className="metric-card">
              <span className="metric-title">
                Open Challenges
              </span>

              <span className="metric-value">
                24
              </span>

              <span className="metric-sub">
                Across 12 departments
              </span>
            </div>

            <div className="metric-card">
              <span className="metric-title">
                Submitted Proposals
              </span>

              <span className="metric-value">
                06
              </span>

              <span className="metric-sub">
                3 under evaluation
              </span>
            </div>

            <div className="metric-card">
              <span className="metric-title">
                Shortlisted
              </span>

              <span className="metric-value">
                02
              </span>

              <span className="metric-sub">
                Awaiting committee decision
              </span>
            </div>

            <div className="metric-card highlight">
              <span className="metric-title">
                Active Pilots
              </span>

              <span className="metric-value">
                01
              </span>

              <span className="metric-sub">
                Milestone 2 in progress
              </span>
            </div>

          </div>

          <div className="desktop-split-panel">

            <div className="panel flex-2">

              <h3>
                Recent Application Activity
              </h3>

              <table className="desktop-table">

                <thead>
                  <tr>
                    <th>Application</th>
                    <th>Challenge</th>
                    <th>Stage</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>APP-2026-1042</td>
                    <td>AI Pothole Detection</td>
                    <td>Technical Evaluation</td>
                    <td>
                      <span className="tag evaluation">
                        Under Review
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>APP-2026-0988</td>
                    <td>Smart Water Metering</td>
                    <td>Committee Review</td>
                    <td>
                      <span className="tag open">
                        Shortlisted
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>APP-2026-0871</td>
                    <td>Crop Pest Detection</td>
                    <td>Pilot</td>
                    <td>
                      <span className="tag pilot">
                        Active
                      </span>
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

            <div className="panel flex-1">

              <h3>
                Required Actions
              </h3>

              <ul className="action-list">

                <li>
                  📌 Upload Milestone 2 evidence
                </li>

                <li>
                  📌 Complete startup profile verification
                </li>

                <li>
                  📌 Review committee clarification request
                </li>

              </ul>

            </div>

          </div>

        </div>

      )}


      {/* BROWSE */}

      {activeTab === 'browse' && (

        <div className="portal-content">

          <h3>
            Open Challenges for Pilot Submissions
          </h3>

          <p className="section-description">
            Government departments can publish outcome-based challenges
            where eligible startups can propose innovative solutions.
          </p>

          <div className="challenge-grid">

            <div className="challenge-card">

              <span className="category-pill">
                Public Works Department
              </span>

              <h3>
                AI-Based Pothole Detection & Real-time Quality Auditing
              </h3>

              <p>
                Use computer vision and AI to identify road defects and
                support real-time quality monitoring.
              </p>

              <div className="challenge-details">
                <span>💰 ₹25,00,000 Pilot Budget</span>
                <span>📍 Mumbai Metro Region</span>
                <span>📅 15 Oct 2026</span>
              </div>

              <button
                className="btn-primary"
                onClick={() => setSubmitted(true)}
              >
                {submitted
                  ? '✓ Proposal Started'
                  : 'Start Proposal'}
              </button>

            </div>


            <div className="challenge-card">

              <span className="category-pill">
                Agriculture Department
              </span>

              <h3>
                Sugarcane Crop Disease Early Warning System
              </h3>

              <p>
                Develop a predictive system for identifying crop disease
                and pest risks at an early stage.
              </p>

              <div className="challenge-details">
                <span>💰 ₹18,00,000 Pilot Budget</span>
                <span>📍 Pune & Kolhapur</span>
                <span>📅 22 Oct 2026</span>
              </div>

              <button className="btn-primary">
                View Challenge
              </button>

            </div>


            <div className="challenge-card">

              <span className="category-pill">
                Urban Development
              </span>

              <h3>
                Smart Water Metering for Tier-2 Cities
              </h3>

              <p>
                Create a scalable water monitoring solution for municipal
                corporations.
              </p>

              <div className="challenge-details">
                <span>💰 ₹40,00,000 Pilot Budget</span>
                <span>📍 Nagpur</span>
                <span>📅 30 Oct 2026</span>
              </div>

              <button className="btn-primary">
                View Challenge
              </button>

            </div>

          </div>

        </div>

      )}


      {/* PROPOSALS */}

      {activeTab === 'my-proposals' && (

        <div className="portal-content">

          <h3>
            My Submitted Proposals
          </h3>

          <table className="desktop-table">

            <thead>
              <tr>
                <th>Application ID</th>
                <th>Challenge</th>
                <th>Submitted</th>
                <th>Current Stage</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>APP-2026-1042</td>
                <td>AI Pothole Detection</td>
                <td>12 Sep 2026</td>
                <td>Technical Evaluation</td>
                <td>
                  <span className="tag evaluation">
                    Under Review
                  </span>
                </td>
              </tr>

              <tr>
                <td>APP-2026-0988</td>
                <td>Smart Water Metering</td>
                <td>05 Sep 2026</td>
                <td>Committee Review</td>
                <td>
                  <span className="tag open">
                    Shortlisted
                  </span>
                </td>
              </tr>

              <tr>
                <td>APP-2026-0871</td>
                <td>Crop Pest Detection</td>
                <td>20 Aug 2026</td>
                <td>Pilot</td>
                <td>
                  <span className="tag pilot">
                    Active
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      )}


      {/* PILOTS */}

      {activeTab === 'pilots' && (

        <div className="portal-content">

          <h3>
            Active Sandbox Pilots & Deliverables
          </h3>

          <div className="panel">

            <h4>
              Pilot ID: MHA-PLT-2026-04
            </h4>

            <p>
              <strong>Solution:</strong> Sugarcane Pest Detection
            </p>

            <p>
              <strong>Department:</strong> Agriculture Department
            </p>

            <p>
              <strong>Current Stage:</strong> Milestone 2 – Field Test
            </p>

            <div className="pilot-progress">

              <div className="progress-header">
                <span>Overall Pilot Progress</span>
                <strong>65%</strong>
              </div>

              <div className="progress-bar">
                <div style={{ width: '65%' }}></div>
              </div>

            </div>

            <div className="milestone-list">

              <div className="milestone completed">
                ✓ Milestone 1 – Prototype Deployment
              </div>

              <div className="milestone active">
                ● Milestone 2 – Field Trial Evidence
              </div>

              <div className="milestone">
                ○ Milestone 3 – Independent Validation
              </div>

              <div className="milestone">
                ○ Milestone 4 – Scale-up Recommendation
              </div>

            </div>

            <button
              className="btn-primary-large"
              onClick={() =>
                alert(
                  'Evidence upload interface will be connected to the backend.'
                )
              }
            >
              📤 Upload Milestone Evidence
            </button>

          </div>

        </div>

      )}


      {/* PAYMENTS */}

      {activeTab === 'payments' && (

        <div className="portal-content">

          <h3>
            Milestone Payments
          </h3>

          <div className="metrics-row">

            <div className="metric-card">
              <span className="metric-title">
                Total Approved
              </span>

              <span className="metric-value">
                ₹12.5L
              </span>
            </div>

            <div className="metric-card highlight">
              <span className="metric-title">
                Paid
              </span>

              <span className="metric-value">
                ₹7.0L
              </span>
            </div>

            <div className="metric-card">
              <span className="metric-title">
                Pending
              </span>

              <span className="metric-value">
                ₹5.5L
              </span>
            </div>

          </div>

          <table className="desktop-table">

            <thead>
              <tr>
                <th>Milestone</th>
                <th>Project</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Milestone 1</td>
                <td>Sugarcane Pest Detection</td>
                <td>₹7,00,000</td>
                <td>
                  <span className="tag open">
                    Paid
                  </span>
                </td>
              </tr>

              <tr>
                <td>Milestone 2</td>
                <td>Sugarcane Pest Detection</td>
                <td>₹5,50,000</td>
                <td>
                  <span className="tag evaluation">
                    Under Approval
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      )}


      {/* PROFILE */}

      {activeTab === 'profile' && (

        <div className="portal-content">

          <h3>
            Startup Organisation Profile
          </h3>

          <div className="desktop-split-panel">

            <div className="panel">

              <h3>Organisation Details</h3>

              <div className="profile-row">
                <span>Startup Name</span>
                <strong>{user.name}</strong>
              </div>

              <div className="profile-row">
                <span>DPIIT Registration</span>
                <strong>{user.id}</strong>
              </div>

              <div className="profile-row">
                <span>Organisation Type</span>
                <strong>{user.entityType}</strong>
              </div>

              <div className="profile-row">
                <span>Registered Email</span>
                <strong>{user.email}</strong>
              </div>

            </div>

            <div className="panel">

              <h3>Verification Status</h3>

              <div className="verification-item">
                ✓ DPIIT Registration Verified
              </div>

              <div className="verification-item">
                ✓ Startup Recognition Verified
              </div>

              <div className="verification-item">
                ✓ Bank Details Verified
              </div>

              <div className="verification-item">
                ⚠ Annual Compliance Update Required
              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}