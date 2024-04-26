import AppStore from '/AppStore.svg'
import GooglePlay from '/GooglePlay.svg'
import '/weightLifting.svg'
import '/weightTablet.svg'
import '/weightDesk.svg'
import styled from 'styled-components'

export const Download = () => {
  return (
    <StyledDownload>
      <picture className="weightpic">
        <source media="(min-width: 1440px)" srcSet="/weightDesk.svg" />
        <source media="(min-width: 834px)" srcSet="/weightTablet.svg" />
        <img src="weightLifting.svg" height="401" alt="weight lifting" />
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
  )
}

//Styled Components
const StyledDownload = styled.section`
  .weightpic {
    height: 401px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    margin: 0 128px;
  }

  .weightpic {
    display: flex;
    justify-content: center;
  }

  .download-classes {
    display: flex;
    flex-direction: column;
    margin: 20px 56px 0 24px;
    gap: 20px;

    @media screen and (min-width: 834px) {
      margin: 20px 32px 0 32px;
      flex-direction: row;
      gap: 16px;
      justify-content: center;

      .weightpic {
        width: 681px;
      }
    }

    @media screen and (min-width: 1440px) {
      flex-direction: column;
      gap: 32px;
      margin: 0 32px;
    }

    h2 {
      font-weight: bold;
      font-size: 30px;
      line-height: 50px;

      @media screen and (min-width: 834px) {
        width: 279px;
      }

      @media screen and (min-width: 1440px) {
        width: 455px;
      }
    }

    p {
      font-size: 20px;
      line-height: 38px;

      @media screen and (min-width: 834px) {
        width: 279px;
      }

      @media screen and (min-width: 1440px) {
        width: 455px;
      }
    }
  }

  .pink-download-box {
    display: flex;
    flex-direction: column;
    align-self: center;

    @media screen and (min-width: 1440px) {
      flex-direction: row;
      gap: 24px;
      align-self: flex-start;
    }
  }
`

const StyledDownloadIcon = styled.img`
  width: 180px;
  margin-bottom: ${({ $margin }) => ($margin ? '18px' : '0')};

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`
