import './AboutUs.css';
import ImageAboutUs from '/images/image19.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
    // Using the useTranslation hook to get the translation function t
    const { t } = useTranslation();
    
    return (
        <div className="aboutUsContainer">
            <div className="leftColumn">
                {/* Using the translation function t to get the translated strings */}
                <h1>{t('AboutUs.heading')}</h1>
                <p>{t('AboutUs.description')}</p>
                <Link to="/about">
                    <button className="yellowButton">{t('AboutUs.buttonText')}</button>
                </Link>
            </div>
            <div className="rightColumn">
                <img src={ImageAboutUs} alt="About Us" className="roundImage" />
            </div>
        </div>
    );
}


  