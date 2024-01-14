import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/Images/Logotype.png';
import Hero2 from '../assets/Images/Hero image2.png';
import './Mission.css'; 

const Mission = () => {
  const { t } = useTranslation();

  return (
    <div className="mission-section">
      <div className="mission-logo">
        <img src={Logo} alt="Serenity Yoga" />
      </div>
      <div className="mission-image">
        <img src={Hero2} alt="Yoga Practice" />
      </div>
      <div className="mission-content">
        <h2>{t('OUR MISSION AND VALUES')}</h2>
        <p>{t('Our mission is to empower individuals to transform their lives through the practice of yoga. We believe in creating a nurturing and inclusive environment where all can discover their true potential, both on and off the mat. Our core values include authenticity, mindfulness, and a commitment to personal growth.')}</p>
        </div>
    </div>
    );
};

export default Mission;