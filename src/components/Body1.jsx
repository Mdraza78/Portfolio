import React from 'react';
import './Body1.css';

export default function Body1() {
  return (
    <div className="body">
      <div className="content">
        <div className="space"></div>
        <h1 className="heading">About Me</h1>
        <p className="intro">
          I am a MERN Stack Developer who builds modern and scalable web apps.  
          I specialize in React for UI, Node.js for the backend, and MongoDB for databases.  
          My focus is on performance, responsiveness, and seamless user experience.
        </p>

        {/* Skills List with Progress Bars */}
        <div className="skills">
          <ul>
            <li>
              HTML & CSS
              <div className="progress-container">
                <div className="progress-bar" style={{ "--width": "90%" }}></div>
              </div>
            </li>
            <li>
              React JS
              <div className="progress-container">
                <div className="progress-bar" style={{ "--width": "80%" }}></div>
              </div>
            </li>
            <li>
              JavaScript
              <div className="progress-container">
                <div className="progress-bar" style={{ "--width": "85%" }}></div>
              </div>
            </li>
            <li>
              Next JS
              <div className="progress-container">
                <div className="progress-bar" style={{ "--width": "70%" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
