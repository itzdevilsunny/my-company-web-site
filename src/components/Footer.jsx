import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-card">
      <div className="footer-content">
        <div className="footer-section brand">
          <h2>ZORVIA</h2>
          <p>Building Future-Ready Digital Experiences</p>
        </div>
        
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#pricing">Pricing</Link></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>hello@zorvia.com</p>
          <p>+1 (555) 123-4567</p>
          <div className="social-links">
            <a href="#" className="neon-text">Twitter</a>
            <a href="#" className="neon-text">LinkedIn</a>
            <a href="#" className="neon-text">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zorvia Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
