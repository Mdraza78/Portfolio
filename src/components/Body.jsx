import React from 'react';
import './Body.css'; // Import the CSS file
import myImage from "../images/IMG_20250309_181426-Photoroom.png";
export default function Body() {
  return (
    <div className="body">
<img src={myImage} alt="My Image" width="310px" height="450px"/></div>
  );
}