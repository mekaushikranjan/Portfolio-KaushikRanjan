import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css"; // Import the CSS file
import profileImg from "/src/assets/logo1.jpg"; // Replace with your actual image path

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand Logo & Name */}
        <div className="navbar-brand">
          <img src={profileImg} alt="Kaushik Ranjan" className="brand-logo" />
          <span className="brand-name">
            <Link to="hero" smooth={true} duration={500}>
              KAUSHIK RANJAN
            </Link>
          </span>
        </div>

        {/* Menu Icon (Mobile) */}
        <button
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <nav>
          <ul className="navbar-nav">
            <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${menuOpen ? "show" : ""}`}>
        <ul>
          <li><Link to="hero" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="education" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Education</Link></li>
          <li><Link to="skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
