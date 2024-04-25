import styled, { css } from "styled-components";
import arrow from "/src/assets/icons/FAQ/FAQarrow.png";
import arrowBold from "/src/assets/icons/FAQ/FAQarrowBold.png";
import arrowDown from "/src/assets/icons/FAQ/FAQarrowDown.png";

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
  justify-content: left;
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

const Question = styled.p`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: minmax(300px, 358px);
  text-align: left;
  align-items: center;
  border-style: solid;
  border-width: 0 0 1px;
  border-color: var(--black);
  padding-bottom: 8px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: 98% 6px;
    
    &:hover {
    background-image: url(${arrowBold});
    background-position: 97% 3px;
    }

    &:active {
    background-image: url(${arrowDown});
    background-position: 98% 11px;
    }

  @media (min-width: 744px) and (max-width: 1493px) {
    grid-template-columns: 509px;
    font-size: 18px;
  }

  @media (min-width: 1494px) {
    grid-template-columns: 564px;
    font-size: 20px;
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
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: 358px;
  text-align: left;
  align-items: left;
  justify-content: left;
  border-style: solid;
  border-width: 0 0 1px;
  border-color: var(--black);
  padding-bottom: 8px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: 97% 6px;
    
    &:hover {
    background-image: url(${arrowBold});
    background-position: 97% 3px;
    }

    &:active {
    background-image: url(${arrowDown});
    background-position: 98% 11px;
    }

  @media (min-width: 744px) and (max-width: 1493px) {
    grid-template-columns: 509px;
    font-size: 18px;
  }

  @media (min-width: 1494px) {
    grid-template-columns: 564px;
    font-size: 20px;
  }
`;

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
          </Question>
          <Question>
            <p>What to bring to the class?</p>
          </Question>
          <Question>
            <p>How to cancel if I get sick?</p>
          </Question>
          <Question>
            <p>How am I setting up the bike?</p>
          </Question>
          <Question>
            <p>Do you have a free trial?</p>
          </Question>
          <Question>
            <p>What are the prices for a single class?</p>
          </Question>
        </Questions>
        <QuestionsDesktop>
          <QuestionDesktop>
            <p>What food do you sell?</p>
          </QuestionDesktop>
          <QuestionDesktop>
            <p>Does Urban Spin have merch?</p>
          </QuestionDesktop>
          <QuestionDesktop>
            <p>Can I choose the bike?</p>
          </QuestionDesktop>
          <QuestionDesktop>
            <p>Do I need a lock?</p>
          </QuestionDesktop>
          <QuestionDesktop>
            <p>Can I borrow cycling shoes?</p>
          </QuestionDesktop>
          <QuestionDesktop>
            <p>Are the classes held in English?</p>
          </QuestionDesktop>
        </QuestionsDesktop>
      </BottomSection>
    </QuestionsContainer>
  );
};
