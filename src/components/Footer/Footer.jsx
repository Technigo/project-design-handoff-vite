import './Footer.css';
import FooterLogo from '../../assets/LogoIcon.svg';
import { Link } from 'react-router-dom';
import EnglishFlag from '../../../public/images/Eng.png';
import SwedishFlag from '../../../public/images/Swe.png';
import { useLanguageStore } from '../../languageStore';
import { useEffect, useState } from 'react';
import i18next from '../../Translate/i18next';

export const Footer = () => {

  const { language, setLanguage } = useLanguageStore();
    const [translations, setTranslations] = useState({});

    useEffect(() => {
      import(`../../Translate/${language}.json`)
          .then((data) => {
              setTranslations(data.default);
              i18next.init({ resources: { [language]: data.default } }); 
          })
          .catch((error) => {
              console.error("Failed to load language file:", error);
          });
  }, [language]);


  return (
    <div className="footer-wrapper">
            <Link to="/">
                <img src={FooterLogo} alt="Logo Icon" className="footer-logo" />
            </Link>
            <div className="logo-container">
                <div className="footer-links">
                  {/* Check if translations for Footer are available */}
                  {translations.Footer ? (
                        <>
                    <Link to="/about">{translations.Footer.link1}</Link>
                    <Link to="/about">{translations.Footer.link2}</Link>
                    <Link to="/about">{translations.Footer.link3}</Link>
                    <Link to="/about">{translations.Footer.link4}</Link>
                    </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="flags-container">
                    <img src={EnglishFlag} alt="English Flag" className="flag-icon" onClick={() => setLanguage('Eng')} />
                    <img src={SwedishFlag} alt="Swedish Flag" className="flag-icon" onClick={() => setLanguage('Swe')} />
                </div>
            </div>
        </div>
  )
}
