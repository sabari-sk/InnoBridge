import React, { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState('STARTUP');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const roleInfo = {
    STARTUP: {
      title: 'Eligible Startup',
      subtitle: 'MahaStartups / DPIIT Validated',
      button: 'Startup Portal',
      icon: '🚀'
    },
    DEPARTMENT: {
      title: 'Govt Nodal Officer',
      subtitle: 'Department Procurement Cell',
      button: 'Department Portal',
      icon: '🏛️'
    },
    EVALUATOR: {
      title: 'Evaluation Committee',
      subtitle: 'MSINS Technical Panel',
      button: 'Evaluator Panel',
      icon: '⚖️'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter your official email and password.');
      return;
    }

    setError('');

    if (selectedRole === 'STARTUP') {
      onLogin({
        role: 'STARTUP',
        name: 'AgriVision Tech Pvt Ltd',
        id: 'DPIIT-88492',
        email,
        entityType: 'DPIIT & MahaStartup Registered'
      });
    }

    if (selectedRole === 'DEPARTMENT') {
      onLogin({
        role: 'DEPARTMENT',
        name: 'Shri. S. K. Patil',
        id: 'GOM-PWD-992',
        email,
        department: 'Public Works Department (PWD)'
      });
    }

    if (selectedRole === 'EVALUATOR') {
      onLogin({
        role: 'EVALUATOR',
        name: 'Dr. Ramesh R.',
        id: 'MSINS-EVAL-402',
        email,
        panel: 'State AI & Smart Governance Committee'
      });
    }
  };

  return (
    <div className="login-screen-wrapper">

      <div className="login-banner">

        <div className="emblem-large">
          🏛️
        </div>

        <h1>
          महाराष्ट्र शासन | Government of Maharashtra
        </h1>

        <h2>
          Public Innovation Procurement & Startup Scaling Portal
        </h2>

        <p className="policy-note">
          Operated by Dept. of Skills, Employment, Entrepreneurship & MSINS
          under Maharashtra Innovative Startup Policy
        </p>

      </div>

      <div className="login-box-container">

        <h3>Select Portal Access & Login</h3>

        <p className="login-subtext">
          Choose your designated role to enter the secure portal:
        </p>

        <div className="role-cards-grid">

          {Object.entries(roleInfo).map(([role, info]) => (
            <div
              key={role}
              className={`role-card ${
                selectedRole === role ? 'active' : ''
              }`}
              onClick={() => {
                setSelectedRole(role);
                setError('');
              }}
            >

              <span className="role-icon">
                {info.icon}
              </span>

              <h4>{info.title}</h4>

              <small>{info.subtitle}</small>

            </div>
          ))}

        </div>

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >

          <div className="form-group">

            <label>
              Government SSN / Email ID
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter official email"
            />

          </div>

          <div className="form-group">

            <label>
              Password / Security Pin
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password or security PIN"
            />

          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <div className="login-options">

            <label className="remember-option">
              <input type="checkbox" />
              Remember this device
            </label>

            <button
              type="button"
              className="forgot-password"
              onClick={() =>
                alert(
                  'Password recovery will be connected to the backend authentication service.'
                )
              }
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="submit"
            className="btn-login-submit"
          >
            Log In to {roleInfo[selectedRole].button} →
          </button>

        </form>

        <div className="security-notice">

          <strong>🔒 Secure Portal Access</strong>

          <p>
            Your authentication credentials are protected.
            This prototype will be connected to Spring Security
            and JWT authentication during backend integration.
          </p>

        </div>

        <div className="login-links">

          <span>Help & Support</span>
          <span>Accessibility</span>
          <span>Privacy Policy</span>

        </div>

      </div>

      <div className="login-footer">

        <span>
          © 2026 Government Innovation Procurement Portal
        </span>

        <span>
          Maharashtra | भारत सरकार Digital Governance Framework
        </span>

      </div>

    </div>
  );
}