import './AboutUs.css';
import ImageAboutUs from '../../../public/images/image19.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../Translate/i18next';

export const AboutUs = () => {

  const { t } = useTranslation();

  return (
    <div className="aboutUsContainer">
            <div className="leftColumn">
            <h1>{t('AboutUs.heading')}</h1>
            <p>{t('AboutUs.description')}</p>

                <Link to="/about">
                <button className="yellowButton">{t('AboutUs.button')}</button>
                </Link>
            </div>
            <div className="rightColumn">
                <img src={ImageAboutUs} alt="About Us" className="roundImage" />
            </div>
        </div>
  )
}
