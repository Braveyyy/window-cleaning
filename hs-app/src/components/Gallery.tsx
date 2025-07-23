import React from 'react';
import './Gallery.css';

const images = [
  { src: './src/assets/work1.jpg', caption: 'Storefront - Before & After' },
  { src: './src/assets/work1.jpg', caption: 'Residential Shine' },
  { src: './src/assets/work1.jpg', caption: 'Office Building' },
  { src: './src/assets/work1.jpg', caption: 'Skylight Cleaning' },
];

const Gallery: React.FC = () => (
  <section className="gallery" id="gallery">
    <h2>Our Past Work</h2>
    <div className="gallery-grid">
      {images.map((img, idx) => (
        <div className="gallery-item" key={idx}>
          <img src={img.src} alt={img.caption} />
          <div className="caption">{img.caption}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery; 