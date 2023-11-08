import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/LEGZ.jpg';
import { useTranslation } from 'react-i18next';

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #2A3439; // dark background
`;

const Logo = styled.img`
    height: 32px; // you can adjust the size as needed
    cursor: pointer;
`;

const DesktopNav = styled.div`
    @media (max-width: 768px) { // hides on mobile screens
        display: none;
    }
    a {
        color: #D2FDFF;
        text-decoration: none;
        font-weight: bold;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const MobileNav = styled.div`
    @media (min-width: 769px) { // hides on desktop screens
        display: none;
    }
`;

const HamburgerIcon = styled.button`
    background-color: transparent;
    border: none;
    font-size: 24px; // adjust size as needed
    cursor: pointer;
    color: #D2FDFF;
`;

function NavBar() {
    const { t } = useTranslation();
    
    return (
        <NavBarContainer>
            <Logo src={logo} alt={t('logo.alt')}/>
            <DesktopNav>
                <a href="/join">{t('nav.join')}</a>
            </DesktopNav>
            <MobileNav>
                <HamburgerIcon>{t('mobileNav.hamburger')}</HamburgerIcon>
            </MobileNav>
        </NavBarContainer>
    );
}

export default NavBar;
