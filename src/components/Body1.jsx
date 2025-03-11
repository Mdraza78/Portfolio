import React from 'react';
import './Body1.css';

export default function Body1() {
  return (
    <div className="body">
      <div className="content">
        <br />
        <h1 className="heading">About me</h1>
        <p className="intro">
          I am a MERN Stack Developer who builds modern and scalable web apps.  
          I specialize in React for UI, Node.js for the backend, and MongoDB for databases.  
          My focus is on performance, responsiveness, and seamless user experience.
        </p>

        {/* Website Design Card */}
        <div className="card">
          <img src="/path-to-website-design-icon.png" alt="Website Design" className="card-icon" />
          <div className="card-content">
            <h2 className="card-title">Website Design</h2>
            <p className="card-text">
              This demo text can be changed while making the production-ready site.
            </p>
          </div>
        </div>

        {/* New Card (MERN Development) */}
        <div className="card">
          <img src="/path-to-mern-icon.png" alt="MERN Development" className="card-icon" />
          <div className="card-content">
            <h2 className="card-title">MERN Development</h2>
            <p className="card-text">
              I build high-performance web apps using MongoDB, Express, React, and Node.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}