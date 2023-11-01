import { PText } from "../Typography/PText";
import "../css_card_styling/card.css"

export const AboutCard = ({ articleImage, imageAltText, studioCardText, headline, studio_employee, className }) => {
  return (
    <div className="about-card card">
      <img src={articleImage} alt={imageAltText} className="about-card-image curved-image" />
      <div className={`card-text ${className}`}>
        <PText
          className="paragraph-text"
          text={headline}
        />
        <div className="studio-text">
          {studioCardText.map((text, index) => (
            <div key={index}>
              <PText
                className="paragraph-text"
                text={text}
              />
              {index < studioCardText.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </div>
          ))}
        </div>
        <PText
          className="right-align-text paragraph-text"
          text={studio_employee}
        />
      </div>
    </div>
  );
};

