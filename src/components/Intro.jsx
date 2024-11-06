import { StyledH1, StyledBody } from "../ui/Typography";
import { Layout } from "../ui/Layout";
import { Divider } from "../ui/Divider";
import { SocialMediaIcons } from "../ui/SocialMediaIcons";
import styled from "styled-components";


// // Styled components for icon wrapper
// const IconWrapper = styled.div`
//   display: flex;
//   gap: 1rem;
//   justify-content: center;
//   margin-bottom: 1.2rem;
//   width: 5.9rem;
//   height: 2.3rem;
//   z-index: 1;
//   `;

// // Styled component for social media icon
// const Icon = styled.img`
//   width: 2.275rem;
//   height: 2.275rem;
//   flex-shrink: 0;
//   }
//   `;

// Style for Content Wrapper
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  position: relative;
  width: 24.375rem;
  max-width: 100%;
  z-index: 1;
  `;

export const Intro = () => {
  return (
    //Layout component with customizable position and rotation using transient props
    // Set $top and $left to adjust the paw's position within its container
    // Use $rotation to rotate the paw 
    <Layout $top="60%" $left="27%" $rotation="8deg">
      <ContentWrapper>
        <SocialMediaIcons sectionType="intro" />
        <StyledH1>Friska och sunda hundar för aktiva liv</StyledH1>
        <Divider />
        <StyledBody>
          Thorondor&apos;s Kennel grundades 1994 på Skånska slätten där vi
          fortsatt håller till. Här föder vi upp Engelsk staffordshire bullterrier
          och Labradorer med jaktlinjer
        </StyledBody>
      </ContentWrapper>
    </Layout>
  );
};
