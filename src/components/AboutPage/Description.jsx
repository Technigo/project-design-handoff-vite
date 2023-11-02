import React from 'react';
import styled from 'styled-components';
import teamLogo from '../../assets/LEGZ.jpg';

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 350px;
    font-family: 'Neuton', sans-serif;
    color: #D2FDFF;
    background-color: #2C3539; 
`;

const Logo = styled.img`
    width: 234px;
    height: 112px;
    margin-bottom: 20px; 
`;

function TeamDescription() {
    return (
        <DescriptionContainer>
            <Logo src={teamLogo} alt="4 Legz Logo" />
            <p>
                The Jolly team at Legz we have a highly dedicated team of louts and layabouts, 
                that are generally found outside the team base in Shirogane, mostly chatting or 
                AFK with sporadic moments of highly entertaining, sometimes borderline bizarre conversation. 
                It is a home for any sweet soul be they extrovert or shy.
            </p>
            <p>
                Many thanks to the whole Anti-Social squad, Namely Chavalier Noir, Aliassee Thassila, 
                Marcus Ax, Feira and Last but furthest from least Fyr Serra the glue that keeps things 
                together and beloved by all.
            </p>
        </DescriptionContainer>
    );
}

export default TeamDescription;

