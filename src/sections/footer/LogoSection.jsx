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
 padding: 0;
  } 
`;

export const LogoSection = () => {
  return (
    <LogoSectionContainer>
      <LogoAnimation/>
    </LogoSectionContainer>
  );
};