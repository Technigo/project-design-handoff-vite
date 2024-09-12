import { useState, useEffect } from "react";
import logo from "../../public/logos/primary-small.png";
import secondaryLogo from "../../public/logos/secondary.png";
import globeIcon from "../../public/icons/globe.svg";
import youtubeIcon from "../../public/icons/youtube.svg";
import facebookIcon from "../../public/icons/facebook.svg";
import instagramIcon from "../../public/icons/instagram.svg";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding-top: 20px;
  padding-bottom: 50px;
  background-color: transparent;

  @media (max-width: 725px) {
    padding-top: 60px;
    padding-bottom: 20px;
  }
`;

const Divider = styled.div`
  width: 95%;
  margin: 0 auto;
  border: 1px solid #111111;

  @media (max-width: 725px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 725px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 119.44px;
  height: 50px;

  @media (max-width: 725px) {
    width: 161px;
    height: 199.27px;
  }
`;

const TextLink = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #111111;
  text-align: left;
  cursor: pointer;

  &:hover {
    font-weight: 500;
    color: #620981;
  }

  @media (max-width: 725px) {
    text-align: center;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 725px) {
    justify-content: center;
    gap: 10px;
  }
`;

const Address = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #111111;
  text-align: left;

  @media (max-width: 725px) {
    text-align: center;
    margin-bottom: -30px;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:hover {
    color: #620981;
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 725px) {
    justify-content: center;
  }
`;

const LanguageText = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #111111;
  margin-left: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
      transform: scale(1.1);
      filter: brightness(0) saturate(100%) invert(22%) sepia(67%)
        saturate(3841%) hue-rotate(275deg) brightness(92%) contrast(95%);
    }
  }

  @media (max-width: 725px) {
    justify-content: center;
  }
`;

export const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 725);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 725);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <FooterContainer>
      <Divider />
      <ContentWrapper>
        <Logo src={isSmallScreen ? secondaryLogo : logo} alt="Logo" />
        <LinksWrapper>
          <TextLink>About</TextLink>
          <TextLink>Schedule</TextLink>
          <TextLink>Contact</TextLink>
        </LinksWrapper>
        <Address>
          Home address 45B
          <br />
          120 71 Stockholm, Sweden
        </Address>
        <TextLink>Call us +123 456 789</TextLink>
        <LanguageSelector>
          <Icon src={globeIcon} alt="Language" />
          <LanguageText>English</LanguageText>
        </LanguageSelector>
        <SocialIcons>
          <Icon src={youtubeIcon} alt="YouTube" />
          <Icon src={facebookIcon} alt="Facebook" />
          <Icon src={instagramIcon} alt="Instagram" />
        </SocialIcons>
      </ContentWrapper>
    </FooterContainer>
  );
};
