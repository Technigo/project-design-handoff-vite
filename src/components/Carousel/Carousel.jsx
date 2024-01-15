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
import { useEffect, useState } from 'react';

export const CarouselComponent = () => {

    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 901);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 901);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 2,
        speed: 500,
        swipeToSlide: true,
        focusOnSelect: true 
    };

    const renderCarousel = () => (
        <Slider {...settings}>
            <div className="icon-text">
                <img src={SVG1} alt={t('citat1')} />
                <p>{t('citat1')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG7} alt={t('citat4')} />
                <p>{t('citat4')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG2} alt={t('citat5')} />
                <p>{t('citat5')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG3} alt={t('citat6')} />
                <p>{t('citat6')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG6} alt={t('citat4')} />
                <p>{t('citat4')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG5} alt={t('citat8')} />
                <p>{t('citat8')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG4} alt={t('citat3')} />
                <p>{t('citat3')}</p>
            </div>
        </Slider>
    );

    const renderStaticItems = () => (
        <div className="static-items-wrapper">
            <div className='icon-top-row'>
            <div className="icon-text">
                <img src={SVG7} alt={t('citat4')} />
                <p>{t('citat4')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG1} alt={t('citat1')} />
                <p>{t('citat1')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG2} alt={t('citat5')} />
                <p>{t('citat5')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG3} alt={t('citat6')} />
                <p>{t('citat6')}</p>
            </div>
            </div>
            <div className='icon-bottom-row'>
            <div className="icon-text">
                <img src={SVG4} alt={t('citat7')} />
                <p>{t('citat7')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG5} alt={t('citat8')} />
                <p>{t('citat8')}</p>
            </div>
            <div className="icon-text">
                <img src={SVG6} alt={t('citat9')} />
                <p>{t('citat9')}</p>
            </div>
            </div>
        </div>
    );

    return (
        <div className='carousel-wrapper'>
         {isMobile ? renderCarousel() : renderStaticItems()}
     </div>
    );
}