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
import { useTranslation } from 'react-i18next';


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
    const { t } = useTranslation();

    // Translated members data using the i18next hook
    const membersData = [
        {
            name: t('teamMembers.kaelana.name'),
            description: t('teamMembers.kaelana.description'),
            image: kaelanaImage
        },
        {
            name: t('teamMembers.marcus.name'),
            description: t('teamMembers.marcus.description'),
            image: marcusImage
        },
        {
            name: t('teamMembers.delisha.name'),
            description: t('teamMembers.delisha.description'),
            image: delishaImage
        },
        {
            name: t('teamMembers.moxxiRead.name'),
            description: t('teamMembers.moxxiRead.description'),
            image: moxxiReadImage
        },
        {
            name: t('teamMembers.chevalier.name'),
            description: t('teamMembers.chevalier.description'),
            image: chevalierImage
        },
        {
            name: t('teamMembers.aliasse.name'),
            description: t('teamMembers.aliasse.description'),
            image: aliasseImage
        },
        {
            name: t('teamMembers.moxxiOnefang.name'),
            description: t('teamMembers.moxxiOnefang.description'),
            image: moxxiOnefangImage
        },
        {
            name: t('teamMembers.feira.name'),
            description: t('teamMembers.feira.description'),
            image: feiraImage
        },
    ];

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