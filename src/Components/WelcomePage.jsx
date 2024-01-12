import React from 'react';
import HeroImage from '../assets/Images/Hero image.png';
import Logo from '../assets/Images/Logotype.png';
import './WelcomePage.css';


const WelcomePage = () => {
  return (
      <div className="Header">
        <div className="navbar">
          <img src={Logo} alt="Logotype" className="logo"/>
          <ul className="nav-list">
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">EXPLORE</a></li>
            <li><a href="#">SCHEDULE</a></li>
            <li><a href="#">PRICES</a></li>
          </ul>
        </div>
      <div className="content">
        <div className="text">
          <h1>Your journey to inner balance begins here.</h1>
          <h2>With us, yoga is for everyone, whether you are a beginner or an experienced yogini. Welcome to a place where you belong!</h2>
          <div className="buttons">
            <button className="discover-button">Discover our studio</button>
            <button className="login-button">Log in</button>
          </div>
        </div>
        <div className="image">
          <img src={HeroImage} alt="Hero Image" />
        </div>
      </div> 
    </div>
  );
};

export default WelcomePage;





