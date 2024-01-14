import React from 'react';
import { useTranslation } from 'react-i18next';
import './InTouch.css';

const InTouch = () => {
  const { t } = useTranslation();

    return (
    <div>
    <section className="in-touch">
        <h1>{t('Stay in touch with us')}</h1>
        <h2>{t('Register your email address for news and updates from Serenity Yoga.')}</h2>
        <div className="subscribe-form">
          <input type="email" placeholder="Email address" />
          <button className="subscribe-button">{t('Subscribe')}</button>
        </div>
        <h2>{t('By signing up for our email list, you consent to the handling of your')}</h2>
        <h2>{t('personal information in accordance with our terms and conditions.')}</h2>
      </section>
    </div>
  );
};

export default InTouch;