import React from 'react';
import { Link } from 'react-router-dom';
import { FiMessageSquare } from 'react-icons/fi'; 
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <span className="logo">MR.</span>
      </div>
      <div className="nav-links">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/portfolio" className="link">Portfolio</Link>
        <Link to="/clients" className="link">Clients</Link>
      </div>
      <button className="connect-button">
        <FiMessageSquare /> Contact me
      </button>
    </nav>
  );
}