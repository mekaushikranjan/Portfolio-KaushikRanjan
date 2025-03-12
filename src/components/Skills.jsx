import React from 'react';
import '../styles/Skills.css';

export default function Skills() {
  const skills = [
    { name: 'HTML5', img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'CSS3', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'JavaScript', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },

    { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Tailwind CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Node.js', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Git', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
    { name: 'Redux', img: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png' },
    { name: 'TypeScript', img: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg' },
    { name: 'Express', img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'MongoDB', img: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' },
    { name: 'Docker', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
    { name: 'AWS', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'GraphQL', img: 'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg' },
    { name: 'Next.js', img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
    { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">SKILLS</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.img} alt={skill.name} className="skill-img" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
