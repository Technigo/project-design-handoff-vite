import styled from "styled-components";
import { useState, useEffect } from "react";
import { Buttons } from "./Buttons";

// Styled component for the card content
const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 48px;
  padding: 16px 32px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  width: 572px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  font-family: "AvenirMedium", sans-serif;

  // Responsive styles for tablets and smartphones

  //For smartphones
  @media (min-width: 320px) and (max-width: 744px) {
    width: 92.5%;
    height: 216px;
    flex-shrink: 0;
    align-items: center;
    gap: 40px;
    padding: 16px 24px;
  }

  //For tablets
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 91%;
    height: 232px;
    padding: 16px 24px;
    gap: 24px;
  }
`;

// Styled component for the class image
const StyledClassImage = styled.img`
  width: 206px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  opacity: 0.96;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 228px;
    height: 200px;
    flex-shrink: 0;
  }

  @media (min-width: 448px) and (max-width: 744px) {
    width: 35%;
    height: 200px;
  }
  @media (min-width: 320px) and (max-width: 448px) {
    width: 128px;
    height: 200px;
  }
`;

// Styled container for text and button
const StyledTextButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 248px;
  font-family: "AvenirMedium", sans-serif;
  gap: 16px;
  font-size: 17px;

  @media (min-width: 320px) and (max-width: 744px) {
    font-size: 13px;
    width: 55%;
    gap: 8px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
    padding-left: 40px;
    padding-top: 16px;
  }
`;

// Styled component for the class description
const StyledClassDescription = styled.div`
  color: #000;
  font-weight: 500;
  margin: 0;
  line-height: 30px;

  @media (min-width: 320px) and (max-width: 744px) {
    font-size: 14px;
    line-height: 15px;
  }
  @media (min-width: 744px) and (max-width: 1024px) {
    line-height: 35px;
    font-size: 16px;
  }
`;

// Styled component for the button, centered
const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledClassName = styled.p`
  color: #000;
  margin: 0;

  .class-keyword {
    color: #000;
    font-family: "AvenirBlack", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: 19px;
  }

  @media (min-width: 375px) and (max-width: 744px) {
    font-size: 14px;

    .class-keyword {
      font-size: 14px;
    }
  }

  @media (min-width: 744px) and (max-width: 1024px) {
    font-size: 16px;
    .class-keyword {
      font-size: 16px;
    }
  }
`;

//Hard code the class card
export const ClassCard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {/* First Card */}
      <StyledCard>
        <StyledClassImage src="/class01.png" alt="The Reformer" />
        <StyledTextButton>
          <StyledClassName>
            <span className="class-keyword">The Reformer</span> - challenges
            core strength, stability, and balance.
          </StyledClassName>
          <StyledClassDescription>
            <p>
              We also offer 1-1 classes. <br />
              Suitable for all levels of fitness.
            </p>
          </StyledClassDescription>
          <StyledButtonWrapper>
            <Buttons
              buttonText="Book Now"
              fontSize={15}
              paddinglr={
                windowWidth >= 1024 ? 48 : windowWidth >= 420 ? 56 : 40
              }
              width={windowWidth >= 744 ? 70 : windowWidth >= 448 ? 100 : 90}
              className="class-button"
            />
          </StyledButtonWrapper>
        </StyledTextButton>
      </StyledCard>

      {/* Second Card */}
      <StyledCard>
        <StyledClassImage src="/class02.png" alt="Get on the Mat" />
        <StyledTextButton>
          <StyledClassName>
            <span className="class-keyword">Get on the Mat</span> - Learn the
            fundamentals at your own pace.
          </StyledClassName>
          <StyledClassDescription>
            A great place to start your pilates journey.
          </StyledClassDescription>
          <StyledButtonWrapper>
            <Buttons
              buttonText="Book Now"
              fontSize={15}
              paddinglr={windowWidth >= 1024 ? 32 : 16}
              width={windowWidth >= 744 ? 70 : windowWidth >= 448 ? 100 : 90}
              className="class-button"
            />
          </StyledButtonWrapper>
        </StyledTextButton>
      </StyledCard>

      {/* Third Card */}
      <StyledCard>
        <StyledClassImage src="/class03.png" alt="Pre and Postnatal" />
        <StyledTextButton>
          <StyledClassName>
            <span className="class-keyword">Pre and Postnatal</span>
          </StyledClassName>
          <StyledClassDescription>
            Gentle exercises to maintain strength, flexibility, and promote
            relaxation.
          </StyledClassDescription>
          <StyledButtonWrapper>
            <Buttons
              buttonText="Book Now"
              fontSize={15}
              paddinglr={windowWidth >= 1024 ? 48 : 16}
              width={windowWidth >= 744 ? 70 : windowWidth >= 448 ? 100 : 90}
              className="class-button"
            />
          </StyledButtonWrapper>
        </StyledTextButton>
      </StyledCard>

      {/* Fourth Card */}
      <StyledCard>
        <StyledClassImage src="/class04.png" alt="On Demand" />
        <StyledTextButton>
          <StyledClassName>
            <span className="class-keyword">On Demand</span> - workout wherever,
            whenever, you decide.
          </StyledClassName>
          <StyledClassDescription>
            Live classes online and over 100 pre-recorded sessions.
          </StyledClassDescription>
          <StyledButtonWrapper>
            <Buttons
              buttonText="Book Now"
              fontSize={15}
              paddinglr={windowWidth >= 1024 ? 48 : 16}
              width={windowWidth >= 744 ? 70 : windowWidth >= 448 ? 100 : 90}
              className="class-button"
            />
          </StyledButtonWrapper>
        </StyledTextButton>
      </StyledCard>
    </>
  );
};
