import React, { useState, useRef, useEffect } from 'react';
import './Gallery.css';

interface BeforeAfterImage {
  id: number;
  before: string;
  after: string;
  caption: string;
}

const beforeAfterImages: BeforeAfterImage[] = [
  {
    id: 1,
    before: '../assets/after-1.jpg',
    after: '../assets/before-1.jpg', // Replace with actual after image
    caption: 'Residential Home'
  },
  {
    id: 2,
    before: './src/assets/before-2.jpg', // Replace with actual before image
    after: './src/assets/after-2.jpg',
    caption: 'Residential Home'
  },
];

const BeforeAfterSlider: React.FC<{ image: BeforeAfterImage }> = ({ image }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="before-after-container" ref={containerRef}>
      <div className="image-container">
        <img src={image.before} alt={`Before - ${image.caption}`} className="before-image" />
        <div 
          className="after-image-container"
          style={{ width: `${sliderPosition}%` }}
        >
          <img src={image.after} alt={`After - ${image.caption}`} className="after-image" />
        </div>
        <div 
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="slider-line"></div>
          <div className="slider-circle">
            <span>⇄</span>
          </div>
        </div>
      </div>
      <div className="image-labels">
        <span className="label before-label">Before</span>
        <span className="label after-label">After</span>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<BeforeAfterImage | null>(null);

  return (
    <section className="gallery" id="gallery">
      <h2>Work Gallery</h2>
      <p className="gallery-subtitle">See the transformation with our professional window cleaning services</p>
      
      {/* Gallery Grid */}
      <div className="gallery-grid">
        {beforeAfterImages.map((image) => (
          <div 
            className="gallery-item" 
            key={image.id}
            onClick={() => setSelectedImage(image)}
          >
            <div className="before-after-preview">
              <img src={image.before} alt={`Before - ${image.caption}`} className="preview-before" />
              <div className="preview-overlay">
                <span className="preview-text">Drag to compare</span>
              </div>
            </div>
            <div className="caption">
              <h3>{image.caption}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size before/after comparison */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <BeforeAfterSlider image={selectedImage} />
            <h3 className="modal-caption">{selectedImage.caption}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 