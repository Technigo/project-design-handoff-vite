import styled from "styled-components";
import visionCommunityData from "../data/vision-community-data.json";

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
      url(${(props) => props.cardBackground});
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

export const VisionCommunityCard = () => {
  return (
    <>
      {Object.keys(visionCommunityData).map((key) => (
        <StyledDiv key={key} cardBackground={visionCommunityData[key].image}>
          <div
            className="image-container"
            role="img"
            alt="{visionCommunityData[key].alt}"
          ></div>
        <div className="text-wrapper">
          <p className="paragraph-small">{visionCommunityData[key].type}</p>

          <h2>{visionCommunityData[key].header}</h2>

          <p>{visionCommunityData[key].bodyText}</p>

          <p className="tertiary-button ">Read more</p>
          </div>
        </StyledDiv>
      ))}
    </>
  );
};
