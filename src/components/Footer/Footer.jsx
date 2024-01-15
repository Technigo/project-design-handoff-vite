import './Footer.css';
import FooterLogo from '../../assets/LogoIcon.svg';
import { Link } from 'react-router-dom';
import EnglishFlag from '../../assets/Eng.png';
import SwedishFlag from '../../assets/Swe.png';
import Spanishflag from '../../assets/Spa.png'
import { useTranslation } from 'react-i18next';  

export const Footer = () => {
    const { t, i18n } = useTranslation();
   
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
                    <Link to="/about">{t('about')}</Link>
                    <Link to="/about">{t('head1')}</Link>
                    <Link to="/about">{t('faq')}</Link>
                    <Link to="/about">{t('contact')}</Link>
                    </div>
                <div className="flags-container">
                <img src={EnglishFlag} alt="English Flag" className="flag-icon" onClick={() => changeLanguage('en')} />
                    <img src={SwedishFlag} alt="Swedish Flag" className="flag-icon" onClick={() => changeLanguage('sv')} />
                    <img src={Spanishflag} alt="Spanish Flag" className="flag-icon" onClick={() => changeLanguage('es')} />
                </div>
              
            </div>
        </div>
    )
}