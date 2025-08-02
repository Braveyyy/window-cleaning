import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div>&copy; {new Date().getFullYear()} HydroSpark LLC. All rights reserved.</div>
  </footer>
);

export default Footer; 