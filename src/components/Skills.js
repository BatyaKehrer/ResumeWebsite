import React from 'react';
import VisualSkills from './VisualSkills';
import './Skills.css';

function Skills() {
  return (
    <>
      <VisualSkills />
      <section id="skills" className="skills">
        <div className="container">
          <h2>All Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Technologies</h3>
              <div className="skill-items">
                <span className="skill-item">React</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">TypeScript</span>
                <span className="skill-item">HTML5</span>
                <span className="skill-item">CSS3</span>
                <span className="skill-item">Sass/SCSS</span>
                <span className="skill-item">Redux</span>
                <span className="skill-item">Next.js</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend Technologies</h3>
              <div className="skill-items">
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Express</span>
                <span className="skill-item">Python</span>
                <span className="skill-item">Django</span>
                <span className="skill-item">REST APIs</span>
                <span className="skill-item">GraphQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <div className="skill-items">
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">PostgreSQL</span>
                <span className="skill-item">MySQL</span>
                <span className="skill-item">Redis</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-items">
                <span className="skill-item">Git</span>
                <span className="skill-item">Docker</span>
                <span className="skill-item">AWS</span>
                <span className="skill-item">Webpack</span>
                <span className="skill-item">Jest</span>
                <span className="skill-item">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;

