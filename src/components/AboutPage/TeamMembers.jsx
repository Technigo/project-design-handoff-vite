import React, { useEffect, useState } from 'react';
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
  @media (max-width: 1023px) {
    background-color: #2C3539;
    padding: 20px 0;
  }
`;

const GlobalStyles = createGlobalStyle`
  .slick-dots {
    background-color: #2C3539;
    padding: 10px 0;
  }

  .slick-dots li button:before {
    color: #98FF98;
  }
  .slick-dots li.slick-active button:before {
    color: #98FF98;
  }
`;

const GridContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr)); // 3 columns with flexible width
    grid-gap: 20px; // Spacing between grid items
    justify-content: center;
    padding: 20px;
    background-color: #2C3539; // Gunmetal color
    max-width: 100%; // Adjust as needed for your layout
    margin: auto; // Center the grid container

    // Set a specific height to fit three rows if necessary
    // height: 100vh; // Adjust or remove this line based on your layout needs
  }
`;

const TeamMemberCardContainer = styled.div`
@media (min-width: 1024px) {
    
    max-width: 400px; // Adjust this value to make cards slimmer
    width: 100%; // Use up to 100% of the grid column width
    margin: 0 auto; // Center in the grid column
    }
  }
`;

function TeamMemberGrid() {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state based on current window size
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    
      return (
        <>
          <GlobalStyles />
          {!isDesktop ? (
            <StyledSlider {...sliderSettings}>
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
          ) : (
            <GridContainer>
              {membersData.map((member, index) => (
                <TeamMemberCardContainer key={member.name}>
                  <TeamMemberCard
                    name={member.name}
                    description={member.description}
                    image={member.image}
                  />
                </TeamMemberCardContainer>
              ))}
            </GridContainer>
          )}
        </>
      );
    }
    
    export default TeamMemberGrid;