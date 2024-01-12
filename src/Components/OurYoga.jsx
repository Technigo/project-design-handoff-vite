import React from 'react';
import Image2 from '../assets/Images/Image section 2.png';
import './OurYoga.css';


const OurYoga = () => {
  return (
    <div>
        <section className="our-yoga">
        <div className="our-yoga-content">
          <h2>Welcome to our community of experienced teachers, where you'll find classes for all </h2>
          <h2>levels. Join us for our heartwarming events, including workshops, teacher training, </h2>
          <h2>and retreats.</h2>
          <div className="buttons">
            <button className="offerrings-button">View our offerings</button>
          </div>
        </div>
        <div className="offerings">
          <img src={Image2} alt="Image Section 2" />
          <div className="offerings-text">
            <h1>OUR YOGA</h1>
            <h2>No matter which class you choose, we stress breath, muscle support, and focus to ensure a safe yoga practice. We tailor our classes to your individual needs, whether you require modifications due to injuries or want to challenge yourself. We love sharing our passion for yoga and are always available to answer your questions after the class. We are here for you!</h2>
            <div className="buttons">
            <button className="discoverclasses-button">Discover Our Classes</button>
            </div>  
          </div>
        </div>
      </section>
    </div>
    );
};

export default OurYoga;
