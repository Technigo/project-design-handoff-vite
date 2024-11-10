import { SectionTitle } from "../../re-components/SectionTitle";
import { KindnessSteps } from "./KindnessActSteps";
import { ReviewsSection } from "./ReviewSection"; 
import { StartTodayButton } from "../footer/SocialLinks";
import styled from "styled-components";

const DesktopSectionTitle = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: grid;
    grid-template-columns: repeat(8, 1fr); /* 8 equal columns */

    & > * {
    grid-column: span 4;
  }
}
`;

export const Instructions = () => {
    return (
      <>
      <DesktopSectionTitle>
        <StartTodayButton showFinePrint = {false} applyPadding={true} />
        <SectionTitle title="IT’s easy, peasy"/>
      </DesktopSectionTitle>  
        <KindnessSteps/>
        <ReviewsSection/>
      </>
        
    )
}