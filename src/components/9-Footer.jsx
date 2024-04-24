import styled from "styled-components"
import FacebookIcon from "../assets/icons/newsletter/Facebook.png"
import InstagramIcon from "../assets/icons/newsletter/Instagram.png"
import SpotifyIcon from "../assets/icons/newsletter/Spotify.png"
import Arrow from "../assets/icons/language-select-arrow.svg"
import "./9-Footer.css"

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialMediaBox>
        <SocialIcon src={FacebookIcon} alt="Facebook icon" />
        <SocialIcon src={InstagramIcon} alt="Instagram icon" />
        <SocialIcon src={SpotifyIcon} alt="Spotify icon" />
      </SocialMediaBox>
      <FooterText>
        <div className="footer-menu">
          <div>
            <ul className="footer-list">
              <li>About Urban Spin</li>
              <li>Contact Us</li>
              <li>Find Us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-menu-two">
            <ul className="footer-list">
              <li>Schedule</li>
              <li>FAQs</li>
              <li>Customer Service</li>
            </ul>
            <ul className="footer-list">
              <li>Prices</li>
              <li>Health Benefits</li>
              <li>Gift Cards</li>
            </ul>
          </div>
        </div>
        <div className="language-dropdown">
          <button className="dropdown-btn">
            <h3>ENG</h3>
            <img className="language-arrow" src={Arrow} alt="Select arrow" />
          </button>
          <div className="dropdown-content">
            <h3>FR</h3>
          </div>
        </div>
        <div className="copyright-etc">
          <p>© 2024 Urban Spin. All rights reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </FooterText>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  grid-column: span 4;
  margin-bottom: 109px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 744px) and (max-width: 1493px) {
    grid-column: span 8;
    gap: 64px;
  }

  @media (min-width: 1494px) {
    grid-column: span 12;
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


