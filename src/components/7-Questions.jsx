import styled from "styled-components";
import arrowBold from "/src/assets/icons/FAQ/FAQarrowBold.png";

export const QuestionsSection = () => {
  return (
    <QuestionsContainer>
      <TopSection>
        <TopTitle>Find Your Answers Here</TopTitle>
        <CategoryButtons>
          <CategoryBtn>Prices</CategoryBtn>
          <CategoryBtn>Bookings</CategoryBtn>
          <CategoryBtn>My Account</CategoryBtn>
          <CategoryBtn>Facilities</CategoryBtn>
        </CategoryButtons>
      </TopSection>
      <MiddleSection>
        <FAQTitle>FAQs</FAQTitle>
        <DiscoverBtn>Discover All Here</DiscoverBtn>
      </MiddleSection>
      <BottomSection>
        <Questions>
          <Question>
            <p>What is Spinning?</p>
            <Arrow src={arrowBold} />
          </Question>
          <Question>
            <p>What to bring to the class?</p>
            <Arrow src={arrowBold} />
          </Question>
          <Question>
            <p>How to cancel if I get sick?</p>
            <Arrow src={arrowBold} />
          </Question>
          <Question>
            <p>How am I setting up the bike?</p>
            <Arrow src={arrowBold} />
          </Question>
          <Question>
            <p>Do you have a free trial?</p>
            <Arrow src={arrowBold} />
          </Question>
          <Question>
            <p>What are the prices for a single class?</p>
            <Arrow src={arrowBold} />
          </Question>
        </Questions>
        <QuestionsDesktop>
          <QuestionDesktop>
            <p>What food do you sell?</p>
            <Arrow src={arrowBold} />
          </QuestionDesktop>
          <QuestionDesktop>
            <p>Does Urban Spin have merch?</p>
            <Arrow src={arrowBold} />
          </QuestionDesktop>
          <QuestionDesktop>
            <p>Can I choose the bike?</p>
            <Arrow src={arrowBold} />
          </QuestionDesktop>
          <QuestionDesktop>
            <p>Do I need a lock?</p>
            <Arrow src={arrowBold} />
          </QuestionDesktop>
          <QuestionDesktop>
            <p>Can I borrow cycling shoes?</p>
            <Arrow src={arrowBold} />
          </QuestionDesktop>
          <QuestionDesktop>
            <p>Are the classes held in English?</p>
            <Arrow src={arrowBold} />
          </QuestionDesktop>
        </QuestionsDesktop>
      </BottomSection>
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  margin-top: 80px;

  @media (min-width: 744px) and (max-width: 1493px) {
    grid-column: span 8;
    margin-top: 128px;
  }

  @media (min-width: 1494px) {
    grid-column: span 12;
    margin-top: 160px;
    justify-content: left;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (min-width: 744px) and (max-width: 1493px) {
    gap: 80px;
  }

  @media (min-width: 1494px) {
    gap: 120px;
  }
`;

const TopTitle = styled.h2`
  text-align: left;
`;

const CategoryButtons = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding-bottom: 24px;
  margin: 0px 45px;

  @media (min-width: 744px) and (max-width: 1493px) {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    margin: 0px 0px;
  }

  @media (min-width: 1494px) {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 98px;
    margin: 0px 0px;
  }
`;

const CategoryBtn = styled.button`
  background-color: var(--green);
  border: none;
  z-index: 3;
  font-size: 16px;
  border-radius: 30px;
  padding: 12px 0px;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--greenhover);
    cursor: pointer;
  }

  &:active {
    background-color: var(--greenclick);
  }
  @media (min-width: 744px) and (max-width: 1493px) {
    font-size: 18px;
  }

  @media (min-width: 1494px) {
    font-size: 20px;
    padding: 20px 0px;
    border-radius: 50px;
  }
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  @media (min-width: 744px) and (max-width: 1493px) {
    justify-content: left;
  }

  @media (min-width: 1494px) {
    justify-content: left;
  }
`;

const FAQTitle = styled.h3`
  text-align: center;

  @media (min-width: 744px) and (max-width: 1493px) {
    text-align: left;
  }

  @media (min-width: 1494px) {
    text-align: left;
  }
`;

const DiscoverBtn = styled.button`
  background-color: #d8d8d8;
  z-index: 3;
  font-size: 16px;
  border-radius: 20px;
  border-width: 1px;
  border-color: #b9b9b9;
  padding: 4px 10px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: white;
    cursor: pointer;
  }

  &:active {
    background-color: #949494;
  }
  @media (min-width: 744px) and (max-width: 1493px) {
    font-size: 18px;
  }

  @media (min-width: 1494px) {
    font-size: 20px;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  align-items: center;
  gap: 128px;

  @media (min-width: 744px) and (max-width: 1493px) {
    justify-content: left;
  }

  @media (min-width: 1494px) {
    flex-direction: row;
    justify-content: left;
  }
`;

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 16px;
  padding-bottom: 80px;

  @media (min-width: 744px) and (max-width: 1493px) {
    padding-bottom: 128px;
  }

  @media (min-width: 1494px) {
    padding-bottom: 160px;
  }
`;

const Arrow = styled.img`
  transform: scale(70%);
  margin-right: 5px;
`;

const Question = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 310px;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  border-style: solid;
  border-width: 0 0 1px;
  border-color: var(--black);
  padding-bottom: 8px;

  &:hover {
    cursor: pointer;
    ${Arrow} {
      transform: scale(100%);
      transition: transform ease-in-out 0.1s;
    }
  }

  &:active {
    ${Arrow} {
      transform: rotate(90deg);
      transition: transform ease-in-out 0.2s;
    }
  }

  @media (min-width: 744px) and (max-width: 1493px) {
    font-size: 18px;
    min-width: 510px;
  }

  @media (min-width: 1494px) {
    font-size: 20px;
    min-width: 560px;
  }
`;

const QuestionsDesktop = styled.div`
  display: none;

  @media (min-width: 1494px) {
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    gap: 16px;
    padding-bottom: 160px;
  }
`;

const QuestionDesktop = styled.div`
  display: none;
  
  @media (min-width: 1494px) {
  display: flex;
  min-width: 310px;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  border-style: solid;
  border-width: 0 0 1px;
  border-color: var(--black);
  padding-bottom: 8px;


  &:hover {
    cursor: pointer;
    ${Arrow} {
      transform: scale(100%);
      transition: transform ease 0.1s;
      
    }
  }

  &:active {
    ${Arrow} {
      transform: rotate(90deg);
      transition: transform ease 0.2s;
    }
  }

  @media (min-width: 744px) and (max-width: 1493px) {
    font-size: 18px;
    min-width: 510px;
  }

  @media (min-width: 1494px) {
    font-size: 20px;
    min-width: 560px;
  }
`;
