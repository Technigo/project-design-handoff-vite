import AppStore from "/AppStore.svg";
import GooglePlay from "/GooglePlay.svg";
import image from "/weightLifting.svg";
import imageTablet from "/weightTablet.svg";
import styled from "styled-components";

export const Download = () => {
  return (
    <StyledDownload>
      <picture>
        <source media="(min-width: 834px)" srcSet={imageTablet} />
        <img id="weight-lift" src={image} alt="weight lifting" />
      </picture>
      <div className="download-classes">
        <h2>WORLD-CLASS WORKOUTS. WHEREEVER YOU ARE.</h2>
        <p>
          Take your favorite classes at home, while traveling or outdoors.
          Download classes on the app for a practice that moves with you
        </p>
        <div className="pink-download-box">
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

//Styled Components
const StyledDownload = styled.section`
  #weight-lift {
    width: 100%;
  }

  .download-classes {
    display: flex;
    flex-direction: column;
    margin: 20px 56px 0 24px;
    //Changed the right boarder according to the design
    gap: 20px;

    @media screen and (min-width: 834px) {
      margin: 20px 32px 0 32px;
      flex-direction: row;
      gap: 16px;
      justify-content: center;
    }

    h2 {
      font-weight: bold;
      font-size: 30px;
      line-height: 50px;

      @media screen and (min-width: 834px) {
        width: 279px;
      }
    }

    p {
      font-size: 20px;
      line-height: 38px;

      @media screen and (min-width: 834px) {
        width: 279px;
      }
    }
  }

  .pink-download-box {
    display: flex;
    flex-direction: column;
    align-self: center;
  }
`;

const StyledDownloadIcon = styled.img`
  width: 180px;
  margin-bottom: ${({ $margin }) => ($margin ? "18px" : "0")};
`;

//I had to do this all complicated because the margin ist not the same!
