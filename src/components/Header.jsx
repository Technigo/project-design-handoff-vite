import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderWrapper, Logo, Menu, Hamburger, NavLink, NavList, BookButton, MobileNav, StyledLink } from './StyledComponents';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderWrapper>
      <Logo><StyledLink to="/">Yoga you</StyledLink></Logo>
      <Menu>
        <NavList>
          <NavLink><StyledLink to="/about">{t('about')}</StyledLink></NavLink>
          <NavLink><StyledLink to="/classes">{t('classes')}</StyledLink></NavLink>
          <NavLink><StyledLink to="/studio">{t('studio')}</StyledLink></NavLink>
          <BookButton><StyledLink to="/book">{t('book')}</StyledLink></BookButton>
        </NavList>
        <Hamburger onClick={toggleMenu} />
      </Menu>
      <MobileNav open={isOpen}>
        <NavLink onClick={toggleMenu}><StyledLink to="/about">{t('about')}</StyledLink></NavLink>
        <NavLink onClick={toggleMenu}><StyledLink to="/classes">{t('classes')}</StyledLink></NavLink>
        <NavLink onClick={toggleMenu}><StyledLink to="/studio">{t('studio')}</StyledLink></NavLink>
        <BookButton onClick={toggleMenu} style={{display: 'block'}}><StyledLink to="/book">{t('book')}</StyledLink></BookButton>
      </MobileNav>
    </HeaderWrapper>
  );
};
