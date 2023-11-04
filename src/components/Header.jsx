import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderWrapper, Logo, Menu, Hamburger, NavLink, NavList, BookButton, MobileNav, StyledLink } from './StyledComponents';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(); // <-- Import the translation function
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderWrapper>
      <Logo><StyledLink to="/">Yoga you</StyledLink></Logo>
      <Menu>
        <NavList>
          <NavLink><StyledLink to="/about">{t('about')}</StyledLink></NavLink> {/* <-- Use translations */}
          <NavLink><StyledLink to="/classes">{t('classes')}</StyledLink></NavLink> {/* <-- Use translations */}
          <NavLink><StyledLink to="/studio">{t('studio')}</StyledLink></NavLink> {/* <-- Use translations */}
          <BookButton><StyledLink to="/book">{t('book')}</StyledLink></BookButton> {/* <-- Use translations */}
        </NavList>
        <Hamburger onClick={toggleMenu} />
      </Menu>
      <MobileNav open={isOpen}>
        <NavLink onClick={toggleMenu}><StyledLink to="/about">{t('about')}</StyledLink></NavLink> {/* <-- Use translations */}
        <NavLink onClick={toggleMenu}><StyledLink to="/classes">{t('classes')}</StyledLink></NavLink> {/* <-- Use translations */}
        <NavLink onClick={toggleMenu}><StyledLink to="/studio">{t('studio')}</StyledLink></NavLink> {/* <-- Use translations */}
        <BookButton onClick={toggleMenu} style={{display: 'block'}}><StyledLink to="/book">{t('book')}</StyledLink></BookButton> {/* <-- Use translations */}
      </MobileNav>
    </HeaderWrapper>
  );
};
