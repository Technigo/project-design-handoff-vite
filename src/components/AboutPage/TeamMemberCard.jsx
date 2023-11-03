import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column; // Stacks cards vertically on mobile
    justify-content: center;
    align-items: center;
    background-color: #2A3439;
    padding: 2rem;
    padding-bottom: 10px;
`;

const Card = styled.div`
    width: 140px;
    height: 238px;
    background-color: #D2FDFF;
    border: 1px solid #2A3439;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 20px; // Spacing between cards on mobile

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
