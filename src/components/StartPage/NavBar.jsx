import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/LEGZ.jpg';

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
    return (
        <NavBarContainer>
            <Logo src={logo} alt="4 Legz Logo"/>
            <DesktopNav>
                <a href="/join">Join</a>
            </DesktopNav>
            <MobileNav>
                <HamburgerIcon>☰</HamburgerIcon>
            </MobileNav>
        </NavBarContainer>
    );
}

export default NavBar;
