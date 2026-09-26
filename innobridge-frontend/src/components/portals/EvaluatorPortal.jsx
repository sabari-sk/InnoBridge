import React, { useState } from 'react';

export default function EvaluatorPortal({ user }) {

  const [activeTab, setActiveTab] = useState('dashboard');

  const [scores, setScores] = useState({
    innovation: 26,
    feasibility: 35,
    impact: 27
  });

  const total =
    Number(scores.innovation) +
    Number(scores.feasibility) +
    Number(scores.impact);

  return (
    <div className="portal-container">

      <div className="portal-sub-header">

        <div>

          <h2>
            ⚖️ State Technical Evaluation Panel
          </h2>

          <p className="portal-description">
            {user.panel}
          </p>

        </div>

        <span className="verification-badge">
          ✓ Verified Evaluator
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
          className={activeTab === 'assigned' ? 'active' : ''}
          onClick={() => setActiveTab('assigned')}
        >
          📑 Assigned Proposals
        </button>

        <button
          className={activeTab === 'score' ? 'active' : ''}
          onClick={() => setActiveTab('score')}
        >
          ⚖️ Evaluation
        </button>

        <button
          className={activeTab === 'committee' ? 'active' : ''}
          onClick={() => setActiveTab('committee')}
        >
          👥 Committee
        </button>

        <button
          className={activeTab === 'history' ? 'active' : ''}
          onClick={() => setActiveTab('history')}
        >
          📜 Evaluation History
        </button>

        <button
          className={activeTab === 'declaration' ? 'active' : ''}
          onClick={() => setActiveTab('declaration')}
        >
          🔐 Conflict Declaration
        </button>

      </div>


      {/* DASHBOARD */}

      {activeTab === 'dashboard' && (

        <div className="portal-content">

          <div className="metrics-row">

            <div className="metric-card">
              <span className="metric-title">
                Assigned Reviews
              </span>

              <span className="metric-value">
                08
              </span>

              <span className="metric-sub">
                Current cycle
              </span>
            </div>

            <div className="metric-card">
              <span className="metric-title">
                Completed
              </span>

              <span className="metric-value">
                14
              </span>

              <span className="metric-sub">
                This quarter
              </span>
            </div>

            <div className="metric-card">
              <span className="metric-title">
                Pending
              </span>

              <span className="metric-value">
                06
              </span>

              <span className="metric-sub">
                Require action
              </span>
            </div>

            <div className="metric-card highlight">
              <span className="metric-title">
                Average Score
              </span>

              <span className="metric-value">
                84.6
              </span>

              <span className="metric-sub">
                Across completed evaluations
              </span>
            </div>

          </div>


          <div className="desktop-split-panel">

            <div className="panel flex-2">

              <h3>
                Pending Evaluations
              </h3>

              <table className="desktop-table">

                <thead>

                  <tr>
                    <th>Application</th>
                    <th>Startup</th>
                    <th>Challenge</th>
                    <th>Deadline</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td>APP-1042</td>
                    <td>AgriVision Tech Pvt Ltd</td>
                    <td>AI Pothole Detection</td>
                    <td>28 Sep 2026</td>
                    <td>
                      <span className="tag evaluation">
                        Pending
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>APP-1037</td>
                    <td>CivicTech Labs</td>
                    <td>Smart Water Metering</td>
                    <td>28 Sep 2026</td>
                    <td>
                      <span className="tag evaluation">
                        Pending
                      </span>
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

            <div className="panel flex-1">

              <h3>
                Evaluation Principles
              </h3>

              <ul className="policy-list">

                <li>
                  ✓ Evidence-based scoring
                </li>

                <li>
                  ✓ Independent assessment
                </li>

                <li>
                  ✓ Conflict disclosure
                </li>

                <li>
                  ✓ Documented justification
                </li>

              </ul>

            </div>

          </div>

        </div>

      )}


      {/* ASSIGNED */}

      {activeTab === 'assigned' && (

        <div className="portal-content">

          <h3>
            Assigned Proposals
          </h3>

          <table className="desktop-table">

            <thead>

              <tr>
                <th>Application</th>
                <th>Startup</th>
                <th>Department</th>
                <th>Challenge</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>APP-1042</td>
                <td>AgriVision Tech</td>
                <td>PWD</td>
                <td>AI Pothole Detection</td>
                <td>
                  <span className="tag evaluation">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>APP-1037</td>
                <td>CivicTech Labs</td>
                <td>Urban Development</td>
                <td>Smart Water Metering</td>
                <td>
                  <span className="tag evaluation">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>APP-1028</td>
                <td>GovAI Solutions</td>
                <td>Revenue Department</td>
                <td>Document Verification</td>
                <td>
                  <span className="tag open">
                    Completed
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      )}


      {/* SCORING */}

      {activeTab === 'score' && (

        <div className="portal-content">

          <h3>
            Formal Proposal Evaluation
          </h3>

          <div className="panel">

            <h4>
              Proposal: Drone Thermal Mapping for Forest Wildfire Early Alert
            </h4>

            <p>
              <strong>Submitted by:</strong> AeroTech Systems
            </p>

            <p>
              <strong>Department:</strong> Forest Department
            </p>

            <hr />

            <div className="scoring-grid">

              <div className="form-group">

                <label>
                  Technical Innovation & Novelty
                  <small> / 30</small>
                </label>

                <input
                  type="number"
                  min="0"
                  max="30"
                  value={scores.innovation}
                  onChange={(e) =>
                    setScores({
                      ...scores,
                      innovation: e.target.value
                    })
                  }
                />

              </div>

              <div className="form-group">

                <label>
                  Feasibility & Pilot Plan
                  <small> / 40</small>
                </label>

                <input
                  type="number"
                  min="0"
                  max="40"
                  value={scores.feasibility}
                  onChange={(e) =>
                    setScores({
                      ...scores,
                      feasibility: e.target.value
                    })
                  }
                />

              </div>

              <div className="form-group">

                <label>
                  Cost & Public Impact
                  <small> / 30</small>
                </label>

                <input
                  type="number"
                  min="0"
                  max="30"
                  value={scores.impact}
                  onChange={(e) =>
                    setScores({
                      ...scores,
                      impact: e.target.value
                    })
                  }
                />

              </div>

            </div>

            <div className="total-score">

              Total Score:

              <strong>
                {total} / 100
              </strong>

            </div>

            <div className="form-group">

              <label>
                Technical Observations
              </label>

              <textarea
                rows="5"
                placeholder="Enter evaluation justification and observations..."
              />

            </div>

            <button
              className="btn-primary-large"
              onClick={() =>
                alert(
                  `Evaluation submitted successfully. Total Score: ${total}/100`
                )
              }
            >
              Submit Formal Score Card →
            </button>

          </div>

        </div>

      )}


      {/* COMMITTEE */}

      {activeTab === 'committee' && (

        <div className="portal-content">

          <h3>
            Evaluation Committee
          </h3>

          <table className="desktop-table">

            <thead>

              <tr>
                <th>Meeting</th>
                <th>Date</th>
                <th>Agenda</th>
                <th>Members</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>EC-2026-09</td>
                <td>29 Sep 2026</td>
                <td>Citizen Services Innovation</td>
                <td>07</td>
                <td>
                  <span className="tag open">
                    Scheduled
                  </span>
                </td>
              </tr>

              <tr>
                <td>EC-2026-10</td>
                <td>02 Oct 2026</td>
                <td>AI & Smart Governance</td>
                <td>06</td>
                <td>
                  <span className="tag open">
                    Scheduled
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      )}


      {/* HISTORY */}

      {activeTab === 'history' && (

        <div className="portal-content">

          <h3>
            Evaluation History
          </h3>

          <table className="desktop-table">

            <thead>

              <tr>
                <th>Date</th>
                <th>Application</th>
                <th>Action</th>
                <th>Score</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>24 Sep 2026</td>
                <td>APP-1028</td>
                <td>Technical Evaluation</td>
                <td>89 / 100</td>
                <td>
                  <span className="tag open">
                    Recorded
                  </span>
                </td>
              </tr>

              <tr>
                <td>22 Sep 2026</td>
                <td>APP-0998</td>
                <td>Innovation Assessment</td>
                <td>84 / 100</td>
                <td>
                  <span className="tag open">
                    Recorded
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      )}


      {/* CONFLICT DECLARATION */}

      {activeTab === 'declaration' && (

        <div className="portal-content">

          <h3>
            Conflict of Interest Declaration
          </h3>

          <div className="panel">

            <div className="declaration-box">

              <h4>
                Declaration for Current Evaluation Cycle
              </h4>

              <p>
                I declare that I have no financial, professional or
                personal conflict of interest with the startups or
                proposals assigned to me for evaluation.
              </p>

              <label className="declaration-check">

                <input type="checkbox" />

                I confirm the above declaration.

              </label>

              <button
                className="btn-primary-large"
                onClick={() =>
                  alert(
                    'Conflict declaration recorded in the prototype.'
                  )
                }
              >
                Submit Declaration
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}