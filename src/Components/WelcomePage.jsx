import React from 'react';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="navbar">
        <img src="Logotype.png" alt="Logo" className="logo" />
        <ul className="nav-list">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">Prices</a></li>
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
          <img src="Hero image.png" alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

