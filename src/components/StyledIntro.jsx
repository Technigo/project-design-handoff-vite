import styled, { keyframes } from "styled-components";
import HeartIcon from "../assets/HeartIcon.svg";
import mobileLogo from "../assets/LogoMobile.svg";
import tabletLogo from "../assets/LogoTablet.svg";
import desktopLogo from "../assets/LogoDesktop.svg";

// Styled components for each logo
const MobileLogo = styled(mobileLogo)`
  display: none;
  @media (min-width: 350px) and (max-width: 650px) {
    display: block;
  }
`;

const TabletLogo = styled(tabletLogo)`
  display: none;
  @media (min-width: 651px) and (max-width: 1024px) {
    display: block;
  }
`;

const DesktopLogo = styled(desktopLogo)`
  display: none;
  @media (min-width: 1025px) {
    display: block;
  }
`;

export const LogoContainer = () => {
  return (
    <div>
      <MobileLogo />
      <TabletLogo />
      <DesktopLogo />
    </div>
  );
};
const pulse = keyframes`
  0% {
    transform: scaleX(1) scaleY(1);
  }

  50% {
    transform: scaleX(1.04) scaleY(1.3);
  }

  100% {
    transform: scaleX(1) scaleY(1);
  }
`;

export const StyledIntro = styled(HeartIcon)`
  animation: ${pulse} 2s infinite;
`;

/*export const StyledIntro = styled.heartIcon`

`;*/
