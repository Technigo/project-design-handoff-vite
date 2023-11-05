import styled from "styled-components";
import { SignInButton } from "../Buttons/SignIn";
import { Menu } from "./Menu";

const HeaderContainer = styled.div`
  position: relative;

  video {
    width: 100%;
    height: auto;
  }

  .top-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 5px;
    padding: 0 10px 0 10px;
    position: absolute;
    z-index: 1;
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
          ></video>
        ) : (
          <img src="/about-us-header.svg" alt="About Us Header" /> // If the contentType is not 'video', render the image
        )}
      </div>
    </HeaderContainer>
  );
};
