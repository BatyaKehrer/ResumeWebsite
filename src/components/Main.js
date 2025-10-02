import React from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <PersonalInfo />
      <Experience />
      <Education />
      <Skills />
    </main>
  );
}

export default Main;
