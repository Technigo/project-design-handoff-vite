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
`;

const GlobeImage = styled.img`
width: 307px;
height: 137px;
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
`;

const LocationTitle = styled.h1`
    color: white;
    text-align: center;
    margin: 0;
`;

const LocationText = styled.p`
    color: white;
    text-align: center;
    margin: 0;
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