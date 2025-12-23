import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import './App.css';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'zhhaoying1738@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <div>
    <main className="main-content">
      <section className="hero" id="home">
        <div className="hero-svg-container">
          {/* decorative bubbles */}
          <svg className="bubbles-svg" width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <circle className="bubble bubble1" cx="20" cy="80" r="8" fill="#90e0ef"/>
            <circle className="bubble bubble2" cx="60" cy="90" r="5" fill="#caf0f8"/>
            <circle className="bubble bubble3" cx="80" cy="70" r="4" fill="#00b4d8"/>
          </svg>
          <section className="hs-logo">
            <img src='/public/assets/hs-title.png'></img>
          </section>
        </div>
        <p>Professional window cleaning for homes and businesses in Denver, Colorado</p>
        {/* SVG Divider */}
        <svg className="divider-svg" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0,30 Q720,90 1440,30 V60 H0 Z" fill="#90e0ef" fillOpacity="0.25"/>
        </svg>
      </section>
      
      {/* Call to Action Button */}
      <div className="cta-container">
        <button 
          className="cta-button"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          <span className="cta-text">Get Your Free Quote Today!</span>
          <svg className="cta-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L17 10L10 17M17 10H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <section className="services" id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Window Cleaning</li>
          <li>Pressure Washing</li>
          <li>House Washing</li>
          <li>Solar Cleaning</li>
          <li>House Keeping</li>
          <li>...and much more!</li>
        </ul>
      </section>
      <Gallery />
      <Reviews />
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Ready for sparkling windows? Get in touch for a free quote!</p>
        <br></br>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleInputChange}
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleInputChange}
            required 
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleInputChange}
            required 
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
        
        {submitStatus === 'success' && (
          <div className="success-message">
            Thank you. We'll be in touch with your free quote soon!
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="error-message">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}
        <div className="contact-info">
          <p><strong>Phone:</strong> (720) 656-7997</p>
          <p><strong>Email:</strong> zhhaoying1738@gmail.com</p>
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
};

export default App;
