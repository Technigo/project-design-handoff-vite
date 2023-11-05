import React from 'react';
import "./css/heroheader.css";
import { useTranslation } from 'react-i18next';

const HeroHeader = () => {

    const { t } = useTranslation();

    return (
        <div className='heroheader'>
            <img src="/heropic.jpeg" alt="yoga" />
            <div className="header-info">
                <h1>{t('At Home Fitness')}</h1>
                <p>{t('Helping you move in your comfort zone')}</p>
            </div>
        </div>
    );
}

export default HeroHeader; 