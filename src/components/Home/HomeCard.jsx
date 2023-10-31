

export const HomeCard = ({ articleImage, imageAltText, instructorCardText }) => {
  return (
    <div className="home-card">
        <img src={articleImage} alt={imageAltText} className="home-card-image curved-image" />
        <div className="instructor-quotes card-text">
          <p>{instructorCardText[0]}</p>
          <p>{instructorCardText[1]}</p>
        </div>
    </div>
  )
}
