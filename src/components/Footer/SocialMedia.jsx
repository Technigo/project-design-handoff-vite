import styled from "styled-components";

const SocialMediaContainer = styled.div`
  border-radius: 20px;
  border-left: 3px #ffffff solid;
  border-bottom: 3px #ffffff solid;
  width: 100%;
  height: 100px;
  position: relative;
  padding: 20px;
  margin-bottom: 10px;

  img {
    width: auto;
    max-height: 18px;
  }

  p {
    font-size: 12px;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    color: #f26631;
  }

  .social-media-icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    padding: 15px;
  }
`;

export const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <p>Follow us</p>
      <div className="social-media-icons">
        <img src="./facebook.svg" alt="Facebook" />
        <img src="./instagram.svg" alt="Instagram" />
        <img src="/twitter-x.svg" alt="Twitter-X" />
        <img src="/youtube.svg" alt="Youtube" />
        {/* <img src="/social-media.svg" alt="Social media links" /> */}
      </div>
    </SocialMediaContainer>
  );
};
