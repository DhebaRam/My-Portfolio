import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="profile-summary">
              <h3>Profile Summary</h3>
              <p>
                A passionate and detail-oriented Flutter Developer with over 2 years of hands-on experience 
                in building scalable, high-performance, and user-friendly mobile applications. Skilled in state 
                management (Provider, Bloc, GetX), API integration, Firebase, UI/UX design, and app store deployment.
              </p>
              <p>
                Dedicated to continuously enhancing technical skills and delivering high-quality, innovative 
                mobile experiences that align with user needs and business goals.
              </p>
            </div>
            
            <div className="career-objective">
              <h3>Career Objective</h3>
              <p className="objective-quote">
                "To continuously enhance my skills and deliver innovative Flutter solutions that contribute 
                to both organizational success and personal growth. I aim to build apps that merge performance, 
                design, and functionality to create impactful digital experiences."
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

