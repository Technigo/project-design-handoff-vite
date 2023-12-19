import './PlayParkour.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PlayParkourImage from '/public/images/image-14.png';

export const PlayParkour = () => {

  const { t } = useTranslation();

  return (
    <div className='playparkour-wrapper'>
       <img src={PlayParkourImage} alt="Kids playing Parkour" className="top-image"/>
      <h1>{t('PlayParkour.heading')}</h1>
      <p>{t('PlayParkour.description')}</p>
      <Link to="/about">
        <button className="playParkourButton">{t('PlayParkour.buttonText')}</button>
      </Link>
    </div>
  )
}
