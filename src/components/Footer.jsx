import { FooterWrapper, Logo, StyledLink } from './StyledComponents';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <Logo><StyledLink to="/">Yoga you</StyledLink></Logo>
        <span>Ilmarinkatu 14 <br /> info@youyouga.fi</span>
        <StyledLink to="https://www.instagram.com/" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </StyledLink>
        <StyledLink to="https://www.facebook.com/" target="_blank" aria-label="Facebook">
          <FaFacebookF />
        </StyledLink>
      </div>
      <div>
  <LanguageSwitcher />
</div>
    </FooterWrapper>
  );
};