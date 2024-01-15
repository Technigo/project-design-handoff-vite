import './HowToPlayParkour.css';
import Image1 from '../../assets/Rectangle9.png';
import Image2 from '../../assets/Rectangle10.png';
import Image3 from '../../assets/Rectangle11.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const HowToPlayParkour = () => {

  const { t } = useTranslation();

  return (
    <div className="howto-wrapper">
    <h1>{t('head2')}</h1>
    <div className="images-wrapper">
      <Link to="/about">
        <div className="image-container tall-image">
          <img src={Image1} alt={t('paragraph2')} />
          <p>{t('paragraph2')}</p>
        </div>
      </Link>
      <Link to="/about">
        <div className="image-container">
          <img src={Image2} alt={t('paragraph3')} />
          <p>{t('paragraph3')}</p>
        </div>
      </Link>
      <Link to="/about">
        <div className="image-container">
          <img src={Image3} alt={t('paragraph4')} />
          <p>{t('paragraph4')}</p>
        </div>
      </Link>
    </div>
  </div>
  );
};
