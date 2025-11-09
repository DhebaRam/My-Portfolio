import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Flutter & Dart',
      skills: ['Flutter Framework', 'Dart Programming', 'Widget Development', 'Custom Widgets', 'Material Design', 'Cupertino Design']
    },
    {
      category: 'State Management',
      skills: ['Provider', 'GetX', 'Bloc', 'Riverpod', 'State Management Patterns']
    },
    {
      category: 'App Architecture & Structure',
      skills: ['Clean Architecture', 'MVVM Pattern', 'MVC Pattern', 'Project Structure', 'Code Organization', 'SOLID Principles']
    },
    {
      category: 'UI/UX Development',
      skills: ['Localization', 'Dark/Light Theme', 'Reusable Widgets', 'Flutter Tween Animation', 'Responsive Design', 'Custom Animations', 'UI/UX Design']
    },
    {
      category: 'Navigation & Routing',
      skills: ['Navigation 2.0', 'GoRouter', 'Named Routes', 'Deep Linking', 'Route Management']
    },
    {
      category: 'APIs & Backend Integration',
      skills: ['RESTful APIs', 'GraphQL', 'WebSocket', 'Firebase', 'Local Database', 'SQLite', 'Hive', 'SharedPreferences']
    },
    {
      category: 'Authentication & Security',
      skills: ['Google Sign-In', 'Apple Sign-In', 'Facebook Sign-In', 'OAuth', 'JWT', 'Biometric Authentication', 'Secure Storage']
    },
    {
      category: 'Advanced Features',
      skills: ['In-App Purchase', 'NFC Integration', 'Google Maps', 'Location Services', 'Push Notifications', 'Cloud Messaging (FCM)', 'Agora SDK', 'Audio/Video Calling']
    },
    {
      category: 'Performance & Optimization',
      skills: ['App Performance Optimization', 'Memory Management', 'Code Splitting', 'Lazy Loading', 'Image Optimization', 'Build Optimization']
    },
    {
      category: 'Testing & Quality',
      skills: ['Unit Testing', 'Widget Testing', 'Integration Testing', 'Test-Driven Development', 'Code Quality', 'Debugging']
    },
    {
      category: 'Deployment & CI/CD',
      skills: ['Play Store Deployment', 'App Store Deployment', 'App Signing', 'Version Management', 'CI/CD Pipelines', 'Fastlane']
    },
    {
      category: 'Tools & Development',
      skills: ['Git & Version Control', 'Flutter Flow', 'VS Code', 'Android Studio', 'Xcode', 'Package Management (pub.dev)', 'Dependency Injection']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skill-items">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

