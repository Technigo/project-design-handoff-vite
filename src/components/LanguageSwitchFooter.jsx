import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitchFooter = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('sv');
        } else {
            i18n.changeLanguage('en');
        }
        console.log('Current language:', i18n.language);
    };

    return (
        <button onClick={toggleLanguage} className="footer-link">
            {i18n.language === 'en' ? 'Language' : 'Språk'}
        </button>
    );
};

export default LanguageSwitchFooter;
