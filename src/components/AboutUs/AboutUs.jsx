import './AboutUs.css';
import ImageAboutUs from '/images/image19.png';
import AdditionalImage1 from '/images/Image22.png';
import AdditionalImage2 from '/images/Image18.png';
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
                
            </div>
            <div className="rightColumn">
                <img src={ImageAboutUs} alt="About Us" className="roundImage" />
                 <img src={AdditionalImage1} alt="Couple playing parkour" className="roundImage additionalImage" />
                <img src={AdditionalImage2} alt="Family playing parkour" className="roundImage additionalImage" />
            </div>
            <Link to="/about">
                    <button className="yellowButton">{t('AboutUs.buttonText')}</button>
                </Link>
        </div>
    );
}


  