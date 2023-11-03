import './Carousel.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SVG1 from '../../assets/Vector.svg';
import SVG2 from '../../assets/Vector-2.svg';
import SVG3 from '../../assets/Vector-3.svg';
import SVG4 from '../../assets/Vector-4.svg';
import SVG5 from '../../assets/Vector-5.svg';
import SVG6 from '../../assets/Vector-6.svg';
import SVG7 from '../../assets/Vector-7.svg';
import { useTranslation } from 'react-i18next';
export const CarouselComponent = () => {

    const { t } = useTranslation();

    const settings = {
        centerMode: true, // This enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
        infinite: true,
        centerPadding: "0px", // You might need to adjust this padding to get the desired effect.
        slidesToShow: 1, // This would show 3 slides at a time. The one in the center will be the main focused slide.
        speed: 500,
        swipeToSlide: true,
        focusOnSelect: true 
    };

    return (
        <div className='carousel-wrapper'>
        <Slider {...settings}>
        <div className="icon-text">
                <img src={SVG1} alt={t('Carousel.quote1.alt')} />
                <p>{t('Carousel.quote1.text')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG7} alt={t('Carousel.quote2.alt')} />
                <p>{t('Carousel.quote2.text')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG2} alt={t('Carousel.quote3.alt')} />
                <p>{t('Carousel.quote3.text')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG3} alt={t('Carousel.quote4.alt')} />
                <p>{t('Carousel.quote4.text')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG6} alt={t('Carousel.quote5.alt')} />
                <p>{t('Carousel.quote5.text')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG5} alt={t('Carousel.quote6.alt')} />
                <p>{t('Carousel.quote6.text')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG4} alt={t('Carousel.quote7.alt')} />
                <p>{t('Carousel.quote7.text')}</p>
            </div>
        </Slider>
     </div>
    );
}
