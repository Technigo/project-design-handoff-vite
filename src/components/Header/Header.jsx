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

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="top-buttons">
        <Menu />
        <SignInButton />
      </div>
      <div>
        <video
          src="/video-mobile.mp4"
          onClick={(e) => e.target.play()}
          //muted
        ></video>
      </div>
    </HeaderContainer>
  );
};
