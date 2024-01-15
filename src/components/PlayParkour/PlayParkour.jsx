import './PlayParkour.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PlayParkourImage from '../../assets//image-14.png';

export const PlayParkour = () => {

  const { t } = useTranslation();

  return (
    <div className='playparkour-wrapper'>
       <img src={PlayParkourImage} alt="Kids playing Parkour" className="top-image"/>
      <h1>{t('head1')}</h1>
      <p>{t('paragraph1')}</p>
      <Link to="/about">
        <button className="playParkourButton">{t('head1')}</button>
      </Link>
    </div>
  )
}
