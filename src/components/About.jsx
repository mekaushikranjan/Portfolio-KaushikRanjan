import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I am a developer passionate about React, Tailwind CSS, and building user-friendly applications.
          I enjoy turning complex problems into simple, beautiful, and intuitive designs.
        </p>
        {/* Add additional details as needed */}
      </div>
      <div className="about-photo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"  
          alt="Profile"
        />
      </div>
    </section>
  );
}
