import React from 'react';

export default function MahaHeader({ user, onLogout }) {
  return (
    <header className="maha-header">
      <div className="header-top-bar">
        <div className="state-identity">
          <div className="emblem-placeholder">🏛️</div>
          <div>
            <h1 className="marathi-title">महाराष्ट्र शासन | Government of Maharashtra</h1>
            <p className="dept-subtitle">Department of Skills, Employment, Entrepreneurship and Innovation & MSINS</p>
          </div>
        </div>

        <div className="header-controls">
          <div className="user-profile-badge">
            <span className="dot online"></span>
            <div>
              <strong className="user-name">{user.name}</strong>
              <small className="user-role-tag">
                {user.role === 'STARTUP' && `🚀 Startup (${user.id})`}
                {user.role === 'DEPARTMENT' && `🏛️ ${user.department}`}
                {user.role === 'EVALUATOR' && `⚖️ Committee Evaluator`}
              </small>
            </div>
          </div>

          <button className="btn-logout" onClick={onLogout}>
            Logout 🚪
          </button>
        </div>
      </div>
    </header>
  );
}