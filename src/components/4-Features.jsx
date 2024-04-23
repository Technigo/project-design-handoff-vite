import styled from "styled-components"
import CycleIcon from "../assets/icons/trustindicators/Icon1-default.png"
import FireIcon from "../assets/icons/trustindicators/Icon2-default.png"
import BuildingIcon from "../assets/icons/trustindicators/Icon3-default.png"
import PeopleIcon from "../assets/icons/trustindicators/Icon4-default.png"

export const Features = () => {
  return (
    <StyledFeatures>
      <h2>Why Urban Spin</h2>
      <FeatureInfo>
        <InfoSection>
          <FeatureBox>
            <FeatureIcon src={CycleIcon} alt="Icon with bicycle" />
            <h3>State-Of-The-Art Equipment</h3>
            <p>
              We are providing the most innovative spinning bikes on the market,
              which are easily adjustable to your personal fit. On top, you can
              connect your smart watch or phone and track the session. Beat your
              own record!
            </p>
          </FeatureBox>
          <FeatureBox>
            <FeatureIcon src={FireIcon} alt="Icon with flame" />
            <h3>High-Intensity Classes</h3>
            <p>
              Be ready to burn a lot of calories & get sweaty. Our instructors
              are all and will push you motivate you through the session. If
              that’s not enough, high-beat electronic music does the extra!
            </p>
          </FeatureBox>
        </InfoSection>
        <InfoSection>
          <FeatureBox>
            <FeatureIcon src={BuildingIcon} alt="Icon with building" />
            <h3>Exclusive Clubs</h3>
            <p>
              All our clubs are equipped with towels, high-quality shower
              necessities. The changing rooms have lockers, hair dryers and
              more. And the fuel stations are selling fresh protein shakes,
              salads and delicious bowls.
            </p>
          </FeatureBox>
          <FeatureBox>
            <FeatureIcon src={PeopleIcon} alt="Icon with people" />
            <h3>Not just a Gym</h3>
            <p>
              We are proud to call us a club, and with that comes our lovely
              community. Training is our focus but we also love our special club
              events. Stay tuned!
            </p>
          </FeatureBox>
        </InfoSection>
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

  @media (min-width: 1494px) {
    gap: 80px;
  }
`
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 744px) and (max-width: 1493px) {
    flex-direction: row;
    justify-content: space-between;
    gap: auto;
  }

  @media (min-width: 1494px) {
    gap: 80px;
  }
`

const FeatureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: 744px) and (max-width: 1493px) {
    width: 320px;
    align-items: flex-start;
    gap: 32px;
  }

  @media (min-width: 1494px) {
    flex-direction: row;
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
