import React from 'react';
import '../styles/Header.css';

const Header = ({ activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <div className="flutter-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.2857 2L6 14.2857L10.2857 18.5714L22.5714 6.28571L18.2857 2Z" fill="#02569B"/>
              <path d="M6 14.2857L10.2857 18.5714L18.2857 26.5714L14 30.8571L6 22.8571V14.2857Z" fill="#02569B"/>
              <path d="M10.2857 18.5714L18.2857 10.5714L26.2857 18.5714L18.2857 26.5714L10.2857 18.5714Z" fill="#0175C2"/>
              <path d="M14 30.8571L18.2857 26.5714L26.2857 18.5714L30.5714 22.8571L22.5714 30.8571L14 30.8571Z" fill="#13B9FD"/>
            </svg>
          </div>
          <span className="brand-name">DhebaRam</span>
        </div>
        <ul className="nav-menu">
          <li>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeSection === 'education' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('education');
              }}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

