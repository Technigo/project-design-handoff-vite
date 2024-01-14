import React from 'react';
import { useTranslation } from 'react-i18next';
import Post1 from '../assets/Images/Rectangle 15.png';
import Post2 from '../assets/Images/Rectangle 16.png';
import Post3 from '../assets/Images/Rectangle 17.png';
import './RecentPosts.css';


const RecentPosts = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="recent-posts">
        <h1>{t('RECENT POSTS')}</h1>
        <div className="post-boxes">
          <div className="post-box">
            <img src={Post1} alt="Yoga mats" />
            <p>{t('25 July 2023')}<br/><strong>{t('FALL SCHEDULE')}</strong><br/>{t('We are open throughout the fall from 25/8 to 20/12. Unlimited yoga during this period - 1490 SEK.')}</p>
            <button className="read-more-button">{t('Read more')}</button>
          </div>
          <div className="post-box">
            <img src={Post2} alt="Yoga teacher training" />
            <p>{t('5 July 2023')}<br/><strong>{t('YOGA TEACHER TRAININGS')}</strong><br/>{t('Starting in the fall of 2023. Early-bird price, 29,900 SEK (including VAT). For more information, email or call, +46 736 26...')}</p>
            <button className="read-more-button">{t('Read more')}</button>
          </div>
          <div className="post-box">
            <img src={Post3} alt="Ashtanga course" />
            <p>{t('5 June 2023')}<br/><strong>{t('ASHTANGA COURSE FALL 2023')}</strong><br/>{t('Sign up for an Ashtanga course, Step 1, 2, or 3 this fall and receive a free 10-class pass! The pass...')}</p>
            <button className="read-more-button">{t('Read more')}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentPosts;