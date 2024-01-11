import React from 'react';
import styled from 'styled-components';

const desktop = `(min-width: 1024px)`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2A3439;
    padding: 2rem;
    @media ${desktop} {
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
`;

const Card = styled.div`
    width: 90%; 
    height: 238px;
    background-color: #D2FDFF;
    border: 1px solid #2A3439;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 20px;
    @media ${desktop} {
        width: 100%; // Adjust width as needed for desktop
        height: 400px; // Increase height for desktop
        margin: 20px; // Adjust spacing between cards for desktop
    }
`;

const CardImage = styled.img`
    width: 65px;
    height: 70px;
    border-radius: 2px;
    margin-bottom: -12px; // Added reduced margin for less space
    margin-top: 12px;
`;

const CardName = styled.h2`
    font-size: 24px;
    color: #2A3439;
    text-align: center;
    font-family: 'Electrolize';
    margin-bottom: 5px; 
    @media ${desktop} {
        font-size: 28px; // Larger font size for desktop
    }
`;

const CardDescription = styled.p`
    font-size: 12px;
    color: #2A3439;
    text-align: center;
    font-family: 'Neuton'; 
    margin-top: 0; 
    @media ${desktop} {
        font-size: 24px; // Larger font size for desktop
    }
`;

function TeamMemberCard(props) {
    return (
        <Container> 
        <Card>
            <CardImage src={props.image} alt={props.name} />
            <CardName>{props.name}</CardName>
            <CardDescription>{props.description}</CardDescription>
        </Card>
    </Container>
);
}

export default TeamMemberCard;
