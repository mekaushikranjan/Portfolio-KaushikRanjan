import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
  
    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage(data.message);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Contact Me</h2>
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">FIRST NAME</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">LAST NAME</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">PHONE NUMBER</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Submit"}
            </button>

            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="contact-right">
          <h2>Reach Out</h2>

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
