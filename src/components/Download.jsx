import styled from 'styled-components'
import image from '/weightLifting.svg'
import AppStore from '/AppStore.svg'
import GooglePlay from '/GooglePlay.svg'

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
        <img className="download-link" src={AppStore} alt="app store download link" />
        <img className="download-link" src={GooglePlay} alt="Google play download link" />
      </div>
    </StyledDownload>
  )
}

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
    width: 100%;
  }
  .download-classes {
    display: flex;
    flex-direction: column;
    margin: 20px 24px 0 24px;
    gap: 20px;
  }
  
  .download-link{
    width: 180px;
  }
`
