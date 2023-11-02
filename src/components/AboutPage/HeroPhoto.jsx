import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/AntiSocialSquadFC1.png';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: #2C3539; 
`;

const ImageContainer = styled.div`
    position: relative; // for potential overlay or text addition
    width: 480px;
    height: 280px;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HeroPhoto = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <ImageContainer>
            <StyledImage src={heroImage} alt={t('hero.alt')} />
                {/* Add any overlay text or other elements here */}
            </ImageContainer>
        </Wrapper>
    );
};

export default HeroPhoto;

