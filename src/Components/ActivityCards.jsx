import React from 'react';
import styled from 'styled-components';
import { H4 } from '../UI/Typography';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Card = styled.article`
    display: flex;
    flex-direction: column;
    border: 2px solid #f2f2f2;
    border-radius: 8px;
    overflow: hidden;
    background-color: #FFCAF8;
    margin-bottom: 20px;
    margin-top: 30px;

    &:hover {
        cursor: pointer; 
    }
`;

const ImageContainer = styled.figure`
    position: relative;
    margin: 0;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const AgeGroup = styled.span`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #FFCAF8;
    color: white;
    padding: 5px;
    border-radius: 50%;
    font-weight: bold;
`;

const InfoContainer = styled.section`
    padding: 10px;
    color: #000;
    max-width: 300px;
    white-space: normal;
`;

const Title = styled.h3`
    font-size: 24px; 
    margin: 0 0 5px;
    font-weight: bold;
    white-space: normal;
`;

const Text = styled.p`
    margin: 3px 0;
    font-size: 22px; 
`;

const StyledLink = styled.a`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 130%;
    text-decoration: underline;
    margin-left: 90px;
    display: inline-block;
    margin-top: 30px;
    margin-right: 100px;
    margin-bottom: 30px;

    &:hover {
        text-decoration: none;
    }
`;

const ActivityCard = ({ image, title, place, time, ageGroup }) => {
    return (
        <Card>
            <ImageContainer>
                <Image src={image} alt={title} />
                {ageGroup && <AgeGroup>{ageGroup}</AgeGroup>}
            </ImageContainer>
            <InfoContainer>
                <Title>
                    {title === "Film och samtal: Sliding Doors" ? (
                        <>
                            Film och samtal: Sliding <br /> Doors
                        </>
                    ) : (
                        title
                    )}
                </Title>
                <br />
                <Text>Plats: {place}</Text>
                <Text>Tid: {time}</Text>
            </InfoContainer>
        </Card>
    );
};

export const ActivityCards = () => {
    return (
        <Section>
            <H4>Aktiviteter</H4>
            <ActivityCard
                image="/Images/activity-image1.png" // Direct path to public folder image
                title="Film och samtal: Sliding Doors"
                place="Downtown Camper"
                time="18.45"
                ageGroup="M"
            />
            <ActivityCard
                image="/Images/activity-image2.png" // Direct path to public folder image
                title="Army-träff"
                place="Downtown Camper"
                time="14-16.30"
            />
            <StyledLink href="https://example.com">Fler aktiviteter</StyledLink>
        </Section>
    );
};
