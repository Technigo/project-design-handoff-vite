import styled from "styled-components";

import { ClassCard } from "./ClassCard";

const StyledOurClass = styled.section`
  color: #000;
  font-family: "AvenirMedium", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;

  .sub-title {
    height: 5.5rem;
    width: 100%;
    background-color: #e4dbd2;
    padding: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 744px) {
    .sub-title {
      font-size: 16px;
    }
  }

  @media (max-width: 428px) {
    .sub-title {
      font-size: 14px;
    }
  }
`;

// Parent container for the "Our Classes" section
const StyledClassesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 56px 40px;
  padding: 20px;
  width: 100%;
  margin: 80px auto;

  @media (min-width: 320px) and (max-width: 744px) {
    margin: 48px auto;
    padding: 0 32px;
    gap: 48px;
  }

  @media (min-width: 744px) and (max-width: 1024px) {
    margin: 48px auto;
    padding: 0;
    gap: 48px;
  }
`;

export const OurClass = () => {
  return (
    <StyledOurClass className="class-section">
      <h3 className="sub-title" id="sub-title">
        our class
      </h3>
      <StyledClassesContainer>
        <ClassCard />
      </StyledClassesContainer>
    </StyledOurClass>
  );
};
