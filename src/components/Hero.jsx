import React from "react";
import "../styles/Hero.css"; // Ensure your CSS file is correctly imported

export default function Hero() {
  return (
    <section className="hero relative flex flex-col items-center justify-center text-center min-h-screen">
      {/* Animated Blob Background */}
      <div className="hero-blob"></div>

      {/* Hero Content */}
      <div className="hero-content z-10">
        <h2 className="text-4xl font-bold">HEY, I'M KAUSHIK RANJAN</h2>
        <p className="text-lg mt-8 max-w-lg">
          A Frontend & AI Developer passionate about building modern, scalable web applications and intelligent digital solutions that drive success.
        </p>
        
      </div>
    </section>
  );
}
