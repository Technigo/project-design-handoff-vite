import styled from "styled-components"; 
import { useTranslation } from "react-i18next"
import backgroundPaths from "../data/background-paths.json";

const StyledDiv = styled.div`
  
  .image-container {
    height: 422px;
    background-image: linear-gradient(
        180deg,
        rgba(177, 54, 8, 0.05) 0%,
        rgba(125, 38, 5, 0.41) 35.94%,
        rgba(34, 9, 1, 0.6) 75.52%,
        #220901 97.4%
      ),
      url(${(props) => props.cardBackground}); //Receiving the background img as prop
    background-size: cover;
    background-position: 50%;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 60px 0;
    padding: 0 24px;
  }
`;
const backgroundsArray = backgroundPaths.aboutPage.visionCommunity;

export const VisionCommunityCard = () => {
  const { t, ready } = useTranslation();

  const visions = t("aboutPage.visionCommunity", { returnObjects: true });

  if (!ready) return "loading translations...";
  return (
    <>
      {visions.map((vision) => (
        <StyledDiv
          key={vision.id}
          cardBackground={backgroundsArray[vision.id - 1].background} 
          aria-label={backgroundsArray[vision.id - 1].alt}
          role="img"
        >{/*Sending the img path as prop */}
          <div
            className="image-container"
            role="img"
            alt="{visionCommunityData[key].alt}"
          ></div>
          <div className="text-wrapper">
            <p className="paragraph-small">{vision.type}</p>
            <h2>{vision.header}</h2>
            <p>{vision.bodyText}</p>
            <p className="tertiary-button ">{vision.readMore}</p>
          </div>
        </StyledDiv>
      ))}
    </>
  );
};
