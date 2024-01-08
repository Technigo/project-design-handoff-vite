import React from 'react';
import Image5 from '../assets/Images/Image section 5.png';
import './AboutUs.css';

const WelcomePage = () => {
    return (
      <div>
        <section className="new-yoga">
          <div className="new-yoga-content">
            <h1>NEW TO YOGA?</h1>
            <h2>Start with a free trial session, and we´ll help you begin your journey with confidence.</h2>
            <div className="buttons">
            <button className="book-button">Book Now</button>
          </div>
          </div>
          <div className="about">
          <img src={Image5} alt="Image Section 5" />
          <div className="about-text">
            <h1>ABOUT US</h1>
            <h2>Serenity Yoga embarked on its journey at Mariatorget, Södermalm in Stockholm in the summer of 2022. In the autumn of 2023, we expanded our presence with a second studio at Hornstull´s strand. </h2>
            <div className="buttons">
            <button className="discoverstory-button">Discover Our Story</button>
            </div>
          </div>        
        </div>  
      </section>
      </div>
    );
};
    
export default WelcomePage;