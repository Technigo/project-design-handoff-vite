import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/Twitter.svg';
import InstagramIcon from '../assets/Instagram.svg';
import LinkedInIcon from '../assets/Linkedin.svg';
import LanguageSelectorComponent from './LanguageSelector';

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    background-color: white;
    color: #2A3439;
`;

const FooterLinks = styled.div`
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

const FooterContact = styled.div`
    display: flex;
    align-items: center;
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
    }
`;

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <FooterContainer>
            <FooterLinks>
            <Link to="/about">About</Link>
                <a href="#">Careers</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Cookies</a>
            </FooterLinks>

            <LanguageSelectorComponent /> 

            <FooterContact>
                Contact us:
                <a href="https://facebook.com"><img src={FacebookIcon} alt="Facebook" /></a>
                <a href="https://twitter.com"><img src={TwitterIcon} alt="Twitter" /></a>
                <a href="https://instagram.com"><img src={InstagramIcon} alt="Instagram" /></a>
                <a href="https://linkedin.com"><img src={LinkedInIcon} alt="LinkedIn" /></a>
            </FooterContact>
        </FooterContainer>
    );
};

export default Footer;