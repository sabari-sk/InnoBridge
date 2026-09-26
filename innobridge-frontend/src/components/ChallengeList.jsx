import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export default function ChallengeList({ onSelectChallenge, role }) {
  const [challenges, setChallenges] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    apiService.getChallenges().then(data => setChallenges(data));
  }, []);

  const filtered = challenges.filter(c => 
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="section-container">
      <div className="header-actions">
        <h2>Departmental Challenges</h2>
        {role === 'Department' && (
          <button className="secondary-btn">+ Post New Challenge</button>
        )}
      </div>

      <input 
        type="text" 
        className="search-input" 
        placeholder="Search challenges by keyword or department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map(item => (
          <div key={item.id} className="card">
            <span className="badge">{item.category}</span>
            <h3>{item.title}</h3>
            <p className="dept">{item.department}</p>
            <p className="desc">{item.description}</p>
            <div className="card-footer">
              <div>
                <small>Grant/Budget</small>
                <strong>{item.budget}</strong>
              </div>
              <button className="primary-btn" onClick={() => onSelectChallenge(item)}>
                {role === 'Startup' ? 'Apply / Submit Proposal' : 'View Details'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}