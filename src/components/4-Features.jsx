import styled from "styled-components"
import CycleIcon from "../assets/icons/trustindicators/Icon1-default.png"
import FireIcon from "../assets/icons/trustindicators/Icon2-default.png"
import BuildingIcon from "../assets/icons/trustindicators/Icon3-default.png"
import PeopleIcon from "../assets/icons/trustindicators/Icon4-default.png"
import FeatureImagePhoneTablet from "../assets/images/Spinning_landscape.png"
import FeatureImageDesktop from "../assets/images/Spinning_portrait.png"

export const Features = () => {
  return (
    <StyledFeatures>
      <h2>Why Urban Spin</h2>
      <FeatureInfo>
        <FeatureBoxLeft>
          <FeatureIcon src={CycleIcon} alt="Icon with bicycle" />
          <FeatureText>
            <h3>State-Of-The-Art Equipment</h3>
            <p>
              We are providing the most innovative spinning bikes on the market,
              which are easily adjustable to your personal fit. On top, you can
              connect your smart watch or phone and track the session. Beat your
              own record!
            </p>
          </FeatureText>
        </FeatureBoxLeft>
        <FeatureBoxRight>
          <FeatureIcon src={FireIcon} alt="Icon with flame" />
          <FeatureText>
            <h3>High-Intensity Classes</h3>
            <p>
              Be ready to burn a lot of calories & get sweaty. Our instructors
              are all and will push you motivate you through the session. If
              that’s not enough, high-beat electronic music does the extra!
            </p>
          </FeatureText>
        </FeatureBoxRight>
        <FeatureBoxLeft>
          <FeatureIcon src={BuildingIcon} alt="Icon with building" />
          <FeatureText>
            <h3>Exclusive Clubs</h3>
            <p>
              All our clubs are equipped with towels, high-quality shower
              necessities. The changing rooms have lockers, hair dryers and
              more. And the fuel stations are selling fresh protein shakes,
              salads and delicious bowls.
            </p>
          </FeatureText>
        </FeatureBoxLeft>
        <FeatureBoxRight>
          <FeatureIcon src={PeopleIcon} alt="Icon with people" />
          <FeatureText>
            <h3>Not just a Gym</h3>
            <p>
              We are proud to call us a club, and with that comes our lovely
              community. Training is our focus but we also love our special club
              events. Stay tuned!
            </p>
          </FeatureText>
        </FeatureBoxRight>
        <FeatureImage />
      </FeatureInfo>
    </StyledFeatures>
  )
}

const StyledFeatures = styled.div`
  grid-column: span 4;
  padding: 80px 63px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  @media (min-width: 744px) and (max-width: 1493px) {
    grid-column: span 8;
    padding: 128px 0;
    gap: 80px;
  }

  @media (min-width: 1494px) {
    grid-column: span 12;
    padding: 160px 0;
    gap: 112px;
  }
`

const FeatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 744px) and (max-width: 1493px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 0;
    grid-row-gap: 40px;
  }

  @media (min-width: 1494px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat (4, 1fr);
    grid-column-gap: 132px;
    grid-row-gap: 80px;
    grid-auto-flow: column;
  }
`

const FeatureBoxLeft = styled.div`
  margin: 0 79px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: 744px) and (max-width: 1493px) {
    margin: 0 16px 0 32px;
    align-items: flex-start;
    gap: 32px;
  }

  @media (min-width: 1494px) {
    margin: 0;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
  }
`

const FeatureBoxRight = styled.div`
  margin: 0 79px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: 744px) and (max-width: 1493px) {
    margin: 0 32px 0 16px;
    align-items: flex-start;
    gap: 32px;
  }

  @media (min-width: 1494px) {
    margin: 0;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
  }
`

const FeatureIcon = styled.img`
  height: 48px;
  width: 48px;

  @media (min-width: 1494px) {
    height: 64px;
    width: 64px;
  }
`

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FeatureImage = styled.div`
  height: 256px;
  width: 100vw;
  margin-top: 40px;
  background-image: url(${FeatureImagePhoneTablet});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 744px) and (max-width: 1493px) {
    margin-top: 94px;
    height: 472px;
    grid-column: span 2;
  }

  @media (min-width: 1494px) {
    background-image: url(${FeatureImageDesktop});
    margin-top: 0;
    height: 100%;
    width: 90%;
    grid-row: span 4;
  }
`
