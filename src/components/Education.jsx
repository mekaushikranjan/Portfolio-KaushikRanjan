import React from 'react';
import '../styles/Education.css'; 

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        {/* Vertical Divider */}
        <div className="divider"></div>

        {/* Left Box: Top‑Left Quadrant */}
        <div className="edu-box left-box">
        <h4 className="edu-title">2020-2022</h4>
          <h2 className="edu-title">Intermediate in Science</h2>
          <p className="edu-detail">Nitishwar Mahavidyalaya, Muzaffarpur</p>
          <p className="edu-university">BSEB</p>
          <p className="edu-university">Percentage-61.4%</p>
          {/* Connector from right edge of left box to the divider */}
          <div className="connector left-connector"></div>
        </div>

        {/* Right Box: Bottom‑Right Quadrant */}
        <div className="edu-box right-box">
          <h4 className="edu-title">2022-2025</h4>
          <h2 className="edu-title">Graduation</h2>
            <p>Bachelor of Computer Applications</p>
            <p>L. N. Mishra College of Business Management,Muzaffarpur</p>
            <p>Percentage-70%</p>
          {/* Connector from left edge of right box to the divider */}
          <div className="connector right-connector"></div>
        </div>
      </div>
    </section>
  );
}
