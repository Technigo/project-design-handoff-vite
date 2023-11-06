import FacebookLogoDark from "/icons/Facebook(1).png";
import TwitterLogoDark from "/icons/TwitterX(1).png";
import InstagramLogoDark from "/icons/Instagram(1).png";
import styled from "styled-components";

// Create a styled component for the container of dark follow icons
const FollowDarkIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  gap: 8px;
`;

// Create a styled component for the container of dark icons
const DarkIcons = styled.div`
  display: flex;
  gap: 16px;
`;

export const FollowUsIconsDark = () => {
  return (
    <FollowDarkIconContainer>
      <DarkIcons>
        <img src={FacebookLogoDark} alt="Facebook Logo" />
        <img src={TwitterLogoDark} alt="Twitter Logo" />
        <img src={InstagramLogoDark} alt="Instagram Logo" />
      </DarkIcons>
    </FollowDarkIconContainer>
  );
};
