import React from 'react';
import { useTranslation } from 'react-i18next';
import Image2 from '../assets/Images/Image section 2.png';
import './OurYoga.css';

const OurYoga = () => {
  const { t } = useTranslation();

  return (
    <div className="our-yoga-section">
      <div className="our-yoga-content">
        <p>{t('Welcome to our community of experienced teachers, where you will find classes for all')}</p>
        <p>{t('levels. Join us for our heartwarming events, including workshops, teacher training,')}</p>
        <p>{t('and retreats.')}</p>
        <button className="offerings-button">{t('View Our Offerings')}</button>
      </div>
      <div className="yoga-container">
        <img src={Image2} alt="Yoga practice" className="yoga-image"/>
        <div className="yoga-content">
          <h1>{t('OUR YOGA')}</h1>
          <p>{t('No matter which class you choose, we stress breath, muscle support, and focus to ensure a safe yoga practice. We tailor our classes to your individual needs, whether you require modifications due to injuries or want to challenge yourself. We love sharing our passion for yoga and are always available to answer your questions after the class. We are here for you!')}</p>
          <button className="discover-classes-button">{t('Discover Our Classes')}</button>
        </div>
      </div>
    </div>
  );
};

export default OurYoga;

