import React from 'react';
import { useTranslation } from 'react-i18next';
import Image6 from '../assets/Images/Image section 6.png';
import './Story.css'; 

const Story = () => {
  const { t } = useTranslation();

  return (
    <div className="story-section">
      <div className="story-content">
        <h2>{t('OUR STORY')}</h2>
        <p>{t('In the heart of Stockholm, you find Serenity Yoga. Our journey began in 2022 in Mariatorget, Södermalm, and expanded to Hornstulls Strand in 2023.')}</p>
        <p>{t('We are all about yoga and holistic wellness. Our two studios are more than just places to practice; where you can discover inner peace, balance, and strength.')}</p>
        <p>{t('At Serenity Yoga, we are like a family. We are committed to making yoga a transformative experience for everyone, creating a safe and inclusive community. Join us as we continue this simple yet beautiful story.')}</p>
      </div>
      <div className="story-image">
        <img src={Image6} alt="Yoga Class" />
      </div>
    </div>
  );
};

export default Story;

