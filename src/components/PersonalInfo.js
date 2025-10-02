import React from 'react';
import './PersonalInfo.css';

function PersonalInfo() {
  return (
    <section id="personal" className="personal-info">
      <div className="container">
        <div className="personal-content">
          <div className="profile-section">
            <div className="profile-image">
              <img src="/KK2025-93.jpg" alt="Profile" />
            </div>
            <div className="profile-details">
              <h1>Your Name</h1>
              <h2>Frontend Developer</h2>
              <p className="summary">
                Passionate frontend developer with expertise in React, JavaScript, and modern web technologies. 
                Dedicated to creating beautiful, user-friendly web experiences.
              </p>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong>
              <span>your.email@example.com</span>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <strong>Location:</strong>
              <span>Your City, Country</span>
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/yourprofile
              </a>
            </div>
            <div className="contact-item">
              <strong>GitHub:</strong>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                github.com/yourusername
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;

