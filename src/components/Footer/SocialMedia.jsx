import styled from "styled-components";

const SocialMediaContainer = styled.div`
  border-radius: 20px;
  border-left: 3px #ffffff solid;
  border-bottom: 3px #ffffff solid;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-size: 20px;
`;

export const SocialMedia = () => {
  return (
    <SocialMediaContainer className="social-media">
      <p>FOLLOW US</p>
      <div className="social-media-icons">
        <img src="./facebook.svg" alt="Facebook" />
        <img src="./instagram.svg" alt="Instagram" />
        <img src="./twitter-x.svg" alt="Twitter-X" />
        <img src="/youtube.svg" alt="Youtube" />
      </div>
    </SocialMediaContainer>
  );
};
