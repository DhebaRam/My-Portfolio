import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">DhebaRam Prajapati</span>
          </h1>
          <h2 className="hero-subtitle">Flutter Developer | Mobile App Engineer</h2>
          <div className="hero-location">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>India</span>
          </div>
          <p className="hero-description">
            A passionate and detail-oriented Flutter Developer with over 2 years of hands-on experience 
            in building scalable, high-performance, and user-friendly mobile applications. Skilled in state 
            management, API integration, Firebase, and app store deployment.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
          </div>
          <div className="hero-social">
            <a href="mailto:dhebaram1999@gmail.com" className="social-link" aria-label="Email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a href="tel:+918780719722" className="social-link" aria-label="Phone">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card">
            <div className="card-content">
              <div className="code-snippet">
                <div className="code-line">
                  <span className="code-keyword">class</span>{' '}
                  <span className="code-class">FlutterDeveloper</span> <span className="code-keyword">extends</span>{' '}
                  <span className="code-class">StatelessWidget</span> {'{'}
                </div>
                <div className="code-line indent">
                  <span className="code-keyword">final</span>{' '}
                  <span className="code-variable">experience</span> = <span className="code-string">'2+ years'</span>;
                </div>
                <div className="code-line indent">
                  <span className="code-keyword">final</span>{' '}
                  <span className="code-variable">passion</span> = <span className="code-string">'Flutter'</span>;
                </div>
                <div className="code-line indent">
                  <span className="code-keyword">@override</span>
                </div>
                <div className="code-line indent">
                  <span className="code-class">Widget</span> <span className="code-function">build</span>(<span className="code-class">BuildContext</span> context) {'{'}
                </div>
                <div className="code-line indent-2">
                  <span className="code-keyword">return</span> <span className="code-class">Portfolio</span>();
                </div>
                <div className="code-line indent">{'}'}</div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

