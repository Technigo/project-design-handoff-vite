import React from 'react';
import Slider from 'react-slick';
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

  const data = [
    { id: 1, title: "Well-being", content: "Yoga can help improve mood, reduce symptoms of depression, and increase feelings of well-being.", image: wellBeingImg },
    { id: 2, title: "Balance", content: "Yoga is known for its ability to soothe tension and anxiety in the mind and body.", image: balanceImg },
    { id: 3, title: "Health", content: "Yoga can help improve flexibility, strength, and cardiovascular fitness.", image: healthImg },
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
    dots: false,
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
