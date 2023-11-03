import styled from "styled-components"; 

import { VisionCommunityCard } from "../VisionCommunityCard";

const StyledSection = styled.section`

  @media (min-width: 667px) and (max-width: 1024px) {
      margin: 10% 22% 30% 22%; 
    }

    @media (min-width: 1025px) {
      margin: 10% 22% 25% 22%; 
    }
`


export const VisionCommunity = () => {
  return (
  <StyledSection>
   
    <VisionCommunityCard/>
 
  </StyledSection>
  )
}
