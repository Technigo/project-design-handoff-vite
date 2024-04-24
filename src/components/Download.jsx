import AppStore from "/AppStore.svg";
import GooglePlay from "/GooglePlay.svg";
import image from "/weightLifting.svg";
import styled from "styled-components";

export const Download = () => {
  return (
    <StyledDownload>
      <img src={image} alt="weight lifting" />
      <div className="download-classes">
        <h2>WORLD-CLASS WORKOUTS. WHEREEVER YOU ARE.</h2>
        <p>
          Take your favorite classes at home, while traveling or outdoors.
          Download classes on the app for a practice that moves with you
        </p>
        <div>
          <StyledDownloadIcon
            $margin
            src={AppStore}
            alt="app store download link"
          />
          <StyledDownloadIcon
            src={GooglePlay}
            alt="Google play download link"
          />
        </div>
      </div>
    </StyledDownload>
  );
};

const StyledDownload = styled.section`
  h2 {
    font-weight: bold;
    font-size: 30px;
    line-height: 50px;
  }

  p {
    font-size: 20px;
    line-height: 38px;
  }

  img {
    /* width: 100%; */
    //Check in the end if we need this for other viewports. If yes we need to give a classname otherwise it overwrites the Icon Download...
  }

  .download-classes {
    display: flex;
    flex-direction: column;
    margin: 20px 56px 0 24px;
    //Changed the right boarder according to the design
    gap: 20px;
  }
`;

const StyledDownloadIcon = styled.img`
  width: 180px;
  margin-bottom: ${({ $margin }) => ($margin ? "18px" : "0")};
`;

//I had to do this all complicated because the margin ist not the same!
