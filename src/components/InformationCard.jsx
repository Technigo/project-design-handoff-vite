import {styled} from "styled-components"
import { useTranslation } from "react-i18next"

// importing translations 
import enTranslation from "./translations/en.json"

//importing background images
import backgroundPaths from "../data/background-paths.json"

//Making variables of imports 
const informationBackgrounds = backgroundPaths.homePage.information
let informationArray = enTranslation.homePage.information


const StyledDiv = styled.div`
  display: flex; 
  flex-direction: column; 
  background: ${(props) => props.cardBackground};  
  margin: 0 24px; 
  padding: 32px 16px; 
  gap: 16px; 

    img {
      width: 90px; 
      height: 90px; 
    }

  @media (min-width: 667px) and (max-width: 1024px) {
    margin: 20%; 
  }

  @media (min-width: 1025px) {
    margin: 20%; 
  }
`

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
  //   <>
  //   {Object.keys(cardInformation).map((key) => (
  //       <StyledDiv key={key}>
  //         <img src="/icons/prenatal-yoga-item.svg" alt="item showing a pregnant person doing yoga"/>
  //         <h4>
  //         {(cardInformation[key].type)}
  //         </h4>
          
  //         <h2>
  //         {cardInformation[key].heading}
  //         </h2>

  //         <p>
  //         {cardInformation[key].bodyText}
  //         </p>

  //         <p className="tertiary-button">Read more</p>
  //       </StyledDiv>
  //     ))}
  //  </>
  )
}

{/* <StyledDiv key={key} cardBackground={informationBackgrounds[key].background}> */} //Kept code