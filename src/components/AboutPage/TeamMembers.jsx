import React from 'react';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TeamMemberCard from './TeamMemberCard'; 
import kaelanaImage from '../../assets/kaelana.png';
import marcusImage from '../../assets/Marcus.png';
import delishaImage from '../../assets/Delisha.png';
import moxxiReadImage from '../../assets/MoxxiRead.png';
import chevalierImage from '../../assets/Chevalier.png';
import aliasseImage from '../../assets/Aliasse.png';
import moxxiOnefangImage from '../../assets/MoxxiOnefang.png';
import feiraImage from '../../assets/Feira.png';
import styled, { createGlobalStyle } from 'styled-components';



const membersData = [
    {
        name: "Kaelana Bambridge",
        description: "Kaelana is a long standing member of Legs pun intended, very fashionable and voted prettiest female in all of Tera. She is our marketing specialist.",
        image: kaelanaImage
    },
    {
        name: "Marcus Ax",
        description: "Chief Decorator Extraordinaire. Thanks to Marcus's efforts and patience any headquarters we move to becomes a sublime resting area.",
        image: marcusImage
    },
    {
        name: "Delisha Mathis",
        description: "Most gracious helpful Craft Master General. Deli is always willing to give a hand.",
        image: delishaImage
    },
    {
        name: "Moxxi Read",
        description: "Sleepy Helper and Headquarters defender.",
        image: moxxiReadImage
    },
    {
        name: "Chevalier Noir",
        description: "Chief Officer of Cheerfulness. She keeps the office positive. Pet her for good luck.",
        image: chevalierImage
    },
    {
        name: "Aliasse Thassalia",
        description: "Second in command. Ali is always there to help with a smile and her spiffing looks.",
        image: aliasseImage
    },
    {
        name: "Moxxi Onefang",
        description: "Panic cat, dizzy, dozy and forgetful so dont forget to remind her of things that need to be done.",
        image: moxxiOnefangImage
    },
    {
        name: "Feira",
        description: "Our Extraordinary chef and Barista, keeps us at our peak with her delicious creations.",
        image: feiraImage
    },
];


const Slide = styled.div`
    width: 186px !important; 
`;

const StyledSlider = styled(Slider)`
    background-color: #2C3539;  // Gunmetal color
    padding: 20px 0;  // This will provide spacing around the dots and the slides
`;

const GlobalStyles = createGlobalStyle`
.slick-dots {
    background-color: #2C3539;  // Gunmetal color
    padding: 10px 0;            // Give some padding so the background is more prominent
}

.slick-dots li button:before {
        color: #98FF98;  // Mint green color for dots
    }
    .slick-dots li.slick-active button:before {
        color: #98FF98;  // Mint green for the active dot
    }
`;

function TeamMemberGrid() {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  
        slidesToScroll: 1,
    };

    return (
        <div>
            <GlobalStyles />
            <StyledSlider {...settings}>
                {membersData.map(member => (
                    <Slide key={member.name}>
                        <TeamMemberCard 
                            name={member.name}
                            description={member.description}
                            image={member.image}
                        />
                    </Slide>
                ))}
            </StyledSlider>
        </div>
    );
}
export default TeamMemberGrid;