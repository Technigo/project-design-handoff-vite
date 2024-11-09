import styled from "styled-components";
import { SectionTitle } from "../../re-components/SectionTitle";
import { SocialProof } from "./Socialproof";

const SectionContainer = styled.div `
display: flex;
flex-direction: column;
gap: 2.5rem; //Combined the spacing for xsmall and fine-print = 2.5rem
margin-bottom: ${({ theme }) => theme.spacing.medium}; 
`;

export const ReviewsSection = () => {
  return (
    <>
      <SectionContainer> 
      <SectionTitle title="kind words"/>
      <SocialProof/>
      </SectionContainer>
    </>
        
  )
}