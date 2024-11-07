/* eslint-disable react/prop-types */
import styled from "styled-components";
import { BodyTextLarge } from "./Typography";

const StepContainer = styled.div`
  background-color: ${({ theme }) => theme.backgrounds.primary};  
  padding-left: ${({ theme }) => theme.spacing.xsmall}; 
  padding-right: ${({ theme }) => theme.spacing.xsmall}; 
`;
const Instructions = styled.div `
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xsmall};
`;
const StepImg = styled.div `
  display: flex;
  justify-content: center;
`;

export const StepCard = ({icon, step, doodle}) => {
 return (
    <StepContainer>
      <Instructions> 
      <img src={icon} alt="icon" />
      <BodyTextLarge>{step}</BodyTextLarge>
      </Instructions>
      <StepImg> 
      <img src={doodle} alt="doodle" />
      </StepImg>
    </StepContainer>
  );
};  
