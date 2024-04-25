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

export const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  @media (min-width: 651px) and (max-width: 1024px) {
    justify-content: space-between;
  }
`;

export const NavBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-extra);
`;

export const IntroTextButton = styled.div`
  display: flex;
  flex-direction: column;
`;

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

  @media (min-width: 651px) and (max-width: 1024px) {
    flex-direction: row;
    padding-bottom: 0;
  }

  @media (min-width: 1025px) {
  }
`;

export const IntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--gap-default) var(--gap-compact);
  gap: var(--gap-compact);

  @media (min-width: 651px) and (max-width: 1024px) {
  }
`;
