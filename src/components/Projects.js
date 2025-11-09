import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageError = (imagePath) => {
    setImageErrors(prev => ({ ...prev, [imagePath]: true }));
  };

  const handleImageLoad = (imagePath) => {
    setImageLoaded(prev => ({ ...prev, [imagePath]: true }));
  };

  const projects = [
    // Featured Projects (Top Priority)
    {
      title: 'NaWeDey',
      description: 'A next-gen social and commerce app for communities with Agora calling integration. Features audio calling, video calling, and all app modes for seamless communication. Built using Flutter with push notifications, in-app purchases, and REST APIs.',
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.nawedey.app',
        appStore: 'https://apps.apple.com/in/app/nawedey/id123456789'
      },
      tags: ['Flutter', 'Social', 'E-commerce', 'Agora', 'Calling'],
      screenshots: ['nawedey-1.jpg', 'nawedey-2.jpg', 'nawedey-3.jpg'],
      featured: true
    },
    {
      title: 'Renew360',
      description: 'An AI-powered health tracking app developed in Flutter. Features intelligent health monitoring, personalized insights, and comprehensive health data analysis. Integrated with Firebase for real-time data synchronization and AI algorithms for health predictions.',
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.renew360.app',
        appStore: 'https://apps.apple.com/in/app/renew360/id123456789'
      },
      tags: ['Flutter', 'Healthcare', 'AI', 'Health Tracking', 'Firebase'],
      screenshots: ['renew360-1.jpg', 'renew360-2.jpg'],
      featured: true
    },
    {
      title: 'Star Student App',
      description: 'Developed a Flutter-based student management app for tracking academic performance, attendance, assignments, generating reports, and sending assignment notifications.',
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.star.stars'
      },
      tags: ['Flutter', 'Education', 'Management'],
      screenshots: ['starstudent-1.jpg'],
      featured: true
    },
    {
      title: 'Score More App',
      description: 'EMT prep application for medical students to practice and improve their scores. Features comprehensive test preparation modules and progress tracking.',
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.app.scoremore',
        appStore: 'https://apps.apple.com/in/app/scoremore-emt-prep/id6739198670'
      },
      tags: ['Flutter', 'Education', 'Medical'],
      screenshots: ['scoremore-1.jpg', 'scoremore-2.jpg'],
      featured: true
    },
    {
      title: 'Defalcor App',
      description: 'Developed a social media and e-commerce app in Flutter, featuring user profiles, Post sharing. Implemented social interaction features like comments, likes, and direct messaging, along with a secure payment system for transactions.',
      tags: ['Flutter', 'Social Media', 'E-commerce', 'Payment'],
      screenshots: ['defalcor-1.jpg'],
      featured: true
    },
    {
      title: 'Loyalty Gaming App',
      description: 'Developed a gamified loyalty program app in Flutter, incorporating interactive games and reward systems to boost user engagement. Integrated features for tracking user progress, rewards, and in-game achievements.',
      tags: ['Flutter', 'Gaming', 'Loyalty', 'Rewards'],
      screenshots: ['loyalty-1.jpg'],
      featured: true
    },
    {
      title: 'FIG K12',
      description: 'A learning management app supporting student progress tracking, online sessions, and notifications using Firebase Cloud Messaging (FCM).',
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.figk12.app'
      },
      tags: ['Flutter', 'Education', 'LMS', 'FCM'],
      screenshots: ['figk12-1.jpg']
    },
    // ES Healthcare Apps
    {
      title: 'ES Healthcare – Your AI Assistant',
      description: 'Built an AI-powered health consultation app with chat-based diagnosis, API integration, and secure Firebase authentication.',
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.eshealthcare.app'
      },
      tags: ['Flutter', 'Healthcare', 'AI', 'Chat'],
      screenshots: ['eshealthcare-1.jpg', 'eshealthcare-2.jpg']
    },
    {
      title: 'eSwasthya Delivery App',
      description: 'Developed delivery-side functionality for managing orders, routes, and notifications using RESTful APIs and Google Maps integration.',
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.eswasthya.delivery'
      },
      tags: ['Flutter', 'Delivery', 'Google Maps', 'REST API'],
      screenshots: ['eswasthya-1.jpg']
    },
    // Elsner Technologies Apps
    {
      title: "That's Amore Cheese App",
      description: 'Built a music streaming app in Flutter, allowing users to search for, stream, and manage playlists. Implemented audio playback with support for playing songs in both foreground and background modes.',
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.thatsamorecheese',
        appStore: 'https://apps.apple.com/in/app/thats-amore-cheese/id6464454820'
      },
      tags: ['Flutter', 'Music', 'Streaming'],
      screenshots: ['cheese-1.jpg', 'cheese-2.jpg']
    },
    {
      title: 'Resume Maker App',
      description: 'A Flutter application for creating professional resumes with customizable templates.',
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.elsner.resumemaker'
      },
      tags: ['Flutter', 'Productivity', 'Resume'],
      screenshots: ['resume-1.jpg']
    },
    {
      title: 'AV App',
      description: 'Video calling and communication app built with Flutter and Agora SDK.',
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.elsner.agora_app'
      },
      tags: ['Flutter', 'Video', 'Communication', 'Agora'],
      screenshots: ['avapp-1.jpg']
    }
  ];

  // Pre-check images on component mount
  useEffect(() => {
    projects.forEach(project => {
      if (project.screenshots) {
        project.screenshots.forEach(screenshot => {
          const imagePath = `/screenshots/${screenshot}`;
          const img = new Image();
          img.onload = () => handleImageLoad(imagePath);
          img.onerror = () => handleImageError(imagePath);
          img.src = imagePath;
        });
      }
    });
  }, []);

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="project-screenshots">
                  <div className="screenshots-grid">
                    {project.screenshots.slice(0, 3).map((screenshot, sIdx) => {
                      const imagePath = `/screenshots/${screenshot}`;
                      const hasError = imageErrors[imagePath];
                      const isLoaded = imageLoaded[imagePath];
                      const showPlaceholder = hasError || (!isLoaded && !hasError);
                      
                      return (
                        <div
                          key={sIdx}
                          className="screenshot-thumb"
                          onClick={() => !hasError && isLoaded && handleImageClick(imagePath)}
                          style={isLoaded && !hasError ? {
                            backgroundImage: `url(${imagePath})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          } : {}}
                        >
                          {showPlaceholder && (
                            <div className="screenshot-placeholder">
                              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                              </svg>
                              <span>Screenshot</span>
                            </div>
                          )}
                          {!hasError && (
                            <img
                              src={imagePath}
                              alt={`${project.title} screenshot ${sIdx + 1}`}
                              onError={() => handleImageError(imagePath)}
                              onLoad={() => handleImageLoad(imagePath)}
                              style={{ display: 'none' }}
                            />
                          )}
                          {isLoaded && !hasError && (
                            <div className="screenshot-overlay">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" y1="3" x2="12" y2="15" />
                              </svg>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {project.screenshots.length > 3 && (
                    <div className="more-screenshots">+{project.screenshots.length - 3} more</div>
                  )}
                </div>
              )}
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
              {project.links && (
                <div className="project-links">
                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      Play Store
                    </a>
                  )}
                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                      App Store
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Project Screenshot" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

