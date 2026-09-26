import React, { useState } from "react";
// Corrected import path based on your project structure
import LoginPage from "./components/LoginPage";
import MahaHeader from "./components/MahaHeader";
import StartupPortal from "./components/portals/StartupPortal";
import DepartmentPortal from "./components/portals/DepartmentPortal";
import EvaluatorPortal from "./components/portals/EvaluatorPortal";
import "./App.css";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="desktop-app-container min-h-screen bg-slate-50 text-slate-900 font-sans">
      <MahaHeader user={currentUser} onLogout={handleLogout} />
      
      <main className="desktop-content-area max-w-7xl mx-auto p-6">
        {currentUser.role === 'STARTUP' && <StartupPortal user={currentUser} />}
        {currentUser.role === 'DEPARTMENT' && <DepartmentPortal user={currentUser} />}
        {currentUser.role === 'EVALUATOR' && <EvaluatorPortal user={currentUser} />}
      </main>

      {/* Official Government Footer */}
      <footer className="bg-slate-200 text-slate-600 text-sm p-6 text-center mt-auto border-t border-slate-300">
        <div className="flex justify-center space-x-6 mb-2">
          <a href="#" className="hover:underline focus:ring-2 focus:ring-slate-900">Privacy Policy</a>
          <a href="#" className="hover:underline focus:ring-2 focus:ring-slate-900">Terms of Use</a>
          <a href="#" className="hover:underline focus:ring-2 focus:ring-slate-900">Accessibility Statement</a>
        </div>
        <p>© {new Date().getFullYear()} InnoBridge Platform. Official Government System.</p>
      </footer>
    </div>
  );
}