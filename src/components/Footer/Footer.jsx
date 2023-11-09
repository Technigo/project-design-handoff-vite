import './Footer.css';
import FooterLogo from '../../assets/LogoIcon.svg';
import { Link } from 'react-router-dom';
import EnglishFlag from '/images/Eng.png';
import SwedishFlag from '/images/Swe.png';
import { useTranslation } from 'react-i18next';  

export const Footer = () => {
    const { t, i18n } = useTranslation();  // Get the translation function
   
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
      };
    
    return (
        <div className="footer-wrapper">
            <Link to="/">
                <img src={FooterLogo} alt="Logo Icon" className="footer-logo" />
            </Link>
            <div className="logo-container">
                <div className="footer-links">
                    <Link to="/about">{t('Footer.link1')}</Link>
                    <Link to="/about">{t('Footer.link2')}</Link>
                    <Link to="/about">{t('Footer.link3')}</Link>
                    <Link to="/about">{t('Footer.link4')}</Link>
                </div>
                <div className="flags-container">
                <img src={EnglishFlag} alt="English Flag" className="flag-icon" onClick={() => changeLanguage('en')} />
                    <img src={SwedishFlag} alt="Swedish Flag" className="flag-icon" onClick={() => changeLanguage('sv')} />
                </div>
            </div>
        </div>
    )
}
