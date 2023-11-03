import styled from 'styled-components';
import React from 'react';
import heroImage from '../../assets/HeroImage.png';
import Button from '../Button.jsx';
import { useTranslation } from 'react-i18next';

const HeroImageSection = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`;

const HeroBg = styled.img`
    width: 100%;
    display: block;
    object-fit: cover;
    height: 100%;
`;

const HeroContent = styled.div`
    position: absolute;
    bottom: 10%;
    left: 5%;
    width: 242px; 
    height: 234px;
    gap: 5px;
    color:  #D2FDFF;
    background-color: #2A3439;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    border-radius: 10px;
`;

const HeroTitle = styled.h1`
    font-size: 32px;
    margin-bottom: 0.5rem;
    font: 'Montserrat Subrayada';
    text-decoration: underline;
`;

const HeroSubtitle = styled.p`
    font-size: 16px;
    margin-bottom: 1rem;
    font: 'Electrolize';
    text-align: left; 
`;

function HeroImage() {
    const { t } = useTranslation();

    return (
        <HeroImageSection>
            <HeroBg src={heroImage} alt={t('mobileNav.heroBg.alt')} />
            <HeroContent>
                <HeroTitle>{t('mobileNav.heroContent.title')}</HeroTitle>
                <HeroSubtitle>{t('mobileNav.heroContent.subtitle')}</HeroSubtitle>
                <Button>{t('mobileNav.heroContent.button')}</Button>
            </HeroContent>
        </HeroImageSection>
    );
}

export default HeroImage;

