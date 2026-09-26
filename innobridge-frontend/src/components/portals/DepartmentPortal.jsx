import React, { useState } from 'react';

export default function DepartmentPortal({ user }) {

  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="portal-container">

      <div className="portal-sub-header">

        <div>
          <h2>
            🏛️ Nodal Officer Portal
          </h2>

          <p className="portal-description">
            {user.department}
          </p>
        </div>

        <span className="verification-badge">
          ✓ Authenticated GoM Officer
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
          className={activeTab === 'challenges' ? 'active' : ''}
          onClick={() => setActiveTab('challenges')}
        >
          📋 Challenges
        </button>

        <button
          className={activeTab === 'applications' ? 'active' : ''}
          onClick={() => setActiveTab('applications')}
        >
          📑 Applications
        </button>

        <button
          className={activeTab === 'pilots' ? 'active' : ''}
          onClick={() => setActiveTab('pilots')}
        >
          🧪 Pilot Monitoring
        </button>

        <button
          className={activeTab === 'approve-payouts' ? 'active' : ''}
          onClick={() => setActiveTab('approve-payouts')}
        >
          💳 Payouts
        </button>

        <button
          className={activeTab === 'create' ? 'active' : ''}
          onClick={() => setActiveTab('create')}
        >
          ➕ Create Challenge
        </button>

        <button
          className={activeTab === 'reports' ? 'active' : ''}
          onClick={() => setActiveTab('reports')}
        >
          📈 Reports
        </button>

      </div>


      {/* DASHBOARD */}

      {activeTab === 'dashboard' && (

        <div className="portal-content">

          <div className="welcome-panel">

            <div>

              <h3>
                Department Innovation Dashboard
              </h3>

              <p>
                Manage challenges, startup applications, pilots and
                procurement decisions.
              </p>

            </div>

            <button
              className="btn-primary-large"
              onClick={() => setActiveTab('create')}
            >
              + Create New Challenge
            </button>

          </div>


          <div className="metrics-row">

            <div className="metric-card">
              <span className="metric-title">
                Active Challenges
              </span>
              <span className="metric-value">
                06
              </span>
              <span className="metric-sub">
                3 accepting proposals
              </span>
            </div>

            <div className="metric-card">
              <span className="metric-title">
                Applications
              </span>
              <span className="metric-value">
                36
              </span>
              <span className="metric-sub">
                12 awaiting review
              </span>
            </div>

            <div className="metric-card">
              <span className="metric-title">
                Active Pilots
              </span>
              <span className="metric-value">
                05
              </span>
              <span className="metric-sub">
                Across 4 districts
              </span>
            </div>

            <div className="metric-card highlight">
              <span className="metric-title">
                Pending Approvals
              </span>
              <span className="metric-value">
                07
              </span>
              <span className="metric-sub">
                Require officer action
              </span>
            </div>

          </div>


          <div className="desktop-split-panel">

            <div className="panel flex-2">

              <h3>
                Recent Department Activity
              </h3>

              <table className="desktop-table">

                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Reference</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>Startup Application Received</td>
                    <td>APP-2026-1042</td>
                    <td>24 Sep 2026</td>
                    <td>
                      <span className="tag open">
                        New
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Pilot Milestone Submitted</td>
                    <td>PIL-2026-004</td>
                    <td>23 Sep 2026</td>
                    <td>
                      <span className="tag evaluation">
                        Review
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Evaluation Completed</td>
                    <td>APP-2026-0988</td>
                    <td>22 Sep 2026</td>
                    <td>
                      <span className="tag pilot">
                        Completed
                      </span>
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

            <div className="panel flex-1">

              <h3>
                Pending Actions
              </h3>

              <ul className="action-list">

                <li>
                  🔴 Review 6 startup applications
                </li>

                <li>
                  🟠 Approve Milestone 2 payout
                </li>

                <li>
                  🟠 Review pilot performance report
                </li>

                <li>
                  🔵 Publish challenge clarification
                </li>

              </ul>

            </div>

          </div>

        </div>

      )}


      {/* CHALLENGES */}

      {activeTab === 'challenges' && (

        <div className="portal-content">

          <h3>
            Department Challenges
          </h3>

          <table className="desktop-table">

            <thead>

              <tr>
                <th>Reference</th>
                <th>Challenge</th>
                <th>Applications</th>
                <th>Deadline</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>INNO-2026-014</td>
                <td>AI Pothole Detection</td>
                <td>18</td>
                <td>15 Oct 2026</td>
                <td>
                  <span className="tag open">
                    Open
                  </span>
                </td>
              </tr>

              <tr>
                <td>INNO-2026-009</td>
                <td>Document Verification AI</td>
                <td>11</td>
                <td>30 Sep 2026</td>
                <td>
                  <span className="tag evaluation">
                    Evaluation
                  </span>
                </td>
              </tr>

              <tr>
                <td>INNO-2026-004</td>
                <td>Smart Water Metering</td>
                <td>07</td>
                <td>Closed</td>
                <td>
                  <span className="tag pilot">
                    Pilot
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      )}


      {/* APPLICATIONS */}

      {activeTab === 'applications' && (

        <div className="portal-content">

          <h3>
            Startup Application Review
          </h3>

          <table className="desktop-table">

            <thead>

              <tr>
                <th>Application</th>
                <th>Startup</th>
                <th>Challenge</th>
                <th>Score</th>
                <th>Stage</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>APP-1042</td>
                <td>AgriVision Tech Pvt Ltd</td>
                <td>AI Pothole Detection</td>
                <td>86 / 100</td>
                <td>
                  <span className="tag evaluation">
                    Technical Review
                  </span>
                </td>
              </tr>

              <tr>
                <td>APP-1037</td>
                <td>CivicTech Labs</td>
                <td>AI Pothole Detection</td>
                <td>82 / 100</td>
                <td>
                  <span className="tag evaluation">
                    Technical Review
                  </span>
                </td>
              </tr>

              <tr>
                <td>APP-1028</td>
                <td>GovAI Solutions</td>
                <td>Document Verification</td>
                <td>89 / 100</td>
                <td>
                  <span className="tag open">
                    Shortlisted
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      )}


      {/* PILOT MONITORING */}

      {activeTab === 'pilots' && (

        <div className="portal-content">

          <h3>
            Sandbox & Pilot Monitoring
          </h3>

          <div className="panel">

            <h4>
              AI Pothole Detection – Pilot MHA-PLT-2026-08
            </h4>

            <p>
              <strong>Startup:</strong> AgriVision Tech Pvt Ltd
            </p>

            <p>
              <strong>District:</strong> Mumbai Metro Region
            </p>

            <p>
              <strong>Current Stage:</strong> Field Validation
            </p>

            <div className="pilot-progress">

              <div className="progress-header">
                <span>Implementation Progress</span>
                <strong>72%</strong>
              </div>

              <div className="progress-bar">
                <div style={{ width: '72%' }}></div>
              </div>

            </div>

            <div className="milestone-list">

              <div className="milestone completed">
                ✓ Prototype Deployment
              </div>

              <div className="milestone completed">
                ✓ Initial Field Testing
              </div>

              <div className="milestone active">
                ● Independent Validation
              </div>

              <div className="milestone">
                ○ Scale-up Recommendation
              </div>

            </div>

          </div>

        </div>

      )}


      {/* PAYOUTS */}

      {activeTab === 'approve-payouts' && (

        <div className="portal-content">

          <h3>
            Pending Milestone Approvals & Fund Disbursement
          </h3>

          <table className="desktop-table">

            <thead>

              <tr>
                <th>Startup</th>
                <th>Challenge</th>
                <th>Milestone</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              <tr>

                <td>
                  AgriVision Tech Pvt Ltd
                </td>

                <td>
                  Crop Disease Early Warning
                </td>

                <td>
                  Milestone 2
                </td>

                <td>
                  <strong>
                    ₹7,00,000
                  </strong>
                </td>

                <td>

                  <button
                    className="btn-action-success"
                    onClick={() =>
                      alert(
                        'Payout approved. Backend payment API will be connected later.'
                      )
                    }
                  >
                    ✓ Approve Payout
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      )}


      {/* CREATE CHALLENGE */}

      {activeTab === 'create' && (

        <div className="portal-content">

          <h3>
            Create Outcome-Based Problem Statement
          </h3>

          <div className="panel">

            <div className="form-group">

              <label>
                Problem Statement Title
              </label>

              <input
                type="text"
                placeholder="e.g. Smart Water Flow Telemetry for MIDC Industrial Units"
              />

            </div>

            <div className="form-group">

              <label>
                Expected Outcome
              </label>

              <textarea
                rows="4"
                placeholder="Describe the measurable outcome expected from the startup solution."
              />

            </div>

            <div className="form-row">

              <div className="form-group">

                <label>
                  Pilot Budget
                </label>

                <input
                  type="text"
                  placeholder="₹25,00,000"
                />

              </div>

              <div className="form-group">

                <label>
                  Pilot Duration
                </label>

                <input
                  type="text"
                  placeholder="90 Days"
                />

              </div>

            </div>

            <div className="form-group">

              <label>
                Eligibility Requirements
              </label>

              <textarea
                rows="3"
                placeholder="Define startup eligibility, DPIIT requirements, technology requirements etc."
              />

            </div>

            <button
              className="btn-primary-large"
              onClick={() =>
                alert(
                  'Challenge saved as draft. Backend publication workflow will be connected later.'
                )
              }
            >
              Save Challenge Draft
            </button>

            <button
              className="btn-primary"
              style={{ marginLeft: '12px' }}
              onClick={() =>
                alert(
                  'Challenge published successfully in the prototype.'
                )
              }
            >
              Publish Challenge
            </button>

          </div>

        </div>

      )}


      {/* REPORTS */}

      {activeTab === 'reports' && (

        <div className="portal-content">

          <h3>
            Department Reports & Analytics
          </h3>

          <div className="metrics-row">

            <div className="metric-card">
              <span className="metric-title">
                Challenges Published
              </span>

              <span className="metric-value">
                18
              </span>
            </div>

            <div className="metric-card">
              <span className="metric-title">
                Startups Engaged
              </span>

              <span className="metric-value">
                74
              </span>
            </div>

            <div className="metric-card">
              <span className="metric-title">
                Pilots Completed
              </span>

              <span className="metric-value">
                08
              </span>
            </div>

            <div className="metric-card highlight">
              <span className="metric-title">
                Solutions Scaled
              </span>

              <span className="metric-value">
                04
              </span>
            </div>

          </div>

          <div className="panel">

            <h3>
              Available Reports
            </h3>

            <ul className="policy-list">

              <li>📊 Challenge Performance Report</li>

              <li>📊 Startup Participation Report</li>

              <li>📊 Pilot Outcome Report</li>

              <li>📊 Procurement Compliance Report</li>

              <li>📊 Milestone Payment Report</li>

            </ul>

          </div>

        </div>

      )}

    </div>
  );
}