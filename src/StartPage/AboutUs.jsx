import React from 'react';
import { useTranslation } from 'react-i18next';
import Image5 from '../assets/Images/Image section 5.png';
import './AboutUs.css';

const WelcomePage = () => {
  const { t } = useTranslation();

    return (
      <div className="about-section">
        <div className="new-yoga-content">
          <h1>{t('NEW TO YOGA?')}</h1>
          <p>{t('Start with a free trial session, and we will help you begin your journey with confidence.')}</p>
          <button className="book-button">{t('Book Now')}</button>
        </div>
        <div className="about-container">
          <img src={Image5} alt="Yoga practice" className="yoga-image"/>
          <div className="about-content">
            <h1>{t('ABOUT US')}</h1>
            <p>{t('Serenity Yoga embarked on its journey at Mariatorget, Södermalm in Stockholm in the summer of 2022. In the autumn of 2023, we expanded our presence with a second studio at Hornstulls Strand.')}</p>
            <button className="discover-story-button">{t('Discover Our Story')}</button>
          </div>
        </div>
      </div>
    );
};

export default WelcomePage;

