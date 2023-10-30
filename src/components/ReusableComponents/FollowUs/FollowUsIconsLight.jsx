import FacebookLogoLight from "/icons/Facebook.png";
import TwitterLogoLight from "/icons/Twitter.png";
import InstagramLogoLight from "/icons/Instagram.png";
import styled from "styled-components";

const FollowContainer = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  gap: 16px;
`;

export const FollowUsIconsLight = () => {
  return (
    <FollowContainer>
      <p>Follow us</p>
      <img src={FacebookLogoLight} alt="Facebook Logo" />
      <img src={TwitterLogoLight} alt="Twitter Logo" />
      <img src={InstagramLogoLight} alt="Instagram Logo" />
    </FollowContainer>
  );
};
