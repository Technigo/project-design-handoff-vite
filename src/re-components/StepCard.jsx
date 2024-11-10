/* eslint-disable react/prop-types */
import styled from "styled-components";
import { BodyTextLarge } from "./Typography";

const StepContainer = styled.div`
  background-color: ${({ theme }) => theme.backgrounds.primary};  
  padding-left: ${({ theme }) => theme.spacing.xsmall}; 
  padding-right: ${({ theme }) => theme.spacing.xsmall}; 

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${({ theme }) => theme.spacing.xlarge}; 
    padding-right: ${({ theme }) => theme.spacing.xlarge}; 
  }
`;

const Instructions = styled.div `
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xsmall};
`;

const StepIcon = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  flex-shrink: 0;
`;

const StepImg = styled.div `
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 18.75rem;
  }
`;

export const StepCard = ({icon, step, doodle}) => {
 return (
    <StepContainer>
      <Instructions> 
        <StepIcon>
          <img src={icon} alt="icon" />
        </StepIcon>
      <BodyTextLarge>{step}</BodyTextLarge>
      </Instructions>
      <StepImg> 
      <img src={doodle} alt="doodle" />
      </StepImg>
    </StepContainer>
  );
};  
