import { StyledH1, StyledBody } from "../ui/Typography";
import { Layout } from "../ui/Layout";
import { Divider } from "../ui/Divider";
import { SocialMediaIcons } from "../ui/SocialMediaIcons";
import styled from "styled-components";

// Style for Content Wrapper
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  position: relative;
  width: 24.375rem;
  max-width: 100%;
  padding: 1rem;
  padding-bottom: 3rem;
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
