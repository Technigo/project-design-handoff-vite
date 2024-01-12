import React from 'react';
import Image5 from '../assets/Images/Image section 5.png';
import './AboutUs.css';

const WelcomePage = () => {
    return (
      <div className="about-section">
        <div className="new-yoga-content">
          <h1>NEW TO YOGA?</h1>
          <p>Start with a free trial session, and we'll help you begin your journey with confidence.</p>
          <button className="book-button">Book Now</button>
        </div>
        <div className="about-container">
          <img src={Image5} alt="Yoga practice" className="yoga-image"/>
          <div className="about-content">
            <h1>ABOUT US</h1>
            <p>Serenity Yoga embarked on its journey at Mariatorget, Södermalm in Stockholm in the summer of 2022. 
               In the autumn of 2023, we expanded our presence with a second studio at Hornstull's Strand.</p>
            <button className="discover-story-button">Discover Our Story</button>
          </div>
        </div>
      </div>
    );
};

export default WelcomePage;

