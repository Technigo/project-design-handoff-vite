import styled, { keyframes } from "styled-components";
import HeartIcon from "../assets/HeartIcon.svg";
import mobileLogo from "../assets/LogoMobile.svg";
import tabletLogo from "../assets/LogoTablet.svg";
import desktopLogo from "../assets/LogoDesktop.svg";

import "../index.css";

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

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoContainer = () => {
  return (
    <LogoBox>
      <MobileLogo />
      <TabletLogo />
      <DesktopLogo />
    </LogoBox>
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

export const IconHeart = styled(HeartIcon)`
  animation: ${pulse} 2s infinite;
  width: 20px;
  height: 18.35px;
  margin-left: 13px;
`;

export const IntroContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: var(--gap-default);
  background-color: var(--pink);
  gap: var(--gap-compact);
`;

export const IntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--gap-default) var(--gap-compact);
  gap: var(--gap-compact);
`;

export const StyledIntroImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 15;
  object-fit: cover;
  overflow: hidden;

  @media (max-width: 349px) {
    display: none;
  }

  @media (min-width: 651px) and (max-width: 1024px) {
    width: 385px;
    height: 471px;
  }
`;
