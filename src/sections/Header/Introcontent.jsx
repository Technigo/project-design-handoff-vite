import styled from "styled-components";
import {H1, SubH1 } from "../../re-components/Typography.jsx"

const IntroContainer = styled.div`
  background-color: ${({ theme }) => theme.backgrounds.secondary};  
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-end;
`;

export const Introcontent = () => {
    return (
      <IntroContainer>
      <H1>START SPREADING SMILES</H1>
      <SubH1>WITH SMALL, SIMPLE ACTS </SubH1>
      <p>Natural Magic*</p>
      </IntroContainer>
      
    )
}