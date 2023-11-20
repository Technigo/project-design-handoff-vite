import React from "react";
import "./css/footer.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitchFooter from './LanguageSwitchFooter'; // Import the LanguageSwitchFooter component

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="footer-links">
                <Link to="/contact">{t('Contact Us')}</Link>
                <a href="#">{t('Privacy & Cookie Settings')}</a>
                <Link to="/about">{t('About Us')}</Link>
                <LanguageSwitchFooter /> {/* Include the LanguageSwitchFooter component */}
            </div>
        </div>
    )
}

export default Footer;
