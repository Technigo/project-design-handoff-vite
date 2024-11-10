import { SectionTitle } from "../../re-components/SectionTitle";
import { KindnessSteps } from "./KindnessActSteps";
import { ReviewsSection } from "./ReviewSection"; 
import { StartTodayButton } from "../footer/SocialLinks";
import styled from "styled-components";

const DesktopSectionTitle = styled.div`


  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: flex;
    flex-direction: row; /* Row layout on large screens */
    justify-content: space-between; /* Space out items evenly */

    & > * {
      width: 50%; /* Each child takes up 50% on large screens */
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