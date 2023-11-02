import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/AntiSocialSquadFC1.png';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: #2C3539; 
`;

const ImageContainer = styled.div`
    position: center;
    width: 504px;
    height: 284px;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HeroPhoto = () => {
    return (
        <Wrapper>
            <ImageContainer>
                <StyledImage src={heroImage} alt="About Us Hero" />
                {/* Add any overlay text or other elements here */}
            </ImageContainer>
        </Wrapper>
    );
};

export default HeroPhoto;
