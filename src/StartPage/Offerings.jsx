import React from 'react';
import { useTranslation } from 'react-i18next';
import './Offerings.css';

const OurYoga = () => {
    const { t } = useTranslation();

    return (
        <div className="our-yoga-section">
          <div className="our-yoga-content">
            <p>{t('Welcome to our community of experienced teachers, where you will find classes for all levels.')}</p>
            <p>{t('Join us for our heartwarming events, including workshops, teacher training, and retreats.')}</p>
            <button className="offerings-button">{t('View Our Offerings')}</button>
          </div>
        </div>
      );
    };
    
    export default OurYoga;