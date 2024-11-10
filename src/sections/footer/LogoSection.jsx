import { LogoAnimation } from "../../re-components/LogoAnimation";
import styled from "styled-components";

const LogoSectionContainer = styled.div`
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.backgrounds.highlight};
padding-top:  ${({ theme }) => theme.spacing.xxxlarge};
padding-bottom: ${({ theme }) => theme.spacing.xlarge};

@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
display: flex;
/* padding: var(--T-Margin, 1.5rem) 2.625rem var(--B-Margin, 0.5rem) var(--lr-margin, 2.625rem); */
justify-content: space-between;
align-items: flex-start;
align-content: flex-start;
row-gap: 12.5rem;
align-self: stretch;
flex-wrap: wrap;
  }
`;

export const LogoSection = () => {
  return (
    <LogoSectionContainer>
      <LogoAnimation/>
    </LogoSectionContainer>
  );
};