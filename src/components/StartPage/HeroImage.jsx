import styled from 'styled-components';
import React from 'react';
import heroImage from '../../assets/HeroImage.png';
import Button from '../Button.jsx';
import { useTranslation } from 'react-i18next';

const tablet = `(min-width: 768px)`;
const desktop = `(min-width: 1024px)`;

const HeroImageSection = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    @media ${desktop} {
        position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;  // Ensure content is centered horizontally
    background: 
        radial-gradient(circle, rgba(58,67,77,1) 0%, rgba(42,52,57,1) 100%),
        linear-gradient(90deg, rgba(58,67,77,1) 0%, rgba(42,52,57,1) 50%, rgba(210,253,255,1) 100%),
        #2A3439;  
    }
`;

const HeroBg = styled.img`
    width: 100%;
    display: block;
    object-fit: cover;
    height: 100%;
    @media ${desktop} {
        max-width: 60%;  // Adjust to center the image and control its width
        margin: 0 auto;  // Center the image
    }
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

    @media ${tablet} {
        bottom: 20%;
        left: 50%;
        transform: translate(-50%, 50%);
        @media ${desktop} {
            height: 261px;
            position: static;  // Reset the absolute positioning
            bottom: unset;     // Clear the bottom positioning
            left: unset;       // Clear the left positioning
            transform: none;   // Clear the transform
            width: 40%;        // Control the width of the content box
            margin-top: 2rem;  // Provide spacing between the image and the content
            align-items: center;  // Center items horizontally
            text-align: center;   // Center the text
            border: 1px solid; 
            border-image-source: linear-gradient(180deg, #26FFE6 0%, #2A3439 74.71%);
            border-image-slice: 1;  // This ensures that the gradient fills the border
        }
        }
        }
    `;


const HeroTitle = styled.h1`
    font-size: 32px;
    margin-bottom: 0.5rem;
    font-family: 'Montserrat Subrayada';
    text-decoration: underline;
`;

const HeroSubtitle = styled.p`
    font-size: 16px;
    margin-bottom: 1rem;
    font-family: 'Electrolize';
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

