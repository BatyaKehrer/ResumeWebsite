import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Your Name</h1>
            <p>Frontend Developer</p>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#personal">Personal</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
