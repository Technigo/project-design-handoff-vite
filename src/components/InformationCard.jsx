import {styled} from "styled-components"
import { useTranslation } from "react-i18next"

import backgroundPaths from "../data/background-paths.json" //importing background images

const StyledDiv = styled.div`
  display: flex; 
  flex-direction: column; 
  background: ${(props) => props.cardBackground};  //Receiving the background img as prop
  padding: 32px 16px; 
  gap: 16px; 

    img {
      width: 90px; 
      height: 90px; 
    }
`
//Making variables of imports 
const informationBackgrounds = backgroundPaths.homePage.information

export const InformationCard = () => {
  const { t, ready } = useTranslation();

  const informationCards = t("homePage.information", { returnObjects: true });

  if (!ready) return "loading translations...";

  return (
      <>
        {informationCards.map((card) => (
          <StyledDiv key={card.id} cardBackground={informationBackgrounds[card.id - 1].background}>
            <img src="/icons/prenatal-yoga-item.svg" alt="item showing a pregnant person doing yoga" />
          <h4>{card.type}</h4>
          <h2>{card.heading}</h2>
          <p>{card.bodyText}</p>
          <p className="tertiary-button">Read more</p>
          </StyledDiv>
        ))}
      </>
  )
}
