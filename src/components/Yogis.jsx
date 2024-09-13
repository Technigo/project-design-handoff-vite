import { useRef } from "react";
import styled from "styled-components";

const YogisContainer = styled.div`
  background-color: #dbe3fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 800px) {
    padding: 20px 20px 10px 20px;
  }
`;

const Heading = styled.h1`
  width: 100%;
  max-width: 990px;
  font-family: "Gerbera", sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 85.57px;
  text-align: center;
  color: #620981;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 42.78px;
    margin-bottom: 0px;
  }

  @media (max-width: 450px) {
    font-size: 30px;
    line-height: 40.11px;
    padding: 0 10px;
  }
`;

const Text = styled.p`
  width: 100%;
  max-width: 828px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 60px;
  line-height: 27px;
  text-align: center;
  color: #111111;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 700px) {
    margin-bottom: -60px;
  }

  @media (max-width: 450px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 80px;
  width: 100%;
  max-width: 990px;
  position: relative;
  padding: 0 60px;
  box-sizing: border-box;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 0 10px;
    width: 80%;
  }
`;

const Card = styled.div`
  position: relative;
  flex: 1;
  max-width: 384px;
  text-align: left;
  scroll-snap-align: center;

  @media (max-width: 700px) {
    min-width: 100%;
    margin-bottom: 20px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 990px;
  padding-bottom: 63%;
  margin-bottom: 15px;
  background: url("/elements/halfmoon.svg") no-repeat center bottom;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;

  @media (max-width: 700px) {
    width: 70%;
    margin: 0 auto;
    padding-bottom: 70%;
  }

  @media (max-width: 500px) {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 80%;
  }

  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    object-fit: contain;
    width: 100%;
    height: auto;

    @media (max-width: 800px) {
      max-width: 180px;
      max-height: 170px;
    }

    @media (max-width: 700px) {
      max-width: 370px;
      max-height: 330px;
    }

    @media (max-width: 500px) {
      max-width: 300px;
      max-height: 240px;
    }
  }
`;

const CardHeading = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #111111;
  margin-bottom: -20px;

  @media (max-width: 800px) {
    font-size: 14px;
    line-height: 21px;
  }

  @media (max-width: 450px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

const CardHeadingSmall = styled.h4`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    font-size: 14px;
    line-height: 21px;
  }

  @media (max-width: 450px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

const CardText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #505050;

  @media (max-width: 800px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const ReadMoreButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #505050;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;

  &:hover {
    font-weight: 500;
    color: #620981;
  }

  @media (max-width: 800px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  width: 57px;
  height: 22px;
  background: url("/icons/arrow.svg") no-repeat center center;
  background-size: contain;
  transform-origin: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  z-index: 20;

  &.left {
    left: 10px;
    transform: translateY(-50%) rotate(180deg);
  }

  &.right {
    right: 10px;
    transform: translateY(-50%);
  }

  &:hover {
    transform: scale(1.1) translateY(-50%);
  }

  &.left:hover {
    transform: scale(1.2) translateY(-50%) rotate(180deg);
  }

  @media (max-width: 800px) {
    width: 45px;
    height: 18px;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 64px;
  background-color: #620981;
  border: none;
  border-radius: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 60px;
  margin-bottom: 60px;

  &:hover {
    background-color: #430159;
  }

  @media (max-width: 800px) {
    margin-top: 20px;
  }

  @media (max-width: 450px) {
    width: 226px;
    height: 55px;
    padding: 10px 30px;
  }
`;

const ButtonText = styled.span`
  width: 192px;
  height: 36px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 20px;
    line-height: 35px;
  }
`;

export const Yogis = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = container.clientWidth;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <YogisContainer>
      <Heading>Meet our yogis</Heading>
      <Text>
        At Shanti Studio, our instructors bring years of experience and humble
        wisdom to their teachings, welcoming all with open hearts. Our dedicated
        teachers guide aspiring yoga classes, while offering warm support and
        gentle encouragement along the way.
      </Text>

      <Arrow className="left" onClick={() => handleScroll("left")} />
      <CardsContainer ref={sliderRef}>
        <Card>
          <ImageWrapper>
            <img src="/images/teacher1.png" alt="Teacher 1" />
          </ImageWrapper>
          <CardHeading>Nicole Berger</CardHeading>
          <CardHeadingSmall>Pranayama | Yin Yoga</CardHeadingSmall>
          <CardText>
            I&apos;ve been doing yoga since childhood, but I didn&apos;t call it
            that. As an adult, when I encountered yoga more formally, everything
            clicked into place. Yoga provided the structure I had long sought...
          </CardText>
          <ReadMoreButton>Read More</ReadMoreButton>
        </Card>

        <Card>
          <ImageWrapper>
            <img src="/images/teacher2.png" alt="Teacher 2" />
          </ImageWrapper>
          <CardHeading>Kim Park</CardHeading>
          <CardHeadingSmall>Hatha Yoga | Restorative</CardHeadingSmall>
          <CardText>
            A few years ago, I discovered yoga, and it quickly became crucial to
            me. Using yoga, I can calm my mind, be honest with myself, and see
            things clearly without pretend. I can slow down my thoughts, be
            honest...
          </CardText>
          <ReadMoreButton>Read More</ReadMoreButton>
        </Card>

        <Card>
          <ImageWrapper>
            <img src="/images/teacher3.png" alt="Teacher 3" />
          </ImageWrapper>
          <CardHeading>Lisa Debaum</CardHeading>
          <CardHeadingSmall>Vinyasa Yoga | Pranayama</CardHeadingSmall>
          <CardText>
            My yoga journey started as a quest for inner peace and
            self-discovery. Over time, it has profoundly transformed my life,
            nurturing body, mind, and spirit. I aim to help you connect more
            deeply with yourself...
          </CardText>
          <ReadMoreButton>Read More</ReadMoreButton>
        </Card>
      </CardsContainer>
      <Arrow className="right" onClick={() => handleScroll("right")} />
      <Button>
        <ButtonText>Check schedule</ButtonText>
      </Button>
    </YogisContainer>
  );
};
