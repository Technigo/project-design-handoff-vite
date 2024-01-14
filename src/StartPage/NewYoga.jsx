import React from 'react';
import { useTranslation } from 'react-i18next';
import './NewYoga.css';

const NewYoga = () => {
  const { t } = useTranslation();

    return (
      <div className="about-section">
        <div className="new-yoga-content">
          <h1>{t('NEW TO YOGA?')}</h1>
          <p>{t('Start with a free trial session, and we will help you begin your journey with confidence.')}</p>
          <button className="book-button">{t('Book Now')}</button>
        </div>
      </div>
    );
};

export default NewYoga;
