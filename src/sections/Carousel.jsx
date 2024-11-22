import { useSwipeable } from 'react-swipeable';
import { useState, useEffect, useRef } from 'react';
import { CarouselCard } from '../components/CarouselCard';
import { CarouselAuthor, CarouselHeader, CarouselText } from '../ui/Typography';
import carouselData from '../carousel.json';
import { CarouselContainer } from '../ui/CarouselContainer';
import { Wrapper } from '../ui/Wrapper';
import { SwipeStatus } from '../ui/SwipeStatus';

export const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [showSwipeStatus, setShowSwipeStatus] = useState(true);
  const carouselRef = useRef(null);

  const updateCardWidth = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const calculatedWidth = containerWidth * (2 / 3);
      setCardWidth(calculatedWidth);
    }
  };

  const updateScreenWidth = () => {
    if (window.innerWidth >= 800) {
      setShowSwipeStatus(false);
    } else {
      setShowSwipeStatus(true);
    }
  };

  useEffect(() => {
    updateCardWidth();
    updateScreenWidth();

    window.addEventListener('resize', () => {
      updateCardWidth();
      updateScreenWidth();
    });

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <Wrapper {...handlers}>
      <CarouselContainer
        ref={carouselRef}
        style={{
          transform: `translateX(-${currentIndex * cardWidth}px)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {carouselData.map((card, index) => (
          <CarouselCard key={index} style={{ width: `${cardWidth}px` }}>
            <CarouselHeader>“</CarouselHeader>
            <CarouselText>{card.text}</CarouselText>
            <CarouselAuthor>{card.author}</CarouselAuthor>
          </CarouselCard>
        ))}
      </CarouselContainer>
      {showSwipeStatus && <SwipeStatus currentIndex={currentIndex} />}
    </Wrapper>
  );
};