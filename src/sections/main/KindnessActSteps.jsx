import styled from "styled-components";
import kindstepsData from "../../data/steps.json";
import { StepCard } from "../../re-components/StepCard";

const KindnessStepContainer = styled.div `
  background-color: ${({ theme }) => theme.backgrounds.primary};  
  display: grid;
  padding-top: ${({ theme }) => theme.spacing.xlarge}; 
  padding-bottom: ${({ theme }) => theme.spacing.large}; 
  gap: ${({ theme }) => theme.spacing.medium}; 

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding-left: ${({ theme }) => theme.spacing.medium}; 
    padding-right: ${({ theme }) => theme.spacing.medium}; 
  }
`;

export const KindnessSteps = () => {
  return (
      <KindnessStepContainer>
      {kindstepsData.kindsteps.map((stepData) => (
      <StepCard 
      key={stepData._id}
      icon={stepData.icon}
      step={stepData.step}
      doodle={stepData.doodle}
      />
      ))}
    </KindnessStepContainer>
  );
};