import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Vidhan Info Tech Pvt. Ltd.',
      position: 'Flutter Developer',
      period: 'Aug 2023 – Present',
      description: 'Currently contributing to multiple cross-platform mobile apps, ensuring smooth performance, intuitive UI, and robust backend integration.',
      keyProjects: [
        { name: 'NaWeDey', playStore: 'https://play.google.com/store/apps/details?id=com.nawedey.app', appStore: 'https://apps.apple.com/in/app/nawedey/id123456789' },
        { name: 'Renew360', playStore: 'https://play.google.com/store/apps/details?id=com.renew360.app', appStore: 'https://apps.apple.com/in/app/renew360/id123456789' },
        { name: 'FIG K12', playStore: 'https://play.google.com/store/apps/details?id=com.figk12.app' }
      ],
      responsibilities: [
        'Building next-gen social and commerce apps with push notifications and in-app purchases',
        'Developing smart business networking apps with video sharing, chat, and profile management',
        'Creating learning management apps with student progress tracking and FCM notifications',
        'Integrating REST APIs with efficient state management'
      ]
    },
    {
      company: 'ES Health Care Pvt. Ltd.',
      position: 'Flutter Developer',
      period: 'Jan 2023 – July 2023',
      description: 'Worked on healthcare and delivery-based mobile apps focused on real-time communication and service integration.',
      keyProjects: [
        { name: 'ES Healthcare – Your AI Assistant', playStore: 'https://play.google.com/store/apps/details?id=com.eshealthcare.app' },
        { name: 'eSwasthya Delivery App', playStore: 'https://play.google.com/store/apps/details?id=com.eswasthya.delivery' }
      ],
      responsibilities: [
        'Built AI-powered health consultation app with chat-based diagnosis',
        'Developed delivery-side functionality for managing orders and routes',
        'Integrated RESTful APIs and Google Maps for location services',
        'Implemented secure Firebase authentication'
      ]
    },
    {
      company: 'JPLoft Solutions Pvt. Ltd.',
      position: 'Flutter Developer (Freelance / Project-based)',
      period: 'Aug 2023 – Present',
      description: 'Debugging and optimizing existing Flutter applications with focus on performance and UX.',
      responsibilities: [
        'Debugged and optimized existing Flutter applications',
        'Integrated RESTful APIs and improved app performance',
        'Managed state using Provider and Bloc patterns',
        'Enhanced UX with responsive UI components and custom animations'
      ]
    },
    {
      company: 'Elsner Technologies Pvt. Ltd.',
      position: 'Flutter Developer',
      period: 'Jan 2022 – Aug 2023',
      description: 'Developed cross-platform Flutter applications for diverse industries with focus on quality and deployment.',
      keyProjects: [
        { name: 'Resume Maker App', playStore: 'https://play.google.com/store/apps/details?id=com.elsner.resumemaker' },
        { name: 'AV App', playStore: 'https://play.google.com/store/apps/details?id=com.elsner.agora_app' },
        { name: 'Score More App', playStore: 'https://play.google.com/store/apps/details?id=com.app.scoremore', appStore: 'https://apps.apple.com/in/app/scoremore-emt-prep/id6739198670' },
        { name: 'Star Student App', playStore: 'https://play.google.com/store/apps/details?id=com.star.stars' },
        { name: "That's Amore Cheese App", playStore: 'https://play.google.com/store/apps/details?id=com.thatsamorecheese', appStore: 'https://apps.apple.com/in/app/thats-amore-cheese/id6464454820' }
      ],
      responsibilities: [
        'Developed cross-platform Flutter applications for diverse industries',
        'Collaborated with teams for app design, testing, and deployment on Play Store and App Store',
        'Worked with Firebase, local databases, social logins, and in-app purchases',
        'Built social media and e-commerce apps with chat, likes, and payment integration',
        'Created gamified loyalty systems for customer engagement'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-company">{exp.company}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-position">{exp.position}</h4>
                {exp.description && (
                  <p className="timeline-description">{exp.description}</p>
                )}
                {exp.keyProjects && exp.keyProjects.length > 0 && (
                  <div className="timeline-projects">
                    <h5 className="projects-title">Key Projects:</h5>
                    <div className="projects-list">
                      {exp.keyProjects.map((project, pIdx) => (
                        <div key={pIdx} className="project-badge">
                          <span className="project-name">{project.name}</span>
                          {project.playStore && (
                            <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="project-badge-link">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                              </svg>
                            </a>
                          )}
                          {project.appStore && (
                            <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="project-badge-link">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

