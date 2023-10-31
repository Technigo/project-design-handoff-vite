


export const AboutCard = ({ articleImage, imageAltText, studioCardText }) => {
    return (
      <div className="about-card">
          <img src={articleImage} alt={imageAltText} className="about-card-image curved-image" />
          <div className="studio-info card-text">
                {studioCardText.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
      </div>
    )
  }
  
