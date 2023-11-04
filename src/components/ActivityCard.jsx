import { styled } from "styled-components";
import { useTranslation } from "react-i18next"
import backgroundPaths from "../data/background-paths.json" //importing the paths for the background images


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  height: 300px;
  width: 350px;
  background-image: linear-gradient(#b035081a, #220901), url(${(props) => props.cardBackground});//Receiving the background img as prop
  background-size: cover;

    .wrapper {
      overflow: hidden; 
    } 

    @media (min-width: 1025px) {
      height: 349px;
      width: 504px;
  
    }

`;
const backgroundsArray = backgroundPaths.homePage.activities 

export const ActivityCard = () => {
  const { t, ready } = useTranslation();
  const activities = t("homePage.activities", { returnObjects: true });

  if (!ready) return "loading translations...";
  return (
    <>
      {activities.map((activity) => (
        <StyledDiv key={activity.id} cardBackground={backgroundsArray[activity.id - 1].background} aria-label={backgroundsArray[activity.id - 1].alt}
        role="img">
          <div className="wrapper">
          <h3>{activity.header}</h3>
          <p className="paragraph-small">{activity.bodyText}</p>
          </div>
        </StyledDiv>
      ))}
    </>
  );
};
