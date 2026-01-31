import React, { useState } from 'react';
import Signup from './pages/signup';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import './App.css';
import logo from './logo.png';

function App() {
  // Initial state is 'dashboard'
  const [view, setView] = useState('dashboard');

  return (
    <div className="app-wrapper">
      {/* PROFESSIONAL TOP NAVIGATION BAR */}
      <header className="navbar">
        <div className="logo-container" onClick={() => setView('dashboard')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="CareerLens AI Logo" className="app-logo" />
          <span className="logo-text">
            CareerLens <span className="ai-highlight">AI</span>
          </span>
        </div>

        <nav className="nav-links">
          <button 
            className={`nav-dashboard-link ${view === 'dashboard' ? 'active' : ''}`}
            onClick={() => setView('dashboard')}
          >
            <i className="fa-solid fa-house"></i> Home
          </button>
        </nav>

        <div className="nav-buttons">
          <button className="nav-btn" onClick={() => setView('login')}>Login</button>
          <button className="nav-btn signup-glow" onClick={() => setView('signup')}>Sign Up</button>
        </div>
      </header>

      {/* VIEW COMPONENTS CONTAINER */}
      <main className="page-content animate-fade-in">
        {view === 'dashboard' && <Dashboard />}
        {view === 'login' && <Login onSwitch={() => setView('signup')} />}
        {view === 'signup' && <Signup onSwitch={() => setView('login')} />}
      </main>
    </div>
  );
}

export default App;