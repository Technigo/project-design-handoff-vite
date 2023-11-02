import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/Twitter.svg';
import InstagramIcon from '../assets/Instagram.svg';
import LinkedInIcon from '../assets/Linkedin.svg';
import LanguageSelectorComponent from './LanguageSelector';

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    background-color: white;
    color: #2A3439;
`;

const LanguageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LeftLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    a {
        color: #2A3439;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const RightLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    a {
        color: #2A3439;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    img {
        width: 25px;
        height: 25px;
        margin-top: 5px; // To create spacing between the "Contact us:" label and the icons.
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <LanguageContainer>
                <LanguageSelectorComponent />
            </LanguageContainer>

            <LinksContainer>
                <LeftLinks>
                    <Link to="/about">About</Link>
                    <a href="#">Careers</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Cookies</a>
                </LeftLinks>

                <RightLinks>
                    <span>Contact us:</span>
                    <a href="https://facebook.com"><img src={FacebookIcon} alt="Facebook" /></a>
                    <a href="https://twitter.com"><img src={TwitterIcon} alt="Twitter" /></a>
                    <a href="https://instagram.com"><img src={InstagramIcon} alt="Instagram" /></a>
                    <a href="https://linkedin.com"><img src={LinkedInIcon} alt="LinkedIn" /></a>
                </RightLinks>
            </LinksContainer>
        </FooterContainer>
    );
};

export default Footer;

