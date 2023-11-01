import { styled } from "styled-components";
import activityData from "../data/activities-data.json";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  height: 300px;
  width: 350px;
  background-image: linear-gradient(#b035081a, #220901),
    url(${(props) => props.cardBackground});
  background-size: cover;
`;

export const ActivityCard = () => {
  return (
    <>
      {Object.keys(activityData).map((key) => (
        <StyledDiv key={key} cardBackground={activityData[key].backgroundImg}>
          <h3>{activityData[key].header}</h3>

          <p className="paragraph-small">{activityData[key].bodyText}</p>
        </StyledDiv>
      ))}
    </>
  );
};
