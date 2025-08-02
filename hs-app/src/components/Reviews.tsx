import React from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'C C.',
    text: 'Alex and his partner did a great job on our windows. They came in, quoted a fair price, worked quickly, cleaned thoroughly and efficiently and left the area tidy. We had some unusual windows and difficult access, but they figured it out and got the job done. I’d highly recommend this company.'
  },
  {
    name: 'Kruz W.',
    text: 'Alex arrived on time and my windows haven’t looked this good in years. If you are in need of a window professional, you won’t go wrong in having these folks do your job. Reasonable pricing and excellent service.'
  },
  {
    name: 'Ruth B.',
    text: 'Alex did a terrific job of cleaning our windows. I was very pleased. He is conscientious, efficient and gave us a very good price.'
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