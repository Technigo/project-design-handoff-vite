import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import {
  BenefitsCarouselCardContainer,
  BenefitsCarouselCard,
  BenefitsCarouselCardImage,
  BenefitsCarouselCardTitle,
  BenefitsCarouselCardContent,
  BenefitsCarouselWrapper,
  BenefitsCardsWrapper,
  PrevArrow,
  NextArrow,
} from './StyledComponents';
import wellBeingImg from '../images/well-being.png';
import balanceImg from '../images/balance.png';
import healthImg from '../images/health.png';

const BenefitsCarousel = () => {
  const { t } = useTranslation();
  
  const data = [
    { id: 1, title: t('benefits.cards.0.title'), content: t('benefits.cards.0.content'), image: wellBeingImg },
    { id: 2, title: t('benefits.cards.1.title'), content: t('benefits.cards.1.content'), image: balanceImg },
    { id: 3, title: t('benefits.cards.2.title'), content: t('benefits.cards.2.content'), image: healthImg },
  ];

  const PrevArrowWrapper = (props) => {
    const { className, style, onClick } = props;
    return <PrevArrow className={className} style={style} onClick={onClick} />;
  };

  const NextArrowWrapper = (props) => {
    const { className, style, onClick } = props;
    return <NextArrow className={className} style={style} onClick={onClick} />;
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrowWrapper />,
    nextArrow: <NextArrowWrapper />,
  };

  return (
    <div>
      <BenefitsCarouselWrapper>
        <Slider {...settings}>
          {data.map((card) => (
            <BenefitsCarouselCardContainer key={card.id}>
              <BenefitsCarouselCard>
                <BenefitsCarouselCardImage src={card.image} alt={card.title} />
                <BenefitsCarouselCardTitle>{card.title}</BenefitsCarouselCardTitle>
                <BenefitsCarouselCardContent>{card.content}</BenefitsCarouselCardContent>
              </BenefitsCarouselCard>
            </BenefitsCarouselCardContainer>
          ))}
        </Slider>
      </BenefitsCarouselWrapper>
      <BenefitsCardsWrapper>
        {data.map((card) => (
          <BenefitsCarouselCardContainer key={card.id}>
            <BenefitsCarouselCard>
              <BenefitsCarouselCardImage src={card.image} alt={card.title} />
              <BenefitsCarouselCardTitle>{card.title}</BenefitsCarouselCardTitle>
              <BenefitsCarouselCardContent>{card.content}</BenefitsCarouselCardContent>
            </BenefitsCarouselCard>
          </BenefitsCarouselCardContainer>
        ))}
      </BenefitsCardsWrapper>
    </div>
  );
};

export default BenefitsCarousel;
