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
    width: 90%; // Allows for some space on the sides on mobile
    height: 238px;
    background-color: #D2FDFF;
    border: 1px solid #2A3439;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 20px;
`;

const CardImage = styled.img`
    width: 65px;
    height: 70px;
    border-radius: 2px;
    margin-bottom: -12px; // Added reduced margin for less space
`;

const CardName = styled.h2`
    font-size: 24px;
    color: #2A3439;
    text-align: center;
    font-family: 'Electrolize';
    margin-bottom: 5px; 
`;

const CardDescription = styled.p`
    font-size: 12px;
    color: #2A3439;
    text-align: center;
    font-family: 'Neuton'; 
    margin-top: 0; 
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
