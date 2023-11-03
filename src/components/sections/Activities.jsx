import styled from "styled-components";
import { ActivityCard } from "../ActivityCard";

const StyledSection = styled.section`
  display: flex; 
  flex-direction: column; 
  padding-left: 24px; 
  margin-top: 100px; 
  margin-bottom: 200px; 
  `

const StyledDiv = styled.div`
  max-width: 100%; 
  display: flex;
  overflow: auto;  
  white-space: nowrap;
  gap: 19px; 
`;

export const Activities = () => {
  return (
    <>
     <StyledSection>
        <h2>Upcoming events</h2>
        <StyledDiv>
          <ActivityCard />
        </StyledDiv>
        </StyledSection>
    </>
  );
};
