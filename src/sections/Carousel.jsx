import { useSwipeable } from 'react-swipeable';
import { useState } from 'react';
import { CarouselCard } from '../components/CarouselCard';
import { CarouselAuthor, CarouselHeader, CarouselText } from '../ui/Typography';
import carouselData from '../carousel.json';
import { CarouselContainer } from '../ui/CarouselContainer';
import { Wrapper } from '../ui/Wrapper';
import { SwipeStatus } from '../ui/SwipeStatus';

export const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length)
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length)
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <Wrapper {...handlers}>
      <CarouselContainer style={{ transform: `translateX(-${currentIndex * 15.25}rem)` }}>
        {carouselData.map((card, index) => (
          <CarouselCard key={index}>
            <CarouselHeader>“</CarouselHeader>
            <CarouselText>{card.text}</CarouselText>
            <CarouselAuthor>{card.author}</CarouselAuthor>
          </CarouselCard>
        ))}
      </CarouselContainer>
      <SwipeStatus currentIndex={currentIndex} />
    </Wrapper>
  )
};