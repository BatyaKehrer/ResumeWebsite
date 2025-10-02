import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-list">
          <div className="education-item">
            <div className="education-header">
              <h3>Bachelor of Science in Computer Science</h3>
              <span className="year">2020 - 2024</span>
            </div>
            <p className="institution">University Name</p>
            <p className="location">City, Country</p>
            <div className="achievements">
              <p><strong>GPA:</strong> 3.8/4.0</p>
              <p><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Web Development, Database Systems</p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-header">
              <h3>Web Development Bootcamp</h3>
              <span className="year">2019</span>
            </div>
            <p className="institution">Coding Bootcamp Name</p>
            <p className="location">City, Country</p>
            <div className="achievements">
              <p><strong>Focus:</strong> Full-Stack JavaScript Development</p>
              <p><strong>Technologies:</strong> React, Node.js, MongoDB, Express</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

