import styled from 'styled-components'; // Importing styled-components for styling
import LogoText from '../assets/LogoText.png'; // Importing LogoText image from assets folder
import FacebookIcon from '../assets/Facebook.png'; // Importing FacebookIcon image from assets folder
import InstagramIcon from '../assets/Instagram.png'; // Importing InstagramIcon image from assets folder
import TwitterIcon from '../assets/Twitter.png'; // Importing TwitterIcon image from assets folder
import WhatsAppIcon from '../assets/WhatsApp.png'; // Importing WhatsAppIcon image from assets folder

export const Footer = () => {
  return (
    <StyledFooter>
      {/* Flex container for the footer */}
      <FlexContainer>
        {/* Logo */}
        <Logo src={LogoText} alt="Logo" />
        {/* Footer Links */}
        <FooterLinks>
          <FooterLink>About Us</FooterLink>
          <FooterLink>Contact Us</FooterLink>
          <FooterLink>FAQ</FooterLink>
        </FooterLinks>
        {/* Social Icons */}
        <SocialIcons>
          <Icon src={FacebookIcon} alt="Facebook" />
          <Icon src={InstagramIcon} alt="Instagram" />
          <Icon src={TwitterIcon} alt="Twitter" />
          <Icon src={WhatsAppIcon} alt="WhatsApp" />
        </SocialIcons>
      </FlexContainer>
    </StyledFooter>
  );
};

// Styled-components styles
const StyledFooter = styled.footer`
  width: 100%;
  background-color: #f4f4f4;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 390px;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
  padding: 32px 32px 32px 32px;
  background-color: rgba(8,61,86,1);

  @media (min-width: 768px) { /* Tablet */
  width: 834px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
@media (min-width: 1200px) { /* desktop */
  width: 1440px;
  padding: 64px 128px;
}
`;

const Logo = styled.img`
  gap: 10px;
  direction: row;
  width: 80px;
  heigt: 80px;
  display: block;
  position: relative;

  @media (min-width: 768px) { /* Tablet */
  width: 120px;
  heigt: 120px;
  justify-content: flex-start;
  padding-top: 10px;
}
@media (min-width: 1200px) { /* desktop */

}
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100px;
  height: 100px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 0px 16px 0px;

  @media (min-width: 768px) { /* Tablet */
  flex-direction: row;
  align-items: center;}

  @media (min-width: 1200px) { /* desktop */

}
`;

const FooterLink = styled.a`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  color: #faf3da;
  line-height: 24px;
  text-align: left;
  display: block;
  letter-spacing: -0.57px;
  position: relative;
  white-space: pre-wrap;

  @media (min-width: 768px) { /* Tablet */
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.81px;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;

}
  @media (max-width: 1200px) { /* desktop */

}
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 8px 16px 0px;

  @media (min-width: 768px) { /* Tablet */
  align-items: center;
  justify-content: space-between;


  @media (min-width: 1200px) { /* desktop */
}
`;

const Icon = styled.img`
  gap:32px;
  width: 24px;
  heigt: 24px;
  direction: row;
  justify-content: flex-start;
  align-item: center;
  position: relative;
  padding: 16px 0px 16px 0px;

  @media (min-width: 768px) { /* Tablet */
  align-items: center;


  @media (min-width: 1200px) { /* desktop */
}
`;


