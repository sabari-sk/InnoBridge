import React from 'react';

export default function PilotTracker({ role, activeDept }) {
  const pilotData = [
    {
      id: "MHA-PLT-2026-04",
      startup: "AgriTech Innovations Nashik",
      challenge: "Sugarcane Crop Yield & Early Pest Detection",
      department: "Agriculture Dept, Govt of Maharashtra",
      overallProgress: 75,
      milestones: [
        { name: "Field Sensor Deployment (Zone A & B)", status: "Approved & Paid", payout: "₹5,00,000", date: "15-May-2026" },
        { name: "Satellite & Drone Analytics Model Integration", status: "Under Review by GoM Officer", payout: "₹10,00,000", date: "20-Aug-2026" },
        { name: "Statewide Scale-Up Readiness Report", status: "Pending", payout: "₹3,00,000", date: "30-Nov-2026" }
      ]
    }
  ];

  return (
    <div className="desktop-view">
      <div className="page-header-desktop">
        <div>
          <h2>Active Sandbox Pilots & Milestone Disbursement</h2>
          <p>Transparent tracking of trial progress, evaluation reports, and automated milestone payouts.</p>
        </div>
      </div>

      {pilotData.map(pilot => (
        <div key={pilot.id} className="pilot-card-desktop">
          <div className="pilot-top">
            <div>
              <h3>{pilot.challenge}</h3>
              <p className="sub-info">
                <strong>Startup:</strong> {pilot.startup} | <strong>Executing Department:</strong> {pilot.department}
              </p>
            </div>
            <div className="pilot-id-badge">{pilot.id}</div>
          </div>

          <div className="progress-section">
            <div className="progress-label">
              <span>Overall Pilot Execution Completion</span>
              <strong>{pilot.overallProgress}%</strong>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pilot.overallProgress}%` }}></div>
            </div>
          </div>

          <h4 className="table-heading">Milestone Execution & Payment Disbursement Status</h4>
          
          <table className="desktop-table">
            <thead>
              <tr>
                <th style={{width: '35%'}}>Milestone Description</th>
                <th>Target Date</th>
                <th>Tranche Payout</th>
                <th>Status</th>
                <th style={{width: '20%'}}>GoM Action</th>
              </tr>
            </thead>
            <tbody>
              {pilot.milestones.map((m, idx) => (
                <tr key={idx}>
                  <td><strong>{m.name}</strong></td>
                  <td>{m.date}</td>
                  <td><span className="payout-amount">{m.payout}</span></td>
                  <td>
                    <span className={`status-pill ${m.status.toLowerCase().includes('approved') ? 'success' : m.status.toLowerCase().includes('review') ? 'warning' : 'pending'}`}>
                      {m.status}
                    </span>
                  </td>
                  <td>
                    {role === 'Department' && m.status.includes('Review') && (
                      <button 
                        className="btn-action-success"
                        onClick={() => alert(`Milestone "${m.name}" verified. Payment of ${m.payout} authorized for transfer.`)}
                      >
                        Approve & Release Funds
                      </button>
                    )}
                    {role === 'Startup' && m.status.includes('Review') && (
                      <span className="info-text">Evidence Submitted</span>
                    )}
                    {role === 'Startup' && m.status === 'Pending' && (
                      <button className="btn-action-upload" onClick={() => alert("Upload KPI report PDF and telemetry logs")}>
                        Upload Proof of KPI
                      </button>
                    )}
                    {m.status.includes('Paid') && <span className="disbursed-text">✓ Funds Disbursed</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}