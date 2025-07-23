import React from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'Sarah K.',
    text: 'Crystal Clear did an amazing job on our home windows. Highly recommend!'
  },
  {
    name: 'Mike D.',
    text: 'Professional, punctual, and left our storefront sparkling.'
  },
  {
    name: 'Linda P.',
    text: 'Best window cleaning service we have ever used!'
  }
];

const Reviews: React.FC = () => (
  <section className="reviews" id="reviews">
    <h2>Customer Reviews</h2>
    <div className="reviews-list">
      {reviews.map((review, idx) => (
        <div className="review" key={idx}>
          <p className="review-text">"{review.text}"</p>
          <p className="reviewer">- {review.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Reviews; 