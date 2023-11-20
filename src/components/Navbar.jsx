import React, { useState, useEffect } from 'react';
import "./css/navbar.css";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);

    console.log('Current language in Navbar:', currentLanguage);

    return (

        <nav>

            <Link to="/"><img src="/logo.png" alt="logo" /></Link>
            <div className="nav-links">
                <a href="#">Videos</a>
                <a href="#">{t('Workout Plan')}</a>
                <a href="#">{t('Tracker')}</a>
                <a href="#">{t('Favorites')}</a>
            </div>
            <div className="search">
                <div className="search-container">
                    <div className="search-bar">
                        <input type="text" placeholder={t('searchPlaceholder')} />
                    </div>
                    <button className="search-button">
                        <img src="/search.png" alt="search" />
                    </button>
                </div>
                <LanguageSwitcher />
            </div>
        </nav>
    );
};

export default Navbar;
