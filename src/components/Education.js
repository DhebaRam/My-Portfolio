import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Masters in Computer Applications',
      institution: 'GLS University - Ahmedabad',
      period: 'Aug 2020 - April 2022',
      description: 'Graduated with an MCA degree from GLS University, demonstrating strong technical and analytical skills.',
      gpa: 'GPA: 5.83'
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Smt. B.K. Mehta IT Center - Palanpur',
      period: 'Jun 2017 - May 2020',
      description: 'Completed Bachelor of Computer Applications (BCA) from HNGU University Patan.',
      gpa: 'GPA: 7.71'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-marker"></div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <span className="education-period">{edu.period}</span>
                <p className="education-description">{edu.description}</p>
                <div className="education-gpa">{edu.gpa}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

