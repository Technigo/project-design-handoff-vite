import { useTranslation } from 'react-i18next'; 
import { CC } from '../Carousel/Carousel';
import './WhyPlayParkour.css';

export const WhyPlayParkour = () => {

  const { t } = useTranslation(); 

  return (
    <div className="whyplay-wrapper">
      <h1>{t('head3')}</h1> 
      <div className="icons-wrapper">
        <CC />
      </div>
    </div>
  );
};
