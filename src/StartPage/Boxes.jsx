import React from 'react';
import { useTranslation } from 'react-i18next';
import Image4 from '../assets/Images/Section 4.png';
import './Boxes.css';

const Boxes = () => {
  const { t } = useTranslation();

    return (
      <div>
        <section className="boxes">
        <img src={Image4} alt="Image Section 4" />
        <div className="overlay">
          <div className="box">{t('CLASSES')}</div>
          <div className="box">{t('STUDIO')}</div>
          <div className="box">{t('SCHEDULE')}</div>
        </div>
      </section>
    </div>
  );
};

export default Boxes;  