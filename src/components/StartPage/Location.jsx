import React from 'react';
import styled from 'styled-components';
import globeImage from '../../assets/Globe.png';
import Button from '../Button.jsx';
import { useTranslation } from 'react-i18next';

const LocationSection = styled.div`
    background-color: #2A3439;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 16px;
    box-sizing: border-box;
    width: 100%;
    position: relative; 

    @media (min-width: 768px) { /* Tablet size */
        background-size: contain;
    }
`;

const GlobeImage = styled.img`
    width: 307px;
    height: 137px;

    @media (min-width: 768px) { /* Tablet size */
        width: 100%;
        height: auto;
        object-fit: contain;
        z-index: 1; // Ensure the image is behind the content
    }
`;

const LocationContent = styled.div`
    background-color: #2A3439;  /* Gunmetal */
    color: #D2FDFF;
    width: 328px;
    border-radius: 8px;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) { /* Tablet size */
        position: absolute;
        width: 174px;
        height: 250px;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2; // Ensure the content is on top of the image
        background-color: #D2FDFF; // Mint Green as per your request
        color: #2A3439; // Gunmetal colored text
    }
`;

const LocationTitle = styled.h1`
    color: #D2FDFF;
    text-align: center;
    margin: 0;

    @media (min-width: 768px) { /* Tablet size */
        color: #2A3439;  /* Gunmetal */
    }
`;

const LocationText = styled.p`
    color: #D2FDFF;
    text-align: center;
    margin: 0;
    font-family: 'Electrolize';

    @media (min-width: 768px) { /* Tablet size */
        color: #2A3439;  /* Gunmetal */
        font-size: 16px;
    }
`;

function Location() {
    const { t } = useTranslation();

    return (
        <LocationSection>
            <GlobeImage src={globeImage} alt={t('location.globeImage.alt')} />
            <LocationContent>
                <LocationTitle>{t('location.content.title')}</LocationTitle>
                <LocationText>{t('location.content.text')}</LocationText>
                <Button>{t('location.content.button')}</Button>
            </LocationContent>
        </LocationSection>
    );
}

export default Location;