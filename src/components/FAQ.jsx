import styled from "styled-components";
import stonesImage from "../../public/images/stones.png";
import arrowIcon from "../../public/icons/arrow.svg";

const FAQContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 380px;
  margin-right: 60px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 725px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  flex: 2;
  max-width: 90%;
  margin: 0 auto;
  padding: 0 20px;
`;

const FAQHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Heading = styled.h1`
  font-family: "Gerbera", sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 100px;
  color: #111111;

  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 42.78px;
  }

  @media (max-width: 725px) {
    font-size: 30px;
    line-height: 40.11px;
  }
`;

const SeeMoreContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    span {
      color: #620981;
      font-weight: 500;
    }

    img {
      filter: brightness(0) saturate(100%) invert(14%) sepia(83%)
        saturate(4699%) hue-rotate(279deg) brightness(91%) contrast(117%);
    }
  }
`;

const SeeMoreText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;
  color: #111111;
  margin-right: 10px;

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    margin-right: 30px;
  }

  @media (max-width: 725px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const ArrowIcon = styled.img`
  width: 49px;
  height: 15px;
  transition: filter 0.3s;

  @media (max-width: 1200px) {
    width: 43px;
    height: 16px;
  }

  @media (max-width: 725px) {
    width: 57px;
    height: 22px;
  }
`;

const FAQItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FAQItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #111111;

  &:first-child {
    border-top: 1px solid #111111;
    padding-top: 20px;
  }

  @media (max-width: 1200px) {
    padding-bottom: 10px;

    &:first-child {
      padding-top: 10px;
    }
  }
`;

const Question = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;
  color: #111111;
  cursor: pointer;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 21px;
  }

  
  @media (max-width: 725px) {
    font-size: 20px;
    line-height: 30px;
  }

  &:hover {
  font-weight: 500;
  color: #620981;
`;

const Arrow = styled.span`
  width: 18px;
  height: 18px;
  display: inline-block;
  border: solid #111111;
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
  margin-right: 15px;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: #620981;
    border-width: 0 2px 2px 0;
  }

  @media (max-width: 1200px) {
    width: 10px;
    height: 10px;
  }

  @media (max-width: 725px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 430px) {
    display: none;
  }
`;

export const FAQ = () => {
  const questions = [
    "What type of yoga classes do you offer?",
    "How do I know which class is right for me?",
    "What should I wear/bring to a yoga class?",
    "Do I need to bring my own yoga mat?",
    "Are there options for private yoga sessions?",
    "Is drop-in available or do I need a membership?",
    "What is your cancellation policy for classes?",
  ];

  return (
    <FAQContainer>
      <ImageContainer>
        <img src={stonesImage} alt="Stones" />
      </ImageContainer>
      <ContentContainer>
        <FAQHeader>
          <Heading>FAQ</Heading>
          <SeeMoreContainer>
            <SeeMoreText>See more</SeeMoreText>
            <ArrowIcon src={arrowIcon} alt="Arrow" />
          </SeeMoreContainer>
        </FAQHeader>
        <FAQItems>
          {questions.map((question, index) => (
            <FAQItem key={index}>
              <Question>{question}</Question>
              <Arrow />
            </FAQItem>
          ))}
        </FAQItems>
      </ContentContainer>
    </FAQContainer>
  );
};
