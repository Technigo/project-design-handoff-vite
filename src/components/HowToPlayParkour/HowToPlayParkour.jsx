import './HowToPlayParkour.css';
import Image1 from '../../../public/images/Rectangle9.png';
import Image2 from '../../../public/images/Rectangle10.png';
import Image3 from '../../../public/images/Rectangle11.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const HowToPlayParkour = () => {

  const { t } = useTranslation();

  return (
    <div className="howto-wrapper">
    <h1>{t('HowToPlay.heading')}</h1>
    <div className="images-wrapper">
      <Link to="/about">
        <div className="image-container tall-image">
          <img src={Image1} alt={t('HowToPlay.point1')} />
          <p>{t('HowToPlay.point1')}</p>
        </div>
      </Link>
      <Link to="/about">
        <div className="image-container">
          <img src={Image2} alt={t('HowToPlay.point2')} />
          <p>{t('HowToPlay.point2')}</p>
        </div>
      </Link>
      <Link to="/about">
        <div className="image-container">
          <img src={Image3} alt={t('HowToPlay.point3')} />
          <p>{t('HowToPlay.point3')}</p>
        </div>
      </Link>
    </div>
  </div>
  );
};
