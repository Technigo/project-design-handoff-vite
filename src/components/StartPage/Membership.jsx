import React from 'react';
import styled from 'styled-components';
import becomeMemberImage from '../../assets/BecomeMember.jpg';
import Button from '../Button.jsx';
import { useTranslation } from 'react-i18next';

const MembershipSection = styled.div`
    position: relative;
    width: 100%;
    height: 100vh; /* Take the full viewport height */
    overflow: hidden; /* Optional, to ensure nothing spills out */
`;

const MembershipBg = styled.img`
    width: 100%;
    height: 100%; /* Ensures image covers the entire container */
    object-fit: cover; /* Keeps image aspect ratio and covers the area */
    display: block;
`;

const MembershipContent = styled.div`
position: absolute;
top: 5%;
bottom: 10%;
left: 5%;
width: 329px; 
height: 279px;
gap: 5px;
color: #D2FDFF;
background-color: #2A3439;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px;
border-radius: 10px;
`;

const MembershipTitle = styled.h1`
    font-size: 32px;
    margin-bottom: 0.5rem;
    font: 'Montserrat Subrayada';
    text-decoration: underline;
`;

const MembershipText = styled.p`
    font-size: 16px;
    margin-bottom: 1rem;
    font: 'Electrolize';
    text-align: left;
`;


function Membership() {
    const { t } = useTranslation();

    return (
        <MembershipSection>
            <MembershipBg src={becomeMemberImage} alt={t('membership.bg.alt')} />
            <MembershipContent>
                <MembershipTitle>{t('membership.content.title')}</MembershipTitle>
                <MembershipText>{t('membership.content.text')}</MembershipText>
                <Button>{t('membership.content.button')}</Button>
            </MembershipContent>
        </MembershipSection>
    );
}

export default Membership;

