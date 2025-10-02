import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
            I am a Software Engineer with over 5 years of experience in language like C++, C#, Python, SQL, 
            React, Angular, and more. I have experience in industry like military, medical, renewable energy,
            and education. I am a self motivated developer and capable team le
            </p>
            {/* <p>
              When I'm not coding, you can find me exploring new technologies, 
              playing musical instruments, or creating 
            </p> */}
          </div>
          <div className="about-image">
            <img src="/KK2025-93.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

