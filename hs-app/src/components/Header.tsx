import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">HydroSpark LLC</div>
      <nav className="desktop-nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Open navigation menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
      {menuOpen && (
        <nav className="mobile-nav">
          <ul>
            <li><a href="#home" onClick={handleNavClick}>Home</a></li>
            <li><a href="#gallery" onClick={handleNavClick}>Gallery</a></li>
            <li><a href="#reviews" onClick={handleNavClick}>Reviews</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </nav>
      )}
      {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Header; 