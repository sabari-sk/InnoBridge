import React, { useState } from 'react';

export default function ProposalForm({ challenge, onBack }) {
  const [formData, setFormData] = useState({
    startupName: '',
    dpiitNumber: '',
    mahaStartupId: '',
    solutionSummary: '',
    milestone1: '',
    milestone1Budget: '',
    milestone2: '',
    milestone2Budget: '',
    agreedToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Proposal for "${challenge.title}" submitted successfully to the GoM Evaluation Committee!`);
    onBack();
  };

  return (
    <div className="desktop-view">
      <div className="form-wrapper-widescreen">
        <div className="form-header-bar">
          <button className="back-link" onClick={onBack}>&larr; Back to Challenges</button>
          <h2>Startup Pilot Proposal Form</h2>
          <p><strong>Applying to Challenge:</strong> {challenge.title} ({challenge.department})</p>
        </div>

        <form onSubmit={handleSubmit} className="widescreen-form">
          <div className="form-row two-col">
            <div className="form-group">
              <label>Startup Legal Entity Name *</label>
              <input 
                type="text" 
                placeholder="e.g., TechInnovate Maharashtra Pvt Ltd" 
                required 
                value={formData.startupName}
                onChange={(e) => setFormData({...formData, startupName: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>DPIIT Recognition / MahaStartup Registration ID *</label>
              <input 
                type="text" 
                placeholder="DPIIT109283 / MSINS-2026-X8" 
                required 
                value={formData.dpiitNumber}
                onChange={(e) => setFormData({...formData, dpiitNumber: e.target.value})}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Technical Solution & Deployment Approach *</label>
            <textarea 
              rows="4" 
              placeholder="Detail how your solution addresses the problem statement, hardware/software stack, and data integration plan." 
              required
              value={formData.solutionSummary}
              onChange={(e) => setFormData({...formData, solutionSummary: e.target.value})}
            ></textarea>
          </div>

          <h3 className="section-title">Milestone-Based Pilot Sandbox Execution Plan</h3>

          <div className="form-row two-col">
            <div className="form-group">
              <label>Milestone 1: MVP Deployment & Initial Testing Target</label>
              <input 
                type="text" 
                placeholder="e.g., Installation of 10 sensors & cloud dashboard setup (Month 1-2)" 
                required
                onChange={(e) => setFormData({...formData, milestone1: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Milestone 1 Payment Tranche Requested (₹)</label>
              <input 
                type="text" 
                placeholder="e.g., ₹5,00,000" 
                required
                onChange={(e) => setFormData({...formData, milestone1Budget: e.target.value})}
              />
            </div>
          </div>

          <div className="form-row two-col">
            <div className="form-group">
              <label>Milestone 2: Field Trial Execution & Department KPI Validation</label>
              <input 
                type="text" 
                placeholder="e.g., Full 60-day field run with 95% accuracy report (Month 3-5)" 
                required
                onChange={(e) => setFormData({...formData, milestone2: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Milestone 2 Payment Tranche Requested (₹)</label>
              <input 
                type="text" 
                placeholder="e.g., ₹15,00,000" 
                required
                onChange={(e) => setFormData({...formData, milestone2Budget: e.target.value})}
              />
            </div>
          </div>

          <div className="form-group checkbox-group">
            <input 
              type="checkbox" 
              id="legal-agree" 
              required 
              checked={formData.agreedToTerms}
              onChange={(e) => setFormData({...formData, agreedToTerms: e.target.checked})}
            />
            <label htmlFor="legal-agree">
              We certify compliance with GoM Cyber Security standards, IP co-sharing model, and agree to independent evaluation by the State Nodal Technical Committee.
            </label>
          </div>

          <div className="form-actions-desktop">
            <button type="button" className="btn-secondary" onClick={onBack}>Cancel</button>
            <button type="submit" className="btn-primary-large">Submit Formal Proposal</button>
          </div>
        </form>
      </div>
    </div>
  );
}