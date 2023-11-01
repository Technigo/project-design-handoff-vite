import React from 'react';
import styled from 'styled-components';
import becomeMemberImage from '../../assets/BecomeMember.jpg';
import Button from '../Button.jsx';


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
    return (
        <MembershipSection>
            <MembershipBg src={becomeMemberImage} alt="Persons walking in and out of gym"/>
            <MembershipContent>
                <MembershipTitle>BECOME A MEMBER</MembershipTitle>
                <MembershipText>
                    At Legz you get much more than your average Gym, all our exercises have your felines in mind but 
                    we provide other services to relax your inner self and the occasional treat to take Home.
                </MembershipText>
                <Button>JOIN</Button>
            </MembershipContent>
        </MembershipSection>
    );
}


export default Membership;

