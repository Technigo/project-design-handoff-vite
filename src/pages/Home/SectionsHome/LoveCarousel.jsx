import React, { useState, useEffect } from 'react';
import loveData from './love.json';

const LoveCarousel = () => {
  const [reviews, setReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    // Load reviews from the JSON file
    setReviews(loveData);
  }, []);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="love-carousel">
      <div className="review">
        <p>{reviews[currentReviewIndex].text}</p>
        <p>- {reviews[currentReviewIndex].author}</p>
      </div>
      <div className="navigation">
        <button onClick={prevReview}>Previous</button>
        <button onClick={nextReview}>Next</button>
      </div>
    </div>
  );
};

export default LoveCarousel;
