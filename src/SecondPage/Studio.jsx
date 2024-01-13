import React from 'react';
import Image3 from '../assets/Images/Image section 3.png';
import './Studio.css';

const Studio = () => {
  return (
    <div className="studio-section">
      <div className="studio-image">
        <img src={Image3} alt="Studio" />
      </div>
      <div className="studio-content">
        <h2>OUR STUDIOS FACILITATES</h2>
        <ul>
          <li>Spacious Practice Rooms: Our well-lit, tranquil spaces inspire a sense of serenity.</li>
          <li>Quality Yoga Props: We provide mats, blocks, bolsters, and more for your practice.</li>
          <li>Clean and Hygienic: We maintain high standards of cleanliness using eco-friendly products</li>
          <li>Comfortable Lounge: Relax and connect with fellow yogis before and after class.</li>
          <li>Changing and Shower Facilities: Freshen up with our convenient amenities.</li>
          <li>Relaxing Soundscapes: Enjoy calming soundscapes for an oasis of peace.</li>
        </ul>
        <button className="book-now-button">Book Now</button>
      </div>
    </div>
  );
};

export default Studio;
