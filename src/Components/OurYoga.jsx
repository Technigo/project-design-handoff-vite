import React from 'react';
import Image2 from '../assets/Images/Image section 2.png';
import './OurYoga.css';

const OurYoga = () => {
  return (
    <div className="our-yoga-section">
      <div className="our-yoga-content">
        <h2>Welcome to our community of experienced teachers, where you'll find classes for all </h2>
        <h2>levels. Join us for our heartwarming events, including workshops, teacher training, </h2>
        <h2>and retreats.</h2>
        <button className="offerings-button">View Our Offerings</button>
      </div>
      <div className="yoga-container">
        <img src={Image2} alt="Yoga practice" className="yoga-image"/>
        <div className="yoga-content">
          <h1>OUR YOGA</h1>
          <p>No matter which class you choose, we stress breath, muscle support, and focus to ensure a safe yoga practice. We tailor our classes to your individual needs, whether you require modifications due to injuries or want to challenge yourself. We love sharing our passion for yoga and are always available to answer your questions after the class. We are here for you!</p>
          <button className="discover-classes-button">Discover Our Classes</button>
        </div>
      </div>
    </div>
  );
};

export default OurYoga;

