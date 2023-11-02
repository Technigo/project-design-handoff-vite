import React from 'react';
import styled from 'styled-components';
import globeImage from '../../assets/Globe.png';
import Button from '../Button.jsx';

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
    return (
        <LocationSection>
            <GlobeImage src={globeImage} alt="World Map" />
            <LocationContent>
                <LocationTitle>FIND US</LocationTitle>
                <LocationText>
                    Locate your nearest lap improvement gym and start your journey to the infinite purr today.
                </LocationText>
                <Button>LOCATE</Button>
            </LocationContent>
        </LocationSection>
    );
}

export default Location;