import {styled} from "styled-components"
import cardInformation from "../data/information.json"

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
`

export const InformationCard = () => {
  return (
    <>
    {Object.keys(cardInformation).map((key) => (
        <StyledDiv key={key} cardBackground={cardInformation[key].background}>
          <img src="/icons/prenatal-yoga-item.svg" alt="item showing a pregnant person doing yoga"/>
          <h4>
          {cardInformation[key].type}
          </h4>
          
          <h2>
          {cardInformation[key].header}
          </h2>

          <p>
          {cardInformation[key].bodyText}
          </p>

          <p className="tertiary-button">Read more</p>
        </StyledDiv>
      ))}
   { console.log(cardInformation)}
   </>
  )
}
