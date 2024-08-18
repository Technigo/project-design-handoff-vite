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

  @media (max-width: 745px) {
    padding: 30px 10px;
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

  @media (max-width: 745px) {
    font-size: 32px;
    line-height: 42.78px;
  }

  @media (max-width: 640px) {
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
  line-height: 27px;
  text-align: center;
  color: #111111;

  @media (max-width: 745px) {
    font-size: 16px;
    line-height: 24px;
    padding: 0 10px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 21px;
    padding: 0 10px;
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

  @media (max-width: 745px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

const Card = styled.div`
  position: relative;
  flex: 1;
  max-width: 384px;
  text-align: left;

  @media (max-width: 745px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 63%;
  margin-bottom: 15px;
  overflow: visible;

  background: url("/elements/halfmoon.svg") no-repeat center bottom;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;

  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    object-fit: contain;
    width: 240px; /* 296px on template */
    height: 225px; /* 281px on template */
  }
`;

const CardHeading = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #111111;
  margin-bottom: -20px;
`;

const CardHeadingSmall = styled.h4`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #505050;
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
`;

const Arrow = styled.div`
  position: absolute;
  top: 18%;
  width: 57px;
  height: 22px;
  background: url("/icons/arrow.svg") no-repeat center center;
  background-size: contain;
  transform-origin: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  &.left {
    left: 0;
    transform: translateY(-50%) rotate(180deg);
  }

  &.right {
    right: 0;
    transform: translateY(-50%);
  }

  &:hover {
    transform: scale(1.1) translateY(-50%);
  }

  &.left:hover {
    transform: scale(1.2) translateY(-50%) rotate(180deg);
  }

  @media (max-width: 745px) {
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

  &:hover {
    background-color: #430159;
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
`;

export const Yogis = () => {
  return (
    <YogisContainer>
      <Heading>Meet our yogis</Heading>
      <Text>
        At Shanti Studio, our instructors bring years of experience and humble
        wisdom to their teachings, welcoming all with open hearts. Our dedicated
        teachers guide aspiring yoga classes, while offering warm support and
        gentle encouragement along the way.
      </Text>

      <CardsContainer>
        <Arrow className="left" />
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
        <Arrow className="right" />
      </CardsContainer>
      <Button>
        <ButtonText>Check schedule</ButtonText>
      </Button>
    </YogisContainer>
  );
};
