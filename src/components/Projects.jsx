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
      title: 'Task Manager App',
      description: 'A React-based gamified task manager.',
      image: '',
      link: '#'
    },
  
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application.',
      image: '',
      link: '#'
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat app using WebSockets.',
      image: '',
      link: '#'
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
