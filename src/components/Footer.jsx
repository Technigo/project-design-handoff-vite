import styled from "styled-components";

import InstagramIcon from "/icons/Instagram.png";
import TwitterIcon from "/icons/Twitter.png";
import WhatsAppIcon from "/icons/WhatsApp.png";
import { breakpoints } from "../utility/breakpoints";

export const Footer = () => {
  return (
    <FooterContainer>
      <AllAboutUs>
        <Logo src="/icons/logo.svg" alt="Logo Image"></Logo>
        <FooterLinks className="main-paragraph">
          <FooterLink>About Us</FooterLink>
          <FooterLink>Contact Us</FooterLink>
          <FooterLink>FAQ</FooterLink>
        </FooterLinks>
      </AllAboutUs>
      <SocialIcons>
        <Icon src={InstagramIcon} alt="Instagram" />
        <Icon src={TwitterIcon} alt="Twitter" />
        <Icon src={WhatsAppIcon} alt="WhatsApp" />
      </SocialIcons>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  background-color: var(--blue);
 /*  width: 100%; */

  @media (min-width: ${breakpoints.tablet}) {
    padding: var(--padding-tablet);
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: var(--padding-desktop);
  }
`;

const AllAboutUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 16px;
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const Logo = styled.img`
  height: 54px;

  @media (min-width: ${breakpoints.tablet}) {
    height: 64px;
    padding-right: 48px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    height: 80px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    inline-size: max-content;
  }

  @media (min-width: ${breakpoints.desktop}) {
    align-self: end;
    justify-content: center;
    padding-left: 50px;
  }
`;

const FooterLink = styled.a`
  color: var(--yellow-light);
  text-align: left;
  white-space: pre-wrap;

  @media (min-width: ${breakpoints.tablet}) {
    justify-content: space-between;
    padding: 0 10px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  padding: 16px 0;

  @media (min-width: ${breakpoints.tablet}) {
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
  }
`;

const Icon = styled.img`
  gap: 32px;
  width: 24px;
  height: 24px;
  direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 16px 0;

  @media (min-width: ${breakpoints.tablet}) {
    align-items: center;
    width: 32px;
    height: 32px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 48px;
    height: 48px;
  }
`;
