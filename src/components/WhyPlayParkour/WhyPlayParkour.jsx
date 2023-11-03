import './WhyPlayParkour.css';
import { useTranslation } from 'react-i18next'; 
import { CarouselComponent } from '../Carousel/Carousel';

export const WhyPlayParkour = () => {

  const { t } = useTranslation(); 

  return (
    <div className="whyplay-wrapper">
      <h1>{t('WhyPlay.heading')}</h1> 
      <div className="icons-wrapper">
        <CarouselComponent />
      </div>
    </div>
  );
};

