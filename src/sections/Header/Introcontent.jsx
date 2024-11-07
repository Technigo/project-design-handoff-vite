import styled from "styled-components";
import {H1, SubH1, FinePrint } from "../../re-components/Typography.jsx"

const IntroContainer = styled.div`
  background-color: ${({ theme }) => theme.backgrounds.secondary};  
  padding-top: ${({ theme }) => theme.spacing.xxlarge};
  padding-left: ${({ theme }) => theme.spacing.xsmall}; 
  padding-right: ${({ theme }) => theme.spacing.xsmall}; 
  padding-bottom: ${({ theme }) => theme.spacing.small};
  gap: ${({ theme }) => theme.spacing.xxsmall};
  display: flex;
  flex-direction: column;
`;

export const Introcontent = () => {
    return (
      <IntroContainer>
      <H1>START SPREADING SMILES</H1>
      <SubH1>WITH SMALL, SIMPLE ACTS </SubH1>
      <FinePrint>Natural Magic*</FinePrint>
      </IntroContainer>
      
    )
}