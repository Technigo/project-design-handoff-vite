import VisionImg from "../../../public/images/Image18.png";
import StoryImg from "../../../public/images/Rectangle19.png";
import FormImg from "../../../public/images/Image22.png";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './AboutUsPage.css';

export const AboutUsPage = () => {

  const { t } = useTranslation();

  return (
    <div className='aboutUsPage-wrapper'>
      <div className='vision-wrapper'>
        <img className='vision-img' src={VisionImg} alt={t('head7')} />
        <div className='vision-text'>
          <h1>{t('head7')}</h1>
          <p>{t('paragraph7')}</p>
        </div>
      </div>
      <div className='story-wrapper'>
        <img className='story-img' src={StoryImg} alt={t('paragraph7')} />
        <div className='story-text'>
          <h1>{t('head8')}</h1>
          <p>{t('paragraph7')}</p>
        </div>
          <img className='story-img' src={FormImg} alt={t('paragraph7')} />
      </div>
      <div className="contact-form">
        <h2>{t('head6')}</h2>
        <p>{t('paragraph8')}</p>
        <input type="text" placeholder={t('Name')} />
        <input type="email" placeholder={t('email')} />
        <textarea placeholder={t('Message')}></textarea>
        <div className="checkbox-wrapper">
          <input className='checkbox' type="checkbox" id="privacy" />
          <label htmlFor="privacy">{t('privacy')}</label>
        </div>
        <Link to="/">
          <button type="submit">{t('submit')}</button>
        </Link>
      </div>
    </div>

  )
}

  