import styled from "styled-components"
import FacebookIcon from "../assets/icons/newsletter/Facebook.png"
import InstagramIcon from "../assets/icons/newsletter/Instagram.png"
import SpotifyIcon from "../assets/icons/newsletter/Spotify.png"
import Arrow from "../assets/icons/language-select-arrow.svg"

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
            <FooterItem>Careers</FooterItem>
          </FooterList>
          <FooterMenuTwo>
            <FooterList>
              <FooterItem>Schedule</FooterItem>
              <FooterItem>FAQs</FooterItem>
              <FooterItem>Customer Service</FooterItem>
            </FooterList>
            <FooterList>
              <FooterItem>Prices</FooterItem>
              <FooterItem>Health Benefit</FooterItem>
              <FooterItem>Gift Cards</FooterItem>
            </FooterList>
          </FooterMenuTwo>
        </FooterMenu>
        <LanguageSelectField>
          <DropDownBtn>
            <h3>ENG</h3>
            <LanguageArrow src={Arrow} alt="Select arrow" />
          </DropDownBtn>
          <div className="dropdown-content">
            <h3>FR</h3>
          </div>
        </LanguageSelectField>
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
  padding: 0 16px;
  width: 292px;
  display: flex;
  justify-content: center;
  gap: 40px;

  @media (min-width: 744px) and (max-width: 1493px) {
    gap: 32px;
    padding: 0;
    width: 466px;
  }

  @media (min-width: 1494px) {
    gap: 160px;
    padding: 0;
    width: 772px;
  }
`

const FooterMenuTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 744px) and (max-width: 1493px) {
    flex-direction: row;
    gap: 32px;
  }

  @media (min-width: 1494px) {
    flex-direction: row;
    gap: 160px;
  }
`

const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
`;

const LanguageSelectField = styled.div`
  display: flex;
  justify-content: flex-end;
`

const DropDownBtn = styled.button`
  background: none;
  font-size: 16px;
  border: none;
  width: 74px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 744px) and (max-width: 1493px) {
    font-size: 18px;
    width: 90px;
    gap: 16px;
  }

  @media (min-width: 1494px) {
    font-size: 18px;
    width: 90px;
    gap: 16px;
  }
`

const LanguageArrow = styled.img`
  width: 9.218px;
  height: 16px;

  @media (min-width: 744px) and (max-width: 1493px) {
    width: 13.826px;
    height: 24px;
  }

  @media (min-width: 1494px) {
    width: 13.826px;
    height: 24px;
  }
`

const CopyrightField = styled.div`
  display: flex;
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

  @media (min-width: 744px) and (max-width: 1493px) {
    font-size: 14px;
  }

  @media (min-width: 1494px) {
    font-size: 16px;
  }
`
