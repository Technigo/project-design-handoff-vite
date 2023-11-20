import styled from "styled-components";
import { SignInButton } from "../Buttons/SignIn";
import { Menu } from "./Menu";

const HeaderContainer = styled.div`
  position: relative;
  height: 100%;

  video {
    width: 100%;
    height: auto;
  }

  .top-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 17px 24px 0;
    position: absolute;
    z-index: 1;
  }

  img {
    width: 100%;
    height: auto;
  }

  .image-wrapper {
    background-color: #ffffff;
    opacity: 0.4;
  }
`;

export const Header = ({ contentType }) => {
  return (
    <HeaderContainer>
      <div className="top-buttons">
        <Menu />
        <SignInButton />
      </div>
      <div>
        {contentType === "video" ? ( // If the contentType is 'video', render the video, otherwise render the image
          <video
            src="/video-mobile.mp4"
            onClick={(e) => e.target.play()} // When the video is clicked, play the video
            controls // Show the video controls
          ></video>
        ) : (
          <div className="image-wrapper">
            <img src="/about-us-header.svg" alt="About Us Header" />
          </div> // If the contentType is not 'video', render the image
        )}
      </div>
    </HeaderContainer>
  );
};
