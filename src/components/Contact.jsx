import React from "react";
import "../styles/Contact.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const links = document.querySelectorAll(".social-icons a");
  
    const stopPropagationHandler = (e) => {
      e.stopPropagation();
    };
  
    links.forEach((link) => {
      link.addEventListener("click", stopPropagationHandler);
    });
  
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", stopPropagationHandler);
      });
    };
  }, [])
  return (
    <section id="contact" className="contact-page">
      <div className="contact-container">
        {/* Left Side: Contact Form */}
        <div className="contact-left">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">FIRST NAME</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">LAST NAME</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">PHONE NUMBER</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">WHAT DO YOU HAVE IN MIND</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Please enter query..."
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="contact-right">
          <h2>Contact me</h2>

          <div className="contact-info">
            <div className="info-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                alt="Phone"
                className="info-icon"
              />
              <span>+91-9507126389</span>
            </div>
            <div className="info-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email"
                className="info-icon"
              />
              <span>mritunjaykaushik1803@gmail.com</span>
            </div>
            <div className="info-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Location"
                className="info-icon"
              />
              <span>Muzaffarpur, Bihar, India (842001)</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-icons">
            <a
              href="https://github.com/mekaushikranjan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="social-icon"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/mekaushikranjan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="social-icon"
              />
            </a>

            <a
              href="https://x.com/Kaushik_ranjan_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img
                src="https://abs.twimg.com/favicons/twitter.ico"
                alt="Twitter"
                className="social-icon"
              />
            </a>

            <a
              href="https://www.instagram.com/_marschel_17/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
