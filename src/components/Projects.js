import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>E-Commerce Platform</h3>
            <p>A full-stack e-commerce solution built with React and Node.js</p>
            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <div className="project-links">
              <a href="#" className="btn-primary">Live Demo</a>
              <a href="#" className="btn-secondary">GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <h3>Task Management App</h3>
            <p>A collaborative task management application with real-time updates</p>
            <div className="tech-stack">
              <span>React</span>
              <span>Socket.io</span>
              <span>Express</span>
            </div>
            <div className="project-links">
              <a href="#" className="btn-primary">Live Demo</a>
              <a href="#" className="btn-secondary">GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <h3>Weather Dashboard</h3>
            <p>A responsive weather application with location-based forecasts</p>
            <div className="tech-stack">
              <span>React</span>
              <span>API Integration</span>
              <span>CSS3</span>
            </div>
            <div className="project-links">
              <a href="#" className="btn-primary">Live Demo</a>
              <a href="#" className="btn-secondary">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

