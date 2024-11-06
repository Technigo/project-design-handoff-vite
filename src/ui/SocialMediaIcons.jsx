import styled from "styled-components";

// Import social media icons
import instagramIcon from "/assets/social-media-images/instagram.svg";
import facebookIcon from "/assets/social-media-images/facebook.svg";

// Style for icon wrapper
const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.2rem;
  width: 5.9rem;
  height: 2.3rem;
  z-index: 1;
  `;

  const IconLink = styled.a`
  display: inline-block;
  /* Conditional size based on section type */
  width: ${({ $sectionType }) => ($sectionType === "intro" ? "2.275rem" : "2.8125rem")};
  height: ${({ $sectionType }) => ($sectionType === "intro" ? "2.275rem" : "2.8125rem")};
`;

const Icon = styled.img`
width: 100%;
height: 100%;
`;

export const SocialMediaIcons = ({sectionType}) => {
  return (
    <IconWrapper>
      <IconLink 
        href="https://www.instagram.com/thorondorskennel/" target="_blank" 
        rel="noopener noreferrer" 
        $sectionType={sectionType}
        aria-label="Visit Thorondors Kennel Instagram page (opens in a new window)"
      >
        <Icon src={instagramIcon} alt="" aria-hidden="true" />
        {/* <VisuallyHidden>Instagram</VisuallyHidden> */}
        {/* Add VisuallyHidden component for accessibility */}
      </IconLink>
      <IconLink 
        href="https://www.facebook.com/profile.php?id=100083415496859" 
        target="_blank" 
        rel="noopener noreferrer" 
        $sectionType={sectionType}
        aria-label="Visit Thorondors Kennel Facebook page (opens in a new window)"
        >
          <Icon src={facebookIcon} alt="" aria-hidden="true" />
          {/* <VisuallyHidden>Facebook</VisuallyHidden> */}
      </IconLink>
    </IconWrapper>
  )
}