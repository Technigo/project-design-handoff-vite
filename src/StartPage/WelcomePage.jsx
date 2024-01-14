import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroImage from '../assets/Images/Hero image.png';
import Logo from '../assets/Images/Logotype.png';
import './WelcomePage.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  const { t } = useTranslation();

  return (
      <div className="Header">
        <div className="navbar">
          <img src={Logo} alt="Logotype" className="logo"/>
          <ul className="nav-list">
            <li><Link to="/about">{t('ABOUT US')}</Link></li>
            <li><a href="/about">{t('EXPLORE')}</a></li>
            <li><a href="/about">{t('SCHEDULE')}</a></li>
            <li><a href="/about">{t('PRICES')}</a></li>
          </ul>
        </div>
      <div className="content">
        <div className="text">
          <h1>{t('Your journey to inner balance begins here.')}</h1>
          <h2>{t('With us, yoga is for everyone, whether you are a beginner or an experienced yogini. Welcome to a place where you belong!')}</h2>
          <div className="buttons">
            <button className="discover-button">{t('DISCOVER OUR STUDIO')}</button>
            <button className="login-button">{t('LOG IN')}</button>
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





