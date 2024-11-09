import React from 'react';
import styled from 'styled-components';
import { H4 } from '../UI/Typography';
import activityImage1 from '../../Images/activity-image1.png';
import activityImage2 from '../../Images/activity-image2.png';

// Define `Section` to resolve the missing definition error
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Styled component for activity cards
const Card = styled.article`
    display: flex;
    flex-direction: column;
    border: 2px solid #f2f2f2;
    border-radius: 8px;
    overflow: hidden;
    background-color: #f9c3e3;
    margin-bottom: 20px;
`;

// Other styled components
const ImageContainer = styled.figure`
    position: relative;
    margin: 0;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const DateContainer = styled.figcaption`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: white;
    color: black;
    text-align: center;
    padding: 5px;
    border-radius: 4px;
    font-weight: bold;
`;

const DateText = styled.span`
    font-size: 1.2em;
    display: block;
`;

const MonthText = styled.span`
    font-size: 0.8em;
`;

const AgeGroup = styled.span`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #ff66cc;
    color: white;
    padding: 5px;
    border-radius: 50%;
    font-weight: bold;
`;

const InfoContainer = styled.section`
    padding: 10px;
    color: #333;
`;

const Title = styled.h3`
    font-size: 1.1em;
    margin: 0 0 5px;
    font-weight: bold; // Met le titre en gras
`;

const Text = styled.p`
    margin: 3px 0;
`;

const BoldText = styled.span`
    font-weight: bold;
`;



/*Styling for the text link at the bottom*/
const StyledLink = styled.a`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 130%;
    text-decoration: underline;
    margin-left: 90px;
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 40px;
    margin-top: 30px;
    display:flex;
    text-align: center;


    &:hover {
        text-decoration: none;
    }
`;


// Define ActivityCard with props
const ActivityCard = ({ image, date, month, title, place, time, ageGroup }) => {
    return (
        <Card>
            <ImageContainer>
                <Image src={image} alt={title} />
                <DateContainer>
                    <DateText>{date}</DateText>
                    <MonthText>{month}</MonthText>
                </DateContainer>
                {ageGroup && <AgeGroup>{ageGroup}</AgeGroup>}
            </ImageContainer>
            <InfoContainer>
                <Title>{title}</Title>
                <Text><BoldText>Plats:</BoldText> {place}</Text>
                <Text><BoldText>Tid:</BoldText> {time}</Text>
            </InfoContainer>
        </Card>
    );
};

export const ActivityCards = () => {
    return (
        <Section>
            <H4>Aktiviteter</H4>
            <ActivityCard
                image={activityImage1}
                date="26"
                month="Nov"
                title="Film och samtal: Sliding Doors"
                place="Downtown Camper"
                time="18.45"
                ageGroup="M"
            />
            <ActivityCard
                image={activityImage2}
                date="8"
                month="Dec"
                title="Army-träff"
                place="Downtown Camper"
                time="14-16.30"
            />

            {/*Link styled component */}
            <StyledLink href="https://example.com">
                Fler aktiviteter
            </StyledLink>


        </Section>



    );
};
