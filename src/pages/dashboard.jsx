import React, { useState } from 'react';
import SkillChart from '../components/skillchart.jsx';
import './dashboard.css';

export default function Dashboard() {
  const [view, setView] = useState('dashboard');

  const handleBack = () => setView('dashboard');

  return (
    <div className="dashboard-container">
      {view === 'dashboard' ? (
        <div className="dashboard-wrapper animate-fade-in">
          <section className="hero-section">
            <div className="hero-badge">AI-Powered Career Guidance</div>
            <h1 className="hero-title">
              Transform Your <br />
              <span className="gradient-text">Career Journey</span>
            </h1>
            <p className="hero-subtitle">
              Get personalized roadmaps, skill assessments, and AI-driven advice to accelerate your professional growth.
            </p>
            <div className="hero-content-wrapper">
              <div className="hero-actions">
                <button className="primary-btn">Start Your Analysis →</button>
                <button className="outline-btn">Explore Courses</button>
              </div>
              <div className="hero-chart-aside">
                <SkillChart />
              </div>
            </div>
          </section>

          <section className="features-section">
            <div className="section-header">
              <h2 className="section-title">Everything You Need to Succeed</h2>
              <p className="section-subtitle">Comprehensive tools and AI-powered insights to guide your career growth</p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">👤</div>
                <h3>Profile Analysis</h3>
                <p>Deep dive into your professional profile to identify strengths and opportunities.</p>
              </div>
              
              <div className="feature-card highlighted-card" onClick={() => setView('roadmap')}>
                <div className="feature-icon">🗺️</div>
                <h3>Career Roadmap</h3>
                <p>Visual path to your dream job with actionable steps and milestones.</p>
                <span className="card-action">View Path →</span>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h3>Mock Interviews</h3>
                <p>Practice with AI-driven interview simulations and get instant feedback.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3>Learning Resources</h3>
                <p>Access curated courses and materials tailored to your career goals.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Progress Tracking</h3>
                <p>Monitor your growth with detailed analytics and achievement milestones.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3>Mentor Network</h3>
                <p>Connect with industry experts and experienced professionals in your field.</p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="roadmap-view-container animate-fade-in">
          <button className="back-btn" onClick={handleBack}>← Back to Dashboard</button>
          <div className="roadmap-content">
            <h2>Your Career Roadmap</h2>
            <p>Roadmap content coming soon...</p>
          </div>
        </div>
      )}
    </div>
  );
}
