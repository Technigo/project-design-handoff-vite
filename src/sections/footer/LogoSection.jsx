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
`;

export const LogoSection = () => {
  return (
    <LogoSectionContainer>
      <LogoAnimation/>
    </LogoSectionContainer>
  );
};