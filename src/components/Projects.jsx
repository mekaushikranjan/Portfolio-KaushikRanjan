import React from 'react';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal website built with React and Tailwind.',
      image: '/src/assets/portfolio1.png',
      link: 'https://kaushikranjan-portfolio.onrender.com/'
    },
    {
      title: 'Smart City Portal',
      description: 'A MERN-based  Complaint portal.',
      image: '/src/assets/Screenshot 2025-03-30 221033.png',
      link: 'https://smartcityportal-production.up.railway.app/'
    },
  
    {
      title: 'ChatBot',
      description: 'HTML,CSS,JS,NODEJS,ExpressJS based ChatBot',
      image: '',
      link: 'https://chatbot-ac5n.onrender.com/'
    },
    {
      title: 'coming...',
      description: '.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' ,
      link: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <a href={project.link} className="project-button">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
