import React from 'react';
import styled from 'styled-components';
import teamLogo from '../../assets/LEGZ.jpg';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

    return (
        <DescriptionContainer>
            <Logo src={teamLogo} alt={t('teamDescription.title')} />
            <h2>{t('teamDescription.title')}</h2>
            <p>{t('teamDescription.description1')}</p>
            <p>{t('teamDescription.description2')}</p>
        </DescriptionContainer>
    );
}

export default TeamDescription;

