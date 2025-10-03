import React from 'react';
import './PersonalInfo.css';

function PersonalInfo() {
  return (
    <section id="personal" className="personal-info">
      <div className="container">
        <div className="personal-content">
          <div className="profile-section">
            <div className="profile-image">
              <img src="/KK2025-93.png" alt="Profile" />
            </div>
            <div className="profile-details">
              <h1>Batya Kehrer</h1>
              <h2>Software Engineer</h2>
              <p className="summary">
              I am a Software Engineer with 5+ years of experience in language like C++, C#, Python, SQL, 
              React, Angular, and more. I have experience in industry like military, medical, renewable energy, 
              and education. I am a self motivated developer and capable team leader.
              </p>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong>
              <span>batyakehrer@gmail.com</span>
            </div>
            <div className="contact-item">
              <strong>Location:</strong>
              <span>Orem, Utah</span>
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong>
              <a href="https://www.linkedin.com/in/batya-kehrer/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/batya-kehrer/
              </a>
            </div>
            <div className="contact-item">
              <strong>GitHub:</strong>
              <a href="https://github.com/BatyaKehrer" target="_blank" rel="noopener noreferrer">
                github.com/BatyaKehrer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;

