import { StyledBody } from "../ui/Typography";
import { Layout } from "../ui/Layout";
import { Divider } from "../ui/Divider";
import { SocialMediaIcons } from "../ui/SocialMediaIcons";

import contactSectionImage from "../../public/assets/dog-images/contact-section.webp";
import styled from "styled-components";
import atIcon from "/assets/social-media-images/atSymbol.svg";

const ContactSectionImage = styled.div`
  background-image: url(${contactSectionImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 15.75rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 1;
`;
// Style for Content Wrapper
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  position: relative;
  width: 24.375rem;
  max-width: 100%;
  padding-bottom: 2rem;
  z-index: 1;
  `;

  const MediaText = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  position: relative;
  width: 14.375rem;
  height: 5.1875rem;
  gap: 0;
  
  `;

  const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  `;

  const AtIcon = styled.img`
  width: 2rem;
  height: 2rem;
  `;

  const IconText = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
color: ${({ theme }) => theme.colors.font};
  `;

export const Contact = () => {
  return (
    //Layout component with customizable position and rotation using transient props
    // Set $top and $left to adjust the paw's position within its container
    // Use $rotation to rotate the paw 
    <Layout $top="60%" $left="27%" $rotation="28deg">
      <ContactSectionImage></ContactSectionImage>
      <ContentWrapper>
      <Divider $variant="rotateX"/>
        <StyledBody>
        Följ oss på våra sociala medier för att få en inblick i vardagen på Thorondors kennel! Där delar vi bilder, uppdateringar och tips kring våra hundar och valpkullar. Genom att följa oss kan du lära känna våra raser bättre, se hur valparna utvecklas och få inspiration till livet med hund.
        </StyledBody>
      <Divider $variant="rotate"/>
        <MediaText>
        
        <SocialMediaIcons sectionType="contact"/>
        <TextWrapper>
          <AtIcon src={atIcon} alt="@" />
          <IconText>THORONDORSKENNEL</IconText>
        </TextWrapper>
        </MediaText>
      </ContentWrapper>
    </Layout>
  );
};
