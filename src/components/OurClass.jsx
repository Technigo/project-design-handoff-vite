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
`;

export const OurClass = () => {
  return (
    <StyledOurClass className="class-section">
      <h3 className="sub-title">our class</h3>
      <StyledClassesContainer>
        <ClassCard />
      </StyledClassesContainer>
    </StyledOurClass>
  );
};
