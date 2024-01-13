import React from 'react';
import Image6 from '../assets/Images/Image section 6.png';
import './Story.css'; 

const Story = () => {
  return (
    <div className="story-section">
      <div className="story-content">
        <h2>OUR STORY</h2>
        <p>In the heart of Stockholm, you'll find Serenity Yoga. Our journey began in 2022 in Mariatorget, Södermalm, and expanded to Hornstulls Strand in 2023.</p>
        <p>We're all about yoga and holistic wellness. Our two studios are more than just places to practice; they're where you can discover inner peace, balance, and strength.</p>
        <p>At Serenity Yoga, we're like a family. We're committed to making yoga a transformative experience for everyone, creating a safe and inclusive community. Join us as we continue this simple yet beautiful story.</p>
      </div>
      <div className="story-image">
        <img src={Image6} alt="Yoga Class" />
      </div>
    </div>
  );
};

export default Story;

