import React from 'react';
import styled from 'styled-components';
import becomeMemberImage from '../../assets/BecomeMember.jpg';
import Button from '../Button.jsx';
import { useTranslation } from 'react-i18next';

const tablet = `(min-width: 768px)`;
const desktop = `(min-width: 1024px)`;

const MembershipSection = styled.div`
    position: relative;
    width: 100%;
    height: 100vh; 
    overflow: hidden; 
`;

const MembershipBg = styled.img`
    width: 100%;
    height: 100%; 
    object-fit: cover; 
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
@media ${tablet} {
    top: 5%;
    left: 5%;
    bottom: auto;
    width: 440px; 
height: 200px;
}
@media ${desktop} {
    top: 8%;
    left: 3%;
    width: 200px;
    height: 350px;
}
`;

const MembershipTitle = styled.h1`
    font-size: 32px;
    margin-bottom: 0.5rem;
    font-family: 'Montserrat Subrayada';
    text-decoration: underline;
    `;

const MembershipText = styled.p`
    font-size: 16px;
    margin-bottom: 1rem;
    font-family: 'Electrolize';
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

