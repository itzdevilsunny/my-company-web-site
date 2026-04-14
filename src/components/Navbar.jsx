import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">ZORVIA</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/#services">Services</Link></li>
        <li><Link to="/#projects">Projects</Link></li>
        <li><Link to="/admin" className="admin-btn">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
