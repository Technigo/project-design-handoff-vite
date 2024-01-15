import './AboutUsPage.css';
import VisionImg from '../';
import StoryImg from '/images/Rectangle19.png';
import FormImg from '/images/Image22.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const AboutUsPage = () => {

  const { t } = useTranslation();

  return (
    <div className='aboutUsPage-wrapper'>
      <div className='vision-wrapper'>
        <img className='vision-img' src={VisionImg} alt={t('VisionAndGoal.heading')} />
        <div className='vision-text'>
          <h1>{t('VisionAndGoal.heading')}</h1>
          <p>{t('VisionAndGoal.description')}</p>
        </div>
      </div>
      <div className='story-wrapper'>
        <img className='story-img' src={StoryImg} alt={t('OurStory.description')} />
        <div className='story-text'>
          <h1>{t('OurStory.heading')}</h1>
          <p>{t('OurStory.description')}</p>
        </div>
          <img className='story-img' src={FormImg} alt={t('OurStory.description')} />
      </div>
      <div className="contact-form">
        <h2>{t('Contact.heading')}</h2>
        <p>{t('Contact.description')}</p>
        <input type="text" placeholder={t('Name')} />
        <input type="email" placeholder={t('Email')} />
        <textarea placeholder={t('Message')}></textarea>
        <div className="checkbox-wrapper">
          <input className='checkbox' type="checkbox" id="privacy" />
          <label htmlFor="privacy">{t('Privacy')}</label>
        </div>
        <Link to="/">
          <button type="submit">{t('Submit')}</button>
        </Link>
      </div>
    </div>

  )
}

  