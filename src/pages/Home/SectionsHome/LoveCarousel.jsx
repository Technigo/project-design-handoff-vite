import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import loveData from './love.json'; 
import styled from 'styled-components';

const LoveCarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff; 
  border-radius: 50%; /* Make it round for a button-like appearance */
  width: 40px; /* Adjust the width */
  height: 40px; /* Adjust the height */
  cursor: pointer; /* Add pointer cursor for interactivity */
`;

const LeftIcon = styled(AiOutlineArrowLeft)`
  color: #FF0000;
  font-size: 24px; 
`;

const RightIcon = styled(AiOutlineArrowRight)`
  color: #FF0000; 
  font-size: 24px;
`;

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

  if (reviews.length === 0) {
    return null; // Handle the case when reviews are not loaded yet
  }

  return (
    <LoveCarouselContainer>
      <IconWrapper onClick={prevReview}>
        <LeftIcon />
      </IconWrapper>
      <div className="review">
        <p>{reviews[currentReviewIndex].text}</p>
        <p>- {reviews[currentReviewIndex].author}</p>
      </div>
      <IconWrapper onClick={nextReview}>
        <RightIcon />
      </IconWrapper>
    </LoveCarouselContainer>
  );
};

export default LoveCarousel;
