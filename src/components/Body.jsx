import React from 'react';
import './Body.css'; // Import the CSS file
import myImage from "../images/IMG_20250309_181426-Photoroom.png";

export default function Body() {
  return (
    <div className="body">
      {/* Description on the left */}
      <div className="space1"></div>
      <div className="description">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm [Your Name], a passionate developer with expertise in React, JavaScript, and modern web technologies.
          I love building user-friendly and responsive web applications.
        </p>
      </div>

      {/* Image on the right */}
      <div className="image-container">
        <img src={myImage} alt="My Image" className="centered-image" width="310px" height="450px" />
      </div>
      <div className="space2"></div>
    </div>
  );
}