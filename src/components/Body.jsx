import React from 'react';
import './Body.css'; // Import the CSS file
import myImage from "../images/IMG_20250309_181426-Photoroom.png";

export default function Body() {
  return (
    <div className="body">
      {/* Description on the left */}
      <div className="space1"></div>
      <div className="description">
        <p className="light-text">Hello,</p>
        
        <h1>I'm <span className="golden">Md Raza</span></h1> {/* Wrapped "Md Raza" in a span */}
        <h1>Full Stack Developer</h1>
        <br />
        <p className="light-text">Building dynamic and responsive web applications with modern technologies</p>
        <br />
        {/* Buttons */}
        <div className="buttons-container">
          <button className="contact-button">Contact Me</button>
          <button className="resume-button">My Resume</button>
        </div>
      </div>

      {/* Image on the right */}
      <div className="image-container">
        <img src={myImage} alt="My Image" className="centered-image" width="310px" height="450px" />
      </div>
      <div className="space2"></div>
    </div>
  );
}