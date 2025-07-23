import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import './App.css';

const App: React.FC = () => (
  <div>
    <Header />
    <main className="main-content">
      <section className="hero" id="home">
        <div className="hero-svg-container">
          {/* Decorative SVG bubbles */}
          <svg className="bubbles-svg" width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <circle className="bubble bubble1" cx="20" cy="80" r="8" fill="#90e0ef"/>
            <circle className="bubble bubble2" cx="60" cy="90" r="5" fill="#caf0f8"/>
            <circle className="bubble bubble3" cx="80" cy="70" r="4" fill="#00b4d8"/>
          </svg>
          {/* Window SVG (main hero icon) */}
          <svg
            className="window-svg"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="20" y="20" width="80" height="80" rx="10" fill="#fff" stroke="#90e0ef" strokeWidth="4"/>
            <rect x="20" y="20" width="38" height="80" rx="8" fill="#caf0f8"/>
            <rect x="62" y="20" width="38" height="80" rx="8" fill="#e0f7fa"/>
            <g className="sparkle sparkle1">
              <circle cx="40" cy="35" r="3" fill="#00b4d8"/>
              <circle cx="40" cy="35" r="1.5" fill="#fff"/>
            </g>
            <g className="sparkle sparkle2">
              <circle cx="80" cy="60" r="2.2" fill="#00b4d8"/>
              <circle cx="80" cy="60" r="1.1" fill="#fff"/>
            </g>
            <g className="sparkle sparkle3">
              <circle cx="60" cy="90" r="1.7" fill="#00b4d8"/>
              <circle cx="60" cy="90" r="0.8" fill="#fff"/>
            </g>
          </svg>
        </div>
        <h1>HydroSpark</h1>
        <p>Let the sunshine in! Professional window cleaning for homes and businesses.</p>
        {/* SVG Divider */}
        <svg className="divider-svg" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0,30 Q720,90 1440,30 V60 H0 Z" fill="#90e0ef" fillOpacity="0.25"/>
        </svg>
      </section>
      <section className="services" id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Residential & Commercial Window Cleaning</li>
          <li>Screen Cleaning</li>
          <li>Skylight & Mirror Cleaning</li>
          <li>Gutter Cleaning</li>
        </ul>
      </section>
      <Gallery />
      <Reviews />
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Ready for sparkling windows? Get in touch for a free quote!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Email:</strong> info@hydrospark.com</p>
        </div>
      </section>
    </main>
    <Footer />
    {/* Decorative SVG bubbles in footer */}
    <div className="footer-svg-container">
      <svg className="bubbles-svg" width="100" height="60" viewBox="0 0 100 60" fill="none" aria-hidden="true">
        <circle className="bubble bubble1" cx="20" cy="40" r="8" fill="#90e0ef"/>
        <circle className="bubble bubble2" cx="60" cy="50" r="5" fill="#caf0f8"/>
        <circle className="bubble bubble3" cx="80" cy="30" r="4" fill="#00b4d8"/>
      </svg>
    </div>
  </div>
);

export default App;
