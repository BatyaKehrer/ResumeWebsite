import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-list">
          <div className="experience-item">
            <div className="experience-header">
              <h3>Senior Frontend Developer</h3>
              <span className="duration">2022 - Present</span>
            </div>
            <p className="company">Tech Company Inc.</p>
            <p className="location">San Francisco, CA</p>
            <ul>
              <li>Led development of responsive web applications using React, TypeScript, and modern JavaScript</li>
              <li>Collaborated with cross-functional teams to deliver pixel-perfect UIs and exceptional user experiences</li>
              <li>Optimized application performance, resulting in 40% faster load times</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Implemented automated testing strategies, increasing code coverage to 90%</li>
            </ul>
          </div>
          <div className="experience-item">
            <div className="experience-header">
              <h3>Frontend Developer</h3>
              <span className="duration">2020 - 2022</span>
            </div>
            <p className="company">Digital Solutions LLC</p>
            <p className="location">New York, NY</p>
            <ul>
              <li>Developed interactive web components and single-page applications using React and Redux</li>
              <li>Integrated REST APIs and GraphQL endpoints for seamless data management</li>
              <li>Participated in agile development processes and sprint planning</li>
              <li>Collaborated with UX/UI designers to implement responsive designs</li>
              <li>Contributed to the development of a component library used across multiple projects</li>
            </ul>
          </div>
          <div className="experience-item">
            <div className="experience-header">
              <h3>Junior Web Developer</h3>
              <span className="duration">2019 - 2020</span>
            </div>
            <p className="company">StartupXYZ</p>
            <p className="location">Austin, TX</p>
            <ul>
              <li>Built and maintained company website using HTML, CSS, and JavaScript</li>
              <li>Assisted in the development of internal tools and dashboards</li>
              <li>Worked with senior developers to learn best practices and coding standards</li>
              <li>Participated in bug fixes and feature implementation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
