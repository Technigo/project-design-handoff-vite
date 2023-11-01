import { PText } from "../Typography/PText"
import "../css_card_styling/card.css"

export const HomeCard = ({ articleImage, imageAltText, instructorCardText, className }) => {
  return (
    <div className="home-card card">
      <img src={articleImage} alt={imageAltText} className="home-card-image curved-image" />
      <div className={`card-text ${className}`}>
        <PText
          className="paragraph-text"
          text={instructorCardText[0]}
        />
        <PText
          text={instructorCardText[1]}
          className="paragraph-text right-align-text"
        />
      </div>
    </div>
  )
}
