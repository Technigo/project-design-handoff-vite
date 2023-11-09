import './PlayParkour.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const PlayParkour = () => {

  const { t } = useTranslation();

  return (
    <div className='playparkour-wrapper'>
      <h1>{t('PlayParkour.heading')}</h1>
      <p>{t('PlayParkour.description')}</p>
      <Link to="/about">
        <button className="playParkourButton">{t('PlayParkour.buttonText')}</button>
      </Link>
    </div>
  )
}
