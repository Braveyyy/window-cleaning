import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div>Contact: (555) 123-4567 | info@hydrospark.com</div>
    <div>&copy; {new Date().getFullYear()} HydroSpark. All rights reserved.</div>
  </footer>
);

export default Footer; 