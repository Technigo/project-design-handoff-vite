import styled, { css } from "styled-components"
import FacebookIcon from "../assets/icons/newsletter/Facebook.png"
import InstagramIcon from "../assets/icons/newsletter/Instagram.png"
import SpotifyIcon from "../assets/icons/newsletter/Spotify.png"
import { LanguageSelect } from "./LanguageSelect"

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialMediaBox>
        <SocialIcon src={FacebookIcon} alt="Facebook icon" />
        <SocialIcon src={InstagramIcon} alt="Instagram icon" />
        <SocialIcon src={SpotifyIcon} alt="Spotify icon" />
      </SocialMediaBox>
      <FooterText>
        <FooterMenu>
          <FooterList>
            <FooterItem>About Urban Spin</FooterItem>
            <FooterItem>Contact Us</FooterItem>
            <FooterItem>Find Us</FooterItem>
          </FooterList>
          <FooterList>
            <FooterItem>Careers</FooterItem>
          </FooterList>
          <FooterList>
            <FooterItem>Schedule</FooterItem>
            <FooterItem>FAQs</FooterItem>
            <FooterItem>Customer Service</FooterItem>
          </FooterList>
          <FooterList right>
            <FooterItem>Prices</FooterItem>
            <FooterItem>Health Benefit</FooterItem>
            <FooterItem>Gift Cards</FooterItem>
          </FooterList>
        </FooterMenu>
        <LanguageSelect />
        <CopyrightField>
          <CopyrightText>© 2024 Urban Spin. All rights reserved.</CopyrightText>
          <CopyrightText>Privacy Policy</CopyrightText>
          <CopyrightText>Terms of Service</CopyrightText>
        </CopyrightField>
      </FooterText>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  grid-column: span 4;
  margin-top: 80px;
  margin-bottom: 109px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 744px) and (max-width: 1493px) {
    grid-column: span 8;
    margin-top: 128px;
    gap: 64px;
  }

  @media (min-width: 1494px) {
    grid-column: span 12;
    margin-top: 160px;
    gap: 120px;
  }
`

const SocialMediaBox = styled.div`
  display: flex;
  gap: 40px;

  @media (min-width: 744px) and (max-width: 1493px) {
    gap: 48px;
  }

  @media (min-width: 1494px) {
    gap: 80px;
  }
`

const SocialIcon = styled.img`
  height: 24px;

  @media (min-width: 744px) and (max-width: 1493px) {
    height: 40px;
  }

  @media (min-width: 1494px) {
    height: 56px;
  }
`

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  @media (min-width: 744px) and (max-width: 1493px) {
    gap: 64px;
  }

  @media (min-width: 1494px) {
    gap: 80px;
  }
`

const FooterMenu = styled.div`
  width: 100%;
  margin: 0 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 16px;
  grid-auto-flow: column;

  @media (min-width: 744px) and (max-width: 1493px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 32px;
    margin: 0;
  }

  @media (min-width: 1494px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 160px;
    margin: 0;
  }
`

const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 744px) {
    ${(props) =>
      props.right &&
      css`
        grid-column-start: 3;
      `}
  }
`

const FooterItem = styled.li`
  font-size: 14px;
  line-height: normal;

  &:hover {
    font-weight: 600;
  }

  @media (min-width: 744px) and (max-width: 1493px) {
    font-size: 16px;
  }

  @media (min-width: 1494px) {
    font-size: 18px;
  }
`

const CopyrightField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (min-width: 744px) and (max-width: 1493px) {
    gap: 16px;
  }

  @media (min-width: 1494px) {
    gap: 16px;
  }
`

const CopyrightText = styled.p`
  font-size: 10px;
  max-width: 25%;
  line-height: normal;

  @media (min-width: 744px) and (max-width: 1493px) {
    max-width: 70%;
    font-size: 14px;
  }

  @media (min-width: 1494px) {
    max-width: 50%;
    font-size: 16px;
  }
`
