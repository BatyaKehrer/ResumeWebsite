import React, { useEffect } from 'react';
import './VisualSkills.css';

function VisualSkills() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((progressBar, index) => {
              const width = progressBar.style.width;
              progressBar.style.width = '0%';
              setTimeout(() => {
                progressBar.style.width = width;
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillCategories = document.querySelectorAll('.visual-skill-category');
    skillCategories.forEach((category) => {
      observer.observe(category);
    });

    return () => {
      skillCategories.forEach((category) => {
        observer.unobserve(category);
      });
    };
  }, []);
  const skillsData = [
    {
      category: "Frontend Technologies",
      skills: [
        { name: "React", level: 90, years: "3+ years" },
        { name: "JavaScript", level: 95, years: "4+ years" },
        { name: "TypeScript", level: 80, years: "2+ years" },
        { name: "HTML5", level: 95, years: "4+ years" },
        { name: "CSS3", level: 90, years: "4+ years" },
        { name: "Sass/SCSS", level: 75, years: "2+ years" },
        { name: "Redux", level: 70, years: "2+ years" },
        { name: "Next.js", level: 65, years: "1+ years" }
      ]
    },
    {
      category: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 85, years: "3+ years" },
        { name: "Express", level: 80, years: "3+ years" },
        { name: "Python", level: 75, years: "2+ years" },
        { name: "Django", level: 60, years: "1+ years" },
        { name: "REST APIs", level: 85, years: "3+ years" },
        { name: "GraphQL", level: 55, years: "1+ years" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", level: 80, years: "2+ years" },
        { name: "PostgreSQL", level: 75, years: "2+ years" },
        { name: "MySQL", level: 70, years: "2+ years" },
        { name: "Redis", level: 60, years: "1+ years" }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90, years: "4+ years" },
        { name: "Docker", level: 70, years: "2+ years" },
        { name: "AWS", level: 65, years: "1+ years" },
        { name: "Webpack", level: 60, years: "1+ years" },
        { name: "Jest", level: 75, years: "2+ years" },
        { name: "Figma", level: 80, years: "2+ years" }
      ]
    }
  ];

  const getLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 50) return "Intermediate";
    return "Beginner";
  };

  const getLevelColor = (level) => {
    if (level >= 90) return "#2E86AB";
    if (level >= 75) return "#4A90A4";
    if (level >= 50) return "#87CEEB";
    return "#B0C4DE";
  };

  return (
    <section id="visual-skills" className="visual-skills">
      <div className="container">
        <h2>Technical Expertise</h2>
        <p className="skills-intro">
          A visual representation of my experience and proficiency across various technologies
        </p>
        <div className="visual-skills-grid">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="visual-skill-category">
              <h3>{category.category}</h3>
              <div className="visual-skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="visual-skill-item"
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-meta">
                        <span className="skill-level">{getLevelText(skill.level)}</span>
                        <span className="skill-years">{skill.years}</span>
                      </div>
                    </div>
                    <div className="progress-container">
                      <div 
                        className="progress-bar"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: getLevelColor(skill.level)
                        }}
                      ></div>
                    </div>
                    <div className="skill-percentage">{skill.level}%</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisualSkills;
